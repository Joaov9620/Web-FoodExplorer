import {Container,Form} from './styles';

import {Brand} from '../../components/Brand'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SignUp(){
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
                    />
                </label>

                <label>
                    Email
                    <Input
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                    />
                </label>

                <label>
                    Senha
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        minLength="6"
                        type="password"
                    />
                </label>

                <Button title='Criar conta'/>

                <h5>
                    Já tenho uma conta
                </h5>
            </Form>
        </Container>
    )
};