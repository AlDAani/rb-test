import axios from "axios";
import { TStepsList } from "../types";


export const postEstimations = async (body: TStepsList) => axios.post<TStepsList, {status: "OK" | "ERROR" } >('www.mock-api.com/estimations', body )
