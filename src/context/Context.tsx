import {createContext, useContext} from 'react'
import { ContextType } from "./ContextType";

// custom accepted types in providers defined here.
export const Context = createContext<ContextType>({});
export const useAppState = () => useContext(Context);
