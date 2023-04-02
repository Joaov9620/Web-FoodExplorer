import { ContentCard, Content} from './styles';
import { Container } from '../../../styles/global';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Section } from '../../../components/Section';
import { Card } from '../../../components/Card';

import imgDemonstrative from '../../../assets/img/pngegg 1.png';

export function Home(){
    return (
        <>
            <Header/>
                <Container>
                    <Content>
                        <div className='group'>
                            <div className='group1'>
                                <img src={imgDemonstrative} alt="Imagem demonstrativa" />
                            </div>
                            
                            <div className='group2'>
                                <h1>Sabores inigualáveis</h1>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div> 
                        </div>

                        <Section title="Refeições">
                            <ContentCard>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>   
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>              
                            </ContentCard>
                        </Section>

                        <Section title="Sobremesas">
                        <ContentCard>
                                <Card/>
                                <Card/>

                                
                            </ContentCard>
                        </Section>
                        
                        <Section title="Bebidas">
                        <ContentCard>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </ContentCard>
                        </Section>
                    </Content>
                </Container>
            <Footer/>
        </>
    )
};