import { AppBar, styled, Toolbar, Typography, Box, List, ListItem, ListItemIcon, Switch, Icon, Link } from "@mui/material";
import SpaIcon from '@mui/icons-material/Spa';
import React from "react";
import { Facebook, Instagram, ModeNight } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})
const SearchBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    direction: 'row',
    // width: '15%',
})
const IconBoxNav = styled(Box)({
    display: 'flex',
    height: '20px',
    alignItems: 'center',
})

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ bgcolor: '#00cccc' }}>
            <StyledToolbar>
                <Icon>
                    <SpaIcon />
                </Icon>
                <Typography sx={{ display: { xs: 'none', sm: 'block', color: 'black' } }} variant="h6">Массаж в Харькове</Typography>
                <SearchBox>
                    <IconBoxNav >
                        <Link href="https://www.instagram.com/massage_oleg_kh/?hl=ru" target='_blank' underline="none">
                            <Icon sx={{ marginRight: '15px', color: 'red', height: 30, width: 30 }}>
                                <Instagram sx={{ height: 30, width: 30 }} />
                            </Icon>
                        </Link>
                        <Link href="https://www.facebook.com/massage.kh.oleg/?ref=pages_you_manage" target='_blank' underline="none">
                            <Icon sx={{ marginRight: '15px', color: 'blue', height: 30, width: 30 }}>
                                <Facebook sx={{ height: 30, width: 30 }} />
                            </Icon>
                        </Link>
                    </IconBoxNav>
                    <List>
                        <ListItem disablePadding sx={{ marginLeft: '60px' }}>
                            <ListItemIcon sx={{ minWidth: '1px', color: 'black' }}>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch />
                        </ListItem>
                    </List>
                </SearchBox>
            </StyledToolbar>
        </AppBar >
    )
}
export default Navbar