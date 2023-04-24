import { Content } from "./styles";
import { Container } from "../../../styles/global";

import Header from "../../../components/Header";
import {Footer} from "../../../components/Footer";
import {Card} from "../../../components/Card";
import {LabelInput} from "../../../components/LabelInput";

import { api } from "../../../services/api";


//refazer a logica do codigo de filtrar no backend

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function SeeAll(){
    const navigate = useNavigate();

    const [dish, setDish] = useState([]);
    const [category, setCategory] = useState("Refeição");
    const [filter, setFilter] = useState("Filtrar");

    const meals = [];
    const desserts = [];
    const drinks = [];

    if(dish){
        for (let i = 0; i < dish.length; i++) {
            if (dish[i].category === "Refeições") {
              meals.push(dish[i]);
            } else if (dish[i].category === "Sobremesas") {
              desserts.push(dish[i]);
            } else if (dish[i].category === "Bebidas") {
              drinks.push(dish[i]);
            }
        }
    }

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(()=>{
        async function fetchDish(){
            const response = await api.get("/dish");
            const dishData = (response.data);

            setDish(dishData);
        }
        fetchDish();
    },[]);
    

    return(
        <>
            <Header/>
            <Container>
                <Content>
                    <div>
                        <div className="filter">
                            <div>
                                <LabelInput title="Categoria" htmlFor="category" />
                                <select id="category" value={category} onChange={e=>setCategory(e.target.value)}>
                                    <option value="Refeição">Refeição</option>
                                    <option value="Sobremesas">Sobremesas</option>
                                    <option value="Bebidas">Bebidas</option>
                                </select>
                            </div>

                            <div>
                                <LabelInput title="Categoria" htmlFor="category" />
                                <select id="category" value={filter} onChange={e=>setFilter(e.target.value)}>
                                    <option value="Mais vendidos">Mais vendidos</option>
                                    <option value="Menor preço">Menor preço</option>
                                </select>
                            </div>
                        </div>

                        <div className="cards">
                            {
                                desserts.map(dish=>(
                                    <Card
                                        data={dish}
                                        key={String(dish.id)}
                                        onClick={() => handleDetails(dish.id)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </Content>
            </Container>
            <Footer/>
        </>
    )
};