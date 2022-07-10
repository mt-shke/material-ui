import { Box } from "@mui/material";
import Post from "./Post";

const Feed = (props) => {
    return (
        <Box flex={4} p={2}>
            <Post />
            <Post />
        </Box>
    );
};

export default Feed;
