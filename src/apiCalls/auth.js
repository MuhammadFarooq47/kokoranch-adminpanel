import { publicRequest } from "../makeRequest";
import {login} from '../redux/userSlice';
export const Login =async(email,password,navigate,toast,dispatch)=>{
const obj={email,password};
const res= await publicRequest.post('/auth/login',obj);
if(res.status == 200){
    if(res.data.message.user.type == 'admin'){
        const user={...res.data.message.user,token:res.data.message.token};
        navigate('/admin-profile');
        toast.success('Login Successfully')
        dispatch(login(user));
    }
}
};
