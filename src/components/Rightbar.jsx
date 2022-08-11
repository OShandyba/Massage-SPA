import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import RightBarFotoOne from './img/1.jpg'
import RightBarFotoTwo from './img/6.jpg'
import RightBarFotoThree from './img/7.jpg'
import RightBarFotoFour from './img/9.jpg'
import RightBarFotoFive from './img/10.jpg'
import RightBarFotoSix from './img/12.jpg'

const BarImg = styled(Avatar)({
    marginTop: '20px',
    height: '100%',
    width: '100%',
    borderRadius: '2%'
})

const BarBackgroundColor = styled(Typography)({
    borderRadius: '3%',
    padding: '0 10px 10px 10px',
    marginRight: '10px',
    backgroundColor: 'rgb(255, 255, 204, .5)'
})

const Rightbar = () => {
    return (
        <Box flex={2} sx={{ display: { xs: 'none', sm: 'block' }, }}>
            <BarBackgroundColor>
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'center', marginTop: '100px', }}>
                    Акции месяца
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', }} >
                    Массаж лица - 5 сеансов по цене 4 <br /><br />
                    Антицеллюлитный массаж - скидка 20% на стоимомть курса <br /><br />
                    Приведи друга на сеанс и получите 10% скидки
                </Typography>
            </BarBackgroundColor>
            <BarBackgroundColor>
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'center', marginTop: '20px', }}>
                    Популярные заказы
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', }} >
                    Массаж лица - курс из 10 сеансов - 3000грн <br /><br />
                    Общий массаж + массаж лица - 3 часа - 700грн <br /><br />
                    Массаж шеи - 40минут - 200грн
                </Typography>
            </BarBackgroundColor>
            <Stack sx={{ maxHeight: '400px', maxWidth: '400px', margin: '20px 10px 0 0', alignItems: 'center' }} >
                <BarImg alt='tmh' src={RightBarFotoOne} />
                <BarImg alt='tmh' src={RightBarFotoTwo} />
                <BarImg alt='tmh' src={RightBarFotoThree} />
                {/* <BarImg alt='tmh' src={RightBarFotoFour} />
                <BarImg alt='tmh' src={RightBarFotoFive} />
                <BarImg alt='tmh' src={RightBarFotoSix} /> */}
            </Stack>

        </Box >
    )
}
export default Rightbar