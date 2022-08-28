import { Box, Avatar, styled, } from '@mui/material'
import PriseListFoto from './img/priseList.jpg'




const MyAvatar = styled(Avatar)({
    height: '100%',
    width: '100%',
})

export default function PriseList() {
    return (
        <Box
            sx={{
                maxHeight: '600px',
                maxWidth: '1000px',
            }}
        >
            <MyAvatar
                alt='price'
                src={PriseListFoto}
            />
        </Box>
    )
}
