import {Message} from "../Api";
import React from "react";


export type ContextType = {
    messages?: Message[],
    errors?: Message[],
    warnings?: Message[],
    infos?: Message[],
    start?: boolean,
    setState?: React.Dispatch<React.SetStateAction<boolean>>,
    setMessages?: React.Dispatch<React.SetStateAction<Message[]>>
};
