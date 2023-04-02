import {Container,Content, ContentCard} from './styles';

import {Header} from '../../../components/Header'
import { Footer } from '../../../components/Footer';
import { Section } from '../../../components/Section';
import { Card } from '../../../components/Card';

import imgDemonstrative from '../../../assets/img/pngegg 1.png';

export function Home(){
    return (
        <Container>
            <Header/>
            <Content>
                <img src={imgDemonstrative} alt="Imagem demonstrativa" />
                <div className='group'>
                    <h1>Sabores inigualáveis</h1>
                    <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div> 
                
                <Section title="Refeições">
                    <ContentCard>
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
            <Footer/>
        </Container>
    )
};