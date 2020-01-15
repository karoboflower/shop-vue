import request from "../../share/axios";

class freightService {
  static singleinstance() {
    if (!freightService.instance) {
      freightService.instance = new freightService();
    }
    return freightService.instance
  }



  //新增规格
  addSpecGroups(params) {
    return new Promise(resolve => {
      request.post('/goodsspec/savespec', params).then(res => {
     
        resolve(res.data)
      })
    })
   
  }
  addSpecItem(params){
    return new Promise(resolve => {
        request.post(' /goodsspec/savespecvalue', params).then(res => {
           
          resolve(res.data)
        })
      })
  }
}

export default freightService.singleinstance();
