<template>
  <div class="good-spac goods-spec-many" style="margin-left:120px;">
    <div class="spec-group-item" v-for="(da,index) in spec_attr" :key="da.specId">
      <div class="spec-group-name">
        <span>{{ da.specName }}</span>
        <Icon type="ios-close-circle" style="color:#ababab" @click="deleteSpec(index)" />
      </div>
      <div class="spec-list">
        <div class="spec-item" v-for="(item,index1) in da.specValues" :key="item.specValueId">
          <span>{{ item.specValue }}</span>
          <Icon
            type="ios-close-circle"
            class="delete"
            style="color:#ababab"
            @click="deleteSpecValue(index,index1)"
          />
        </div>
        <Input style="width:200px;" v-model="da.newSpec">
          <Button slot="append" @click="addSpecItem(da.specId,da.newSpec,index)">添加</Button>
        </Input>
      </div>
    </div>
    <Button type="primary" ghost @click="showAdd" v-show="!showAddInput">添加规格</Button>
    <Form
      ref="formValidate2"
      :model="formValidate2"
      :rules="ruleValidate"
      :label-width="80"
      v-show="showAddInput"
    >
      <FormItem label="规格名" prop="specName">
        <Input v-model="formValidate2.specName" placeholder="请输入规格名称" style="width:160px;"></Input>
      </FormItem>
      <FormItem label="规格值" prop="specValueInputValue">
        <Input
          v-model="formValidate2.specValueInputValue"
          placeholder="请输入规格值"
          style="width:160px;"
        />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate2')">确定</Button>
        <Button style="margin-left: 8px" @click="showAdd">取消</Button>
      </FormItem>
    </Form>
    <div v-show="spec_list&&spec_list.length">
      <div class="goods-spec-line"></div>
      <div class="spec-batch">
        批量设置 &nbsp;&nbsp;
        <input type="text" v-model="specBatchValues.goodsNo" placeholder="商家编码" />
        <input type="number" v-model="specBatchValues.goodsPrice" placeholder="销售价" />
        <input type="number" v-model="specBatchValues.linePrice" placeholder="划线价" />
        <input type="number" v-model="specBatchValues.stockNum" placeholder="库存数量" />
        <input type="number" v-model="specBatchValues.goodsWeight" placeholder="重量" />
        <Button type="primary" @click="specBatchSet">确定</Button>
      </div>

      <table class="goods-table">
        <tbody>
          <tr>
            <th v-for="da in spec_attr" :key="da.specId">{{ da.specName }}</th>

            <th>规格图片</th>
            <th>商家编码</th>
            <th>销售价</th>
            <th>划线价</th>
            <th>库存</th>
            <th>重量(kg)</th>
          </tr>

          <tr v-for="(item,index) in spec_list" :key="index">
            <td
              class="td-spec-value am-text-middle"
              v-for="(itemKey,index2) in item.rows"
              :rowspan="itemKey.rowspan "
              :key="index2"
            >{{ itemKey.spec_value }}</td>

            <td class="am-text-middle spec-image">
              <div :data-index="index" class="j-selectImg data-image">
                <!-- <img :src="'/file/show/'+item.form.fileId" alt /> -->
                <div v-if="item.form.fileId" style="position:relative;">
                  <img :src="'/file/show/'+item.form.fileId" width="32" height="32" />
                  <Icon
                    type="ios-close-circle"
                    @click="deletePhoto(item)"
                    style="color:#ababab;position:absolute;right:0px;top:-5px;"
                  />
                </div>
                <Icon type="md-add" @click="addPhoto(index)" v-else />
              </div>
            </td>
            <td>
              <input type="text" name="goodsNo" :value="item.form.goodsNo" />
            </td>
            <td>
              <input type="number" name="goodsPrice" :value="item.form.goodsPrice" required />
            </td>
            <td>
              <input type="number" name="linePrice" :value="item.form.linePrice " />
            </td>
            <td>
              <input type="number" name="stockNum" :value="item.form.stockNum " required />
            </td>
            <td>
              <input type="number" name="goodsWeight" :value="item.form.goodsWeight" required />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import freightService from "@/service/goods/goodsSpecService"
export default {
  data () {
    return {
      showAddInput: false,
      formValidate2: {
        specName: '',
        specValueInputValue: ''
      },
      ruleValidate: {
        specName: [
          { required: true, message: '规格名不能为空' }
        ],
        specValueInputValue: [
          { required: true, message: '规格值不能为空' },
        ],
      },
      specBatchValues: {
        goodsNo: '',
        goodsPrice: '',
        linePrice: '',
        stockNum: '',
        goodsWeight: ''
      },
      isShowModel: false,
      currentIndex: '',
      defaultGoodsSpec:{
        spec_attr: [],
        spec_list: [],
        goodsSkus: [],
      }
    }
  },
  props: {
    defaultGoodsSpecs: {
      type: Object,
      default: {
        spec_attr: [],
        spec_list: [],
        goodsSkus: [],
      }
    },

  },
  computed: {
    spec_attr: {
      get: function () {
        return this.defaultGoodsSpec&&this.defaultGoodsSpec.spec_attr?this.defaultGoodsSpec.spec_attr:[]
      },
      set: function (val) {
        this.defaultGoodsSpec.spec_attr = val
      }
    },
    spec_list: {
      get: function () {
        return this.defaultGoodsSpec&&this.defaultGoodsSpec.spec_list?this.defaultGoodsSpec.spec_list:[]
      },
      set: function (val) {
        this.defaultGoodsSpec.spec_list = val
      }
    },
    goodsSkus: {
      get: function () {
        return this.defaultGoodsSpec&&this.defaultGoodsSpec.goodsSkus?this.defaultGoodsSpec.goodsSkus:[]
      },
      set: function (val) {
        this.defaultGoodsSpec.goodsSkus = val
      }
    }
  },
  watch:{
      defaultGoodsSpecs:function(val){
          this.defaultGoodsSpec=this.defaultGoodsSpecs
      }
  },
  methods: {
    showAdd () {
      this.showAddInput = !this.showAddInput
    },
    handleSubmit (name) {
      var _this = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          var params = {};
          params.specName = _this.formValidate2.specName;
          params.specValues = [{ 'specValue': _this.formValidate2.specValueInputValue }]
          freightService.addSpecGroups(params).then(res => {
            if (res.code === 0) {
              _this.$Message.info("添加成功");
              let result = res.data;
              _this.spec_attr.push({
                specId: result.specId,
                specName: result.specName,
                specValues: [{
                  specValueId: result.specValues[0].specValueId,
                  specValue: result.specValues[0].specValue
                }]
              })
              _this.showAddInput = false;
              _this.buildSpeclist();

            } else {
              this.$Message.info("添加失败");
              return false;
            }
          });
        } else {
          this.$Message.info("添加失败");
          return false;
        }
      })
    },
    renderHtml () {

    },
    buildSpeclist: function () {
      // 规格组合总数 (table行数)
      let _this = this
      var totalRow = 1;
      // var result2=this.calcDescartes(data.spec_attr);
      this.goodsSkus = [];
      _this.resetGroup(this.spec_attr);
      for (var i = 0; i < _this.spec_attr.length; i++) {
        totalRow *= _this.spec_attr[i].specValues.length;
      }
      // 遍历tr 行
      var spec_list = [];
      if (_this.spec_attr.length) {
        for (i = 0; i < totalRow; i++) {
          var rowData = [], rowCount = 1, specSkuIdAttr = [];
          // 遍历td 列
          for (var j = 0; j < _this.spec_attr.length; j++) {
            var specId = _this.spec_attr[j].specId;
            var specName = _this.spec_attr[j].specName;
            var skuValues = _this.spec_attr[j].specValues;
            rowCount *= skuValues.length;
            var anInterBankNum = (totalRow / rowCount)
              , point = ((i / anInterBankNum) % skuValues.length);
            if (0 === (i % anInterBankNum)) {
              rowData.push({
                rowspan: anInterBankNum,
                item_id: skuValues[point].specValueId,
                spec_value: skuValues[point].specValue
              });
            }
            specSkuIdAttr.push(skuValues[parseInt(point.toString())].specValueId);
            specSkuIdAttr.sort(function (a, b) {
              return parseInt(a) - parseInt(b);
            })
          }
          spec_list.push({
            spec_sku_id: specSkuIdAttr.join('_'),
            rows: rowData,
            form: {}
          });
        }
      }

      // 合并旧sku数据
      if (_this.spec_list.length > 0 && spec_list.length > 0) {
        for (i = 0; i < spec_list.length; i++) {
          var overlap = _this.spec_list.filter(function (val) {
            return val.spec_sku_id === spec_list[i].spec_sku_id;
          });
          if (overlap.length > 0) {
            spec_list[i].form = overlap[0].form;
          }
        }
      }
      for (let m = 0; m < spec_list.length; m++) {
        var form = spec_list[m].form;
        var spec_sku_id = spec_list[m].spec_sku_id;
        _this.goodsSkus[m].goodsSales = 0;

      }
      _this.spec_list =spec_list;
      _this.$emit('goodsSpecs', _this.goodsSkus, _this.spec_attr);

    },
    resetGroup: function (object) {
      let _this = this;
      var newArray = [];
      var oldArray = new Map();
      object.forEach(function (item, index) {
        newArray.push([]);
        item.specValues.forEach(function (item1, index1) {
          newArray[index].push(item1.specValueId);
          oldArray.set(item1.specValueId, {
            "specId": item.specId,
            "specName": item.specName,
            "specValue": item1.specValue,
            "specValueId": item1.specValueId
          })
        })
      })
      var goodsSku = _this.calcDescartes(newArray);
      var goodsSkus = [];
      for (var i = 0; i < goodsSku.length; i++) {
        var goodItem = goodsSku[i];
        _this.goodsSkus.push({
          specValues: [],
        });
        if (goodItem && goodItem.length) {
          for (var j = 0; j < goodItem.length; j++) {
            if (oldArray.has(goodItem[j])) {
              _this.goodsSkus[i].specValues.push(oldArray.get(goodItem[j]));
            }
          }

        } else {
          if (oldArray.has(goodItem)) {
            _this.goodsSkus[i].specValues.push(oldArray.get(goodItem));
          }
        }

      }
    },
    calcDescartes: function (array) {
      if (array.length < 2) return array[0] || [];
      return [].reduce.call(array, function (col, set) {
        var res = [];
        col.forEach(function (c) {
          set.forEach(function (s) {
            var t = [].concat(Array.isArray(c) ? c : [c]);
            t.push(s);
            res.push(t);
          })
        });
        return res;
      });
    },
    //添加规格值
    addSpecItem: function (pkid, name, index) {
      let params = {};
      params.specId = Number(pkid);
      params.specValue = name;
      let _this = this;
      freightService.addSpecItem(params).then(res => {
        if (res.code === 0) {
          _this.$Message.info("添加成功");
          let result = res.data;
          _this.spec_attr[index].specValues.push({
            specValueId: result.specValueId,
            specValue: result.specValue
          })
          _this.buildSpeclist();
        } else {
          _this.$Message.info("添加失败");
          return false;
        }
      })
    },
    //批量设置属性
    specBatchSet () {
      let _value = this.specBatchValues;
      let _this = this;
      _this.spec_list.forEach((item, index) => {
        _this.spec_list[index].form = {
          goodsNo: _value.goodsNo,
          goodsPrice: _value.goodsPrice,
          linePrice: _value.linePrice,
          stockNum: _value.stockNum,
          goodsWeight: _value.goodsWeight
        };
        _this.goodsSkus[index].goodsNo = _value.goodsNo
        _this.goodsSkus[index].goodsPrice = _value.goodsPrice
        _this.goodsSkus[index].linePrice = _value.linePrice
        _this.goodsSkus[index].stockNum = _value.stockNum
        _this.goodsSkus[index].goodsWeight = _value.goodsWeight
      })
    },
    addPhoto (item) {
      let _this = this
      _this.isShowModel = true
      _this.currentIndex = item
      window.windowphotoGallery.show({
        isShowModel: _this.isShowModel,
        onConfirm: function (val) {
          _this.isShowModel = false
          if (val && val.length) {
            _this.goodsSkus[_this.currentIndex].fileId = val[0];
            _this.$set(_this.spec_list[_this.currentIndex].form, 'fileId', val[0])
          }

        }
      })

    },
    deletePhoto (item) {
      item.form.fileId = '';
    },
    deleteSpec (item) {
      this.spec_attr.splice(item, 1);
      this.buildSpeclist();
    },
    deleteSpecValue (index, index1) {
      this.spec_attr[index].specValues.splice(index1, 1);
      this.buildSpeclist();
    }

  },
}
</script>
<style scoped>
/* @import "../../assets/css/goods.css"; */
.good-spac {
  margin-top: 15px;
  border: 1px solid #e4e4e4;
  padding: 20px;
  border-radius: 4px;
  padding: 20px;
  font-size: 14px;
}
.spec-group-item .spec-group-name {
  margin-bottom: 15px;
}
.spec-group-item .spec-list {
  display: flex;
  margin-bottom: 20px;
}
.spec-group-item .spec-list .spec-item {
  position: relative;
  margin-right: 12px;
  margin-bottom: 12px;
  display: flex;
}
.spec-group-item .spec-list .spec-item span {
  min-width: 50px;
  display: inline-block;
  border: 1px solid #ddd;
  text-align: center;
  padding: 0 15px;
  border-radius: 2px;
  font-size: 1.0rem;
  line-height: 30px;
}
.spec-item-add {
  display: flex;
  display: -webkit-flex;
}
.spec-group-item .spec-item-add input {
  width: 110px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.spec-group-item .spec-item-add button {
  display: table-cell;
  height: 32px;
  font-size: 1.3rem;
  border-color: #e3e2e5;
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  outline: none;
}
.delete {
  position: absolute;
  bottom: 20px;
  right: -5px;
}
.goods-table {
  border: 1px solid #ddd;
  font-size: 10px;
  border-collapse: collapse;
  white-space: nowrap;
  border-left: none;
  text-align: center;
  vertical-align: middle;
}
.goods-table tbody th,
.goods-table tbody tr td {
  padding: 10px 20px;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
}
.goods-table tbody td {
}
.goods-spec-line {
  border: 1px dashed #e3e2e5;
  margin: 20px 0px;
}
.spec-batch {
  margin-bottom: 20px;
}
.spec-batch input,
.goods-table input {
  padding: 5px 6px;
  color: #555;
  margin: 10px;
}
button,
input,
select,
textarea {
  margin: 0px 10px;
}
</style>