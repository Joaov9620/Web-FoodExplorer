import { useState } from 'react';

import Header from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ButtonText } from '../../../components/ButtonText';
import { Section } from '../../../components/Section';
import { LabelInput } from '../../../components/LabelInput';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';
import { IngredientItem } from '../../../components/IngredientItem';

import { HiOutlineArrowUpTray } from "react-icons/hi2";


import { IoIosArrowBack } from "react-icons/io";
import {Content, Group01,Group02,Group03,Group04} from "./styles";
import { Container } from '../../../styles/global';

export function EditDish() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>  
      <Header/>
      <Container>
        <Content>
          <ButtonText icon={IoIosArrowBack} title="Voltar" />
          <Section title="Editar prato">
            <Group01>
              <div>
                <LabelInput title="Imagem do prato" htmlFor="pratoImg" />
                <div>
                  <input id="pratoImg" type="file" onChange={handleFileInput}/>
                  <label htmlFor="pratoImg">
                    <ButtonText icon={HiOutlineArrowUpTray} />
                    Selecione a imagem
                  </label>
                </div>
              </div>

              <div>
                <LabelInput title="Nome" htmlFor="name" />
                <Input id="name" type="text" />
              </div>

              <div>
                <LabelInput title="Categoria" htmlFor="category" />
                <select id="category">
                  <option value="Refeição">Refeição</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </div>
            </Group01>

            <Group02>
                <div>
                  <LabelInput title="Ingredientes" htmlFor="ingredient"/>
                  <div className='ingredientItem' >       
                    <IngredientItem id="ingredient" value="Pão Naan"/>
                    <IngredientItem id="ingredient" isNew placeholder="Adicionar"/>
                  </div>
                </div>

                <div>
                  <LabelInput title="Preço" htmlFor="Price"/>
                  <Input 
                    id="Price"
                    type="number"
                    step="0.01"
                    min="0"
                    max="10000"
                    required
                  />
                </div>
            </Group02>

            <Group03>
                <LabelInput title="Descrição" htmlFor="textArea"/>
                <TextArea id="textArea"/>
            </Group03>

            <Group04>
                <Button title="Excluir prato"/>
                <Button title="Salvar alterações"/>
            </Group04>
          </Section>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

