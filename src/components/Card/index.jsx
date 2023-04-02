import {Container,CardImg} from '../Card/styles';

import iconPencil from '../../assets/pencil.svg';
import imgDemonstrative from '../../assets/img/Mask group-2.png';

export function Card(){
    return(
        <Container>
            <img className='pencilImg' src={iconPencil} alt="Imagem demonstrativa" />
           <CardImg>
            <img src={imgDemonstrative} alt="Imagem demonstrtivo"/>
                <h1>Spaguetti Gambe</h1>
                <span className='descriptionDish'>Massa fresca com camarões e pesto. </span>
                <h4>R$ 79,97</h4>
           </CardImg>
        </Container>
    )
};