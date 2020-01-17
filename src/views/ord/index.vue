<!--
 * @Author: wangchunhua
 * @Date: 2019-08-10 14:17:56
 * @Description: 全部订单列表
 -->
<template>
  <div class="send_setting_cnt">
    <div class="setting_title">
      <span>全部订单列表</span>
    </div>
    <Row type="flex" justify="end" style="padding:10px 0px;">
      <Col span="4">
        <DatePicker type="date" placeholder="请选择起始日期" style="width: 200px"></DatePicker>
      </Col>
      <Col span="4">
        <DatePicker type="date" placeholder="请选择截止日期" style="width: 200px"></DatePicker>
      </Col>
      <Col span="4">
        <Input
          v-model="orderNo"
          class="select_btn"
          @on-search="refreshData"
          search
          enter-button
          placeholder="订单号"
        />
      </Col>
    </Row>
    <Row>
      <table width="100%" class="am-table am-table-centered am-text-nowrap am-margin-bottom-xs">
        <thead>
          <tr>
            <th width="30%" class="goods-detail">商品信息</th>
            <th width="10%">单价/数量</th>
            <th width="15%">实付款</th>
            <th>买家</th>
            <th>交易状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="item in orderList" :key="item.orderNo">
          <tr class="order-empty">
            <td colspan="6"></td>
          </tr>
          <tr>
            <td class="am-text-middle am-text-left" colspan="6" style="text-align:left;">
              <span class="am-margin-right-lg">{{item.createTime}}</span>
              <span class="am-margin-right-lg">订单号：{{item.orderNo}}</span>
            </td>
          </tr>
          <tr v-for="(da,index) in item.orderItemVoList" :key="da.orderId">
            <td width="30%" style="text-align:left;">
              <div class="goods-image">
                <img class="show-image" :src="da.fileUrl" width="120" height="120" />
              </div>
              <div class="goods-info">
                <p class="goods-title">{{da.goodsName}}</p>
                <p class="goods-spec am-link-muted">{{da.goodsSpecName}}</p>
              </div>
            </td>
            <td class="am-text-middle" width="10%">
              <p>￥{{da.goodsPrice}}</p>
              <p>×{{da.totalNum}}</p>
            </td>

            <td
              class="am-text-middle"
              :rowspan="getRowspan(item.orderItemVoList.length)"
              width="15%"
              v-if="index===0"
            >
              <p>￥{{da.totalPrice}}</p>
              <p class="am-link-muted">(含运费：￥{{da.expressPrice}})</p>
            </td>
            <td
              class="am-text-middle"
              :rowspan="getRowspan(item.orderItemVoList.length)"
              width="15%"
              v-if="index===0"
            >
              <p>{{item.userId}}</p>
              <p class="am-link-muted">(用户id：{{item.userId}})</p>
            </td>
            <td
              class="am-text-middle"
              :rowspan="getRowspan(item.orderItemVoList.length)"
              width="15%"
              v-if="index===0"
            >
              <p>
                付款状态：
                <span v-if="item.payStatus===10" class="am-badge">待付款</span>
                <span v-else-if="item.payStatus===15" class="am-badge">支付中</span>
                <span v-else-if="item.payStatus===20" class="am-badge am-badge-success">已付款</span>
                <span v-else-if="item.payStatus===25" class="am-badge">退款中</span>
                <span v-else-if="item.payStatus===26" class="am-badge">退款异常</span>
                <span v-else-if="item.payStatus===27" class="am-badge">退款失败</span>
                <span v-else-if="item.payStatus===28" class="am-badge">退款驳回</span>
                <span v-else-if="item.payStatus===29" class="am-badge">退款成功</span>
                <span v-else class="am-badge">未知状态</span>
              </p>
              <p>
                发货状态：
                <span v-if="item.deliveryStatus===30" class="am-badge">未发货</span>
                <span v-if="item.deliveryStatus!==30" class="am-badge am-badge-success">已发货</span>
              </p>
              <p>
                收货状态：
                <span v-if="item.receiptStatus===50" class="am-badge">未发货</span>
                <span v-if="item.receiptStatus!==50" class="am-badge am-badge-success">已发货</span>
              </p>
            </td>
            <td
              class="am-text-middle"
              :rowspan="getRowspan(item.orderItemVoList.length)"
              width="15%"
              v-if="index===0"
            >
              <div class="tpl-table-black-operation">
                <a class="tpl-table-black-operation-green" @click="gotoDetail(item.orderNo)">订单详情</a>
                <br />
                <br />
                <a
                  v-if="item.orderStatus===30"
                  class="tpl-table-b lack-operation-green delivery"
                  href
                  @click="sendGoods(item.orderNo)"
                >发货</a>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-if="orderList.length<1">
          <tr>
            <td colspan="6">暂无数据</td>
          </tr>
        </tbody>
      </table>
      <div style="float: right;margin-top:10px;">
        <Page :total="dataTotal" :current="dataCurrent" @on-change="changePage"></Page>
      </div>
    </Row>
  </div>
</template>
<script>
import freightService from "../../service/ord/ordService";
export default {
  name: "",
  data () {
    return {
      orderNo: '',
      orderList: [],
      dataTotal: 0,
      dataCurrent: 1,
    }
  },
  created () {
    let type = this.$route.query.type;
    let params = {};
    //10未付款，20已付款，30未发货，40已发货，50待收货，60已收货，70取消
    if (type === "cancel") {
      //取消发货
      params.orderStatus = 70;
      //等待发货
    } else if (type === "wait") {
      params.orderStatus = 50;
      //等待收货
    } else if (type === "take") {
      params.orderStatus = 40;
      //代付款
    } else if (type === "pay") {
      params.orderStatus = 10;
      //已付款
    } else if (type === "cancel") {
      params.orderStatus = 70;
      //已取消
    } else if (type === "finish") {
      //已完成
      params.orderStatus = 60;
    } else {
      params.orderStatus = 50;
    }
    params.size = 10;
    params.current = this.dataCurrent;
    if (this.orderNo) {
      params.orderNo = this.orderNo;
    }

    this.getInfo(params);

  },
  methods: {
    getInfo (params) {
      freightService.getOrders(params).then(res => {
        if (res.code === 0) {
          this.orderList = res.data.records;
        }
      });
    },
    getImage: function (item) {
      if (item) {
        return "/file/show/" + item
      } else {
        return '';
      }

    },
    getRowspan: function (item) {
      return item;
    },
    sendGoods: function (code) {
      let _this = this
      freightService.sendGoods(code).then(res => {
        if (res.code === 0) {
          _this.$Message.info("发货成功");

        } else {
          _this.$Message.info(res.msg);
        }
      })
    },
    gotoDetail: function (code) {
      this.$router.push({ path: '/detail', query: { id: code } })
    },
    changePage (item) {
      this.dataCurrent = item;
      var params = { current: this.dataCurrent, size: 10 }
      if (this.orderNo) {
        params.orderNo = this.orderNo;
      }
      this.getInfo(params);
    },
    refreshData () {
      var params = { current: this.dataCurrent, size: 10 }
      if (this.orderNo) {
        params.orderNo = this.orderNo;
      }
      this.getInfo(params);
    },

  }

};
</script>
<style scoped>
/* .send_setting_cnt {
  font-size: 14px;
} */
.send_setting_cnt .setting_title {
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
td,
th {
  vertical-align: middle;
  text-align: center;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  padding: 0.7rem;
  line-height: 1.6;
}
.am-table {
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
thead tr {
  height: 50px;
}
.goods-image {
  float: left;
}
.goods-info {
  margin-left: 130px;
}
.goods-spec {
  color: #7b7b7b;
}
.am-badge {
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
.am-badge-success {
  background-color: #5eb95e;
}
.am-table p {
  margin: 0;
  padding: 0.1rem 0;
}
</style>


