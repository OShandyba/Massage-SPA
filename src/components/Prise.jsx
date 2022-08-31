import { Paper, Typography, } from '@mui/material'

export default function PriseList() {
    return (
        <Paper
            sx={{
                margin: { xs: '40px 20px 0', sm: '80px 20px 0', md: '80px auto 0' },
                maxWidth: '700px',
                justifyItems: 'center',
            }}>
            <Typography
                sx={{
                    display: 'block',
                    fontSize: '2rem',
                    paddingLeft: 2,
                }}>
                Прайс:
            </Typography>
            <Typography
                sx={{
                    paddingLeft: 2,
                }}>
                <p>Моделирующий массаж лица (скульптурирующий)-300 - 60 мин </p><br></br>
                <p>Испанский массаж (расслабляющий) общий - 500 - 120мин</p> <br></br>
                <p>Краниально-сакральная терапия - 300 - от 30мин </p><br></br>
                <p>Антицеллюлитный массаж ручной (бёдра+икры+ягодицы) - 300 - 60мин</p> <br></br>
                <p>Кинезиотейпирование (только в сочетании с массажем) - от 50 </p > <br></br>
                <p>Массаж шейно-воротниковой зоны - 200 - 30мин </p > <br></br>
                <p>Классический массаж (спина+ШВЗ) - 300 - 60мин </p > <br></br>
                <p>Раслабляющий массаж - 300 - 60мин </p><br></br>
                <p>Лимфодренажный массаж - 500 - 120мин </p><br></br>
                <p>Классический массаж (общий) - 500 - 120мин </p><br></br>
                <p>Остеопатический массаж - 300 - от 30мин</p> <br></br>
                <p>Массаж стоп - 200 - 40мин</p> <br></br>
                <p>Другие виды массажа </p> <br></br>
            </Typography>
            <Typography
                display='flex'
                justifyContent='right'
                paddingRight={2}>
                Будте здоровы и красивы!
            </Typography>
        </Paper >
    )
}
