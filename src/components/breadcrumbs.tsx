import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Link as RouterLink } from "react-router-dom";

interface BreadcrumbProps {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumb({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbProps[];
}) {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <Link
            component={RouterLink}
            key={index}
            underline="hover"
            color={breadcrumb.active ? "text.primary" : "inherit"}
            to={breadcrumb.href}
          >
            <Typography sx={{ fontFamily: "Lusitana", fontSize: "1.2rem" }}>
              {breadcrumb.label}
            </Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
}
