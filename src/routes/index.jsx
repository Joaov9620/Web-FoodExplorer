import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from "./admin.routes";
import { ClientRoutes } from "./client.routes";
import {AuthRoutes} from './auth.routes';

import {useAuth} from '../hooks/auth';

export function Routes(){
    const {user} = useAuth();
    console.log(user)

    // if(user || user.type === 'employee'){
    //    return (
    //     <BrowserRouter>
    //         <AdminRoutes />
    //     </BrowserRouter>
    //    )
    // }else if(user || user.type === 'client'){
    //     return (
    //         <BrowserRouter>
    //             <ClientRoutes/>
    //         </BrowserRouter>
    //     )
    // }else{
    //     return(
    //         <BrowserRouter>
    //             <AuthRoutes/>
    //         </BrowserRouter>
    //     )
    // }

    
    return(
        <BrowserRouter>
           {user?<AdminRoutes />:<AuthRoutes/>}
      </BrowserRouter>
    )
    
};