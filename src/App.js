import { Box, Stack } from '@mui/material';
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};


function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    setIsDarkTheme = (!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Box
        component='div'
        // bgcolor={"Background.default"}
        maxWidth='1440px'
        margin='0 auto'
      >
        <Navbar />
        <Stack
          direction='row'
          spacing={2}
          justifyContent='space-between'
          sx={{ padding: { md: '0 20px 0 100px', sx: '0 20px' } }}>
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}
export default App;
