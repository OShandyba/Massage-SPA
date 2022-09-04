import { Paper, Typography, Grid } from '@mui/material'

export default function PriceList() {
    return (
        <Paper
            sx={{
                margin: { xs: '40px 20px 0', sm: '80px 20px 0', md: '80px 240px 0' },
                maxWidth: '1000px',
                justifyItems: 'center',
            }}>
            <Grid container
                direction={{ xs: 'column' }}
            >
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            display: 'block',
                            fontSize: '2rem',
                            textAlign: 'center',
                            py: 3,
                        }}>
                        Прайс:
                    </Typography>
                </Grid>
                <Grid item lg={6}>
                    <Typography
                        sx={{
                            px: 5
                        }}
                    >
                        <p>Моделирующий массаж лица (скульптурирующий) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .300₴ - 60 мин </p><br></br>
                        <p>Испанский массаж (расслабляющий) общий . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  500₴ - 120мин</p> <br></br>
                        <p>Краниально-сакральная терапия . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 300₴ от 30мин </p><br></br>
                        <p>Антицеллюлитный массаж ручной (бёдра+икры+ягодицы) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .300₴ - 60мин</p> <br></br>
                        <p>Кинезиотейпирование (только в сочетании c массажем) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .от 50₴ </p > <br></br>
                        <p>Массаж шейно-воротниковой зоны . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .200₴ - 30мин </p > <br></br>
                        <p>Классический массаж (спина+ШВЗ) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 300₴ - 60мин </p > <br></br>

                    </Typography>
                </Grid>
                <Grid item lg={6}>
                    <Typography
                        sx={{
                            px: 5
                        }}
                    >
                        <p>Раслабляющий массаж . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .300₴ - 60мин </p><br></br>
                        <p>Лимфодренажный массаж . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .500₴ - 120мин </p><br></br>
                        <p>Классический массаж (общий) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  500₴ - 120мин </p><br></br>
                        <p>Остеопатический массаж . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . 300₴ - 30мин</p> <br></br>
                        <p>Массаж стоп . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .200₴ - 40мин</p> <br></br>
                        <p>Другие виды массажа </p> <br></br>
                    </Typography>
                    <Grid item xs>
                        <Typography
                            display='flex'
                            justifyContent='right'
                            paddingRight={2}>
                            Будте здоровы и красивы!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    )
}
