import { Avatar, Box, Grid, styled, Typography, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ImgFeed from './img/feed-1.jpg'
import ImgFeed1 from './img/kranio.jpg'
import ImgFace from './img/face.jpg'

const MyTypography = styled(Typography)({
    width: '400px',
    fontSize: '1.1rem',
    margin: 'auto',
    height: '100%',
})

const MyAvatar = styled(Avatar)({
    margin: '10px 30px 10px 0',
    height: '100%',
    width: '100%',
    borderRadius: '2%',
    maxWidth: '800px',
    maxHeight: '500px',

})

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 400,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})

const Feed = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box flex={8} >
                <Typography
                    sx={{
                        fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.5rem' },
                        textAlign: 'center',
                        padding: { md: '0 0 0 25%', sm: '0 5%' },
                        margin: '0 auto 20px'
                    }} >
                    Массаж - здоровье души и тела
                </Typography>
                <Grid container spacing={0}
                    justifyContent={{ xs: 'center', sm: 'center', md: 'center' }}
                    direction={{ xs: 'column', md: 'row' }}>
                    <Grid item xs={10} md={4}>
                        <MyTypography
                            width={{ md: '300px', sm: '100%', xs: '100%' }}

                        >
                            Массаж имеет благоприятное действие на весь организм человека в целом: повышает мышечный тонус, способствует улучшению циркуляции крови и оттоку лимфы, а это, в свою очередь, снабжает органы питательными веществами, улучшает процессы обмена веществ. Но его эффективность зависит от правильного профессионального подхода в диагностике заболевания, подборе нужной методики, только тогда он принесет максимальный положительный эффект.
                        </MyTypography>
                    </Grid>
                    <Grid item xs={6}>
                        <MyAvatar
                            alt='thm'
                            src={ImgFeed} />
                    </Grid>
                </Grid>
                <Grid container spacing={2}
                    justifyContent={{ xs: 'center', sm: 'center', md: 'center' }}
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    marginTop={{ md: '55px', sm: '10px' }}>
                    <Grid item xs={6}>
                        <MyAvatar
                            alt='thm'
                            src={ImgFeed1} />
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <MyTypography
                            width={{ md: '300px', sm: '100%', xs: '100%' }}
                            paddingTop={{ md: '10%', xs: '1%' }}                        >

                            Краниосакральная терапия (КСТ) — направление мануальной терапии и остеопатии, которое направлено на восстановление естественной подвижности крестца, структур черепа и внутримозговых оболочек, устранение нарушений кровообращения головного мозга, а также обеспечение беспрепятственного движения спинномозговой жидкости (ликвора).
                        </MyTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={0}
                    justifyContent={{ xs: 'center', sm: 'center', md: 'center' }}
                    direction={{ xs: 'column', md: 'row' }}
                    marginTop={{ md: '60px', sm: '10px' }}                    >
                    <Grid item xs={10} md={4}>
                        <MyTypography
                            width={{ md: '300px', sm: '100%', xs: '100%' }}
                            paddingTop={{ md: '10%', xs: '1%' }}
                        >
                            Массаж лица помогает расслабить мышцы, усилить кровообращение и нормализовать отток жидкостей в теле что в свою очередь поможет предотвратить появление морщин, сохранить овал лица и убрать отёки снять напряжение, поднять настроение и справиться с тревожностью. Как часто делать массаж лица? Оптимально — через день. Курс массажа составляет 6–10 сеансов. При необходимости можно повторить курс через 1–2 месяца.
                        </MyTypography>
                    </Grid>
                    <Grid item xs={6}>
                        <MyAvatar
                            alt='thm'
                            src={ImgFace}
                        />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}
export default Feed