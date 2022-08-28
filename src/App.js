import { Box, CssBaseline, Fab, Fade, IconButton, Stack } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import NightlightIcon from '@mui/icons-material/Nightlight';

//////////// Dark-Light toggle////////////

const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

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
      <NightlightIcon fontSize='medium' />
      <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
        {theme.palette.mode === 'dark' ? <ToggleOffIcon fontSize='medium' /> : <ToggleOnIcon fontSize='medium' />}
      </IconButton>
    </Box>
  )
}


function ToggleColorMode() {
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
          // /////////// Custom dark mode ////////////////
          mode,
          ...(mode === 'dark' && {
            background: {
              default: '#222434',
              paper: 'rgba(67, 68, 112, 0.8)'
            },
            text: {
              primary: '#fff'
            }
          }),
          ...(mode === 'light' && {
            background: {
              default: '#e6e6ff',
              paper: 'rgba(255, 255, 229, 0.5)'
            }
          }),
        }
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
          margin='0 auto'>
          <Navbar />
          <App />
          <Stack
            direction='row'
            spacing={2}
            justifyContent='space-between'
            sx={{ padding: { md: '0 30px 0 30px', xs: '0 20px' } }}>
            <Feed />
            <Rightbar />
          </Stack>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

/////////////// Back to top //////////////////

function ScrollTop(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )
    if (anchor) {
      anchor.scrollIntoView({
        block: 'center'
      })
    }
  }
  return (
    <Fade in={(trigger)}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}>
        {children}
      </Box>
    </Fade>
  )
}

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <div id='back-to-top-anchor' />
      <ToggleColorMode />
      <ScrollTop {...props}>
        <Fab size="small" aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}