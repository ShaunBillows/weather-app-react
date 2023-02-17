import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import View from "./pages/View"
import CreateEdit from "./pages/CreateEdit"
import { TempProvider } from "./context/useTemp"
import { createTheme, ThemeProvider } from "@mui/material/styles"

function App() {
  const theme = createTheme()
  return (
    <>
      <ThemeProvider theme={theme}>
        <TempProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/view" element={<View />}></Route>
              <Route path="/edit" element={<CreateEdit />}></Route>
            </Routes>
          </Router>
        </TempProvider>
      </ThemeProvider>
    </>
  )
}

export default App
