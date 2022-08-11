import { Box, Stack } from '@mui/material';
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'

function App() {
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/img/p.jpg'})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', //фон остается на месте пока страница скролится
    }}>
      <Navbar />
      <Stack
        direction='row'
        spacing={2}
        justifyContent='space-between'>
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
