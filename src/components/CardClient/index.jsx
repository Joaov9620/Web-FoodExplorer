import {Container, CardImg, FavoriteIcon} from '../CardClient/styles';

import { Button } from '../Button';

import iconToDecrease from '../../assets/toDecrease.svg';
import iconToAdd from '../../assets/toAdd.svg';

import imgDemonstrative from '../../assets/img/Mask group-2.png';

import { useState } from 'react';

import {api} from '../../services/api';

import { useAuth } from '../../hooks/auth';

export function CardClient({data = {}, handleDetail, ...rest}){

    const [isFavorite, setIsFavorite] = useState(data.isFavorite);
    const [count, setCount] = useState(1);
    
    const {user} = useAuth();

    async function handleFavoriteClick(){
        setIsFavorite(!isFavorite);
        if(isFavorite){
            await api.delete("/favoriteDish",{data:{user_id:user.id, dish_id:data.id}});
        }else{
            await api.post("/favoriteDish",{user_id:user.id, dish_id:data.id});
        }
    }

    function handleAdd(){
        setCount(count + 1);
    }

    function handleToDecrease(){
        if (count > 1){
            setCount(count - 1);
        }
    }

    return(
        <Container {...rest}>
            <FavoriteIcon
                onClick={handleFavoriteClick}
                className={isFavorite ? 'favoriteActive' : ''}
            />
           <CardImg>
            <img src={imgDemonstrative} alt="Imagem demonstrtivo"/>
            <h1 onClick={() => handleDetails(data.id)}>
                {data.name} &gt;
            </h1>
            <span className='descriptionDish'>{data.description.slice(0,40) + '...'}</span>
            <h4>R$ {data.price}</h4>
            <div>
                <button onClick={handleToDecrease}>
                    <img src={iconToDecrease} alt="Icone de diminuir" />
                </button>
                <span>{count < 10 ? `0${count}` : count}</span>
                <button onClick={handleAdd}>
                    <img src={iconToAdd} alt="Icone de adicionar" />
                </button>
                <Button title='Incluir' className="buttonAddDish"/>
            </div>
           </CardImg>
        </Container>
    )
};  