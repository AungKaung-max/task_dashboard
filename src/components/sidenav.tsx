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
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import BuildIcon from "@mui/icons-material/Build";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FolderIcon from "@mui/icons-material/Folder";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import LoopIcon from "@mui/icons-material/Loop";
import SettingsIcon from "@mui/icons-material/Settings";
import UpdateIcon from "@mui/icons-material/Update";

export default function SideNav() {
  // Task links data
  const taskLinks = [
    {
      text: "To Do",
      icon: <CheckBoxIcon fontSize="small" />,
      path: "/to-do",
    },
    {
      text: "In Progress",
      icon: <LoopIcon fontSize="small" />,
      path: "/create-dashboard",
    },
    { text: "Done", icon: <DoneAllIcon fontSize="small" />, path: "/done" },
    {
      text: "Update Task",
      icon: <UpdateIcon fontSize="small" />,
      path: "/update-task",
    },
  ];

  // Delete task links data
  const deleteTaskLinks = [
    {
      text: "Marketing",
      icon: <FolderIcon fontSize="small" />,
      path: "/marketing",
    },
    {
      text: "Development",
      icon: <BuildIcon fontSize="small" />,
      path: "/development",
    },
    {
      text: "Authentication",
      icon: <LockIcon fontSize="small" />,
      path: "/authentication",
    },
    {
      text: "Operations",
      icon: <BuildIcon fontSize="small" />,
      path: "/operations",
    },
  ];

  // Bottom links data
  const bottomLinks = [
    {
      text: "Settings",
      icon: <SettingsIcon fontSize="small" />,
      path: "/settings",
    },
    { text: "Log out", icon: <LogoutIcon fontSize="small" />, path: "/logout" },
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
                color: "black",
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

        {/* Divider Section */}
        <Typography
          variant="subtitle2"
          sx={{ color: "#666", fontWeight: 500, px: 1, mt: 2, mb: 1 }}
        >
          Delete Task
        </Typography>
        <List>
          {deleteTaskLinks.map(({ text, icon, path }) => (
            <ListItemButton
              key={text}
              component={Link} // Use Link as component
              to={path} // Set the path
              sx={{
                borderRadius: 2,
                color: "black",
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
      </Box>

      {/* Bottom User Info + Settings */}
      <Box>
        {/* User Card */}
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
          {bottomLinks.map(({ text, icon, path }) => (
            <ListItemButton
              key={text}
              component={Link} // Use Link as component
              to={path} // Set the path
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
          ))}
        </List>
      </Box>
    </Box>
  );
}
