## Setup

<details>
<summary>Setup</summary>

```js
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
```

<details>
<summary>Add font</summary>

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"
            content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700&display=swap"
        />
        <style>
            * {
                font-family: "Roboto", "sans-serif";
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        </style>
        <title>Material UI - TestApp</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

</details>

</details>

## Theme

<details>
<summary>Theme</summary>

theme.js

```js
import { createTheme } from "@mui/system";
export const theme = createTheme({
    palette: {
        primary: {
            main: "#1760a5",
            light: "skyblue",
        },
        secondary: {
            main: "#15c630",
        },
        otherColor: {
            main: "#999",
        },
    },
});
```

Provider

```js
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
```

</details>

<details>
<summary>Dark theme</summary>

```js
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
```

</details>

## Components

<details>
<summary>Button styled</summary>

```js
import { Button, styled } from "@mui/material";

const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
        backgroundColor: "lightblue",
    },
    "&:disabled": {
        backgroundColor: "gray",
        color: "white",
    },
});

return <BlueButton>Hi</BlueButton>;
```

</details>
