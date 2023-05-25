import {Container,CardImg} from '../Card/styles';
import { api } from '../../services/api';

import iconPencil from '../../assets/pencil.svg';
import imgDishPlaceholder from '../../assets/img/dishImg.jpg';

import { useNavigate } from 'react-router-dom';

export function Card({data = {},handleDetails, ...rest}){
    const navigate = useNavigate();

    function handleEditDish(id){
        navigate(`/editDish/${id}`);
    }

    const fileImgDish = data.img? `${api.defaults.baseURL}/files/${data.img}` : imgDishPlaceholder;


    return(
        <Container {...rest}>
            <img className='pencilImg' src={iconPencil} alt="Icon de editar"   onClick={() => handleEditDish(data.id)}/>
           <CardImg>
            <img className='imgDish' src={fileImgDish} alt="Imagem demonstrtivo"/>
            <h1 onClick={() => handleDetails(data.id)}>
                {data.name.length > 10 ? 
                    (<p>{data.name.slice(0, 8) +'...'} &gt;</p>) 
                    : 
                    (<p>{data.name.slice(0, 20)+'...'} &gt;</p>)
                }
            </h1>
                <span className='descriptionDish'>{data.description ? data.description.slice(0,20)+'...' : 'Sem descrição'}</span>
                <h4>R$ {data.price ? data.price.toFixed(2) : '0,00'}</h4>
           </CardImg>
        </Container>
    )
};  