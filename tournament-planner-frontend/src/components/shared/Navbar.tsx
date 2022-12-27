import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../../contexts/ProfileContext';
import { Authenticated } from './Authenticated';
import { UnAuthenticated } from './UnAuthenticated';

const pages = [
    {
        name: 'Matches',
        to: '/'
    },
    {
        name: 'Administration',
        to: '/admin',
        admin: true
    }
];
const settings = [
    {
        name: 'Profile',
        link: '/profile'
    },
    {
        name: 'Logout',
        link: '/logout',
        isLogout: true
    },
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navProps = {
        handleCloseNavMenu,
        title: 'Executers'
    }

    return (
        <AppBar position="static" style={{ marginBottom: '1rem' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SmallNavbar {...navProps} handleOpenNavMenu={handleOpenNavMenu} anchorElNav={anchorElNav} />
                    <LargeNavbar {...navProps} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

type NavbarProps = {

    handleCloseNavMenu: (event: any) => void,
    title: string
}

type SmallNavbarProps = NavbarProps & {
    handleOpenNavMenu: (event: any) => void,
    anchorElNav: any,
}

type LargeNavbarProps = NavbarProps & {

}

const SmallNavbar = ({ title, anchorElNav, handleOpenNavMenu, handleCloseNavMenu }: SmallNavbarProps) => {

    return <React.Fragment>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
            {title}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map(({ name, to }) => (
                    <MenuItem component={Link} to={to} key={name} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{name}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    </React.Fragment>
}

const LargeNavbar = ({ title, handleCloseNavMenu }: LargeNavbarProps) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null)
    const { profile } = React.useContext(ProfileContext)
    const handleLogin = () => {
        //TODO implement
    }

    const handleLogout = () => {
        //TODO implement
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };
    return <React.Fragment>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
            {title}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages
            .filter(x => !x.admin || (x.admin && profile?.isAdmin))
            .map(({ name, to }) => (
                <Button
                    component={Link}
                    variant='text'
                    to={to}
                    key={name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {name}
                </Button>
            ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
            <UnAuthenticated>
                <Button onClick={handleLogin}>Login</Button>
            </UnAuthenticated>
            <Authenticated>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map(({ name, isLogout, link }) => (
                        <MenuItem key={link} onClick={isLogout ? handleLogout : handleCloseUserMenu} component={Link} to={link}>
                            <Typography textAlign="center">{name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Authenticated>
        </Box>
    </React.Fragment>
}
export default Navbar;
