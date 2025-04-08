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
          {[
            { text: "To Do", icon: <CheckBoxIcon fontSize="small" /> },
            { text: "In Progress", icon: <LoopIcon fontSize="small" /> },
            { text: "Done", icon: <DoneAllIcon fontSize="small" /> },
            { text: "Update Task", icon: <UpdateIcon fontSize="small" /> },
          ].map(({ text, icon }) => (
            <ListItemButton
              key={text}
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
          {[
            { text: "Marketing", icon: <FolderIcon fontSize="small" /> },
            { text: "Development", icon: <BuildIcon fontSize="small" /> },
            { text: "Authentication", icon: <LockIcon fontSize="small" /> },
            { text: "Operations", icon: <BuildIcon fontSize="small" /> },
          ].map(({ text, icon }) => (
            <ListItemButton
              key={text}
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
          <ListItemButton
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
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
          <ListItemButton
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
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Log out"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}

{
  /* <ListItemButton
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "25px",
            border: "2px solid #FFA500",
            mt: 2,
            mb: 2,
            minHeight: 36,
            "&:hover": {
              backgroundColor: "#FFE8CC",
              color: "#FFA500",
            },
          }}
        >
          <ListItemIcon sx={{ color: "inherit", minWidth: 32 }}>
            <AddCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography fontSize={14} noWrap>
                {text}Test
              </Typography>
            }
          />
        </ListItemButton> */
}
