import {createContext, useState} from "react";
import {obtenerDiferenciaYear, calcularMarca, calcularPlan} from "../helpers/index.js";
export const CotizadorContext = createContext();

//el provider es el lugar donde vamos a definir el state, es como la fuente de los datos
export default function CotizadorProvider ({children}){

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    })
    const [error, setError] = useState("")
    const [resultado, setResultado] = useState("")
    const [cargando, setCargando] = useState(false)
    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const cotizadorSeguro = ()=> {
        //una base
        let resultado = 2000;

        //Obtener una diferencia de años
        const diferencia=  obtenerDiferenciaYear(datos.year)

        //hay que restar el 3% por cada año
        resultado -=((diferencia * 3) * resultado)/100;

        //Americano +15%, Europeo 30%, Asiático 5%
        resultado*=calcularMarca(datos.marca)

        //plan básico +20%, completo +35%
        resultado*=calcularPlan(datos.plan)
        resultado=resultado.toFixed(2)

        setCargando(true)
        setTimeout(()=>{
            setResultado(resultado)
            setCargando(false)
        },3000)

    }

    return(
        <CotizadorContext.Provider value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizadorSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}
