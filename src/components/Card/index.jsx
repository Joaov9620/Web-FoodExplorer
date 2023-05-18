import {Container,CardImg} from '../Card/styles';
import { api } from '../../services/api';

import iconPencil from '../../assets/pencil.svg';
import imgDishPlaceholder from '../../assets/img/dishImg.jpg';

import { useNavigate } from 'react-router-dom';

export function Card({data = {},handleDetails, ...rest}){
    const navigate = useNavigate();

    const tipo  = data.price.typeof;
    console.log(tipo)

    function handleEditDish(id){
        navigate(`/editDish/${id}`);
    }

    const fileImgDish = data.img? `${api.defaults.baseURL}/files/${data.img}` : imgDishPlaceholder;
    // const fileImgDish =  data.img ? data.img : imgDishPlaceholder

    return(
        <Container {...rest}>
            <img className='pencilImg' src={iconPencil} alt="Icon de editar"   onClick={() => handleEditDish(data.id)}/>
           <CardImg>
            <img className='imgDish' src={fileImgDish} alt="Imagem demonstrtivo"/>
            <h1 onClick={() => handleDetails(data.id)}>
                {data.name.length > 10 ? 
                    (<p>{data.name} &gt;</p>) 
                    : 
                    //.slice(0, 9) , (0,20) + '...'
                    (<p>{data.name} &gt;</p>)
                }
            </h1>
                <span className='descriptionDish'>{data.description}</span>
                <h4>R$ {data.price}</h4>
           </CardImg>
        </Container>
    )
};  