import {useContext} from "react";
import {CotizadorContext} from "../context/CotizadorProvider.jsx";

//este hook personalizado lo vamos a utilizar parra no tener que importar el useContext en cada sitio,
//esto es porque en vez de importar el useContext y CotizadorContext, importaremos solamente este
export default function useCotizador(){
    return useContext(CotizadorContext);
}