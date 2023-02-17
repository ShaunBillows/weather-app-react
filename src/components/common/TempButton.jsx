import { Button } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons"
import { useTemp } from "../../context/useTemp"

function TempButton() {
  const { toggleTemp, tempUnit } = useTemp()

  return (
    <Button
      variant="outlined"
      size="large"
      onClick={toggleTemp}
      sx={{
        float: "right",
      }}
      startIcon={
        <FontAwesomeIcon
          icon={faThermometerHalf}
          style={{ marginRight: "0.5rem" }}
        />
      }
    >
      {tempUnit}
    </Button>
  )
}

export default TempButton
