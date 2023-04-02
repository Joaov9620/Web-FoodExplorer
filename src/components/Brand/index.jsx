import {Container} from './styles';

import logo from '../../assets/logo.svg';

export function Brand(){
    return(
        <Container>
            <img src={logo} alt="Logo" />
            <h1>food explorer</h1>
        </Container>
    )
};