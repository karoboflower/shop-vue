import request from "../../share/axios";

class adminService {
    static singleinstance() {
        if (!adminService.instance) {
            adminService.instance = new adminService();
        }
        return adminService.instance
    }

    // 管理员列表
    getAdminList(){
        return new Promise(resolve=>{
            request.get('role/0',{}).then(res=>{
                resolve(res)
            })
        })
    }
}

export default adminService.singleinstance();