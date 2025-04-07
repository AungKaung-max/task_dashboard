import { Box, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import completedTask from "./assets/undraw_completed-tasks_1j9z.svg";
import teamWork from "./assets/undraw_teamwork_8val.svg";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        minHeight="100vh"
        gap={4}
        py={4}
      >
        <Box flex={1} display="flex" justifyContent="center">
          <Box
            component="img"
            src={completedTask}
            alt="Task board illustration"
            sx={{
              width: "100%",
              maxWidth: 400,
              height: "auto",
            }}
          />
        </Box>

        <Box
          flex={1}
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={2}
        >
          <Box
            component="img"
            src={teamWork}
            alt="Task icon"
            sx={{ width: 60, mb: 2 }}
          />
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            TaskMaster
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            Task Board
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              px: 5,
              py: 0.8,
              borderRadius: 999,
              backgroundColor: "#f7931e",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "1rem" },
              "&:hover": {
                backgroundColor: "#e07b00",
              },
            }}
          >
            <Link to="/login">Start</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
