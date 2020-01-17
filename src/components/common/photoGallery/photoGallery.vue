<template>
  <div style="position: relative;" class="photo-gallery">
    <Modal :value="ShowModel" :width="width" title="图片库" @on-ok="ok" @on-cancel="cancel">
      <div class="content">
        <div class="left">
          <ul>
            <li @click="changeTab(-1,'') " :class="[activeI==-1 ?'active':'']">全部</li>
            <li @click="changeTab(-2,'1')" :class="[activeI==-2 ?'active':'']">未分组</li>
            <li
              v-for="(item,index) of GroupList"
              :key="item.groupId"
              @click="changeTab(index,item.groupId)"
              @click.stop
              @mouseenter="enter(index)"
              @mouseleave="leave(index)"
              :class="[activeI==index ?'active':'']"
            >
              <Icon
                type="md-create"
                class="edit-icon"
                v-show="editShowI==index"
                @click="editGroup('update',item.groupName)"
              />
              <span>{{item.groupName}}</span>
              <Icon
                type="ios-close-circle"
                class="delete-icon"
                v-show="editShowI==index"
                @click="delGroup(item.groupId)"
              />
              <!-- <i
                class="iconfont icon-add"
              
              ></i>-->
            </li>
            <li @click="editGroup('new')">新增分组</li>
          </ul>
        </div>
        <div class="right">
          <div class="right-header">
            <Dropdown
              trigger="click"
              placement="bottom-start"
              type="primary"
              @on-click="moveImgHandle"
            >
              <Button type="primary">
                移动至
                <Icon type="md-arrow-dropdown" />
              </Button>

              <DropdownMenu slot="list" v-for="item of GroupList" :key="item.groupId">
                <DropdownItem :name="item.groupId">{{item.groupName}}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button type="error" @click="delImgHandle" ghost>
              <Icon type="ios-trash" />删除
            </Button>
            <Upload
              style="float:right"
              accept="image/*"
              :show-upload-list="showUploadList"
              :name="uploadName"
              :data="uploadData"
              :on-success="handleSuccess"
              :action="uploadUrl"
              :headers="uploadheaders"
            >
              <Button icon="ios-add">上传图片</Button>
            </Upload>
          </div>
          <div class="right-file">
            <ul>
              <li v-for="(item,index) of imgList" :key="item.fileId" @click="chooseImg(index,item)">
                <img :src="item.fileUrl" width="120" height="140" />
                <div class="select-mask" v-show="item.checked">
                  <i class="iconfont icon-dagou"></i>
                </div>
              </li>
            </ul>
            <div style="float:right">
              <Page :total="dataTotal" :current="dataCurrent" @on-change="changePage"></Page>
            </div>
          </div>
        </div>
      </div>
      <Spin fix v-show="isLoad">
        <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
        <div>加载中</div>
      </Spin>
    </Modal>
    <Modal v-model="setGroup" :title="groupName" @on-ok="editGroupOk" width="300">
      <Input v-model="currentGroupName" placeholder />
    </Modal>
  </div>
</template>

<script>
import photoGalleryService from "../../../service/common/photoGalleryService";
export default {
  name: "photoGallery",
  data () {
    return {
      GroupList: [], //分组列表
      fileIdList: [], //选中分组的图片列表
      uploadUrl: '/file/upload',//上传图片地址
      width: '840',//弹出框的宽度
      uploadName: 'file',//上传图片的file的 name
      uploadheaders: {//上传携带的表头
        Authorization: window.localStorage.getItem('logindata'),
        TENANTID: window.localStorage.getItem('TENANTID')
      },
      showUploadList: false,//取消显示已上传的列表
      chooseImgs: [],//已经选中的文件列表
      activeI: -1,//当前选中的分组
      setGroup: false,
      groupName: '请输入新分组名称',
      currentGroupName: '',
      setGroupType: '',
      imgList: [],
      editId: '', //当前编辑id
      editShowI: -1, //编辑和删除图标显示/隐藏
      isLoad: false,
      dataTotal: 0,
      dataCurrent: 1,
    };
  },
  props: {
    showModel: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ok () {
        let map=new Map();
        let params=[];
      if (this.chooseImgs && this.chooseImgs.length) {
          for(let i=0;i<this.imgList.length;i++){
              map.set(this.imgList[i].fileId,this.imgList[i].fileUrl);
          }
          for(let i=0;i<this.chooseImgs.length;i++){
              if(map.has(this.chooseImgs[i])){
                  params.push({
                      fileId:this.chooseImgs[i],
                      fileUrl:map.get(this.chooseImgs[i])
                  })
              }
          }
        this.$emit('sure', params)
      } else {
        this.$Message.info("请选择图片");
        return false;
      }

    },
    cancel () {
      this.$emit('close', '');
    },
    //获取分组列表
    getList () {
      var _this = this
      photoGalleryService.getPage().then(res => {
        if (res.code == 0) {
          _this.GroupList = res.data.records;
        } else {
          _this.$Message.info("获取数据失败");
          return false;
        }
      });
    },
    getData () {
      var params = { current: this.dataCurrent, size: "32" };
      this.getGroupImgApi(params);
    },
    //获取分组图片内容
    getGroupImgApi (params) {
      var _this = this
      _this.isLoad = true
      photoGalleryService.getImg(params).then(res => {
        _this.isLoad = false
        if (res.code == 0) {
          _this.dataTotal = res.data.total;
          _this.imgList = res.data.records;
          _this.imgList.forEach(function (item, index) {
            _this.$set(item, 'checked', false)
          })
        } else {
          this.$Message.info("获取内容失败");
          return false;
        }
      });
    },
    //上传图片成功的时候
    handleSuccess (data) {

      if (data.code === 0) {
        this.imgList.push({
          fileId: data.data.fileId,
          groupId: data.data.groupId,
          checked: false,
          fileUrl:data.data.fileUrl
        })

      } else {
        this.$Message.info("上传失败");
      }
    },
    chooseImg (index, item) {
      let _this = this
      item.checked = !item.checked
      if (item.checked) {
        _this.chooseImgs.push(item.fileId)
      } else {
        for (let i = 0; i < _this.chooseImgs.length; i++) {
          if (_this.chooseImgs[i] === item.fileId) {
            _this.chooseImgs.splice(i, 1)
          }
        }
      }
    },
    //编辑和删除图标显示/隐藏
    enter (index) {
      this.editShowI = index;
    },
    leave (index) {
      this.editShowI = -1;
    },
    changeTab (index, groupId) {
      this.activeI = index;
      if (!groupId) {
        this.editId = '1';
      } else {
        this.editId = groupId
      }
      var params = { groupId: groupId, current: this.dataCurrent, size: "32" };
      this.getGroupImgApi(params);
    },

    //移动图片
    moveImgHandle (groupId) {
      let params = [];
      if (this.chooseImgs && this.chooseImgs.length) {
        this.chooseImgs.forEach((item, index) => {
          params.push({
            groupId: groupId,
            fileId: item
          })
        })
        let data = { groupId: this.editId, current: this.dataCurrent, size: "32" };
        this.$Modal.confirm({
          title: "友情提示",
          content: "<p>确定移动所选文件？</p>",
          onOk: () => {
            photoGalleryService.moveImg(params).then(res => {
              if (res.code == 0) {
                this.$Message.info("移动成功");
                this.getGroupImgApi(data);
              }
            });
          }
        });
      } else {
        this.$Message.info("请选择需要移动的图片");
      }

    },
    //删除图片
    delImgHandle () {
      let _this = this;
      let fileids = _this.chooseImgs.join(',');
      let params = { groupId: _this.editId, current: this.dataCurrent, size: "32" };
      this.$Modal.confirm({
        title: "友情提示",
        content: "<p>确定删除所选文件？</p>",
        onOk: () => {
          photoGalleryService.delImg(fileids).then(res => {
            if (res.code == 0) {
              _this.$Message.info("删除成功");
              _this.getGroupImgApi(params);
            }
          });

        }
      });
    },
    editGroup (type, name) {
      this.setGroup = true
      this.setGroupType = type

      if (type === "update") {
        this.groupName = "修改分组名称"
        this.currentGroupName = name
      } else {
        this.groupName = "请输入新分组名称"
      }
    },
    editGroupOk () {
      if (!this.currentGroupName) {
        this.$Message.info("请填写名称");
      } else {
        if (this.setGroupType === "new") {
          this.addGroupApi(this.currentGroupName)
        } else {
          this.editGroupApi(this.currentGroupName)
        }
      }
    },
    //新增分组
    addGroupApi (val) {
      let _this = this;
      _this.isLoad = true;
      photoGalleryService.addGroup(val).then(res => {
        _this.isLoad = false;
        if (res.code == 0) {

          _this.getList();
          _this.currentGroupName = ''

        } else {
          this.$Message.info("登录超时请重新登录");
          this.$router.push("/login");
        }
      });
    },
    //编辑分组
    editGroupApi () {
      let _this = this;
      _this.isLoad = true;
      photoGalleryService.editGroup(this.editId, this.currentGroupName).then(res => {
        _this.isLoad = false
        if (res.code == 0) {
          _this.getList();
          _this.currentGroupName = ''
        } else {
          this.$Message.info("登录超时请重新登录");
          this.$router.push("/login");
        }
      });
    },
    //删除分组
    delGroup (groupId) {
      let _this = this
      this.$Modal.confirm({
        title: "友情提示",
        content: "<p>确定要删除吗？</p>",
        onOk: () => {
          photoGalleryService.delGroup(groupId).then(res => {
            _this.getList();
            _this.getData();
            _this.activeI = -1;
          });
        }
      });
    },
    //改变页码
    changePage (item) {
      this.dataCurrent = item;
      var params = { current: this.dataCurrent, size: "32" };
      this.getGroupImgApi(params);
    },
  },
  computed: {
    ShowModel: function () {
      return this.isShowModel
    },
    uploadData: function () {
      return {
        groupId: this.editId ? this.editId : '1'
      }
    }
  },
  created () {
    this.getList();
    this.getData();
  },



};
</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.content .left {
  width: 12%;
}
.content .right {
  width: 86%;
  padding: 10px 1%;
}
.content .left li {
  position: relative;
  margin: 10px 0;
  padding: 10px 20px;
  vertical-align: middle;
}
.content .left li {
  cursor: pointer;
}
.content .left li:hover {
  background: rgba(48, 145, 242, 0.1);
  color: #0e90d2;
}
.content .left li.active {
  background: rgba(48, 145, 242, 0.1);
  border-radius: 6px;
  color: #0e90d2;
}
.content .left li .iconfont {
  position: absolute;
}
.content .edit-icon,
.content .delete-icon {
  color: #0e90d2;
  position: absolute;
  top: 15px;
}
.content .edit-icon {
  left: 0;
}
.content .delete-icon {
  right: 2px;
}
.right-file {
  overflow: auto;
  height: 380px;
}
.right-file ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 5px 0px;
}
.right-file ul li {
  margin: 10px;
  position: relative;
  border-radius: 6px;
  transition: All 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  height: 142px;
}
.right-file ul li:hover {
  border: 1px solid #16bce2;
}
.right-file ul li .select-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}
.select-mask i {
  font-size: 70px;
  color: #fff;
}
</style>


