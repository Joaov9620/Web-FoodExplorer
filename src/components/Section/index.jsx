import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function Section({title, children}) {
    const navigate = useNavigate();

    function handleSeeAll(){
        navigate('/seeAll')
    }

    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    ) 
};