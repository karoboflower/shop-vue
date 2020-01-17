<template>
  <div>
    <div class="header">
      <Button type="success" class="add_btn" @click="typesAdd">
        <i class="iconfont icon-add"></i> 新增
      </Button>
    </div>
    <Table :columns="columns1" :data="data1"></Table>
    <Modal
      v-model="modal1"
      title="友情提示"
      @on-ok="cancel1"
      @on-cancel="cancel"
      cancel-text="取消"
      ok-text="直接删除"
    >直接删除会删除分类下的商品，建议先转移该分类下的商品？
     <Button type="primary"  @click="ok1">
       先转移分类下的商品 
      </Button>
    </Modal>
    <Modal v-model="modal2" title="转移商品至其他分类" @on-ok="ok2()" :closable="false">
      <Select style="width:200px" v-model="newTypeId">
        <Option v-for="item in newTypes" :value="item.id" :key="item.id">{{ item.name }}</Option>
      </Select>
    </Modal>
  </div>
</template>
<script>
import freightService from "../../../service/goods/goodsService";
export default {
  name: "goodsKind",
  data () {
    return {
      columns1: [
        {
          title: "分类ID",
          key: "id"
        },
        {
          title: "分类名称",
          key: "name",
          render: (h, params) => {
            if (params.row.type === 2) {
              return h("span", '--' + params.row.name)
            } else {
              return h("span", params.row.name)
            }

          }

        },
        {
          title: "分类排序",
          key: "sort"
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
                      this.edit(params.row.id, params.index);
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
                      this.remove(params.row.id, params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [],
      newTypes: [],
      modal1: false,
      modal2: false,
      deleteId: "",
      newTypeId: ""
    };
  },
  created () {
    this.getInfo();
  },
  methods: {
    getInfo () {
      var _this = this;
      freightService.getTypes().then(res => {
        if (res.code === 0) {
          let result = res.data;
          _this.data1 = _this.renderAgain(res.data);
        }
      });
    },
    typesAdd () {
      this.$router.push("/goodsKindSet");
    },
    // 编辑
    edit (val) {
      this.$router.push({
        path: "/goodsKindSet",
        query: {
          id: val
        }
      });
    },
    // 删除
    remove (id, index) {
      let _this = this;
      freightService.getTypes().then(res => {
        if (res.code === 0) {
          var typeId = _this.renderAgain(res.data);
          _this.newTypes = typeId;
          var type = [];
          for (var i = 0; i < typeId.length; i++) {
            if (id === typeId[i].parentId) {
              _this.$Message.info("请先删除分类下面的子类");
              return false;
            }
            if (id !== typeId[i].id) {
              type.push({
                id: typeId[i].id,
                name: typeId[i].name
              });
                _this.modal1 = true;
              _this.deleteId = id;
          

            }
          }
        }
      });
    },
    renderAgain (result) {
      let rowDatas = [];
      for (var i = 0; i < result.length; i++) {
        rowDatas.push({
          id: result[i].id,
          name: result[i].name,
          imageId: result[i].imageId,
          parentId: result[i].parentId,
          sort: result[i].sort,
          createTime: result[i].createTime,
          type: 1
        });
        if (result[i].children && result[i].children.length) {
          var childrens = result[i].children;
          for (var j = 0; j < childrens.length; j++) {
            rowDatas.push({
              id: childrens[j].id,
              name: childrens[j].name,
              imageId: childrens[j].imageId,
              parentId: childrens[j].parentId,
              sort: childrens[j].sort,
              createTime: childrens[j].createTime,
              type: 2
            });
          }
        }
      }
      return rowDatas;
    },
    ok1 () {
      this.modal1=false;
      this.modal2 = true;
    },
    cancel(){
        this.modal1=false;
    },
    cancel1 () {
      let _this = this;
      freightService.deleteTypes(_this.deleteId, -1).then(function (res) {
        _this.$Message.info("删除成功");
        _this.getInfo();
      })();
    },
    ok2 () {
      let _this = this;
      freightService.deleteTypes(_this.deleteId, _this.newTypeId).then(function (res) {
        _this.$Message.info("删除成功");
        
        _this.getInfo();
      });
    }
  }
};
</script>
<style scoped>
.header {
  padding: 10px 0px;
}
</style>