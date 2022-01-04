import React, {FC} from "react";
import {Box, Button} from "@mui/material";
import MessageCard from "./MessageCard";

const Content: FC = () => {
    return (
        <Box sx={{
            paddingX: 24,
        }}>
            <Box sx={{
                display: "flex",
                gap: "5px",
                justifyContent: "center"
            }}>
                <Button size="small" variant="contained" color="info" sx={{fontWeight: "bold"}}>Stop</Button>
                <Button size="small" variant="contained" color="info" sx={{fontWeight: "bold"}}>Clear</Button>
            </Box>
            <Box sx={{
                display: "flex",
                gap: "10px",
                marginTop: "80px"
            }}>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
            </Box>
        </Box>
    )
}

export default Content
