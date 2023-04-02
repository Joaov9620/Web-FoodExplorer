import { Container } from "./styles";

export function ButtonText({title,icon:Icon,...rest}){
    return(
        <Container
            type="button"
            {...rest}
        >
            <div>
                {Icon && <Icon size={20}/>}
            </div>
            {title}
        </Container>
    )
};