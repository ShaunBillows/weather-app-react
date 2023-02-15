import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import View from "./pages/View"
import CreateEdit from "./pages/CreateEdit"
// import { TempProvider } from "./hooks/useTemp"

function App() {
  return (
    <>
      {/* <TempProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/edit" element={<CreateEdit />}></Route>
        </Routes>
      </Router>
      {/* </TempProvider>  */}
    </>
  )
}

export default App
