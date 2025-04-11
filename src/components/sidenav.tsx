import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FolderIcon from "@mui/icons-material/Folder";

import LogoutIcon from "@mui/icons-material/Logout";
import LoopIcon from "@mui/icons-material/Loop";
import SettingsIcon from "@mui/icons-material/Settings";
import UpdateIcon from "@mui/icons-material/Update";

import { useLocation } from "react-router-dom";

export default function SideNav() {
  const pathname = useLocation();
  const currentPath = pathname.pathname;

  const taskLinks = [
    {
      text: "Create New Board",
      icon: <FolderIcon fontSize="small" />,
      path: "/dashboard",
    },
    {
      text: "To Do",
      icon: <CheckBoxIcon fontSize="small" />,
      path: "/to-do",
    },
    {
      text: "In Progress",
      icon: <LoopIcon fontSize="small" />,
      path: "/in-progress",
    },
    { text: "Done", icon: <DoneAllIcon fontSize="small" />, path: "/done" },
    {
      text: "Update Task",
      icon: <UpdateIcon fontSize="small" />,
      path: "/update-task",
    },
  ];

  const bottomLinks = [
    {
      text: "Settings",
      icon: <SettingsIcon fontSize="small" />,
      path: "/settings",
    },
    { text: "Log out", icon: <LogoutIcon fontSize="small" />, path: "/login" },
  ];

  return (
    <Box
      sx={{
        width: { xs: "100%", md: 260 },
        height: "100vh",
        backgroundColor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        p: 2,
        overflowY: "auto",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            px: 2,
            mb: 2,
          }}
        >
          Task
        </Typography>
        <List>
          {taskLinks.map(({ text, icon, path }) => (
            <ListItemButton
              key={text}
              component={Link} // Use Link as component
              to={path} // Set the path
              sx={{
                borderRadius: 2,
                mb: 1,
                backgroundColor:
                  currentPath === path ? "#FFE8CC" : "transparent",
                color: currentPath === path ? "#FFA500" : "black",
                minHeight: 36,
                "&:hover": {
                  backgroundColor: "#FFE8CC",
                  color: "#FFA500",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 32 }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontSize={14} noWrap>
                    {text}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>

        <Typography
          variant="subtitle2"
          sx={{ color: "#666", fontWeight: 500, px: 1, mt: 2, mb: 1 }}
        >
          Profile
        </Typography>
      </Box>

      <Box>
        <Box
          sx={{
            backgroundColor: "#EEDFCC",
            borderRadius: 3,
            p: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 2,
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/100"
            alt="John Smith"
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography variant="body2" fontWeight="bold">
              John Smith
            </Typography>
            <Typography variant="caption" color="text.secondary">
              johnsmith@email.a
            </Typography>
          </Box>
        </Box>

        <Divider />

        <List>
          {bottomLinks.map(({ text, icon, path }) =>
            text === "Log out" ? (
              <ListItemButton
                key={text}
                onClick={() => {
                  localStorage.clear(); // or use localStorage.removeItem("token");
                  window.location.href = path; // redirect to login page
                }}
                sx={{
                  color: "black",
                  borderRadius: 2,
                  minHeight: 36,
                  "&:hover": {
                    backgroundColor: "#FFE8CC",
                    color: "#FFA500",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 32 }}>
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography fontSize={14} noWrap>
                      {text}
                    </Typography>
                  }
                />
              </ListItemButton>
            ) : (
              <ListItemButton
                key={text}
                component={Link}
                to={path}
                sx={{
                  color: "black",
                  borderRadius: 2,
                  minHeight: 36,
                  "&:hover": {
                    backgroundColor: "#FFE8CC",
                    color: "#FFA500",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 32 }}>
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography fontSize={14} noWrap>
                      {text}
                    </Typography>
                  }
                />
              </ListItemButton>
            )
          )}
        </List>
      </Box>
    </Box>
  );
}
