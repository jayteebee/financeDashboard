import { createTheme } from "@mui/material/styles"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter } from "react-router-dom"

function App() {
const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider
      theme={theme}
      >
        <CssBaseline />

      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
