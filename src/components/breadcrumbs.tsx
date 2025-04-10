import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

interface BreadcrumbProps { 
    label : string,
    href : string,
    active ?: boolean,
}

export default function Breadcrumb({ breadcrumbs }: { breadcrumbs:BreadcrumbProps[] }) {
//   const breadcrumbs = [
//     <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
//       MUI
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="inherit"
//       href="/material-ui/getting-started/installation/"
//     >
//       Core
//     </Link>,
//     <Typography key="3" sx={{ color: 'text.primary' }}>
//       Breadcrumb
//     </Typography>,
//   ];

  return (
    <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
       
            {breadcrumbs.map((breadcrumb, index) => (
                <Link
                component={RouterLink}
                key={index}
                underline="hover"
                color={breadcrumb.active ? 'text.primary' : 'inherit'}
                to={breadcrumb.href}
                >
                <Typography sx={{ fontFamily: 'Lusitana', fontSize: '1.2rem' }}>
                    {breadcrumb.label}
                </Typography>
                
                </Link>
            ))}
        </Breadcrumbs>
      
    </Stack>
  );
}
