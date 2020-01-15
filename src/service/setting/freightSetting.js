import request from "../../share/axios";

class freightSetting {
    static singleinstance() {
        if (!freightSetting.instance) {
            freightSetting.instance = new freightSetting();
        }
        return freightSetting.instance
    }

    //获取运费模板
    getFreightList(){
        return new Promise(resolve=>{
            request.get('delivery/page',{}).then(res=>{
                resolve(res.data)
            })
        })
    }

    //获取详情
    getFreighDetail(deliveryId ){
        return new Promise(resolve=>{
            request.get('delivery/'+deliveryId,{              
            }).then(res=>{
                resolve(res.data)
            })
        }) 
    }
    //地区数据
    getCitys(id){
        return new Promise(resolve=>{
            request.get('region/reionListByParaent/'+id,{}).then(res=>{
                resolve(res.data)
            })
        }) 
    }
    //地区数据
    getChina(){
        return new Promise(resolve=>{
            request.get('region/reionListByParaent/'+0,{}).then(res=>{
                resolve(res.data)
            })
        }) 
    }
    //地区数据
    getP(id){
        return new Promise(resolve=>{
            request.get('region/'+id,{}).then(res=>{
                resolve(res.data)
            })
        }) 
    }
}

export default freightSetting.singleinstance();