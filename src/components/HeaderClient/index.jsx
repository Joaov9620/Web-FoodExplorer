import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import {HeaderBody,MenuMobile,MenuDesktop, Logo, Search,SearchMobile,Logout} from "./styles"
import { Container } from "../../styles/global";

import {BiSearch} from 'react-icons/bi'
import { AiOutlineClose } from "react-icons/ai";

import logout from '../../assets/logout.svg';
import orders from '../../assets/orders.svg';
import menuMobile from '../../assets/menuMobile.svg';

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { Footer } from "../Footer";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useHeader } from '../../hooks/HeaderContext';

function Header(){
    const navigate = useNavigate();
    const {signOut} = useAuth();

    const {headerSearchValue, setSearchValue}  = useHeader();
    const [valueSearch, setValueSearch] = useState(headerSearchValue);
  
    function handleChange(event) {
        const value = event.target.value;
        setValueSearch(value);
        setSearchValue(value);
    }

    function handleNewDish(){
        // navigate('/newDish');
        //criar rota de pedidos
    }

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  
    function handleMobileMenuClick() {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return(
        <ErrorBoundary>
            <HeaderBody>
                <Container>
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
                                    />
                                </SearchMobile>
        
                                <div className="buttonsMenu">
                                    <ButtonText title="Novo prato" onClick={handleNewDish}/>
                                    <ButtonText title="Sair" onClick={handleSignOut} />
                                </div>
                            </div>
                            {/* <Footer/> */}
                        </MenuMobile>
                    
                        <MenuDesktop className="menu">
                            <div className='buttonMenuDesktop'>
                                <button onClick={handleMobileMenuClick} style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}>
                                    <img src={menuMobile} alt="Imagem desmontrativa"/>
                                </button>
                            </div>
    
                            <Logo className="logoHeader">
                                <Brand/>
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
    
                            {/* <div className="orders">
                                <img src={orders} alt="Imagem desmontrativa de pedidos" />
                                <span>0</span>
                            </div> */}
                           
                            <Button title='Pedidos (0)' onClick={handleNewDish} className="newDish" />
    
                            {/* <div className="ordersDesktop">
                                <img src={orders} alt="Imagem desmontrativa de pedidos" />
                                <span>0</span>
                            </div> */}
                            
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
