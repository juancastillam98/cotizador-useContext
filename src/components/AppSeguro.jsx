import {Formulario} from "./Formulario.jsx";
import useCotizador from "../hooks/useCotizador.jsx";
import {Spinner} from "./Spinner.jsx";
import {Resultado} from "./Resultado.jsx";
export const AppSeguro = () => {

    const {cargando}=useCotizador();

    return (
        <>
            <header className={"my-10"}>
                <h1 className={"text-white text-center text-4xl font-black uppercase"}>Cotizador de seguros de auto</h1>
            </header>
            <main className={"bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10"}>
                <Formulario />
                {/*Si caragando está como true, se muestra el spinner, si esta como false se muestra el resultado*/}
                <div className={"my-5"}>
                    {cargando ? <Spinner/> : <Resultado />}
                </div>
            </main>
        </>
    )
}