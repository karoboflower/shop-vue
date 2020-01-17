<template>
  <div class="index_wrapper">
    <div class="item">
      <Form :model="formItem" ref="formValidate" :label-width="120" :rules="ruleValidate">
        <div class="header">
          <div class="item_title">基本信息</div>
        </div>
        <FormItem label="商品名称" prop="goodsName">
          <Input v-model="formItem.goodsName" placeholder="请输入商品名称"></Input>
        </FormItem>
        <FormItem label="商品分类" prop="categoryId">
          <Select v-model="formItem.categoryId" style="width:300px;">
            <Option v-for="item in typeList" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
          <a  @click="gotoPath('goodsKindSet')">去添加</a>
        </FormItem>
        <FormItem label="商品图片" prop="goodsUploadFiles">
          <Button type="primary" @click="changeImg">
            <i class="iconfont icon-add"></i> 选择图片
          </Button>
          <small>尺寸750x750像素以上，大小2M以下 (可拖拽图片调整显示顺序 ) </small>
          <br />
  <vuedraggable
            :list="formItem.goodsUploadFiles"
            class="dragArea"
            :options="{animation: 120, filter: '.drag__nomove' }"
          >
          <div v-for="(item,index) in formItem.goodsUploadFiles" :key="item.fileId" class="photos-list">
            <img :src="item.fileUrl" width="120" height="140" />
            <Icon type="ios-close-circle" @click="deletePhoto(index)" />
          </div>
  </vuedraggable>
        </FormItem>
        <div class="header">
          <div class="item_title">规格/库存</div>
        </div>
        <FormItem label="商品规格" prop="specType">
          <RadioGroup v-model="formItem.specType" @on-change="singleOrdouble">
            <Radio name="goodType" label="0" checked>单规格</Radio>
            <Radio name="goodType" label="1">多规格</Radio>
          </RadioGroup>
        </FormItem>

        <div v-show="formItem.specType==='0'">
          <FormItem label="商品编码" prop="goodsNo">
            <Input v-model="singlespecTypes.goodsNo" placeholder="请输入商品编码"></Input>
          </FormItem>
          <FormItem label="商品价格">
            <Input v-model="singlespecTypes.goodsPrice" type="number" placeholder="请输入商品价格"></Input>
          </FormItem>
          <FormItem label="商品划线价">
            <Input v-model="singlespecTypes.linePrice" type="number" placeholder="请输入商品花现价"></Input>
          </FormItem>
          <FormItem label="当前库存数量">
            <Input v-model="singlespecTypes.stockNum" type="number" placeholder="请输入当前库存数量"></Input>
          </FormItem>
          <FormItem label="商品重量(Kg)">
            <Input v-model="singlespecTypes.goodsWeight" type="number" placeholder="请输入商品重量(Kg)"></Input>
          </FormItem>
        </div>

        <goods-spec v-show="formItem.specType==='1'" @goodsSpecs="getGoodsSpecs"></goods-spec>
        <FormItem label="库存计算方式" prop="deductStockType">
          <RadioGroup v-model="formItem.deductStockType">
            <Radio name="deductStockType" label="10" checked>下单减库存</Radio>
            <Radio name="deductStockType" label="20">付款减库存</Radio>
          </RadioGroup>
        </FormItem>
        <div class="header">
          <div class="item_title">商品详情</div>
        </div>
        <FormItem label="商品详情">
          <wang-editor @getContent="getContent"></wang-editor>
        </FormItem>

        <div class="header"></div>
        <FormItem label="运费模板" prop="deliveryId">
          <Select v-model="formItem.deliveryId" style="width:300px;">
            <Option
              v-for="item in deliveryList"
              :value="item.deliveryId"
              :key="item.deliveryId"
            >{{ item.name }}</Option>
          </Select>
          <a href>去添加</a>
        </FormItem>
        <FormItem label="商品状态" prop="goodsStatus">
          <RadioGroup v-model="formItem.goodsStatus">
            <Radio name="goodsStatus" label="10" checked>上架</Radio>
            <Radio name="goodsStatus" label="20">下架</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="初始销量">
          <Input v-model="formItem.salesInitial" type="number" placeholder="请输入商品排序"></Input>
        </FormItem>
        <FormItem label="商品排序" prop="goodsSort">
          <Input v-model="formItem.goodsSort" type="number" placeholder="请输入商品排序"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import freightService from "../../../service/goods/goodsService"
import goodsSpec from '@/components/common/goodsSpec'
import vuedraggable from 'vuedraggable';
export default {
  name: "goodsAdd",
  data () {
    return {
      formItem: {
        goodsName: '',//商品名称
        categoryId: '',//商品分类
        goodsUploadFiles: [],//商品图片
        specType: '0',//商品规格
        deductStockType: '20',//库存计算方式
        deliveryId: '',
        goodsStatus: '10',
        goodsSort: '',
        salesInitial: '',
        content:'',
        salesActual:0,
      },
      singlespecTypes: {//单规格
        goodsNo: '',//
        goodsPrice: '',
        linePrice: '',
        stockNum: '',
        goodsWeight: '',
      },
      doubleSpecTypes:'',//多规格
      isShowModel: false,
      editor: null,
      editorContent: '',
      ruleValidate: {
        goodsName: [
          { required: true, message: '请输入商品名称' }
        ],
        categoryId: [
          { required: true, message: '请选择商品分类' }
        ],
        goodsUploadFiles: [
          { required: true, message: '请选择商品图片' }
        ],
        specType: [
          { required: true, message: '请选择商品规格' }
        ],
        deductStockType: [
          { required: true, message: '请选择库存计算方式' }
        ],
        deliveryId: [
          { required: true, message: '请选择运费模板' }
        ],
        goodsStatus: [
          { required: true, message: '请选择商品状态' }
        ],
        goodsSort: [
          { required: true, message: '请选择商品排序' }
        ]

      },
      typeList: [],
      deliveryList: [],
      goodsSpecs:''
    };
  },
  created () {
    var _this = this
    //获取商品分类
    freightService.getTypes().then(res => {
      if (res.code === 0) {
        _this.typeList = res.data;
      }
    });
    //获取运费模板
    freightService.getDelivery().then(res => {
      if (res.code === 0) {
        _this.deliveryList = res.data.records;
      }
    });
  },
  methods: {
    //上传图片
    changeImg (index) {
      let _this = this
      _this.isShowModel = true
      window.windowphotoGallery.show({
        isShowModel: _this.isShowModel,
        onConfirm: function (data) {
          _this.formItem.goodsUploadFiles = []
          for (let i = 0; i < data.length; i++) {
            _this.formItem.goodsUploadFiles.push({
              fileId: data[i].fileId,
              fileUrl:data[i].fileUrl
            })
          }

        }
      })
    },
    singleOrdouble (val) {
      this.formItem.specType = val
    },
    handleSubmit (name) {
      var _this = this
      debugger
      this.$refs[name].validate((valid) => {
        if (valid) {
          let params = _this.formItem;
          if(params.specType==="0"){
          params.goodsSkus=[];
          params.goodsSkus.push(_this.singlespecTypes)
          }else{
              params.goodsSkus=_this.doubleSpecTypes
              params.goodsSpecs=_this.goodsSpecs
          }
          freightService.addGoods(params).then(res => {
            if (res.code === 0) {
                setTimeout(function(){
              _this.$Message.info("添加成功");
              _this.$router.push('goodsList');
                },1000)
             
            } else {
              _this.$Message.info("添加失败");
              return false;
            }
          });
        } else {
          _this.$Message.info("添加失败");
          return false;
        }
      })
    },
    deletePhoto (index) {
      this.formItem.goodsUploadFiles.splice(index, 1)
    },
    getGoodsSpecs(goodsSkus,goodsSpecs){
        this.doubleSpecTypes=goodsSkus;
        this.goodsSpecs=goodsSpecs
    },
    getContent(content){
        this.formItem.content=content;
    },
    gotoPath(name){
        this.$router.push(name)
    }
  },
  components: {    goodsSpec,   vuedraggable
  }
};
</script>
<style scoped>
.index_wrapper .item {
  background: #fff;
  margin-bottom: 30px;
  padding: 20px;
}
.index_wrapper .item .item_title {
  border-left: 3px solid#11a4ee;
  padding-left: 10px;
  font-size: 15px;
}
.index_wrapper .item .header .item_title ::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 14px;
  background: #00aeff;
  top: 6px;
  left: -12px;
}
.header {
  padding: 10px;
  margin: 20px;
  border-bottom: 1px solid #eef1f5;
}
.photos-list {
  width: 120px;
  height: 120px;
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  position: relative;
}
.photos-list .ivu-icon {
  color: #ababab;
  position: absolute;
  font-size: 24px;
  right: -5px;
  top: -5px;
}
</style>