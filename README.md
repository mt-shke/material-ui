<details>
<summary>Setup</summary>

```js
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
```

</details>

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
