import {Container,CardImg} from '../Card/styles';

import iconPencil from '../../assets/pencil.svg';
import imgDemonstrative from '../../assets/img/Mask group-2.png';

import { useNavigate } from 'react-router-dom';

export function Card({data = {},handleDetails, ...rest}){
    const navigate = useNavigate();

    function handleEditDish(id){
        navigate(`/editDish/${id}`);
    }
    return(
        <Container {...rest}>
            <img className='pencilImg' src={iconPencil} alt="Icon de editar"   onClick={() => handleEditDish(data.id)}/>
           <CardImg>
            <img className='imgDish' src={imgDemonstrative} alt="Imagem demonstrtivo"/>
            <h1 onClick={() => handleDetails(data.id)}>
                {data.name} &gt;
            </h1>
                <span className='descriptionDish'>{data.description.slice(0,40) + '...'}</span>
                <h4>R$ {data.price}</h4>
           </CardImg>
        </Container>
    )
};  