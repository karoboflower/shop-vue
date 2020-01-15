import request from "../../share/axios";

class freightService {
  static singleinstance() {
    if (!freightService.instance) {
      freightService.instance = new freightService();
    }
    return freightService.instance
  }

  //获取商品的分类列表
  getTypes(params) {
    return new Promise(resolve => {
      request.get('/goodscategory/tree', params).then(res => {

        resolve(res.data);


      })
    })
  }

  //删除商品分类
  deleteTypes(id, newId) {
    return new Promise(resolve => {
      request.delete('/goodscategory/delete?delId=' + id + '&newId=' + newId, null).then(res => {

        resolve(res.data);


      })
    })
  }
  //获取单个分类的信息
  getSingleType(id) {
    return new Promise(resolve => {
      request.get('/goodscategory/' + id, null).then(res => {
        resolve(res.data);


      })
    })
  }

  //获取商品列表

  getGoods(params) {
    return new Promise(resolve => {
      request.get('/goodsspu/page', {
        params: params
      }).then(res => {
        // console.log('test',res)
        resolve(res.data)

      })
    })

  }

  //获取运费模板
  getDelivery() {
    let params = {
      'current': '0',
      size: '100'
    }
    return new Promise(resolve => {
      request.get('/delivery/page', params).then(res => {
        resolve(res.data)
      })
    })

  }
  //新增商品分类
  addGoodsKind(params) {
    return new Promise(resolve => {
      request.post('/goodscategory', params).then(res => {

        resolve(res.data)
      })
    })
  }
    //修改商品分类
    updateGoodsKind(params) {
        return new Promise(resolve => {
          request.put('/goodscategory', params).then(res => {
            resolve(res.data)
          })
        })
      }
  //新增商品
  addGoods(params) {
    return new Promise(resolve => {
      request.post('/goodsspu', params).then(res => {
        resolve(res.data)
      })
    })

  }
  //删除商品
  deteleGoods(id) {
    return new Promise(resolve => {
      request.delete('/goodsspu/' + id, null).then(res => {
        resolve(res.data)
      })
    })
  }
  //获取商品的详情
  getGoodsDetail(id) {
    return new Promise(resolve => {
      request.get('/goodsspu/goodsDetail/' + id, null).then(res => {
        resolve(res.data)
      })
    })
  }
  //修改商品
  updateGoods(params) {
    return new Promise(resolve => {
      request.put('/goodsspu', params).then(res => {
        resolve(res.data)
      })
    })

  }


}

export default freightService.singleinstance();
