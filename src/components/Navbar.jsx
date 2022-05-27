import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import Badge from '@material-ui/core/Badge/Badge';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Languages = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    margin-left: 25px;
`

const Input = styled.input`
    border: none;
    padding-left: 15px;
    outline: none;
    ${mobile({ width: "50px" })}
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: white;
    color: gray;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.02);
    }
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languages>EN</Languages>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Button>
                            <Search />
                        </Button>
                    </SearchContainer>
                </Left>
                <Center><Logo>SRY.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={3} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar