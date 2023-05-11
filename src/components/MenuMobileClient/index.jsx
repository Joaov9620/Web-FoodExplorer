import {Container} from "../../styles/global";
import {Content, SearchMobile} from './styles';

import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

import { AiOutlineClose } from "react-icons/ai";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useHeader } from '../../hooks/HeaderContext';

export function MenuMobileClient() {
    const navigate = useNavigate();
    const {signOut} = useAuth();

    const {setSearchValue}  = useHeader();
    
    function handleSignOut(){
        navigate("/");
        signOut();
    }

    return (
        <Container>
            <Content> 
                <div className="buttonMenuHeader" >
                    <ButtonText
                        icon={AiOutlineClose}
                        title="Menu"
                        // onClick={handleMobileMenuClick} 
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
                        <ButtonText title="Sair" onClick={handleSignOut} />
                    </div>
                </div>
                {/* <Footer/> */}
            </Content>
        </Container>
    )
}