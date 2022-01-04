import React, {FC} from "react";
import {Priority} from "../Api";
import {Box, Button, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

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
const Card: FC = () => {
    return (
        <>
            <CustomizedPaper priority={Priority.Error}>
                <Typography sx={{fontFamily: "Times", fontWeight: "500"}}>Gsdfsessdfsdfsjmmsdf</Typography>
                <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                    <Button size="small" color="primary" sx={{textTransform: "none", fontWeight: "500"}}>
                        Clear
                    </Button>
                </Box>
            </CustomizedPaper>
        </>
    )
}

export default Card
