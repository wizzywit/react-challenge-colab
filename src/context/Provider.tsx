import {FC, useEffect, useState} from "react";
import {Context} from "./Context";
import generateMessage, {Message, Priority} from "../Api";

type Props = {}


const Provider: FC<Props> = ({children}) => {

    //define global context values here
    const [messages, setMessages] = useState<Message[]>([]);
    const [errors, setErrors] = useState<Message[]>([]);
    const [warnings, setWarnings] = useState<Message[]>([]);
    const [infos, setInfos] = useState<Message[]>([]);
    const [start, setStart] = useState<boolean>(false);

    useEffect(() => {
        if(start) {
            return generateMessage((message: Message) => {
                setMessages(oldMessages => [...oldMessages, message]);
            });
        }
    }, [setMessages]);

    useEffect(() => {
        // if(messages[messages.length - 1].priority === Priority.Warn){}
        switch (messages[messages.length - 1].priority) {
            case Priority.Error:

        }
    }, [messages]);


    const value = {
        messages,
        start,
        setStart,
        setMessages
    }


    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider
