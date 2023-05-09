import {Container} from './styles';

import logo from '../../assets/logo.svg';

import { useNavigate } from 'react-router-dom';

export function Brand(){
    const navigate = useNavigate();
    
    function handleHome(){
        navigate('/');
    }
    
    return(
        <Container>
            <img src={logo} alt="Logo" />
            <h1 onClick={handleHome}>food explorer</h1>
        </Container>
    )
};