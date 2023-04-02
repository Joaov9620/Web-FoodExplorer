import { FooterBody,Logo} from './styles';
import {Container } from "../../styles/global";

import {Brand} from '../Brand';

import logo from '../../assets/logo.svg';

export function Footer(){
    return(
        <FooterBody>
            <Container>
                <Logo>
                    <Brand/>
                </Logo>
                <h2>
                © 2023 - Todos os direitos reservados.
                </h2>
           </Container>
         </FooterBody>
    )
};