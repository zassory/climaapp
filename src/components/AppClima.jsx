import { Formulario } from "./Formulario";
import { Resultado } from "./Resultado";
import { Loading } from "./Loading";
import { useClima } from "../hooks/useClima";

export const AppClima = () => {

  const { resultado , cargando } = useClima();

  return (
    <>
        <main className="dos-columnas">
            <Formulario />

            { cargando ? <Loading /> : resultado?.name && <Resultado /> }
        </main>
    </>
  )
}
