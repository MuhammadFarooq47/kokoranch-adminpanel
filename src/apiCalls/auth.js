import { publicRequest } from "../makeRequest";
export const login =async(email,password,navigate)=>{
// const obj={email,password};
// const res= await publicRequest.post('/auth/login',obj);
// if(res.status == 200){
    navigate('/admin-profile')
// }
};
