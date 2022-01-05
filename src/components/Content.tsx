import React, {FC} from "react";
import {Box, Button, IconButton, Snackbar} from "@mui/material";
import MessageCard from "./MessageCard";
import {Priority} from "../Api";
import {useAppState} from "../context/Context";
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Content: FC = () => {
    const {start, setStart, clearMessage, handleClose, open, message} = useAppState()

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <>
            <Box sx={{
                paddingX: 24,
                marginBottom: 10
            }}>
                <Box sx={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center"
                }}>
                    <Button size="small" variant="contained" color="info" sx={{fontWeight: "bold"}} onClick={() => {
                        setStart && setStart(!start)
                    }}>{start? "Stop": "Start"}</Button>
                    <Button size="small" variant="contained" color="info" sx={{fontWeight: "bold"}} onClick={() => clearMessage && clearMessage()}>Clear</Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "80px",
                    width: "100%"
                }}>
                    <MessageCard title="Error Type 1" priority={Priority.Error}/>
                    <MessageCard title="Warning Type 2" priority={Priority.Warn}/>
                    <MessageCard title="Info Type 3" priority={Priority.Info}/>
                </Box>
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                action={action}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}!
                </Alert>
            </Snackbar>
        </>

    )
}

export default Content
