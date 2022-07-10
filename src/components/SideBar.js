import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@mui/material";
import {
    Home,
    AcUnit,
    AccountBox,
    Settings,
    Storefront,
    ModeNight,
} from "@mui/icons-material";

const SideBar = (props) => {
    return (
        <Box
            flex={1}
            p={2}
            sx={{
                display: {
                    xs: "none",
                    sm: "block",
                },
            }}
        >
            <Box position="fixed">
                <List>
                    <ListItem
                        disablePadding
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <AcUnit />
                            </ListItemIcon>
                            <ListItemText primary="Cold" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="Market" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch />
                            {/* <Switch {...label} defaultChecked /> */}
                            {/* <Switch {...label} disabled defaultChecked /> */}
                            {/* <Switch {...label} disabled /> */}
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
export default SideBar;
