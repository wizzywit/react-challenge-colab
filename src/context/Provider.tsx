import {FC, useEffect, useState} from "react";
import {Context} from "./Context";
import generateMessage, {Message} from "../Api";

type Props = {}


const Provider: FC<Props> = ({children}) => {

    //define global context values here
    const [messages, setMessages] = useState<Message[]>([]);
    const [start, setStart] = useState<boolean>(false);

    useEffect(() => {
        if(start) {
            return generateMessage((message: Message) => {
                setMessages(oldMessages => [...oldMessages, message]);
            });
        }
    }, [setMessages]);

    const value = {
        messages,
        start,
        setStart,
        setMessages
    }


    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider
