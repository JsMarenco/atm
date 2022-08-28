export const buttonStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "4px",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  "&:hover": {
    backgroundColor: "primary.dark",
  }
}

export const iconStyle = {
  mb: 1.5,
  fontSize: "4.5rem",
  color: "text.primary",
}

export const numericButtonStyle = {
  width: "70px",
  height: "70px",
  bordeRadius: "5px",
  flexShrink: 0,
  backgroundColor: "#EA3D79",
  m: 0.5,
}

export const numericKeyboardStyle = {
  borderRadius: "15px",
  position: "absolute",
  top: window.screen.width > 500 ? "50%" : "",
  left: window.screen.width > 500 ? "50%" : "",
  transform: window.screen.width > 500 ? "translate(-50%, -50%)" : "",
  width: window.screen.width > 500 ? "500px" : "100%",
  p: 3,
  bgcolor: "background.paper",
}

export const navbarButtons = {
  m: 1,
  p: 1,
  px: 3,
  borderRadius: "10px",
}

export const navbarContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "95%",
  maxWidth: "700px",
  borderRadius: "5px",
  backgroundColor: "background.paper",
}

export const changeThemeButton = {
  cursor: "pointer",
  "&:hover": {
    color: "primary",
  },
  color: "text.primary",
  fontSize: "2.5rem !important",
}