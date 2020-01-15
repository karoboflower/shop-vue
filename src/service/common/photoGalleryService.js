import request from "../../share/axios";
import qs from 'query-string';

class photoGalleryService {
    static singleinstance() {
        if (!photoGalleryService.instance) {
            photoGalleryService.instance = new photoGalleryService();
        }
        return photoGalleryService.instance
    }
      //获取分组列表
    getPage(){
        return new Promise(resolve=>{
            request.get('filegroup/page',{}).then(res=>{
                resolve(res.data)
            })
        })
    }
    //新增分组
    addGroup(value){
        return new Promise(resolve=>{
            request.post('filegroup',{
                groupType: 'goods_img',
                groupName: value,
                sort: 1
              }).then(res=>{
                resolve(res.data)
            })
        })
    }
    //编辑分组
    editGroup(groupId,value){
        return new Promise(resolve=>{
            request.put('filegroup', {
                groupId: groupId,
                groupName: value,
            }).then(res=>{
                resolve(res.data)
            })
        })
    }

    //删除分组
    delGroup(groupId){
        return new Promise(resolve=>{
            request.delete('filegroup/'+groupId,).then(res=>{
                resolve(res.data)
            })
        })
    }

    //分组详情
    groupDetail(groupId){
    return new Promise(resolve=>{
        request.get('filegroup/'+groupId,).then(res=>{
            resolve(res.data)
        })
    })
    }
    //每个分组图片
    getImg(params){
        return new Promise(resolve=>{
            request.get('file/page',{
                params:params
            }).then(res=>{
                resolve(res.data)
            })
        })
    }

    //更换图片
    updataImg(groupId,file){
        return new Promise(resolve=>{
            request.post('file/upload',{
                groupId: groupId,
                file: file,
            }).then(res=>{
                resolve(res.data)
            })
        })  
    }
    //移动图片
    moveImg(val){
        return new Promise(resolve=>{
            request.put('file/movefile',val).then(res=>{
                resolve(res.data)
            })
        })  
    }
     //删除图片
     delImg(fileids){
        return new Promise(resolve=>{
            request.delete('file/deletes/'+fileids).then(res=>{
                resolve(res.data)
            })
        })  
    }

}

export default photoGalleryService.singleinstance();