<!--
 * @Author: wangchunhua
 * @Date: 2019-07-29 17:15:46
 * @Description: 
 -->
<template>
  <div class="send_setting_cnt">
    <div class="setting_title">
      <span>商品列表</span>
    </div>
    <Row type="flex"
         justify="start">
      <Col span="6"
           style="padding-right:10px">
      <Button class="add_btn"
              @click="goodsAdd"><i class="iconfont icon-add"></i> 新增</Button></Col>
      <Col span="6">
      <Select v-model="getGoodsType"
              class="select_btn"
              filterable>
        <Option v-for="item in goodsType"
                :value="item.id"
                :key="item.id">{{ item.name }}</Option>
      </Select>
      </Col>
      <Col span="6">
      <Select v-model="getGoodsStatus"
              class="select_btn"
              filterable>
        <Option v-for="item in goodsStutus"
                :value="item.value"
                :key="item.value">{{ item.name}}</Option>
      </Select>
      </Col>
      <Col span="6">
       <Input v-model="goodsName" class="select_btn" @on-search="refreshData"  search enter-button placeholder="订单号" />
      <!-- <Input v-model="goodsName"
             class="select_btn">
      <Button slot="append"
              icon="ios-search"  @on-click="refreshData"></Button>
      </Input> -->
      </Col>
    </Row>
    <Row>
      <Col span="24">
      <Table :columns="columns"
             :data="freight"
             stripe></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="dataTotal"
                :current="dataCurrent"
                @on-change="changePage"></Page>
        </div>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import freightService from "../../../service/goods/goodsService";
export default {
  name: "goodsList",
  data () {
    return {
      columns: [
        {
          title: "商品ID",
          key: "spuId"
        },
        {
          title: "商品图片",
          key: "goodsUploadFiles",
          render: (h, params) => {
            return h("div", [
              h("img", {
                attrs: {
                  src:  params.row.goodsUploadFiles[0].fileUrl,
                  width: "120px"
                }
              })
            ]);
          }
        },
        {
          title: "商品名称",
          key: "goodsName"
        },
        {
          title: "商品分类",
          key: "categoryName"
        },
        {
          title: "商品排序",
          key: "salesActual"
        },
        {
          title: "商品状态",
          key: "goodsStatus"
        },
        {
          title: "添加时间",
          key: "createTime"
        },
        {
          title: "操作",
          key: "handle",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.edit(params.row.spuId,params.index);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.row.spuId,params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      freight: [],
      goodsType: [],
      getGoodsType: "",
      goodsStutus: [
        {
          value: 10,
          name: "上架"
        },
        {
          value: 20,
          name: "下架"
        }
      ],
      getGoodsStatus: "",
      goodsName: "",
      dataTotal: 0,
      dataCurrent: 1,//当前页
    };
  },
  created () {
    this.getData();
    freightService.getTypes().then(res => {
      //console.log(res.data);
      if (res.code === 0) {
        this.goodsType = res.data;
      }
      //console.log(this.goodsType);
    });
  },
  methods: {
    // 编辑模板
    edit (val) {
      this.$router.push({
          path:'/goodsUpdate',
          query:{
              id:val
          }
      });
    },
    // 删除模板
    remove (id,index) {
        let _this=this
        freightService.deteleGoods(id).then(res=>{
            if(res.code===0){
                this.getData();
            }
        })
    },
    //新增商品
    goodsAdd () {
      this.$router.push("goodsAdd");
    },
    changePage (item) { 
        this.dataCurrent=item;
        this.getData();
    },
    refreshData () {
        this.getData();
    },
    getData(){
    let _this=this;
    let params={};
    params.size=10;
    params.current=this.dataCurrent;
    params.goodsName=this.goodsName;
    params.categoryId=this.getGoodsType;
    params.goodsStatus=this.getGoodsStatus;
    freightService.getGoods(params).then(res => {
      _this.freight = res.data.records;
      _this.dataTotal = res.data.total;
    });
    }
  }
};
</script>
<style scoped>
.send_setting_cnt .setting_title {
  font-size: 14px;
  border-bottom: 1px solid #eef1f5;
  padding: 10px;
}
.send_setting_cnt .setting_title span {
  border-left: 3px solid#11a4ee;
  padding-left: 10px;
}
.send_setting_cnt .ivu-table-wrapper {
  border: none;
  margin-top: 20px;
}
.select_btn {
  width: 80%;
  margin: 20px 0px 0px 0px;
}
</style>


