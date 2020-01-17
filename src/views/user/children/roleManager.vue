<template>
  <div class="role_cnt">
    <div class="role_title">
      <span>角色列表</span>
    </div>
    <Button class="add_btn" @click="add">
      <i class="iconfont icon-add"></i> 新增
    </Button>
    <Table :columns="columns" :data="roleList" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="dataTotal" :current="dataCurrent" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
import roleService from "../../../service/user/userService";
export default {
  name: "roleManager",
  data() {
    return {
      columns: [
        {
          title: "菜单名称",
          key: "pname"
        },
        {
          title: "菜单相对地址",
          key: "purl"
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
                "权限人员"
              )
            ]);
          }
        }
      ],
      roleList: [],
      dataTotal: 0,
      dataCurrent: 1,//当前页,
    };
  },
  created() {
    roleService.getRoleList().then(res => {
      if (res.code == 0) {
        console.log("res", res);
      } else {
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
    add() {
      this.$router.push("addSend");
    },

    changePage(){

    }
  }
};
</script>
<style scoped>
.role_cnt .role_title {
  font-size: 14px;
  border-bottom: 1px solid #eef1f5;
  padding: 10px;
}
.role_cnt .role_title span {
  border-left: 3px solid#11a4ee;
  padding-left: 10px;
}
.role_cnt .ivu-table-wrapper {
  border: none;
  margin-top: 20px;
}
</style>


