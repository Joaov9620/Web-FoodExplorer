import {Container,CardImg} from '../Card/styles';

import iconPencil from '../../assets/pencil.svg';
import imgDemonstrative from '../../assets/img/Mask group-2.png';

export function Card({data = {}, ...rest}){
    return(
        <Container {...rest}>
            <img className='pencilImg' src={iconPencil} alt="Imagem demonstrativa" />
           <CardImg>
            <img src={imgDemonstrative} alt="Imagem demonstrtivo"/>
                <h1>{data.name} ...</h1>
                <span className='descriptionDish'>{data.description}</span>
                <h4>R$ {data.price}</h4>
           </CardImg>
        </Container>
    )
};  