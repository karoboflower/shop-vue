<template>
  <div class="admin_cnt">
    <div class="admin_title">
      <span>管理员列表</span>
    </div>
    <Button class="add_btn" @click="add">
      <i class="iconfont icon-add"></i> 新增
    </Button>
    <Table :columns="columns" :data="adminList" stripe></Table>
     <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
    </div>
  </div>
</template>
<script>
import adminService from "../../../service/user/adminService";
export default {
  name: "admin",
  data() {
    return {
      columns: [
        {
          title: "管理员ID",
          key: "deliveryId"
        },
        {
          title: "用户名",
          key: "name"
        },
        {
          title: "姓名",
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
      adminList: []
    };
  },
  created() {
    // adminService.getAdminList().then(res => {
    //   if (res.code == 0) {
    //     console.log('res',res)
    //   } else {
    //     this.$Message.info("登录超时请重新登录");
    //     this.$router.push("/login");
    //   }
    // });
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
         console.log('ok')
        }
      });
    },
    //新增模板
    add() {
      // this.$router.push("addSend");
    },

    // 跳页
    changePage(){

    }
  }
};
</script>
<style scoped>
.admin_cnt .admin_title {
  font-size: 14px;
  border-bottom: 1px solid #eef1f5;
  padding: 10px;
}
.admin_cnt .admin_title span {
  border-left: 3px solid#11a4ee;
  padding-left: 10px;
}
.admin_cnt .ivu-table-wrapper {
  border: none;
  margin-top: 20px;
}
</style>


