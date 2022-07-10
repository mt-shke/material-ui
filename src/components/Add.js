import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    Add as AddIcon,
    EmojiEmotions,
    Image,
    VideoCameraBack,
    PersonAdd,
    DateRange,
} from "@mui/icons-material";
import { useState } from "react";

const Add = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Button>Open modal</Button>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    p={3}
                    borderRadius={5}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            sx={{ height: 50, width: 50 }}
                            src="https://material-ui.com/static/images/avatar/4.jpg"
                        />
                        <Typography fontWeight={500} variant="span">
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        variant="standard"
                        placeholder={"What's on your mind"}
                        multiline
                        rows={4}
                    />

                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <PersonAdd color="success" />
                        <VideoCameraBack color="error" />
                    </Stack>
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                        fullWidth
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: 100 }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add;

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
});
