import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { IoIosArrowBack } from "react-icons/io";

import img from '../../assets/img/Mask group.png'

import { Container, Content, DishInformation } from "../Details/styles"; 

export function Details(){
    return (
        <Container>
            <Header/>
            <Content>
                <ButtonText 
                    icon={IoIosArrowBack}
                    title="Voltar"
                />
                <div>
                    <img 
                        src={img}
                        alt="Imagem de comida"
                    />
                    <DishInformation>
                        <h1>Salada Ravanello</h1>
                        <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</span>
                        <div>
                            <h5>Alface</h5>
                            <h5>cebola</h5>
                            <h5>pão naan</h5>
                            <h5>pepino</h5>
                            <h5>rabanete</h5>
                            <h5>tomate</h5>
                        </div>
                        <Button title="Editar prato"/>
                    </DishInformation>
                </div>
            </Content>
            <Footer/>
        </Container>
    )
};