<template>
  <div class="index_wrapper">
    <div class="item">
      <div class="item_title">商城统计</div>
      <ul class="d_around widgetone">
        <li class="card_blue d_btw">
          <div>
            <p>商品总量</p>
            <p class="big_size">63</p>
            <p>当前商品总数量</p>
          </div>
          <i class="iconfont icon-gift1"></i>
        </li>
        <li class="card_red d_btw">
          <div>
            <p>用户总量</p>
            <p class="big_size">163</p>
            <p>当前用户总数量</p>
          </div>
          <i class="iconfont icon-user"></i>
        </li>
        <li class="card_violet d_btw">
          <div>
            <p>订单总量</p>
            <p class="big_size">123</p>
            <p>已付款订单总数量</p>
          </div>
          <i class="iconfont icon-orderform"></i>
        </li>
        <li class="card_organe d_btw">
          <div>
            <p>评价总量</p>
            <p class="big_size">0</p>
            <p>订单评价总数量</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="item">
      <div class="item_title">实时概况</div>
      <ul class="d_around widgettwo">
        <li class="d_start">
          <img
            src="data:image/png;base64,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"
            alt
          />
          <div>
            <p>销售额(元)</p>
            <p class="mid_size">1351.00</p>
            <p class="small_size">昨日：974.00</p>
          </div>
        </li>
        <li class="d_start">
          <div>
            <p>支付订单数</p>
            <p class="mid_size">106</p>
            <p class="small_size">昨日：76</p>
          </div>
        </li>
        <li class="d_start">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACMCAMAAACd62ExAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTPn///D4/+/2//T6//D3//H3//D3//D3//H5/2aq/7DT/5HC/3az/8Ld/9zs/53I/+kzVBAAAAAKdFJOUwAOY/8hooXE4kIJnP2wAAADmUlEQVR42u2ca3fCIAyGLeFqW+j//7XTOWedbUkgYHaO784+6p6FJNxCTqdyDVpZY5zz3gN475wzVoXh1F9DsO7CsCnvjNJ9USAn3wdpUHmUu5xtTBQM0ORUM1carIcCmdACRlsolWMH0gZqxAtUCcMMpIBDhifMggcmKYZwMsCn6hHjM81NtorGArdcuQdpB/zyQchA1Q2YglZygwS3qeEx0FJevy/bVPMMDlqLEmDtaSj2MQCCeCz0ES6+etHgeBT0k8nPU9BT6v0h/qQgIahW4TVIcZy8+2joL/XebPwiLWeovrPPXlT5t+DsRRciqmIcqYqxLLpCFmY8F2lOJYvnrB/P50LNBd6cNc50LtZITz4548Tv/3NakHqCX8jmQRkn6wV3peUxUpffiZybUZ6DpIm/ppnHFDE4f82TD6vrt6MMM/66/BR/BjmPY6nTAw5nZZgl/fpcHgcG4tyJwfljGAqOIq6Pszgr913Sc0ROxJnLV+PE+eG+LwkCgbN25gCVOFujRMSxtL3MEc70iOvN9InB8aSxOsIZdwxDwnmsMzBjdYQzreK6HMeQ9p0HOIcJG43jSUvk5jj32BpABo4iuE4HHEM5smiP4ym7q/Y4P84DUnAUYSc8t8exeE++pt6xMY6hHL6lBI1xHM+RDhcO8BxbsOFo5HTeCSeg47wLjsLOWN1w9AfnIA+GD85BWv7gfHBKXVl/cP7PJCFsCpW2wBC2/EIuTuM8xx6LU4s2wdxj6Y7Mgx22fYaw7Tt32vYJ2xRLOzIQdqAi7LhJ2GGcsKNKaQe5QQSO4boE4MEJXFckLDiedoF08DdZcCztem3a/1oWHE27fLxd6y9bVR9nBhxHLWs6LnpIu6u2gqtZTCZMMxknLbfPUC+ucalnoeE87tQjyZHRE0WK47Lxs4WTDm5rM45MWKIiI+thmPOSSBmZoSruL864d6eONk6VeZ5wVsUGmFHaMU6NeVY4T7Uy6C/QRaVoOZx7XFMMsxVWleWvN5zXWhmkdspgi8sYrziFhnleWfAUea6nD5phXmYrDm9O1LjO+nFdgXC8GSaWfFY1KJ9Ol6kiFX3S/KPicmml98IeJkh7tiHtUYu0Jz/SHkRJey4m7TGdsKeG0h5iinumKu0Rr7QnztIegEt7Hi+ueQBLC4yVaRiaYYhqPCGuLYe4piXSWrqIa3gjrh2QuGZJ5FZS3nZpbiWo0Za8NmQbTdqAq0nbF7i46IS8tSAEAAAAAElFTkSuQmCC"
            alt
          />
          <div>
            <p>新增用户数</p>
            <p class="mid_size">327</p>
            <p class="small_size">昨日：238</p>
          </div>
        </li>
        <li class="d_start">
          <div>
            <p>下单用户数</p>
            <p class="mid_size">69</p>
            <p class="small_size">昨日：34</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="item">
      <div class="item_title">近七日交易走势</div>
       <div id="chart1"></div>
    </div>
    <div class="bottom">
      <p>本页面数据为随机模拟，并非真实数据，仅作示意</p>
      <p>
        萤火虫科技版权所有，官方QQ:
        <span>2929351407</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    this.$chart.indexEchart("chart1");
  }
};
</script>

<style scoped>
#chart1 {
  width: 90%;
  height: 600px;
}
.index_wrapper {
  margin: 20px 15px 10px;
}
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
.index_wrapper .item ul {
  align-items: center;
  margin: 25px auto;
}
.index_wrapper .item ul li {
  width: 23%;
  font-size: 14px;
  padding: 30px 20px;
  box-sizing: border-box;
}
.index_wrapper .item ul li p {
  margin: 0;
}
.widgetone li {
  color: #fff;
}
.widgetone i {
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.2);
}
.widgetone .big_size {
  font-size: 46px;
  padding: 10px 0;
}
.card_blue {
  background: linear-gradient(-125deg, #57bdbf, #2f9de2);
}
.card_red {
  background: linear-gradient(-125deg, #ff7d7d, #fb2c95);
}
.card_violet {
  background: linear-gradient(-113deg, #c543d8, #925cc3);
}
.card_organe {
  background: linear-gradient(-141deg, #ecca1b, #f39526);
}
.widgettwo li {
  color: rgb(102, 102, 102);
  align-items: center;
}
.widgettwo .mid_size {
  color: rgb(51, 51, 51);
  font-size: 22px;
  line-height: 2em;
}
.widgettwo .small_size {
  color: rgb(153, 153, 153);
  font-size: 13px;
}
.widgettwo img {
  width: 55px;
  height: 55px;
  margin-right: 15px;
}
.index_wrapper .bottom {
  font-size: 14px;
  text-align: center;
}
.index_wrapper .bottom p {
  margin: 0 auto 5px;
  color: #838fa1;
}
.index_wrapper .bottom p span {
  color: #23abf0;
}
</style>


