import {Container} from './styles';

export function IngredientDetails({value, ...rest}){
    return <Container {...rest}>
        {value}
    </Container>
};