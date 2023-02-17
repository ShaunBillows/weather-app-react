import { Button } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const HomeButton = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        size="large"
        startIcon={<FontAwesomeIcon icon={faHome} />}
      >
        Home
      </Button>
    </Link>
  )
}
export default HomeButton
