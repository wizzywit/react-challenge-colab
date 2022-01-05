import {Message, Priority} from "../Api";
import React, {SyntheticEvent} from "react";

export type IGetProps = (priority: Priority) => [number, Message[]]

export type ContextType = {
    start?: boolean,
    setStart?: React.Dispatch<React.SetStateAction<boolean>>,
    getMessages?: IGetProps,
    clearMessage?: () => void,
    removeMessage?: (message: string, priority: Priority) => void,
    handleClose?: (event: SyntheticEvent | Event, reason?: string) => void,
    open?: boolean,
    message?: string
};


