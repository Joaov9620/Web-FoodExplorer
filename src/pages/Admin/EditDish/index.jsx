
import Header from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ButtonText } from '../../../components/ButtonText';
import { Section } from '../../../components/Section';
import { LabelInput } from '../../../components/LabelInput';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';
import { Ingredient } from '../../../components/Ingredient';

// import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineArrowUpTray } from "react-icons/hi2";


import { IoIosArrowBack } from "react-icons/io";
import {Content, Group01, Group02,Group03,Group04} from "./styles";
import { Container } from '../../../styles/global';

export function EditDish() {
  return (
    <>  
      <Header/>
      <Container>
        <Content>
          <ButtonText icon={IoIosArrowBack} title="Voltar" />
          <Section title="Editar prato">
            <Group01>
                <label htmlFor="pratoImg">
                  Imagem do prato
                  <div>
                      <HiOutlineArrowUpTray />
                      <Input id="pratoImg" type="file" />
                  </div>
                </label>

                <div>
                  <LabelInput title="Nome" for="name"/>
                  <Input id="name"type="text"/>
                </div>

                <div>
                  <LabelInput title="Categoria" for="category"/>
                  <select id="category">
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesas">Sobremesas</option>
                    <option value="Bebidas">Bebidas</option>
                  </select>
                </div>
            </Group01>

            <Group02>
                <div>
                  <LabelInput title="Ingredientes"/>
                  <div>

                  </div>
                </div>

                <div>
                  <LabelInput title="Preço" for="Price"/>
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
                <LabelInput title="Descrição" for="textArea"/>
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

