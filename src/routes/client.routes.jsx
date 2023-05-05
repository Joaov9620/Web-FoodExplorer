import {Routes, Route} from 'react-router-dom';

import {Home} from '../pages/Client/Home';
import {Details} from '../pages/Client/Details';
import {SeeAll} from '../pages/Admin/SeeAll';

export function ClientRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    )
}