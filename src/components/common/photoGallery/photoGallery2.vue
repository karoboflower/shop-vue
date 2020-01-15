<template>
  <div class="gallery_wrapper">
    <div class="gallery_box" ref="box"></div>
    <div class="gallery_cnt">
      <div class="d_btw title">
        <div>图片库</div>
        <i class="iconfont icon-cross" @click="closeGrllery"></i>
      </div>
      <div class="d_start">
        <!-- 左边 -->
        <div class="left">
          <ul>
            <li
              v-for="(item,index) of GroupList"
              :key="item.groupId"
              @click="changeTab(index,item.groupId)"
              @click.stop
              @mouseenter="enter(index)"
              @mouseleave="leave(index)"
              :class="['d_btw',activeI==index ?'active':'']"
            >
              <i
                class="iconfont icon-edit"
                v-if="editShowI==index"
                @click="editGroup(item.groupName,1,item.groupId)"
              ></i>

              <span>{{item.groupName}}</span>
              <i
                class="iconfont icon-exit"
                v-if="editShowI==index"
                @click="delGroup(item.groupId)"
              ></i>
            </li>
          </ul>
          <p @click="addMenu(0)">新增分组</p>
        </div>
        <!-- 右边 -->
        <div class="right">
          <div class="d_btw">
            <div style="padding: 5px 15px;">
              <span class="move_img" @click="moveBoxShow">
                <span>移动至</span>
                <i class="iconfont icon-shixinjiantou-xiangshang-copy"></i>
                <ul v-if="moveShow">
                  <li
                    v-for="item of GroupList"
                    :key="item.groupId"
                    @click="moveImgHandle(item.groupId)"
                  >{{item.groupName}}</li>
                </ul>
                <div class="single" v-if="moveShow"></div>
              </span>
              <span class="del_img" @click="delImgHandle">
                <i class="iconfont icon-del"></i>
                <span>删除</span>
              </span>
            </div>
            <div class="up_img" @click="upImgHandle">
              <i class="iconfont icon-add"></i>
              <span>上传图片</span>
              <input type="file" accept="image/*" @change="handleFile($event)" class="hiddenInput" />
            </div>
          </div>
          <ul class="img_box d_start">
            <li
              v-for="(item,index) of imgList"
              :key="item.fileId"
              @click="choseImg(index,item.fileId)"
            >
              <img :src="'/file/show/'+item.fileId" />
              <div v-if="del==index" v-for="(del,i) of delImg" :key="i" class="active_del">
                <i class="iconfont icon-dagou"></i>
              </div>
            </li>
          </ul>
          <!-- <div class="pages">
            <i class="iconfont icon-zuofanye"></i>
            <i class="iconfont icon-youfanye"></i>
          </div>-->

          <div class="pages">
            <Button type="primary" @click="sureGrllery">确定</Button>
            <Button @click="closeGrllery">取消</Button>
          </div>
        </div>
      </div>
    </div>
    <!-- 编辑和新增分组弹框 -->
    <div class="add_box" v-if="addMenushow">
      <div class="header">
        <span>请输入新分组名称</span>
        <i class="iconfont icon-cross icon" @click="cancel"></i>
      </div>
      <div class="add_cnt">
        <Input placeholder="请输入新分组名称" v-model="inputVal" />
        <div class="btn">
          <Button type="primary" @click="ok">确定</Button>
          <Button @click="cancel">取消</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import photoGalleryService from "../../../service/common/photoGalleryService";
export default {
  name: "photoGallery",
  data() {
    return {
      GroupList: [], //分组列表
      moveShow: false, //点击“移动至”显示/隐藏
      fileIdList: [], //选中图片id
      imgList: [],
      editId: 0, //当前编辑id
      statue: 0, //判断编辑/新增
      editShowI: 0, //编辑和删除图标显示/隐藏
      delImg: [],
      inputVal: "",
      addMenushow: false,
      activeI: 0
    };
  },

  created() {
    this.getList();
    this.getData();
  },

  methods: {
    //获取分组列表
    getList() {
      this.GroupList = [];
      photoGalleryService.getPage().then(res => {
        if (res.code == 0) {
          this.GroupList = res.data.records;
        } else {
          this.$Message.info("登录超时请重新登录");
          this.$router.push("/login");
        }
        var data = {
          createTime: "2019-06-11 19:50:18",
          delFlag: "0",
          goodsUploadFiles: null,
          groupId: "",
          groupName: "全部",
          groupType: "goods_img",
          shopId: 1,
          sort: 1,
          updateTime: "2019-06-11 19:50:18"
        };
        this.GroupList.splice(0, 0, data);
      });
    },
    //初始化数据
    getData() {
      var _this = this;
      this.imgList = [];
      var params = { current: 1, size: "32" };
      this.getGroupImgApi(params);
    },
    //上传图片
    upImgHandle() {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleFile(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      let data = new FormData();
      data.append("file", file);
      photoGalleryService.updataImg(46, data).then(res => {});
    },

    //编辑和删除图标显示/隐藏
    enter(index) {
      this.editShowI = index;
    },
    leave(index) {
      this.editShowI = -1;
    },
    //编辑分组
    editGroup(val, statue, groupId) {
      this.$refs.box.style.zIndex = 30;
      this.inputVal = val;
      this.editId = groupId;
      this.addMenushow = true;
      this.statue = statue;
    },
    //删除分组
    delGroup(groupId) {
      this.$Modal.confirm({
        title: "友情提示",
        content: "<p>确定要删除吗？</p>",
        onOk: () => {
          photoGalleryService.delGroup(groupId).then(res => {
            this.getList();
            this.getData();
            this.activeI=0;
          });
        }
      });
    },
    //新增分组
    addMenu(statue) {
      this.statue = statue;
      this.$refs.box.style.zIndex = 30;
      this.inputVal = "";
      this.addMenushow = true;
    },
    //确定
    sureGrllery() {
      if (this.fileIdList.length > 1) {
        this.$Message.info("不能选择多个");
      } else if (this.fileIdList.length < 1) {
        this.$Message.info("不能为空");
      } else {
        var url = "/file/show/" + this.fileIdList[0];
        this.$emit("sure", url);
      }
    },
    //关闭弹框
    closeGrllery() {
      this.$emit("close");
    },
    //删除图片
    delImgHandle() {
      var _this = this;
      var fileids = "";
      this.fileIdList.forEach(item => {
        fileids = item + "," + fileids;
      });
      this.$Modal.confirm({
        title: "友情提示",
        content: "<p>确定删除所选文件？</p>",
        onOk: () => {
          _this.delImgApi(fileids);
        }
      });
    },
    //显示移动图片至分组选项
    moveBoxShow() {
      this.moveShow = !this.moveShow;
    },
    //移动图片
    moveImgHandle(groupId) {
      var params = [];
      this.fileIdList.forEach(item => {
        var data = {
          fileId: item,
          groupId: groupId
        };
        params.push(data);
      });
      this.$Modal.confirm({
        title: "友情提示",
        content: "<p>确定移动所选文件？</p>",
        onOk: () => {
          this.moveImgApi(params);
        }
      });
    },
    //选中图片
    choseImg(index, fileId) {
      if (this.delImg.indexOf(index) < 0) {
        this.delImg.push(index);
        this.fileIdList.push(fileId);
      } else {
        var val = this.delImg.indexOf(index);
        this.delImg.splice(val, 1);
        this.fileIdList.splice(val, 1);
      }
    },
    changeTab(index, groupId) {
      this.activeI = index;
      this.delImg = [];
      this.fileIdList = [];
      var params = { groupId: groupId, current: 1, size: "32" };
      this.getGroupImgApi(params);
    },
    //确认
    ok() {
      if (this.statue == 0) {
        if (this.inputVal != "") {
          this.addGroupApi(this.inputVal);
        } else {
          this.$Message.info("不能为空");
        }
      } else {
        this.editGroupApi();
      }
    },
    //取消
    cancel() {
      this.addMenushow = false;
      this.$refs.box.style.zIndex = 12;
    },
    //新增分组
    addGroupApi(val) {
      photoGalleryService.addGroup(val).then(res => {
        if (res.code == 0) {
          if (res.code == 0) {
            this.getList();
            this.addMenushow = false;
            this.$refs.box.style.zIndex = 12;
          }
        } else {
          this.$Message.info("登录超时请重新登录");
          this.$router.push("/login");
        }
      });
    },
    //编辑分组
    editGroupApi() {
      photoGalleryService.editGroup(this.editId, this.inputVal).then(res => {
        if (res.code == 0) {
          if (res.code == 0) {
            this.getList();
            this.addMenushow = false;
            this.$refs.box.style.zIndex = 12;
          }
        } else {
          this.$Message.info("登录超时请重新登录");
          this.$router.push("/login");
        }
      });
    },
    //获取分组图片内容
    getGroupImgApi(params) {
      photoGalleryService.getImg(params).then(res => {
        if (res.code == 0) {
          this.imgList = res.data.records;
          this.delImg = [];
          this.fileIdList = [];
        } else {
          this.$Message.info("登录超时请重新登录");
          this.$router.push("/login");
        }
      });
    },
    //移动选中图片
    moveImgApi(params) {
      var groupId = this.GroupList[this.activeI].groupId;
      var data = { groupId: groupId, current: 1, size: "32" };
      photoGalleryService.moveImg(params).then(res => {
        if (res.code == 0) {
          this.getGroupImgApi(data);
        }
      });
    },
    //删除选中图片
    delImgApi(fileids) {
      var _this = this;
      var groupId = this.GroupList[this.activeI].groupId;
      var params = { groupId: groupId, current: 1, size: "32" };
      photoGalleryService.delImg(fileids).then(res => {
        if (res.code == 0) {
          _this.getGroupImgApi(params);
        }
      });
    }
  }
};
</script>

<style scoped>
.gallery_wrapper .gallery_box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  background-color: rgb(0, 0, 0);
  opacity: 0.3;
  width: 100%;
  height: 100vh;
}
.gallery_wrapper .gallery_cnt {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  width: 840px;
  background-color: #fff;
  z-index: 20;
  padding: 20px 5px;
  border-radius: 2px;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
  height: 600px;
}
.gallery_wrapper .gallery_cnt .left {
  width: 18%;
}
.gallery_wrapper .gallery_cnt .left ul {
  max-height: 460px;
  margin-bottom: 10px;
  overflow-y: auto;
}
.gallery_wrapper .gallery_cnt .left ul li {
  color: #595961;
  font-size: 14px;
  padding: 10px 20px;
  margin-bottom: 3px;
  align-items: center;
}
.gallery_wrapper .gallery_cnt .left ul li span {
  padding: 0 5px;
}
.gallery_wrapper .gallery_cnt .left ul li:hover {
  background: rgba(48, 145, 242, 0.1);
  border-radius: 6px;
  color: #0e90d2;
}
.gallery_wrapper .gallery_cnt .left .active {
  background: rgba(48, 145, 242, 0.1);
  border-radius: 6px;
  color: #0e90d2;
}
.gallery_wrapper .gallery_cnt .left p {
  padding: 10px 20px;
  font-size: 14px;
  padding: 10px 20px;
  color: #0e90d2;
}
.gallery_wrapper .gallery_cnt .right {
  width: 78%;
  height: 600px;
  overflow-y: auto;
}
.gallery_wrapper .gallery_cnt .right .del_img {
  color: #e7505a;
  background-color: #fff;
  border: 1px solid #e7505a;
  padding: 5px;
  font-size: 12px;
}
.gallery_wrapper .gallery_cnt .right .del_img i {
  font-size: 10px;
}

.gallery_wrapper .gallery_cnt .right .move_img i {
  font-size: 10px;
}
.gallery_wrapper .gallery_cnt .right .move_img {
  color: #fff;
  background-color: #2589ff;
  border: 1px solid #2589ff;
  padding: 5px;
  font-size: 12px;
  margin-right: 15px;
  position: relative;
}
.gallery_wrapper .gallery_cnt .right .move_img ul {
  position: absolute;
  background: #fff;
  z-index: 40;
  top: 37px;
  border: 1px solid #ddd;
  color: #333;
  width: 150px;
  padding: 10px 20px;
}
.gallery_wrapper .gallery_cnt .right .move_img ul li {
  font-size: 14px;
  padding: 5px 10px;
}

.gallery_wrapper .gallery_cnt .right .move_img .single {
  content: "";
  position: absolute;
  top: 27px;
  left: 21px;
  z-index: 50;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent #ccc;
}
.gallery_wrapper .gallery_cnt .right .move_img .single:after {
  content: "";
  position: absolute;
  top: 1px;
  left: -10px;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent #fff;
}
.gallery_wrapper .gallery_cnt .right .up_img {
  color: #2589ff;
  background-color: #fff;
  border: 1px solid #2589ff;
  border-radius: 5px;
  padding: 3px 10px;
  font-size: 12px;
  margin-right: 15px;
}
.gallery_wrapper .gallery_cnt .right .hiddenInput {
  display: none;
}
.gallery_wrapper .gallery_cnt .right .img_box {
  flex-wrap: wrap;
  margin: 10px 0 10px 10px;
  height: 420px;
  overflow-y: auto;
}
.gallery_wrapper .gallery_cnt .right .img_box li {
  cursor: pointer;
  height: 150px;
  border-radius: 6px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-right: 10px;
  margin-bottom: 10px;
  width: calc(25% - 10px);
  position: relative;
}
.gallery_wrapper .gallery_cnt .right .img_box li .active_del {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  border-radius: 6px;
  width: 100%;
  height: 100%;
}
.gallery_wrapper .gallery_cnt .right .img_box li .active_del i {
  font-size: 90px;
  color: #fff;
}
.gallery_wrapper .gallery_cnt .right .img_box li:hover {
  border: 1px solid #2589ff;
}
.gallery_wrapper .gallery_cnt .right .img_box li img {
  width: 90%;
  height: 100%;
  margin: 0 5%;
}
.gallery_wrapper .gallery_cnt .right .pages {
  text-align: right;
  margin: 5px 20px;
}
.gallery_wrapper .gallery_cnt .right .pages i {
  color: #23abf0;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
}

.gallery_wrapper .gallery_cnt .title {
  border: none;
  padding: 5px 20px 10px 20px;
}

.gallery_wrapper .add_box {
  border-radius: 5px;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  z-index: 40;
  width: 250px;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}
.gallery_wrapper .add_box .header {
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  background-color: #f8f8f8;
  border-radius: 2px 2px 0 0;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;
}
.gallery_wrapper .add_box .header .icon {
  position: absolute;
  right: 10px;
}
.gallery_wrapper .add_box .add_cnt {
  padding: 10px 15px;
}
.gallery_wrapper .add_box .add_cnt .btn {
  text-align: right;
}
.gallery_wrapper .add_box .add_cnt button {
  margin: 10px 0;
}
</style>


