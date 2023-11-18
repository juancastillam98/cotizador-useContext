import {useCallback, useMemo, useRef} from "react";
import useCotizador from "../hooks/useCotizador.jsx";
import {MARCAS, PLANES} from "../constants/index.js";
export const Resultado = () => {



    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos;
    const yearRef = useRef(year); //useRef es para evitar el re-render también, pero se usa más para variables.
    /// COmo este caso, donde no tenemos que hacer un filtro, simplemente evitar el re-render
    //vamos a utilizar el useCallaback para evitar el reRender, es decir para
   //evitar que los valores cambien sin haber cambiado el resultado previo

    //al almacenarlo el resultado en un array, ya lo extraigo. no tengo que hacer nombreMarca[0]
    const [nombreMarca] = useCallback( MARCAS.filter(m => {
        return m.id === Number(marca)
    }), [resultado]) //lo que estoy diciendo literalmente es que se cambie el valor cuando cambia el valor de resultado

    /*/useMemo hace lo mismo que useCallback, solo que ya da por implícito el rtururn
const [nombreMarca] = useMemo(  ()=>
    MARCAS.filter(m => {
    return m.id === Number(marca)
}), [resultado])
*/

    const [nombrePlan] = useCallback(  PLANES.filter(p => {
        return p.id === Number(plan)
    }), [resultado]);



    if (resultado==0) return null;
    return (
        <div className={"bg-gray-100 text-center mt-5 from-indigo-500 shadow"}>
            <h2 className={"text-gray-600 font-black text-3xl"}>Resumen:</h2>
                <p className={"my-2"}>
                    <span className={"font-bold"}>Marca: {nombreMarca.nombre}</span>
                </p>
                <p className={"my-2"}>
                    <span className={"font-bold"}>Plan: </span>{nombrePlan.nombre}
                </p>
                <p className={"my-2"}>
                    <span className={"font-bold"}>Año: </span>{yearRef.current}
                </p>
                <p className={"my-2 text-2xl"}>
                    <span className={"font-bold"}>Total Cotización:</span> {resultado}€
                </p>
        </div>
    )
}