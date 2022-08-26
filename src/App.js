import { Box, IconButton, Stack } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import * as React from 'react'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <Box


      sx={{
        display: 'flex',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'left',
        bgcolor: 'background.default',
        color: 'text.primary',
        marginLeft: '20px',
      }}
    >
      {theme.palette.mode} mode
      <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

    </Box>
  )
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          component='div'
          bgcolor='background.default'
          color='text.primary'
          maxWidth='100%'
          margin='0 auto'
        >
          <Navbar />
          <App />
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
    </ColorModeContext.Provider>

  )
}
// export default App;
