import {FC, SyntheticEvent, useCallback, useEffect, useState} from "react";
import {Context} from "./Context";
import generateMessage, {Message, Priority} from "../Api";
import {IGetProps} from "./ContextType";

type Props = {}


const Provider: FC<Props> = ({children}) => {

    //define global context values here
    const [messages, setMessages] = useState<Message[]>([]);
    const [start, setStart] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(true);
    const [message, setMessage] = useState<string>("");

    const handleClose = useCallback(
        (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }, [setOpen]);

    useEffect(() => {
        if(start) {
            return generateMessage((message: Message) => {
                setMessages(oldMessages => [...oldMessages, message]);
                if(message.priority === Priority.Error){
                    setMessage(message.message)
                    setOpen(false)
                    setOpen(true)
                }
            });
        }
    }, [setMessages, start]);

    const getMessages: IGetProps = useCallback(
        (priority) => {
            const arr = messages.filter((message) => message.priority === priority).reverse()
            return [arr.length, arr]
        },
        [messages],
    );

    const clearMessage = useCallback(
        () => {
            setMessages([])
        },
        [setMessages],
    );

    const removeMessage = useCallback(
        (message: string, priority: Priority) => {
            setMessages((oldMessages) => [...oldMessages.filter(mes => !(mes.message === message && mes.priority === priority))])
        },
        [setMessages],
    );

    const value = {
        start,
        setStart,
        getMessages,
        clearMessage,
        removeMessage,
        open,
        handleClose,
        message
    }


    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider
