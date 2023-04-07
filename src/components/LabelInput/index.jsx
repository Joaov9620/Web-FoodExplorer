import {Container} from './styles';

export function LabelInput({title, ...rest}){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}