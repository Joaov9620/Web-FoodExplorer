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

import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { useHeader } from '../../hooks/HeaderContext';

function Header(){
    const navigate = useNavigate();
    const location = useLocation();
    const {signOut} = useAuth();

    const {headerSearchValue, setSearchValue}  = useHeader();
    const [valueSearch, setValueSearch] = useState(headerSearchValue);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
   
    function handleChange(event) {
        if(window.location.pathname === "/"){
            const value = event.target.value;
            setValueSearch(value);
            setSearchValue(value);
        }
    }

    function handleNewDish(){
        navigate('/newDish');
    }

    function handleSignOut(){
        navigate("/");
        signOut();
    }

  
    function handleMobileMenuClick() {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    useEffect(() => {
        let timeoutId;
        let prevScrollPosition = window.pageYOffset;
      
        function handleScroll() {
          const currentScrollPosition = window.pageYOffset;
          
          if (currentScrollPosition > prevScrollPosition && currentScrollPosition > 0) {
            // usuário rolando para baixo, esconde o menu
            setIsHeaderVisible(false);
          } else {
            // usuário rolando para cima, mostra o menu
            setIsHeaderVisible(true);
            clearTimeout(timeoutId);
            
            timeoutId = setTimeout(() => {
              setIsHeaderFixed(currentScrollPosition > 0);
            }, 100); // reduzido o tempo de atraso para 100 milissegundos
          }
      
          prevScrollPosition = currentScrollPosition;
        }  
      
        prevScrollPosition = window.pageYOffset; // adicionado para definir prevScrollPosition inicial
      
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
          clearTimeout(timeoutId);
        };
    }, []); //rever esse código para entender

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
                            <ButtonText title="Novo prato" onClick={handleNewDish}/>
                            <ButtonText title="Sair" onClick={handleSignOut} />
                        </div>
                    </div>
                    <Footer/>
            </MenuMobile>
            <HeaderBody 
            style={{ 
                position: isHeaderFixed ? 'fixed' : 'static', 
                top: 0, left: 0, right: 0, zIndex: 2,
                opacity: isHeaderVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            >
                <Container>
                    <MenuDesktop className="menu">
                        <div className='buttonMenuDesktop'>
                            <button onClick={handleMobileMenuClick} style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}>
                                <img src={menuMobile} alt="Imagem desmontrativa"/>
                            </button>
                        </div>
    
                        <Logo className="logoHeader">
                            <Brand/>
                            <span>admin</span>
                        </Logo>
    
                        <Search className="search">
                            <Input
                                // icon={BiSearch}
                                placeholder="Busque por pratos ou ingredientes"
                                type="text"
                                onChange={handleChange} 
                            />
                        </Search>
                           
                        <Button title='Novo prato' onClick={handleNewDish} className="newDish" />
                            
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
