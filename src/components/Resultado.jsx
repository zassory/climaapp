import { useClima } from "../hooks/useClima";

export const Resultado = () => {

  const { resultado } = useClima();
  console.log(resultado);
  const { name } = resultado;

  return (
    <div className="contenedor">
        <h2>El Clima de {name} es: </h2>
    </div>
  )
}
