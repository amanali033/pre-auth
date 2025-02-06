import React from "react";
import { Button, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowForward } from "@mui/icons-material"; // Example icon, replace with your preferred icon

const StyledButton = styled(Button)(({ theme, customBgColor }) => ({
  backgroundColor: customBgColor || theme.palette.button.main,
  color: theme.palette.button.contrastText,
  "&:hover": {
    filter: "brightness(0.95)",
  },
  fontSize: "14px",
  fontWeight: 500,
  borderRadius: "8px",
  padding: "8px 16px",
  textTransform: "none",
}));

const CustomButton = ({ onClick = () => {}, startIcon, children, bgColor }) => {
  return (
    <StyledButton
      onClick={onClick}
      startIcon={startIcon}
      customBgColor={bgColor}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
