import {Container} from './styles'; 

export function Button({title, Loading = false, ...rest}){
    return(
        <Container
            type="button"
            disable={Loading}
            {...rest}
        >
            {Loading?'Carregando...':title}
        </Container>
    )
};