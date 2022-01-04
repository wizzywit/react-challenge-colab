import React, {FC} from "react";
import {Box, Typography} from "@mui/material";
import Card from "./Card";

const MessageCard: FC = () => {
    return (
        <Box sx={{
            width: "100%"
        }}>
            <Typography variant="h5" component="h2" sx={{fontFamily: "Times", fontWeight: "bold"}}>Error Type 1</Typography>
            <Typography variant="caption" sx={{fontFamily: "Times", fontWeight: "bold"}}>Count 6</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "10px"
            }}>
                <Card/>
                <Card/>
            </Box>
        </Box>
    )
}

export default MessageCard
