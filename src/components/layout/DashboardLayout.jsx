import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import LockIcon from "@mui/icons-material/Lock";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import logo from "../../assets/logo.png";
import smallLogo from "../../assets/small-logo.png";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 255;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    position: "relative",
    flexGrow: 1,
    width: "100vw",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MemoizedChildren = React.memo(({ children }) => <>{children}</>);

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = React.useState(
    localStorage.getItem("drawerOpen") === "true"
  );

  React.useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setOpen(false);
        localStorage.setItem("drawerOpen", "false");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
    localStorage.setItem("drawerOpen", "true");
  };

  React.useEffect(() => {
    handleDrawerOpen();
  }, []);

  const handleDrawerClose = () => {
    setOpen(false);
    localStorage.setItem("drawerOpen", "false");
  };

  // MENU
  const menuItems = [
    { text: "Pre Auth", icon: <LockIcon />, link: "/pre-auth-requests" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ boxShadow: "none", borderBottom: "1px solid #e4e4e7" }}
      >
        <Toolbar
          sx={{
            width: isMobile ? "100%" : open ? "100%" : "calc(100% - 64px)",
            marginLeft: "auto",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              backgroundColor: "#F4F4F5",
              fontSize: "1px",
              marginRight: 2,
              marginLeft: 0,
              outline: "none",
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <MenuRoundedIcon sx={{ fontSize: "20px", color: "black" }} />
            {/* {!open ? (
              <ChevronRightRoundedIcon
                sx={{ fontSize: "20px", color: "black" }}
              />
            ) : (
              <MenuRoundedIcon sx={{ fontSize: "20px", color: "black" }} />
            )} */}
          </IconButton>{" "}
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        onClose={handleDrawerClose}
        sx={{
          width: isMobile ? drawerWidth : open ? drawerWidth : 64,
          flexShrink: 0,
          whiteSpace: "nowrap",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          "& .MuiDrawer-paper": {
            width: isMobile ? drawerWidth : open ? drawerWidth : 64,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            boxSizing: "border-box",
            overflowX: "hidden", // Hide content overflow
          },
        }}
        // variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ justifyContent: "start" }}>
          <img
            src={open ? logo : smallLogo}
            alt="Logo"
            style={{
              height: "40px",
              transition: "0.3s",
              margin: open ? "0px 0px 0px 10px" : "0px auto",
              transition: "all 0.3s ease",
            }}
          />
        </DrawerHeader>
        <Divider />
        <List sx={{ p: open ? "1rem" : ".75rem" }}>
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.link;

            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.link}
                  sx={{
                    backgroundColor: isActive ? "#F4F4F5" : "transparent", // Active background
                    gap: ".75rem",
                    padding: open ? "7.5px 16px" : "9px",

                    borderRadius: ".5rem",
                    "&:hover": { backgroundColor: "#F4F4F5" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? "secondary.main" : "body2",
                      minWidth: "fit-content",
                      "& svg": {
                        fontSize: "20px", // Ensures SVG icon is 200px
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && (
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "14px",
                          fontWeight: "500",
                          color: isActive ? "secondary.main" : "body2",
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Main
        open={open}
        className="flex flex-col min-h-screen mx-auto p-[24px]  overflow-x-auto"
      >
        <DrawerHeader />
        <MemoizedChildren>{children}</MemoizedChildren>{" "}
      </Main>
    </Box>
  );
}
