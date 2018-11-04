import React, { Component } from 'react'
import Link, { withPrefix } from 'gatsby-link'
import { Menu, Header, Container, Icon } from 'semantic-ui-react'
import ShoppingCartIcon from './ShoppingCartIcon'
import Logo from './Logo'
import Search from './Search'
class DesktopMenu extends Component {
  state = {
    activeItem: this.props.location.pathname,
  }

  componentWillReceiveProps(nextProps) {
    const nextPathname = nextProps.location.pathname
    const currentPathname = this.props.location.pathname

    if (nextPathname !== currentPathname) {
      this.setState({
        activeItem: nextPathname,
      })
    }
  }

  render() {
    const { activeItem } = this.state
    const { token, cartCount } = this.props
    return (
      <Menu style={navbarStyle.headerColor} size="huge" borderless pointing>
        <Container text>
          <Menu.Item
            active={activeItem === withPrefix('/')}
            as={Link}
            to="/"
            header
          >
            <Logo />
            <Header style={navbarStyle.headerStyle} as='h1'>MagiKart</Header>
          </Menu.Item>
          <Search />
          {token ? (
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/myaccount/"
                active={activeItem === withPrefix('/myaccount/')}
              >
                <Icon name="user" />
                My Account
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/cart/"
                active={activeItem === withPrefix('/cart/')}
              >
                <ShoppingCartIcon cartCount={cartCount} name="Cart" />
              </Menu.Item>
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/magik/"
                active={activeItem === withPrefix('/magik/')}
              >
                Magik
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/register/"
                active={activeItem === withPrefix('/register/')}
                style={navbarStyle.textColor}
              >
                Sign up
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/login/"
                active={activeItem === withPrefix('/login/')}
                style={navbarStyle.textColor}
              >
                Sign in

              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/cart/"
                active={activeItem === withPrefix('/cart/')}
                style={navbarStyle.textColor}
              >
                <ShoppingCartIcon cartCount={cartCount} name="Cart" />
              </Menu.Item>
            </Menu.Menu>
          )}
        </Container>
      </Menu>
    )
  }
}
const navbarStyle ={
  headerStyle: {
    margin: 0,
    color: '#fff',
  },
  headerColor: {
    backgroundColor: '#1c211e',
  },
  textColor: {
    color: '#fff',
  }
}

export default DesktopMenu
