import {Container,Form} from './styles';

import {Brand} from '../../../components/Brand'
import {Input} from '../../../components/Input'
import {Button} from '../../../components/Button'
import { LoadingSpinner } from '../../../components/LoadingSpinner';

import { useAuth } from '../../../hooks/auth';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const {signIn} = useAuth();

    async function handleSignIn() {
        setLoading(true);
        try {
          await signIn({ email, password });
          setLoading(false); // Atualiza o estado de loading para "false" após o login ter sucesso
        } catch {
          setLoading(false); // Atualiza o estado de loading para "false" em caso de erro
        }
    }

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
                        placeholder="Exemplo: maria@hotmail.com"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label>
                   Senha
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        onChange={e=>setPassword(e.target.value)}
                    />
                </label>
                
                {loading ? (
                <LoadingSpinner />
                ) : (
                <Button title="Entrar" onClick={handleSignIn} />
                )}
                <Link to="/signUp">
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    )
};