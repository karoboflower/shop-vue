<template>
  <div class="add_send_cnt">
    <div class="add_send_title">
      <span>运费模板</span>
    </div>
    <Form
      class="add_from"
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="150"
    >
      <FormItem label="模板名称" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入模板名称" />
      </FormItem>
      <FormItem label="计费方式" prop="method">
        <RadioGroup v-model="formValidate.method">
          <Radio label="10">按件数</Radio>
          <!-- <Radio label="1" 按重量</Radio> -->
        </RadioGroup>
      </FormItem>
      <FormItem label="配送区域及运费" class="region_before">
        <table cellspacing="0" width="100%">
          <thead>
            <th width="40%">可配送区域</th>
            <th width="15%">首件（个）</th>
            <th width="15%">运费（元）</th>
            <th width="15%">续件 (个)</th>
            <th width="15%">续费 (元)</th>
          </thead>
          <tbody>
            <tr v-if="regionList.length>0" v-for="(item ,index) of regionList" :key="index">
              <td class="am-text-left">
                <p class="selected-content">
                  <span v-for="name of item.part" :key="name">{{name}}</span>
                </p>
                <p class="operation">
                  <span @click="editItem(index)">编辑</span>
                  <span @click="delItem(index)">删除</span>
                </p>
              </td>
              <td>
                <InputNumber :min="1" @on-change="addFirst($event, index)">{{item.first}}</InputNumber>
              </td>
              <td>
                <InputNumber :min="1" @on-change="addFirstFee($event, index)">{{item.firstFee}}</InputNumber>
              </td>
              <td>
                <InputNumber :min="1" @on-change="addAdditional($event, index)">{{item. additional}}</InputNumber>
              </td>
              <td>
                <InputNumber
                  :min="1"
                  @on-change="addAdditionalFee($event, index)"
                >{{item.additionalFee}}</InputNumber>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="add-region" @click="add">
          <span>
            <i class="iconfont icon-adress"></i> 点击添加可配送区域和运费
          </span>
        </div>
      </FormItem>
      <FormItem label="排序" prop="sort">
        <Input v-model="formValidate.sort" placeholder="请输入排序" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit()">提交</Button>
      </FormItem>
    </Form>
    <!-- 地区弹框 -->
    <div v-if="regionBox" class="layui_layer">
      <div class="layui_layer_header d_btw">
        <div>选择可配送区域</div>
        <i class="iconfont icon-cross" @click="closeBox"></i>
      </div>
      <div class="chose_btn">
        <Button @click="checkAllPovince">全选</Button>
        <Button @click="clearAllPovince">清空</Button>
      </div>
      <ul class="layui_layer_cnt d_start" @mouseleave="leave">
        <li
          v-for="(items,index) of povinceList"
          :key="items.id"
          @mouseenter="getCity(items,index)"
          class="ceshi"
        >
          <checkbox
            class="new_ivu-checkbox-wrapper"
            label="item.name"
            @on-change="checkAllCity(items.id,index)"
            v-model="checked[index]"
          >{{items.name}}</checkbox>
          <div v-if="cityShow==index" class="city_box d_btw">
            <div class="single"></div>
            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange(index,items.id)">
              <Checkbox
                v-for="item of items.city"
                :key="item.id"
                :label="item.id"
                @click.native="chose($event)"
              >{{item.name}}</Checkbox>
            </CheckboxGroup>
          </div>
        </li>
      </ul>
      <p class="layui_layer_btn">
        <Button type="primary" @click="sureRegion">确定</Button>
        <Button @click="closeBox">取消</Button>
      </p>
    </div>
  </div>
</template>

<script>
import freightSetting from "../../../service/setting/freightSetting";
export default {
  name: "addSend",
  data() {
    return {
      itemCheck: false,
      editI: -1, //存放编辑的下标
      checked: [], //省份选中
      pId: [], //当前选中的父亲id
      checkAllGroup: [], //城市选中值
      cityShow: -1,
      povinceList: [], //省份数据
      cityList: [], //鼠标移入城市数据
      regionBox: false,
      regionList: [], //添加的运费和模板数据
      formValidate: {
        name: "",
        method: 0,
        sort: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "模板名称不能为空",
            trigger: "blur"
          }
        ],
        method: [
          { required: true, message: "计费方式不能为空", trigger: "change" }
        ],
        sort: [
          {
            required: true,
            message: "排序不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.China();
    this.canShow = true;
  },
  watch: {
    regionList(newval) {
      // console.log("newval", newval);
    }
  },

  methods: {

    //全选
    checkAllPovince() {
      for (var i = 0; i < this.checked.length; i++) {
        this.checked[i] = true;
      }
      this.pId = [];
      this.checkAllGroup = [];
      this.povinceList.forEach((item, index) => {
        this.pId.push(item.id);
        this.povinceList[index].city.forEach(city => {
          this.checkAllGroup.push(city.id);
        });
      });
      const arr = new Array(...this.checked);
      this.checked = arr;
    },
    //清空
    clearAllPovince() {
      for (var i = 0; i < this.checked.length; i++) {
        this.checked[i] = false;
      }
      this.pId = [];
      this.checkAllGroup = [];
      const arr = new Array(...this.checked);
      this.checked = arr;
    },
    //添加
    addFirst(data, i) {
      this.regionList[i].first = data;
    },
    addFirstFee(data, i) {
      this.regionList[i].firstFee = data;
    },
    addAdditional(data, i) {
      this.regionList[i].additional = data;
    },
    addAdditionalFee(data, i) {
      this.regionList[i].additionalFee = data;
    },
    //全选城市
    checkAllCity(parentsId, i) {
      var _this = this;
      if (this.checked[i]) {
        var flag = this.pId.indexOf(parentsId);
        if (flag < 0) {
          this.pId.push(parentsId);
        }
        this.cityList.forEach(item => {
          _this.checkAllGroup.push(item.id);
        });
      } else {
        var index = this.pId.indexOf(parentsId);
        this.pId.splice(index, 1);
        this.cityList.forEach(item => {
          _this.checkAllGroup.splice(_this.checkAllGroup.indexOf(item.id), 1);
        });
      }
    },

    //选择城市
    checkAllGroupChange(parentsIndex, parentsId) {
      var flag = false;
      var index = this.pId.indexOf(parentsId);
      if (index < 0) {
        this.pId.push(parentsId);
        this.checked[parentsIndex] = true;
      } else {
        if (this.itemCheck) {
        } else {
          var city = [];
          this.povinceList[parentsIndex].city.forEach(item => {
            city.push(item.id);
          });
          for (var i = 0; i < this.checkAllGroup.length; i++) {
            if (city.indexOf(this.checkAllGroup[i]) >= 0) {
              flag = true;
              return;
            }
          }
          if (flag) {
            this.checked[parentsIndex] = true;
          } else {
            this.checked[parentsIndex] = false;
            this.pId.splice(index, 1);
          }
        }
      }
    },

    chose(e) {
      if (e.target.checked != undefined) {
        if (e.target.checked) {
          this.itemCheck = true;
        } else {
          this.itemCheck = false;
        }
      }
    },
    //提交
    handleSubmit() {
      if (
        this.formValidate.name == "" ||
        this.formValidate.sort == "" ||
        this.formValidate.method == 0 ||
        this.regionList.length == 0
      ) {
        this.$Message.info("请填写完整信息");
      } else {
        console.log("regionList", this.regionList);
        var data = {
          additional: this.regionList[0].additional,
          additionalFee: this.regionList[0].additionalFee,
          first: this.regionList[0].first,
          firstFee: this.regionList[0].firstFee,
          method: this.formValidate.method,
          name: this.formValidate.name,
          region: this.regionList[0].part,
          sort: this.formValidate.sort
        };
      }
    },
    //添加
    add() {
      this.regionBox = true;
      this.checkAllGroup = [];
      this.pId = [];
      for (var i = 0; i < this.checked.length; i++) {
        this.checked[i] = false;
      }
    },
    //编辑
    editItem(val) {
      this.editI = val;
      var _this = this;
      this.regionBox = true;
      this.pId = this.regionList[val].pId;
      this.checkAllGroup = [];
      this.checkAllGroup = new Array(...this.regionList[val].cityId);
      for (var i = 0; i < this.checked.length; i++) {
        this.checked[i] = false;
      }
      this.povinceList.forEach((item, i) => {
        var statue = this.pId.indexOf(item.id);
        if (statue >= 0) {
          this.checked[i] = true;
        }
      });
    },
    //删除
    delItem(i) {
      this.regionList.splice(i, 1);
    },
    //关闭弹框
    closeBox() {
      this.regionBox = false;
    },
    // 确定
    sureRegion() {
      var _this = this;
      this.regionBox = false;
      var name = [];
      this.pId.forEach(item => {
        freightSetting.getP(item).then(res => {
          name.push(res.data.name);
        });
      });

      if (this.editI >= 0) {
        this.regionList[this.editI] = {
          part: name,
          pId: _this.pId,
          cityId: _this.checkAllGroup,
          firstFee: 1,
          first: 1,
          additionalFee: 1,
          additional: 1
        };
        const arr = new Array(...this.regionList);
        this.regionList = arr;
      } else {
        this.regionList.push({
          part: name,
          pId: _this.pId,
          cityId: _this.checkAllGroup,
          firstFee: 1,
          first: 1,
          additionalFee: 1,
          additional: 1
        });
      }
      this.editI = -1;
    },
    //获取各省份城市信息
    getCity(val, i) {
      this.cityShow = i;
      this.cityList = val.city;
    },
    //鼠标移开
    leave() {
      this.cityShow = -1;
      this.cityList = [];
    },
    //全国省份信息
    China() {
      var _this = this;
      freightSetting.getChina().then(res => {
        if (res.code == 0) {
          _this.povinceList = res.data;
          _this.povinceList.forEach((item, index) => {
            _this.checked.push(false);
            freightSetting.getCitys(item.id).then(res => {
              _this.povinceList[index].city = new Array(...res.data);
            });
          });
        } else {
           _this.$Message.info("登录超时请重新登录");
          _this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style>
.add_send_cnt .add_send_title {
  font-size: 14px;
  border-bottom: 1px solid #eef1f5;
  padding: 10px;
}
.add_send_cnt .add_send_title span {
  border-left: 3px solid#11a4ee;
  padding-left: 10px;
}
.add_send_cnt .chose_btn{
      text-align: right;
    background-color: #fbfbfb;
    width: 90%;
    margin: 10px auto;
    font-size: 14px;
    padding:5px 0;
}
.add_send_cnt .chose_btn Button{
  margin-left: 10px;
}
.add_send_cnt .add_from {
  margin-top: 50px;
}
.add_send_cnt .ivu-form .ivu-form-item-label {
  font-size: 14px;
}
.add_send_cnt .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
}
.add_send_cnt table,
table thead th,
table tr td {
  border: 1px solid #dcdee2;
}

.add_send_cnt table {
  line-height: 40px;
  text-align: center;
  border-collapse: collapse;
  padding: 2px;
}

.add_send_cnt .add-region {
  border: 1px solid #dcdee2;
  border-top: 0;
  color: #444;
  height: 50px;
}
.add_send_cnt .am-text-left {
  padding: 10px;
}
.add_send_cnt .am-text-left .selected-content {
  text-align: left;
  font-size: 16px;
  line-height: 1.5em;
}
.add_send_cnt .am-text-left .selected-content span {
  margin-right: 10px;
}
.add_send_cnt .am-text-left .operation {
  text-align: right;
  color: #0e90d2;
  line-height: 1.5em;
}
.add_send_cnt .operation span {
  margin: 0 3px;
  font-size: 14px;
}
.add_send_cnt .add-region span {
  background-color: #e6e6e6;
  border-color: #e6e6e6;
  margin-left: 10px;
  height: 30px;
  display: inline-block;
  margin: 10px;
  padding: 0 10px;
}
.add_send_cnt .add-region span i {
  font-size: 12px;
}
.add_send_cnt .region_before {
  position: relative;
}
.add_send_cnt .region_before:before {
  content: "*";
  display: inline-block;
  margin-right: 4px;
  line-height: 1;
  font-family: SimSun;
  font-size: 12px;
  color: #ed4014;
  position: absolute;
  top: 10px;
  left: 28px;
}

.add_send_cnt table td .ivu-input-number {
  border: none;
  border-bottom: 1px solid #dcdee2;
  width: 80%;
}
.layui_layer {
  border-radius: 2px;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
  background: #fff;
  width: 820px;
  height: 520px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.layui_layer .layui_layer_header {
  padding: 0 80px 0 20px;
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  background-color: #f8f8f8;
  border-radius: 2px 2px 0 0;
}

.layui_layer .layui_layer_cnt {
  overflow: auto;
  padding: 20px;
  flex-wrap: wrap;
  position: relative;
  padding-right: 160px;
}

.layui_layer .layui_layer_cnt .city_box {
  position: absolute;
  flex-wrap: wrap;
  top: 32px;
  left: 0;
  font-size: 12px;
  width: 300px;
  color: #333;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: #fff;
  padding: 10px 20px;
  z-index: 999;
}
.single {
  content: "";
  position: absolute;
  top: -11px;
  left: 40px;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent #ccc;
}
.single:after {
  content: "";
  position: absolute;
  top: 1px;
  left: -10px;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent #fff;
}
.layui_layer .layui_layer_cnt .city_box .ivu-checkbox-wrapper {
  padding: 5px;
}
.layui_layer .layui_layer_cnt li {
  width: 25%;
  height: 35px;
}
.ceshi {
  position: relative;
}
.ceshi .new_ivu-checkbox-wrapper {
  width: 100%;
  margin: 0;
}
.layui_layer .layui_layer_cnt li .ivu-checkbox {
  margin-right: 10px;
}
.layui_layer .layui_layer_btn {
  text-align: right;
  margin-right: 20px;
}
</style>



