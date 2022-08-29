import { Avatar, Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import ImgFeed from './img/feed-1.jpg'
import ImgFeed1 from './img/kranio.jpg'
import ImgFace from './img/face.jpg'

const MyTypography = styled(Typography)({
    width: '300px',
    paddingTop: '10px',
    fontSize: '1.1rem',
})

const MyAvatar = styled(Avatar)({
    margin: '10px 30px 10px 0',
    height: '100%',
    width: '100%',
    borderRadius: '2%',
    maxWidth: '800px',
    maxHeight: '500px',

})

const Feed = () => {
    return (
        <Box flex={8} >
            <Typography
                sx={{
                    fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.5rem' },
                    textAlign: 'center',
                    paddingLeft: { md: '25%', sm: '10%' },
                    margin: '20px'
                }} >
                Массаж - здоровье души и тела
            </Typography>
            <Grid container spacing={0}
                justifyContent={{ xs: 'center', sm: 'center', md: 'center' }}
                direction={{ xs: 'column', md: 'row' }}>
                <Grid item xs={10} md={3}>
                    <MyTypography
                        width={{ md: '300px', sm: '100%', xs: '100%' }}
                        display='flex'
                        alignContent='center'>
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
                marginTop='20px'>
                <Grid item xs={6}>
                    <MyAvatar
                        alt='thm'
                        src={ImgFeed1} />
                </Grid>
                <Grid item xs={10} md={3}>
                    <MyTypography
                        width={{ md: '300px', sm: '100%', xs: '100%' }}>
                        Краниосакральная терапия (КСТ) — направление мануальной терапии и остеопатии, которое направлено на восстановление естественной подвижности крестца, структур черепа и внутримозговых оболочек, устранение нарушений кровообращения головного мозга, а также обеспечение беспрепятственного движения спинномозговой жидкости (ликвора).
                    </MyTypography>
                </Grid>
            </Grid>
            <Grid container spacing={0}
                justifyContent={{ xs: 'center', sm: 'center', md: 'center' }}
                direction={{ xs: 'column', md: 'row' }}
                marginTop='20px'>
                <Grid item xs={10} md={3}>
                    <MyTypography
                        width={{ md: '300px', sm: '100%', xs: '100%' }}>
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
    )
}
export default Feed