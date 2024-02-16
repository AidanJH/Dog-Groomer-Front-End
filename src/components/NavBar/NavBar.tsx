import { AppBar, Container, Toolbar, Typography, IconButton, Menu, Box, MenuItem, Button, Tooltip, Avatar } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

//TODO: Add full user data in when doing Auth
type Props = {
  userRole: string
}

//Pages that will be seen in the hamburger icon

const pages = [
{ name: 'Home', roles: ['Admin', 'Vendor', 'Customer', 'User'] },
{ name: 'Marketplace', roles: ['Admin', 'Vendor', 'Customer', 'User'] },
{ name: 'Your Business', roles: ['Vendor'] },
{ name: 'Orders', roles: ['Vendor', 'Customer'] },
];

//TODO: Give a gray icon when logged out, but a user profile pic when logged in
//Pages seen in the User Icon
const settings = [
  { name: 'Login', roles: ['User'] },
  { name: 'Profile', roles: ['Vendor', 'Customer'] },
  { name: 'Pets', roles: ['Customer'] },
  { name: 'Logout', roles: ['Customer', 'Admin', 'Vendor'] },
];

const NavBar = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const accessiblePages = pages.filter(page => page.roles.includes(props.userRole));
  const accessibleSettings = settings.filter(setting => setting.roles.includes(props.userRole));


  return (
    <div className='NavBar'>
      <AppBar position = "static" color="inherit" variant='outlined' >
        <Container maxWidth = {false}>
          <Toolbar disableGutters>
          <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }} />
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
              {accessiblePages.map((page) => (
                <Link to = {page.name} key={page.name}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {accessiblePages.map((page) => (
              <Link to = {page.name} key={page.name}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Not Signed In" src="../../assets/images/logo/paw-icon.png" />
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
              {accessibleSettings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default NavBar