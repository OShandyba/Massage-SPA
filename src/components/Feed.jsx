import { Avatar, Box, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import ImgFeed from './img/feed-1.jpg'
import ImgFeed1 from './img/kranio.jpg'
import ImgFace from './img/face.jpg'

const MyTypography = styled(Typography)({
    width: '300px',
    paddingTop: '10px',
    fontSize: '1.2rem',
    fontWeight: 500,
    marginLeft: '10px'
})

const MyAvatar = styled(Avatar)({
    margin: '10px 30px 10px 10px',
    height: '100%',
    width: '100%',
    borderRadius: '2%',
})


const Feed = () => {
    return (
        <Box flex={8} >
            <Typography
                sx={{
                    fontSize: '2rem',
                    textAlign: 'center',
                    paddingLeft: { md: '25%', sm: '10%' },
                    margin: '20px'
                }} >
                Массаж - здоровье души и тела
            </Typography>

            <Stack
                direction='row'
                spacing={2}

                sx={{
                    marginRight: '20px',
                    justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
                }} >

                <Box justifyContent='center'>
                    <MyTypography>
                        Массаж имеет благоприятное действие на весь организм человека в целом: повышает мышечный тонус, способствует улучшению циркуляции крови и оттоку лимфы, а это, в свою очередь, снабжает органы питательными веществами, улучшает процессы обмена веществ. Но его эффективность зависит от правильного профессионального подхода в диагностике заболевания, подборе нужной методики, только тогда он принесет максимальный положительный эффект.
                    </MyTypography>
                </Box>
                <Box
                    sx={{
                        maxHeight: '500px',
                        maxWidth: '1000px',
                        display: { xs: 'none', sm: 'none', md: 'block' }
                    }} >
                    <MyAvatar
                        alt='thm'
                        src={ImgFeed}
                    />
                </Box>
            </Stack>

            <Stack
                direction='row'
                spacing={2}
                sx={{
                    margin: '40px 20px 0 0',
                    justifyContent: { xs: 'center', sm: 'center', md: 'space-between' }
                }} >
                <Box
                    sx={{
                        maxHeight: '430px',
                        maxWidth: '1000px',
                        display: { xs: 'none', sm: 'none', md: 'block' }
                    }} >
                    <MyAvatar
                        alt='thm'
                        src={ImgFeed1}
                    />
                </Box>
                <Box justifyContent='center'>
                    <MyTypography>
                        Краниосакральная терапия (КСТ) — направление мануальной терапии и остеопатии, которое направлено на восстановление естественной подвижности крестца, структур черепа и внутримозговых оболочек, устранение нарушений кровообращения головного мозга, а также обеспечение беспрепятственного движения спинномозговой жидкости (ликвора).
                    </MyTypography>
                </Box>
            </Stack>
            <Stack
                direction='row'
                spacing={2}
                sx={{
                    margin: '40px 20px 10px 0',
                    justifyContent: { xs: 'center', sm: 'center', md: 'space-between' }
                }} >

                <Box justifyContent='center'>
                    <MyTypography>
                        Массаж лица помогает расслабить мышцы, усилить кровообращение и нормализовать отток жидкостей в теле что в свою очередь поможет предотвратить появление морщин, сохранить овал лица и убрать отёки снять напряжение, поднять настроение и справиться с тревожностью. Как часто делать массаж лица? Оптимально — через день. Курс массажа составляет 6–10 сеансов. При необходимости можно повторить курс через 1–2 месяца.
                    </MyTypography>
                </Box>
                <Box
                    sx={{
                        maxHeight: '530px',
                        maxWidth: '1000px',
                        display: { xs: 'none', sm: 'none', md: 'block' }
                    }} >
                    <MyAvatar
                        alt='thm'
                        src={ImgFace}
                    />
                </Box>
            </Stack>
            <Paper

            >
                <Typography
                    textAlign='center'
                    fontSize='2rem'
                    marginTop='60px'
                >
                    Прайс лист
                </Typography>
                <Stack
                    direction={{ md: 'row', xs: 'column' }}
                    spacing={2}
                    padding='20px 60px'
                    marginBottom='50px'

                >
                    <Typography
                        maxWidth='700px'
                        sx={{ fontSize: { md: '1.2rem', sm: '1rem' } }}
                    >
                        <p>Моделирующий массаж лица (скульптурирующий)    -    300-60 мин </p><br></br>
                        <p>Испанский массаж (расслабляющий) общий          -   500-120мин</p> <br></br>
                        <p>Краниально-сакральная терапия                    -  300-от 30мин </p><br></br>
                        <p>Антицеллюлитный массаж ручной (бёдра+икры+ягодицы)- 300-60мин</p> <br></br>
                        <p>Кинезиотейпирование (только в сочетании с массажем)- от 50 </p><br></br>
                        <p>Массаж шейно-воротниковой зоны                     - 200-30мин </p><br></br>
                        <p>Классический массаж (спина+ШВЗ)                    - 300-60мин </p><br></br>

                    </Typography>
                    <Typography
                        maxWidth='700px'
                        sx={{ fontSize: { md: '1.2rem', sm: '1rem' } }}
                    >
                        <p>Раслабляющий массаж   -  300-60мин </p><br></br>
                        <p>Лимфодренажный массаж - 500-120мин </p><br></br>
                        <p>Классический массаж (общий) - 500-120мин </p><br></br>
                        <p>Остеопатический массаж - 300-от 30мин</p> <br></br>
                        <p>Массаж стоп - 200-40мин</p> <br></br>
                        <p>Другие виды массажа </p><br></br>

                    </Typography>
                </Stack>
            </Paper>
        </Box >
    )
}
export default Feed