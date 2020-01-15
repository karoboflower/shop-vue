<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="分类名称" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入分类名称"></Input>
      </FormItem>
      <FormItem label="上级分类" prop="parentId">
        <Select v-model="formValidate.parentId" filterable>
          <Option v-for="item in typeList" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </FormItem>
      <FormItem label="分类图片" prop="imageId">
        <Button type="primary" @click="changeImg" v-model="formValidate.imageId">
          <i class="iconfont icon-add"></i> 选择图片
        </Button>
        <div v-show="formValidate.imageId||formValidate.imageId===0" style="padding:10px 0px;">
          <img :src="'/file/show/'+formValidate.imageId" width="120" height="140" />
        </div>
      </FormItem>

      <FormItem label="分类排序" prop="sort">
        <Input v-model="formValidate.sort" type="number" placeholder="请填写分类排序"></Input>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import freightService from "../../../service/goods/goodsService"
export default {
  data () {
    return {
      formValidate: {
        name: '',
        sort: '',
        parentId: '',
        imageId: '',
      },
      isShowModel: false,
      ruleValidate: {
        name: [
          { required: true, message: '分类名称不能为空', trigger: 'blur' }
        ],
        parentId: [
          { required: true, message: '上级分类不能为空' },
        ],
        imageId: [
          { required: true, message: '分类图片不能为空' }
        ],
        sort: [
          { required: true, message: '分类排序不能为空'}
        ]
      },
      typeList: [{
        id: 0,
        name: '顶级分类'
      }],
      photoShow: false,

    }
  },
  props: ["catchData", "content"], // 接收父组件的方法
  watch: {
    content () {
      this.editor.txt.html(this.content);
    }
  },
  methods: {
    handleSubmit (name) {
      let _this = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          let id = _this.$route.query ? _this.$route.query.id : '';
          let params = _this.formValidate;
          if (id) {
            params.categoryId=id;
            freightService.updateGoodsKind(params).then(res => {
              if (res.code === 0) {
                this.$Message.info("修改成功");
                _this.$router.push('/goodsKind')
              } else {
                this.$Message.info("修改失败");
                return false;
              }
            })
          } else {
            freightService.addGoodsKind(params).then(res => {
              if (res.code === 0) {
                this.$Message.info("添加成功");
                 _this.$router.push('/goodsKind')
              } else {
                this.$Message.info("添加失败");
                return false;
              }
            });
          }

        } else {
          this.$Message.info("添加失败");
          return false;
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    //上传图片
    changeImg (index) {
      let _this = this
      _this.isShowModel = true
      window.windowphotoGallery.show({
        isShowModel: _this.isShowModel,
        onConfirm: function (data) {
          _this.formValidate.imageId = data[0]
        }
      })
    },


  },
  created () {
    var _this = this

    freightService.getTypes().then(res => {
      if (res.code === 0) {
        _this.typeList = res.data
      }
      _this.typeList.splice(0, 0, {
        id: 0,
        name: '顶级分类'
      });
      var id = _this.$route.query ? _this.$route.query.id : '';
      if (id) {
        freightService.getSingleType(id).then(res => {
          if (res.code === 0) {
            for (var key in _this.formValidate) {
              _this.formValidate[key] = res.data[key];
            }

          }
        })
      }
    });

  },
}
</script>

<style scoped>
.header {
  padding: 10px 0px;
}
</style>