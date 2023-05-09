import {Routes, Route} from 'react-router-dom';

import {Home} from '../pages/Client/Home';
import {Details} from '../pages/Client/Details';
import {Orders} from '../pages/Client/Orders';
import {Cart} from '../pages/Client/Cart';
import {SeeAll} from '../pages/Admin/SeeAll';

export function ClientRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}