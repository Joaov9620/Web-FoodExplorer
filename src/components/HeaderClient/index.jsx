import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import {HeaderBody,MenuMobile,MenuDesktop, Logo, Search,SearchMobile,IconCart,Logout} from "./styles"
import { Container } from "../../styles/global";

import {BiSearch} from 'react-icons/bi'
import { AiOutlineClose } from "react-icons/ai";

import logout from '../../assets/logout.svg';
import menuMobile from '../../assets/menuMobile.svg';

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { Footer } from '../Footer';

import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { useHeader } from '../../hooks/HeaderContext';


function Header(){
    const navigate = useNavigate();
    const location = useLocation();
    const {signOut} = useAuth();
    const {setSearchValue}  = useHeader();
  
    function handleChange(event) {
        if (window.location.pathname === "/") {
            const value = event.target.value;
            setSearchValue(value);
        }
    }

    function handleOrders(){
        navigate('/orders');
    }
    
    function handleCart(){
        navigate('/cart');
    }


    function handleSignOut(){
        navigate("/");
        signOut();
    }

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  
    function handleMobileMenuClick() {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    useEffect(() => {
        setSearchValue('');
    }, [location]);

    return(
        <ErrorBoundary>
            <MenuMobile style={{ display: isMobileMenuOpen ? 'none' : 'block' }}> 
                <div className="buttonMenuHeader" >
                    <ButtonText
                        icon={AiOutlineClose}
                        title="Menu"
                        onClick={handleMobileMenuClick} 
                    />
                    </div> 
                        <div>
                            <SearchMobile>
                            <Input
                                // icon={BiSearch}
                                placeholder="Busque por pratos ou ingredientes"
                                type="text"
                                onChange={handleChange} 
                            />
                            </SearchMobile>
                        <div className="buttonsMenu">
                        <ButtonText title="Sair" onClick={handleSignOut} />
                    </div>
                </div>
                <Footer/>
            </MenuMobile>

            <HeaderBody>
                <Container>                     
                    
                    <MenuDesktop className="menu">
                        <div className='buttonMenuDesktop'>
                            <button onClick={handleMobileMenuClick} style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}>
                                <img src={menuMobile} alt="Imagem desmontrativa"/>
                            </button>
                        </div>
    
                        <Logo className="logoHeader">
                            <Brand />
                            <span>Cliente</span>
                        </Logo>
    
                        <Search className="search">
                            <Input
                                // icon={BiSearch}
                                placeholder="Busque por pratos ou ingredientes"
                                 type="text"
                                 onChange={handleChange} 
                            />
                        </Search>
                           
                        <Button title='Pedidos (0)' onClick={handleOrders} className="newDish" />
                            
                        <IconCart onClick={handleCart}/>
                            
                        <Logout className="logoutHeader">
                            <img src={logout} alt="Sair" onClick={handleSignOut} />
                        </Logout>
                    </MenuDesktop>
                </Container>
            </HeaderBody>
        </ErrorBoundary>
    )
};

export default Header;
