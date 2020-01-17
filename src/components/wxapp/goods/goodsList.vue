<!--
 * @Author: wangchunhua
 * @Date: 2019-07-29 17:15:46
 * @Description: 
 -->
 
<template>
  <div class="send_setting_cnt">
    <Modal
      :value="goodsListShows"
      :width="width"
      title="商品列表"
      @on-ok="ok"
      @on-cancel="cancel"
      :z-index="10010"
    >
      <Row type="flex" justify="start" style="padding:10px 0px;">
        <Col span="6">
          <Select v-model="getGoodsType" class="select_btn" filterable>
            <Option v-for="item in goodsType" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
        </Col>
        <Col span="6">
          <Select v-model="getGoodsStatus" class="select_btn" filterable>
            <Option v-for="item in goodsStutus" :value="item.value" :key="item.value">{{ item.name}}</Option>
          </Select>
        </Col>
        <Col span="6">
          <Input v-model="goodsName" class="select_btn" on-click="refreshData">
            <Button slot="append" icon="ios-search"></Button>
          </Input>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Table :columns="columns" :data="freight" stripe ref="selection"></Table>
          <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
              <Page :total="dataTotal" :current="dataCurrent" @on-change="changePage"></Page>
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
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
          type: 'selection',
          width: 60,
          align: 'center'
        },
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
                  src: params.row.goodsUploadFiles[0].fileUrl,
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
      dataCurrent: 1,//当前页,
      width: '840',
    };
  },
  props: {
    goodsListShow: {
      type: Boolean,
      default: false,
    }

  },
  computed: {
    goodsListShows: function () {
      return this.goodsListShow;
    }
  },
  created () {
    this.getData();
    freightService.getTypes().then(res => {
      if (res.code === 0) {
        this.goodsType = res.data;
      }

    });
  },
  methods: {
    changePage (item) {
      this.dataCurrent = item;
      this.getData();
    },
    refreshData () {
      var goodsName = this.goodsName;
      var getGoodsType = this.getGoodsType;
      var getGoodsStatus = this.getGoodsStatus;
    },
    getData () {
      let _this = this;
      let params = {};
      params.size = 10;
      params.current = this.dataCurrent;
      freightService.getGoods(params).then(res => {
        _this.freight = res.data.records;
        _this.dataTotal = res.data.total;
      });
    },
    cancel () {
      this.goodsListShow = false;
      this.$emit('ok', this.goodsListShows, []);
    },
    ok () {
      this.goodsListShow = false;
      this.$emit('ok', this.goodsListShows, this.$refs.selection.data);
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


