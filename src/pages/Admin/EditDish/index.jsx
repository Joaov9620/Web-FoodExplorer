import {Header} from '../../../components/Header';
import {Footer} from '../../../components/Footer';
import {ButtonText} from '../../../components/ButtonText';
import {Section} from '../../../components/Section';
import {Input} from '../../../components/Input';
import {Ingredient} from '../../../components/Ingredient';

import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

import {Container, Content, InputsLabel, Frame01} from '../EditDish/styles';

export function EditDish(){
    return(
        <Container>
            <Header/>
            <Content>
                <ButtonText
                    icon={IoIosArrowBack}
                    title="Voltar"
                />
                <Section title="Editar prato">
                    <InputsLabel>
                        <Frame01>
                            <label htmlFor="pratoImg">
                                Imagem do prato
                                <div>
                                    <HiOutlineArrowUpTray/>
                                    <Input
                                        id="pratoImg"
                                        type="file"
                                    />
                                </div>
                            </label>
                                
                            <label htmlFor="pratoText">
                                Nome
                                <Input
                                    placeholder="Salada Ceasar"
                                    id= "pratoText"
                                    type="text"  
                                />
                            </label>

                            <label htmlFor="pratoCategoria">
                                Categoria
                                <select id='pratoCategoria'>
                                    <option value="Refeição">Refeição</option>
                                </select>
                            </label>
                        </Frame01>

                        <div className='Ingredients'>
                            <h2>Ingredientes</h2>
                            <Ingredient 
                                data={{
                                        ingredient:[
                                            {id:'1' , name:'Pão Naan'},
                                            {id:'2' , name:'Cacau'}
                                        ]
                                    }
                                }
                            />
                            
                        </div>

                        <div>
                            <textarea name="description"></textarea>
                        </div> 
                        
                        <div>
                            <button>
                                excluir
                            </button>

                            <button>
                                excluir
                            </button>
                        </div>
                    </InputsLabel>
                </Section>

            </Content>
            <Footer/>
        </Container>
    )
};