import Typography from "@mui/material/Typography"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import TempButton from "./TempButton"

const Header = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Container maxWidth="md">
            <Typography variant="h6" color="inherit" noWrap>
              Weather App
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Header
