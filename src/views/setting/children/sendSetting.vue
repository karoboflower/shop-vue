<template>
  <div class="send_setting_cnt">
    <div class="setting_title">
      <span>运费模板</span>
    </div>
    <Button class="add_btn" @click="addSend">
      <i class="iconfont icon-add"></i> 新增
    </Button>
    <Table :columns="columns" :data="freight" stripe></Table>
  </div>
</template>
<script>
import freightSetting from "../../../service/setting/freightSetting";
export default {
  name: "sendSetting",
  data() {
    return {
      columns: [
        {
          title: "模板ID",
          key: "deliveryId"
        },
        {
          title: "计费方式",
          key: "name"
        },
        {
          title: "排序",
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
                      this.edit(params);
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
                      this.remove(params);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      freight: []
    };
  },
  created() {
    freightSetting.getFreightList().then(res => {
      if (res.code == 0) {
        this.freight = res.data.records;
      } else {
        this.$Message.info("登录超时请重新登录");

        this.$router.push("/login");
      }
    });
  },
  methods: {
    // 编辑模板
    edit(val) {
      var deliveryId = val.row.deliveryId;
      this.$router.push({
        path: "editSend",
        query: { deliveryId }
      });
    },
    // 删除模板
    remove(val) {
      this.$Modal.confirm({
        content: "<p>确定要删除吗？</p>",
        okText: "确定",
        cancelText: "取消",
        onOk: () => {
          console.log("ok");
        }
      });
    },
    //新增模板
    addSend() {
      this.$router.push("addSend");
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
</style>


