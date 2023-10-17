import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const DarkMode = () => {
  return (
    <IconButton
      onClick={() => {}}
      color="inherit"
      sx={{ color: "primary.main" }}>
      {"light" === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
