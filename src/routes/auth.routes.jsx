import {Routes, Route} from 'react-router-dom';

import {SignIn} from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
    )
}