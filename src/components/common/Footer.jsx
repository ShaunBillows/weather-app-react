import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          @theweatherapp
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Get accurate weather forecasts, live updates, and more.
        </Typography>
      </Box>
    </>
  )
}
export default Footer
