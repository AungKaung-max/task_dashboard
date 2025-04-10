import { Link as RouterLink } from "react-router-dom";
import { Button, Link } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

export function CreateBoards() {
    return (
      <Link
        component={RouterLink}
        to="/dashboard/create"
      >
        <Button variant="contained" size="medium" endIcon={<AddIcon />} sx={{ backgroundColor: '#FFE8CC', color: '#000', textTransform: 'none', }}>
            Create Boards
        </Button>
      </Link>
    );
  }