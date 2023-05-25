import {Container, CardImg, FavoriteIcon} from '../CardClient/styles';

import { Button } from '../Button';

import iconToDecrease from '../../assets/toDecrease.svg';
import iconToAdd from '../../assets/toAdd.svg';
import imgDishPlaceholder from '../../assets/img/dishImg.jpg';

import { useState, useEffect } from 'react';
import {api} from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/CartContext';

export function CardClient({data = {}, handleDetails, ...rest}){
    const [isFavorite, setIsFavorite] = useState(data.isFavorite);
    const [count, setCount] = useState(1);
    
    const {user} = useAuth();
    const {cartItems, addToCart} = useCart();

    const fileImgDish = data.img? `${api.defaults.baseURL}/files/${data.img}` :imgDishPlaceholder;

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

    useEffect(() => {
        localStorage.setItem("dishSelect", JSON.stringify(cartItems));
    }, [cartItems]);

    return(
        <Container {...rest}>
            <FavoriteIcon
                onClick={handleFavoriteClick}
                className={isFavorite ? 'favoriteActive' : ''}
            />
           <CardImg>
            <img className='imgDish' src={fileImgDish} alt="Imagem demonstrtivo"/>
            <h1 onClick={() => handleDetails(data.id)}>
            {data.name.length > 10 ? 
                (<p>{data.name.slice(0, 8)+'...'} &gt;</p>) 
                : 
                (<p>{data.name.slice(0, 20)+'...'} &gt;</p>)
            }
            </h1>
            <span className='descriptionDish'>{data.description ? data.description.slice(0,20)+'...' : 'Sem descrição'}</span>
            <h4>R$ {data.price? data.price.toFixed(2) : '0,00' }</h4>
            <div className='buttonsCard'>
                <div>
                    <button onClick={handleToDecrease}>
                        <img src={iconToDecrease} alt="Icone de diminuir" />
                    </button>
                    <span>{count < 10 ? `0${count}` : count}</span>
                    <button onClick={handleAdd}>
                        <img src={iconToAdd} alt="Icone de adicionar" />
                    </button>
                </div>
                <Button title='Incluir' className="buttonAddDish" onClick={() => addToCart(data)}/>
            </div>
           </CardImg>
        </Container>
    )
};  