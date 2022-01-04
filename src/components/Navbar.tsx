import React, {FC} from "react";
import {Box, Typography} from "@mui/material";

const Navbar: FC = () => {
    return (
        <>
            <Box
                sx={{
                    paddingX: 24,
                }}
            >
                <Typography variant="h5" component="h1" sx={{fontFamily: "Times"}}>Coding Challenge</Typography>
            </Box>
            <hr/>
        </>
    )

}

export default Navbar;
