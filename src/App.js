import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                >
                    <SideBar setMode={setMode} />
                    <Feed />
                    <RightBar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    );
}

export default App;
