import request from "../../share/axios";

class roleService {
    static singleinstance () {
        if (!roleService.instance) {
            roleService.instance = new roleService();
        }
        return roleService.instance
    }

    // 管理员列表
    getRoleList () {
        let userId=JSON.parse(localStorage.getItem('userdata')).userid;
        return new Promise(resolve => {
            request.get('role/'+userId, {}).then(res => {
                resolve(res)
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
    addPowerList (params) {
        return new Promise(resolve => {
            request.post('/sysperm', params).then(res => {
                resolve(res.data)
            })
        })
    }
    updatePowerList (params) {
        return new Promise(resolve => {
            request.put('/sysperm', params).then(res => {
                resolve(res.data)
            })
        })
    }
    deletePowerList (id) {
        return new Promise(resolve => {
            request.delete('/sysperm/'+id).then(res => {
                resolve(res.data)
            })
        })
    }
}

export default roleService.singleinstance();