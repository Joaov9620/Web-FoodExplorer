import {Container, CardImg, FavoriteIcon} from '../CardClient/styles';

import { Button } from '../Button';

import iconToDecrease from '../../assets/toDecrease.svg';
import iconToAdd from '../../assets/toAdd.svg';

import imgDemonstrative from '../../assets/img/Mask group-2.png';

import { useState } from 'react';

export function CardClient({data = {}, handleDetails, id, ...rest}){

    const [count, setCount] = useState(1);

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
            <FavoriteIcon/>
           <CardImg>
            <img src={imgDemonstrative} alt="Imagem demonstrtivo"/>
            <h1 onClick={() => handleDetails(id)}>
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
                <Button title='Incluir'className="buttonAddDish"/>
            </div>
           </CardImg>
        </Container>
    )
};  