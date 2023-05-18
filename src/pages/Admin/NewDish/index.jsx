import {Content, Group01,Group02,Group03,Group04} from "./styles";
import { Container } from '../../../styles/global';

import { Layout } from "../../../components/Layout";
import { ButtonText } from '../../../components/ButtonText';
import { Section } from '../../../components/Section';
import { LabelInput } from '../../../components/LabelInput';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';
import { IngredientItem } from '../../../components/IngredientItem';

import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";

import {api} from '../../../services/api';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NewDish() {
  const navigate  = useNavigate();
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Refeições");
  const [ingredientItem, setItemIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ img, setImg] = useState(null);
  const [isUploadingImg, setIsUploadingImg] = useState(false);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function handleAddIngredient(){
    if(!ingredientItem){
      return alert("Para adicionar digite um ingrediente!");
    }
    setIngredients(prevState => [...prevState, ingredientItem]);
    setItemIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredientItem => ingredientItem !== deleted))
  }

  async function validarCampos(){
    if(!name){
      return alert("Nome obrigatório!")
    }

    if(!price){
      return alert("Preço obrigatório!")
    }

    if(ingredients.length == 0){
      return alert("Adicione no mínimo um ingrediente!")
    }

    if(ingredientItem){
      return alert("Adicione o ingrediente que está no campo ou remova para prosseguir!")
    }
  }

   async function createImg(){
    try {
      if(selectedFile){
        setIsUploadingImg(true);
        const formData = new FormData();
        formData.append('fileDish', selectedFile);
        
        const response = await api.post('/upload', formData);
        const image = response.data.imagePath;
        setImg(image);
      }else{
        setImg(null);
      }
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
    }finally{
      setIsUploadingImg(false);
    }
  }

  async function handleNewDish(){  
    await validarCampos();  
    await createImg();
    console.log(img);
    try {
      await api.post("/dish", {
        name,
        category,
        ingredients,
        price,
        description,
        img: img
      });

      //img indo nulo para o backend

      return alert("Prato criado com sucesso!");
      navigate("/");
    } catch(error){
      if(error.response){
          alert(error.response.data.message);
      }else{
          alert("Erro ai criar o prato!")
      }
    }
  }

  function handleBack(){
    navigate(-1);
  }

  return (
    <Layout>
      <Container>
        <Content>
          <ButtonText icon={IoIosArrowBack} title="Voltar" onClick={handleBack} />

          <Section title="Adicionar prato">
            <Group01 className='group01 groups'>
              <div >
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
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Ex.: Salada Ceasar"
                  onChange={e=>setName(e.target.value)}
                  className="inputColors"
                />
              </div>

              <div>
                <LabelInput title="Categoria" htmlFor="category" />
                <select id="category" value={category} onChange={e=>setCategory(e.target.value)}>
                  <option value="Refeições">Refeições</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </div>
            </Group01>

            <Group02 className='group02 groups'>
                <div>
                  <LabelInput title="Ingredientes" htmlFor="ingredient"/>
                  <div className='ingredientItem' >      
                    {
                      ingredients.map((item, index) =>(
                        <IngredientItem
                          key={String(index)}
                          value={item}
                          onClick={()=> handleRemoveIngredient(item)}
                        />
                      ))
                    }

                    <IngredientItem 
                      id="ingredient" 
                      isNew 
                      placeholder="Adicionar"
                      onChange={e=>setItemIngredient(e.target.value)}
                      value={ingredientItem}
                      onClick={handleAddIngredient}
                    />
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
                    placeholder="R$ 00,00"
                    onChange={e => setPrice(e.target.value)}
                    className="inputColors"
                  />
                </div>
            </Group02>

            <Group03 className='groups'>
              <div>
                <LabelInput
                  title="Descrição" htmlFor="textArea"/>
                <TextArea 
                  id="textArea" 
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange={e=>setDescription(e.target.value)} 
                />
              </div>
            </Group03>

            <Group04 className='group04 groups'>
                <Button title="Adicionar prato" onClick={handleNewDish} Loading={isUploadingImg}/>
            </Group04>
          </Section>
        </Content>
      </Container>
    </Layout>
  );
};