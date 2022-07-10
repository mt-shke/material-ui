import { Pets, Mail, Notifications } from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";

const Navbar = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    sx={{ display: { xs: "none", sm: "block" } }}
                    variant="h6"
                >
                    M Dev
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="Search..." />
                </Search>
                <IconsContainer>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?t=st=1657444389~exp=1657444989~hmac=2a5e002fa1b31dccf5955ce3268ae0a1060995e37d2ed4a5f4b5f710c0c6f971&w=826"
                        onClick={(e) => setOpen((p) => !p)}
                    />
                </IconsContainer>
                <UserBox>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?t=st=1657444389~exp=1657444989~hmac=2a5e002fa1b31dccf5955ce3268ae0a1060995e37d2ed4a5f4b5f710c0c6f971&w=826"
                    />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};
export default Navbar;

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const IconsContainer = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "1rem",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));
