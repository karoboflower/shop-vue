import request from "../../share/axios";

class wxappService {
    static singleinstance() {
        if (!wxappService.instance) {
            wxappService.instance = new wxappService();
        }
        return wxappService.instance
    }

    getPage(){
        return new Promise(resolve=>{
            request.get('/wxapppage/page',{
                params:{
                    size:10,
                    current:1
                }
            }).then(res=>{
                resolve(res.data)
            })
        })
    }
    //获取页面详情
    itemPage(pageId){
        return new Promise(resolve=>{
            request.get('/wxapppage/'+pageId,{}).then(res=>{
                resolve(res.data)
            })
        }) 
    }
    //添加页面
    addPage(params){
        return new Promise(resolve=>{
            request.post('/wxapppage',params).then(res=>{
                resolve(res.data)
            })
        }) 
    }
    //删除页面
    deletePage(id){
        return new Promise(resolve=>{
            request.delete('/wxapppage/'+id,null).then(res=>{
                resolve(res.data)
            })
        }) 
    }
    editPage(params){
        return new Promise(resolve => {
            request.put('/wxapppage', params).then(res => {
              resolve(res.data)
            })
          })
    }
}

export default wxappService.singleinstance();