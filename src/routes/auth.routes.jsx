import {Routes, Route} from 'react-router-dom';

import {SignIn} from '../pages/Log/SignIn';
import {SignUp} from '../pages/Log/SignUp';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
    )
}