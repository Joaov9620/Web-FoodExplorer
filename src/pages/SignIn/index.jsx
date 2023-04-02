import {Container,Form} from './styles';

import {Brand} from '../../components/Brand'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SignIn(){
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

                <h5>
                    Criar uma conta
                </h5>
            </Form>
        </Container>
    )
};