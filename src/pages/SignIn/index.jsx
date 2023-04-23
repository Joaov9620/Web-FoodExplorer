import {Container,Form} from './styles';

import {Brand} from '../../components/Brand'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import { api } from '../../services/api';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SignIn(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSingIn(){

    };

    return(
        <Container>
            <div className='logo'>
                <Brand/>
            </div>
            <Form className='Form'>
                <h1>
                    Faça login
                </h1>
                <label>
                    Email
                    <Input
                        placeholder="Exemplo: Maria da Silva"
                        type="email"
                    />
                </label>

                <label>
                   Senha
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                    />
                </label>
                
                <Button title='Entrar'/>

                <Link to="/signUp">
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    )
};