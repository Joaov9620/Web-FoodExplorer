import {Container,Form} from './styles';

import {Brand} from '../../components/Brand'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import {api} from '../../services/api';

import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

export function SignUp(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        let type = 'client';

        api.post('/users',{name, email, password, type})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate('/');
        })
        .catch(error =>{
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível criar conta!")
            }
        })

    }

    return(
        <Container>
            <div className='logo'>
                <Brand/>
            </div>
            <Form className='Form'>
                <h1>
                    Crie sua conta
                </h1>
                <label>
                    Seu nome
                    <Input
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        onChange = {e => setName(e.target.value)}
                    />
                </label>

                <label>
                    Email
                    <Input
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                        onChange = {e => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Senha
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        minLength="6"
                        type="password"
                        onChange = {e => setPassword(e.target.value)}
                    />
                </label>

                <Button title='Criar conta' onClick={handleSignUp}/>

                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
};