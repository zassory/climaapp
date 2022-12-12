import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";

export const useClima = () => {
    return useContext(ClimaContext);
}