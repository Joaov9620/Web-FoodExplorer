import {Container,Form} from './styles';

import {Brand} from '../../../components/Brand'
import {Input} from '../../../components/Input'
import {Button} from '../../../components/Button'
import { LoadingSpinner } from '../../../components/LoadingSpinner';

import {api} from '../../../services/api';

import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

export function SignUp(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        if (password.length < 6){
            return alert('A senha deve ter pelo menos 6 caracteres!');
        }

        setLoading(true);
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
            setLoading(false);
        }).finally(() => {
            setLoading(false);
        });
    }

    function capitalizeFirstLetter(text) {
        const words = text.split(' ');
        const capitalizedWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(' ');
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
                        onChange = {e => setName(capitalizeFirstLetter(e.target.value))}
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
                {loading ? (
                <LoadingSpinner />
                ) : (
                <Button title="Criar conta" onClick={handleSignUp} />
                )}

                <Link to="/" className='pageHome'>
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
};