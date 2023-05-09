import {Content, Table} from './styles'
import { Container } from "../../../styles/global";
import { LayoutClient } from "../../../components/LayoutClient";

export function Orders(){
    return (
        <LayoutClient>
            <Container>
                <Content>
                    <h1>Pedidos</h1>
                    <Table>
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th>Detalhamento</th>
                            <th>Data e hora</th>
                        </tr>
                        <tr>
                            <td>Pendente</td>
                            <td>00004125</td>
                            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                            <td>20/05 às 18h00</td>
                        </tr>
                        <tr>
                            <td>Preparando</td>
                            <td>00004125</td>
                            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                            <td>20/05 às 18h00</td>
                        </tr>
                        <tr>
                            <td>Entregue</td>
                            <td>00004125</td>
                            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                            <td>20/05 às 18h00</td>
                        </tr>
                        <tr>
                            <td>Entregue</td>
                            <td>00004125</td>
                            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                            <td>20/05 às 18h00</td>
                        </tr>
                    </Table>
                </Content>
            </Container>
        </LayoutClient>
    )
};