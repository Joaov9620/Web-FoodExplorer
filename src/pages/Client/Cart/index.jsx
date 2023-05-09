import {Content} from './styles'
import { Container } from "../../../styles/global";
import { LayoutClient } from "../../../components/LayoutClient";

import img from '../../../assets/img/Mask group-1.png'
import qrcode from '../../../assets/qrcode.svg'

export function Cart(){
    return (
        <LayoutClient>
            <Container>
                <Content>
                   <div>
                        <h1>Meu pedido</h1>
                        <div className='groups'>
                            <div className='group01'>
                                <img src={img} alt="" />
                                <div className='group02'>
                                    <div className='group03'>
                                        <h5>1 x  Salada Radish</h5>
                                        <span>R$ 25,97</span>
                                    </div>
                                    <span>Excluir</span>
                                </div>
                            </div>
                            
                            <div className='group01'>
                                <img src={img} alt="" />
                                <div className='group02'>
                                    <div className='group03'>
                                        <h5>1 x  Salada Radish</h5>
                                        <span>R$ 25,97</span>
                                    </div>
                                    <span>Excluir</span>
                                </div>
                            </div>

                            <div className='group01'>
                                <img src={img} alt="" />
                                <div className='group02'>
                                    <div className='group03'>
                                        <h5>1 x  Salada Radish</h5>
                                        <span>R$ 25,97</span>
                                    </div>
                                    <span>Excluir</span>
                                </div>
                            </div>

                            <div className='group01'>
                                <img src={img} alt="" />
                                <div className='group02'>
                                    <div className='group03'>
                                        <h5>1 x  Salada Radish</h5>
                                        <span>R$ 25,97</span>
                                    </div>
                                    <span>Excluir</span>
                                </div>
                            </div>
                        </div>
                        
                   </div>
                   <div>
                        <h1>Pagamento</h1>
                        <div className='group04'>
                            <div className='group05'>
                                <span>PIX</span>
                                <span>Crédito</span>
                            </div>
                            <div>
                                <img src={qrcode} alt="" />
                            </div>
                        </div>
                   </div>
                </Content>
            </Container>
        </LayoutClient>
    )
};