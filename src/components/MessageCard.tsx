import React, {FC} from "react";
import {Box, Typography} from "@mui/material";
import {useAppState} from "../context/Context";
import {Priority} from "../Api";
import Card from "./Card";

interface IProps {
    title: string;
    priority: Priority
}
const MessageCard: FC<IProps> = ({title, priority}) => {
    const {getMessages} = useAppState()
    const result = getMessages && getMessages(priority)
    return (
        <Box sx={{
            flexBasis: "100%"
        }}>
            <Typography variant="h5" component="h2" sx={{fontFamily: "Times", fontWeight: "bold"}}>{title}</Typography>
            <Typography variant="caption" sx={{fontFamily: "Times", fontWeight: "bold"}}>Count {result && result[0]}</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "10px"
            }}>
                {result && result[1].map((messages, i) => (
                    <Card message={messages.message} priority={messages.priority} key={i}/>
                ))}
            </Box>
        </Box>
    )
}

export default MessageCard
