import request from '../../share/axios'

import qs from 'query-string';
class homeService {
    static singleinstance() {
        if (!homeService.instance) {
            homeService.instance = new homeService();
        }
        return homeService.instance
    }

    //退出登录
    loginOut(){
        return new Promise(resolve=>{
            request.get('oauth/logout',{}).then(res=>{
                resolve(res.data);
            })
        })
    }
        //权限列表
        getPowerList (params) {
            return new Promise(resolve => {
                request.get('/sysperm/tree', params).then(res => {
                    resolve(res.data)
                })
            })
        }
    
}

export default homeService.singleinstance();