import { AppBar, styled, Toolbar, Typography, Box, Icon, Link, createTheme, ThemeProvider } from "@mui/material";
import SpaIcon from '@mui/icons-material/Spa';
import React from "react";
import { Facebook, Instagram } from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})
const SearchBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    direction: 'row',
})
const IconBoxNav = styled(Box)({
    display: 'flex',
    height: '20px',
    alignItems: 'center',
})

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 360,
        },
    },
});


const Navbar = () => {

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: '#00cccc',
                    width: '100%'
                }}>
                <StyledToolbar>
                    <Icon>
                        <SpaIcon />
                    </Icon>
                    <Typography
                        sx={{
                            fontSize: { xs: '0.9rem', sm: '1.25rem' },
                            color: 'black'
                        }}
                        variant="h6">
                        Массаж в Харькове
                    </Typography>
                    <SearchBox>
                        <IconBoxNav >
                            <Link
                                href="https://www.instagram.com/massage_oleg_kh/?hl=ru"
                                target='_blank'
                                underline="none">
                                <Icon sx={{ marginRight: '15px', color: 'red', height: 30, width: 30 }}>
                                    <Instagram sx={{ height: 30, width: 30 }} />
                                </Icon>
                            </Link>
                            <Link href="https://www.facebook.com/massage.kh.oleg/?ref=pages_you_manage" target='_blank' underline="none">
                                <Icon sx={{ color: 'blue', height: 30, width: 30 }}>
                                    <Facebook sx={{ height: 30, width: 30 }} />
                                </Icon>
                            </Link>
                        </IconBoxNav>

                    </SearchBox>
                </StyledToolbar>
            </AppBar >
        </ThemeProvider>
    )
}
export default Navbar