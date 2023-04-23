import {Content, Group01,Group02,Group03,Group04} from "./styles";
import { Container } from '../../../styles/global';

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

import { useState, useEffect } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';

import { api } from "../../../services/api";


export function EditDish() {
  const navigate  = useNavigate();
  const params = useParams();

  const [data, setData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState(data.name);
  const [category, setCategory] = useState(data.category);
  const [ingredientItem, setItemIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(data.price);
  const [description, setDescription] = useState(data.description);


  useEffect(()=>{
    async function fetchDish(){
      const response = await api.get(`/dish/${params.id}`);
      setData(response.data);
    }
    fetchDish();
  },[params.id]);
  
  function handleBack(){
    navigate(-1);
  }

  async function handleDeletedDish(){
    await api.delete(`/dish/${params.id}`);	
    alert("Prato excluído com sucesso!")
    navigate(-1);
  }

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

  async function handleNewDish(){
    if(!name){
      return alert("Nome obrigatório!")
    }

    if(!price){
      return alert("Preço obrigatório!")
    }

    if(ingredientItem){
      return alert("Adicione a tag que está no campo ou remova para prosseguir!")
    }

    await api.post("/dish",{
      name,
      category,
      ingredients,
      price,
      description
    })

    alert("Prato criado com sucesso!");
    navigate("/");
  }

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>  
      <Header/>
      <Container>
        {
          data &&
          <Content>
            <ButtonText icon={IoIosArrowBack} title="Voltar" onClick={handleBack}/>
            <Section title="Editar prato">
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div>
                  <LabelInput title="Categoria" htmlFor="category" />
                  <select id="category" value={category} onChange={e=>setCategory(e.target.value)}>
                    <option value="Refeição">Refeição</option>
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
                      // data.ingredients &&    
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
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                    />
                  </div>
              </Group02>

              <Group03 className='groups'>
                <div>
                  <LabelInput title="Descrição" htmlFor="textArea"/>
                  <TextArea 
                    id="textArea"  
                    value={description}
                    onChange={e=>setDescription(e.target.value)}/>
                </div>
              </Group03>

              <Group04 className='group04 groups'>
                  <Button title="Excluir prato" onClick={handleDeletedDish}/>
                  <Button title="Salvar alterações"/>
              </Group04>
            </Section>
          </Content>
        }
      </Container>
      <Footer />
    </>
  );
};

