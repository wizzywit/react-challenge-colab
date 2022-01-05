import React, {FC} from "react";
import {Message, Priority} from "../Api";
import {Box, Button, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useAppState} from "../context/Context";

interface IStyledProps {
    priority: Priority
}
const CustomizedPaper = styled(Paper)<IStyledProps>(
    ({priority, theme}) => `
  background: ${
        priority === Priority.Error ? theme.palette.error.main :
            priority === Priority.Warn ? theme.palette.warning.main : theme.palette.info.main};
  padding: 10px 15px;
  
`)


const Card: FC<Message> = ({message, priority}) => {
    const {removeMessage} = useAppState()
    return (
        <>
            <CustomizedPaper priority={priority}>
                <Typography sx={{fontFamily: "Times", fontWeight: "500"}}>{message}</Typography>
                <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                    <Button size="small" color="primary" sx={{textTransform: "none", fontWeight: "500"}} onClick={() => removeMessage && removeMessage(message, priority)}>
                        Clear
                    </Button>
                </Box>
            </CustomizedPaper>
        </>
    )
}

export default Card
