import request from "../../share/axios";

class roleService {
    static singleinstance() {
        if (!roleService.instance) {
            roleService.instance = new roleService();
        }
        return roleService.instance
    }

    // 管理员列表
    getRoleList(){
        return new Promise(resolve=>{
            request.get('role/0',{}).then(res=>{
                resolve(res)
            })
        })
    }
}

export default roleService.singleinstance();