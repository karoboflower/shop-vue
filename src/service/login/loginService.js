import request from '../../share/axios'

import qs from 'query-string';
class loginService {
    static singleinstance() {
        if (!loginService.instance) {
            loginService.instance = new loginService();
        }
        return loginService.instance
    }

    //验证码
    getCode(){
        return new Promise(resolve=>{
            request.get('oauth/code',{}).then(res=>{
                resolve(res.data);
            })
        })
    }
    getCity(){
          
            return new Promise(resolve=>{
                request.get('/shop/netinfo/sxps.mtlyy.com',null,).then(res=>{
                    resolve(res.data);
                })
            })
    }
    //登录  formData传参
    login(userName,password,code,ctoken){
        return new Promise(resolve=>{
            request.post('oauth/pcLogin',
            qs.stringify({
                password:password,
                username:userName,
                ctoken:ctoken,
                code:code
            })).then(res=>{
                resolve(res.data);
            })
        })
    }
    //获取当前商户的定位

}

export default loginService.singleinstance();