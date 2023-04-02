import {Container} from '../Ingredient/styles';

export function Ingredient({data, ...rest}){
    return(
        <Container {...rest}>
              {
                    data.ingredients &&

                    <div>
                        {
                            data.ingredients.map(ingredient =>{
                                return 
                                <span key={ingredient.id}>
                                    {
                                        ingredient.name
                                    }
                                </span>      
                            })
                         }
                    </div>
                }
        </Container>
    )
}