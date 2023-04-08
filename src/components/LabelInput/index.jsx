import {Container} from './styles';

export function LabelInput({title, children}){
    return(
        <Container>
            <label>{title}</label>
            {children}
        </Container>
    )
}