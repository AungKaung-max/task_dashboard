import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFoundPage() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          p: 3,
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 120,
            color: "error.main",
            mb: 2,
          }}
        />

        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            fontWeight: 700,
            mb: 2,
            color: "text.primary",
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            fontWeight: 500,
            mb: 3,
            color: "text.secondary",
          }}
        >
          Oops! Page not found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            mb: 4,
            maxWidth: "600px",
            color: "text.secondary",
          }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>

        <Button
          component={RouterLink}
          to="/dashboard"
          variant="contained"
          size="medium"
          color="warning"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "0.8rem",
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
}
