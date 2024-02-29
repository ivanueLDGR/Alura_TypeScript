import { imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Model<T> extends imprimivel, Comparavel<T>{

}