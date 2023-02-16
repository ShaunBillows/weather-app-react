import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const LocationCard = ({ location }) => {
  return (
    <>
      {location ? (
        <>
          <>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center">
                  {location.loc}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
                  <Typography variant="h1" component="span">
                    {location.weather.temp_c}
                  </Typography>
                  <Typography variant="h4" component="span" sx={{ ml: 1 }}>
                    C
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
                  <Typography variant="h5" component="span">
                    {location.weather.temp_f}
                  </Typography>
                  <Typography variant="h6" component="span" sx={{ ml: 1 }}>
                    F
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ mt: "auto", justifyContent: "space-between" }}>
                <Button variant="outlined" size="large">
                  Info
                </Button>
                <Button variant="contained" size="large">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </>
        </>
      ) : null}
    </>
  )
}
export default LocationCard
