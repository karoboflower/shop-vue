/*
 * @Author: wangchunhua
 * @Date: 2019-08-10 15:55:40
 * @Description: 
 */
import request from "../../share/axios";

class freightService {
  static singleinstance() {
    if (!freightService.instance) {
      freightService.instance = new freightService();
    }
    return freightService.instance
  }

  //获取订单列表
  getOrders(params) {
    return new Promise(resolve => {
      request.get('/order/queryOrderList', {params:params}).then(res => {
        resolve(res.data);
      })
    })
  }
  //发货
  sendGoods(code) {
    return new Promise(resolve => {
      request.put('/order/deliverGoodsOrder/'+code, null).then(res => {
        resolve(res.data);
      })
    })
  }
  //商品详细信息
  getGoodDetail(code) {
    return new Promise(resolve => {
      request.get('/order/queryOrderDetail/'+code, null).then(res => {
        resolve(res.data);
      })
    })
    }


}

export default freightService.singleinstance();
