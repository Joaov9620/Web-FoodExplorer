import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function Section({title, children}) {
    const navigate = useNavigate();

    function handleSeeAll(){
        navigate('/seeAll')
    }

    return(
        <Container>
            <div>
                <h2>{title}</h2>
                <a onClick={handleSeeAll}>Ver todos</a>
            </div>
            {children}
        </Container>
    ) 
};