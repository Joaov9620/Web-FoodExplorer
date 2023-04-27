import {Routes, Route} from 'react-router-dom';

import {Home} from '../pages/Admin/Home';
import {SeeAll} from '../pages/Admin/SeeAll';
import {EditDish} from '../pages/Admin/EditDish';
import {NewDish} from '../pages/Admin/NewDish';
import {Details} from '../pages/Admin/Details';

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/seeAll" element={<SeeAll/>}/>
            <Route path="/newDish" element={<NewDish/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/editDish/:id" element={<EditDish/>}/>
        </Routes>
    )
}