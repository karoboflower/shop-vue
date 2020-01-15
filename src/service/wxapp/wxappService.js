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
            request.get('wxapppage/page',{
                params:{
                    size:10,
                    current:1
                }
            }).then(res=>{
                resolve(res.data)
            })
        })
    }
    //编辑页面
    editPage(pageId){
        return new Promise(resolve=>{
            request.get('wxapppage/'+pageId,{}).then(res=>{
                resolve(res.data)
            })
        }) 
    }
}

export default wxappService.singleinstance();