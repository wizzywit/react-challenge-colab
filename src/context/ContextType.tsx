import {Message} from "../Api";
import React from "react";


export type ContextType = {
    messages?: Message[],
    start?: boolean,
    setState?: React.Dispatch<React.SetStateAction<boolean>>
};
