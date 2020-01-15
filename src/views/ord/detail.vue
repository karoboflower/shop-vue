<template>
  <div class="index_wrapper">
    <div class="am-u-sm-12">
      <ul :class="classData">
        <li>
          <span>下单时间</span>
          <div class="tip">{{datas.createTime}}</div>
        </li>
        <li>
          <span>付款</span>
          <div class="tip">{{datas.payTime}}</div>
        </li>
        <li>
          <span>发货</span>
          <div class="tip">{{datas.deliveryTime}}</div>
        </li>
        <li>
          <span>收货</span>
          <div class="tip">{{datas.receiptTime}}</div>
        </li>
        <li>
          <span>完成</span>
          <div class="tip">{{datas.receiptTime}}</div>
        </li>
      </ul>
    </div>
    <div class="header">
      <div class="item_title">基本信息</div>
    </div>
    <Table :columns="baseColumns" :data="baseData"></Table>
    <div class="header">
      <div class="item_title">商品信息</div>
    </div>
    <Table :columns="goodColumns" :data="goodData"></Table>
    <div style="text-align: right;font-size: 14px;padding: 10px">总计金额：{{totals}}</div>
    <div class="header">
      <div class="item_title">收货信息</div>
    </div>
    <Table :columns="takeColumns" :data="takeData"></Table>
  </div>
</template>
<script>
import freightService from "../../service/ord/ordService";
export default {
  name: "goodsDetail",
  data () {
    return {
    
      baseColumns: [

        {
          title: '订单号',
          key: 'orderNo'
        },
        {
          title: '实付款',
          key: 'totalPrice',
          render: (h, params) => {
            return h("div", [
              h("p", params.row.totalPrice), h("p", "(含运费：" + params.row.expressPrice + ")")])
          }
        },
        {
          title: '买家',
          key: 'userId',
          render: (h, params) => {
            return h("div", [
              h("p", params.row.userId), h("p", "(用户id：" + params.row.userId + ")")])
          }
        },
        {
          title: '交易状态',
          key: 'payStatus',
          render: (h, params) => {
            return h("div", [
              h("p", [h("span", "付款状态："),
              h("span", {
                "class": {
                  "am-badge": true,
                  "am-badge-success": (params.row.receiptStatus === 29 || params.row.receiptStatus === 20) ? true : false
                }
              }, params.row.payStatus === 10 ? "待付款" : params.row.payStatus === 15 ? "支付中" : params.row.payStatus === 20 ? "已付款" : params.row.payStatus === 25 ? "退款中" : params.row.payStatus === 26 ? "退款异常" : params.row.payStatus === 27 ? "退款失败" : params.row.payStatus === 28 ? "退款驳回" : params.row.payStatus === 29 ? "退款成功" : "未知状态")
              ]), h("p", [h("span", "发货状态："),
              h("span", {
                "class": {
                  "am-badge": true,
                  "am-badge-success": params.row.deliveryStatus === 30 ? true : false
                }
              }, params.row.deliveryStatus === 30 ? "未发货" : "已发货")
              ]), h("p", [h("span", "收货状态："),
              h("span", {
                "class": {
                  "am-badge": true,
                  "am-badge-success": params.row.receiptStatus === 50 ? true : false

                }
              }, params.row.receiptStatus === 50 ? "待收货" : "已收货")
              ])])
          }
        }



      ],
      goodColumns: [{
        title: '商品名称',
        key: 'goodsName'
      }, {
        title: '商品编码',
        key: ''
      }, {
        title: '重量',
        key: 'goodsWeight'
      }, {
        title: '单价',
        key: 'goodsPrice'
      }, {
        title: '购买数量',
        key: 'totalNum'
      }, {
        title: '商品总价',
        key: 'totalPrice'
      }],
      takeColumns: [{
        title: '收货人',
        key: 'name'
      }, {
        title: '收货电话',
        key: 'phone'
      }, {
        title: '收货地址',
        key: 'detail'
      }],
      baseData: [],
      goodData: [],
      takeData: [],
      totals: 0,
      datas: '',
    }
  },
  methods: {
    getInfo (code) {
      let _this = this
      freightService.getGoodDetail(code).then(res => {
        if (res.code === 0) {
          _this.datas = res.data;
          _this.baseData = [res.data];
          _this.goodData = res.data.orderItemVoList;
          _this.takeData = [res.data.orderAddressVo];
          _this.totals = res.data.totalPrice;
        }
      });
    },
    getPayStatus (code) {
      if (code === 10) {
        return "待付款";
      } else if (code === 15) {
        return "支付中";
      } else if (code === 20) {
        return "已付款";
      } else if (code === 25) {
        return "退款中";
      } else if (code === 26) {
        return "退款异常";
      } else if (code === 27) {
        return "退款失败";
      } else if (code === 28) {
        return "退款驳回";
      } else if (code === 29) {
        return "退款成功";
      } else {
        return "未知状态";
      }
    },
    getSendStatus (code) {
      if (code === 30) {
        return "未发货";
      } else {
        return "已发货";
      }
    },
    getTakeStatus (code) {
      if (code === 50) {
        return "待收货";
      } else {
        return "已收货";
      }
    }
  },
  created: function () {
    var id = this.$route.query.id;
    this.getInfo(id);
  },
  computed: {
  classData: function () {
        return {
          'order-detail-progress': true,
          'progress-2': (this.datas.payStatus === 20 && this.datas.orderStatus === 10) ? true : false,
          'progress-3': (this.datas.orderStatus === 30 && this.datas.deliveryStatus === 40) ? true : false,
          'progress-5': (this.datas.orderStatus === 50 && this.datas.receiptStatus === 60) ? true : false,
          'progress-1': (this.datas.createTime) ? true : false
        }
      },
  }
}
</script>

<style >
.index_wrapper {
  background: #fff;
  margin-bottom: 30px;
  padding: 20px;
}
.index_wrapper .item_title {
  border-left: 3px solid#11a4ee;
  padding-left: 10px;
  font-size: 15px;
}
.index_wrapper .header .item_title::before {
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
  padding-left: 0px;
  margin-left: 0px;
}

.index_wrapper .am-badge {
  display: inline-block;
  min-width: 10px;
  padding: 0.25em 0.625em;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  background-color: #999;
  border-radius: 0;
}
.index_wrapper .am-badge-success {
  background-color: #5eb95e;
}
.index_wrapper .ivu-table-cell p {
  margin: 0;
  padding: 0.1rem 0;
}
</style>