import {HeaderBody,MenuMobile, LogoMobile, SearchMobile,SearchMobile2,Logout} from "./styles"
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

export function Header(){
    return(
        <HeaderBody>
            <Container>
                <div className="menuMobile">
                    <MenuMobile>
                        <div className="buttonMenuHeader">
                            <ButtonText
                                icon={AiOutlineClose}
                                title="Menu"
                            />
                        </div>  
                        
                        <SearchMobile2 className="searchMobile2">
                            <Input
                                // icon={BiSearch}
                                Placeholder="Busque por pratos ou ingredientes"
                                type="text"
                            />
                        </SearchMobile2>

                        <div className="buttonsMenu">
                            <ButtonText title="Novo prato"/>
                            <ButtonText title="Sair"/>
                        </div>
                    </MenuMobile>
                
                    <div className="menu">
                        <img src={menuMobile} alt="Imagem desmontrativa" className="buttonMenu"/>

                        <LogoMobile className="logoHeader">
                            <Brand/>
                            <span>admin</span>
                        </LogoMobile>

                        <SearchMobile className="searchMobile">
                            <Input
                                // icon={BiSearch}
                                Placeholder="Busque por pratos ou ingredientes"
                                type="text"
                            />
                        </SearchMobile>

                        <div className="orders">
                            <img src={orders} alt="Imagem desmontrativa de pedidos" />
                            <span>0</span>
                        </div>

                        <Button title='Novo prato'/>

                        <div className="ordersDesktop">
                            <img src={orders} alt="Imagem desmontrativa de pedidos" />
                            <span>0</span>
                        </div>
                           
                        <Logout className="logoutHeader">
                            <img src={logout} alt="Sair" />
                        </Logout>
                    </div>
                </div> 
            </Container>
        </HeaderBody>

        // <header>
        //     <Container>

        //     </Container>
        // </header>
    )
};