<template>
  <div class="w_design_setting_cnt">
    <div class="w_design_title">
      <span>页面设计</span>
    </div>
    <Button class="add_btn" @click="add">
      <i class="iconfont icon-add"></i> 新增
    </Button>
    <Table :columns="columns" :data="wxapp" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
import wxappService from "../../../service/wxapp/wxappService";
export default {
  name: "wxappPageDesign",
  data() {
    return {
      columns: [
        {
          title: "页面ID",
          key: "pageId"
        },
        {
          title: "页面名称",
          key: "pageName"
        },
        {
          title: "页面类型",
          key: "pageTypes"
        },
        {
          title: "添加时间",
          key: "createTime"
        },
        {
          title: "更新时间",
          key: "updateTime"
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
                  style: {
                    marginRight: "5px"
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
                    type: "success",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.setHome(params);
                    }
                  }
                },
                "设为首页"
              )
            ]);
          }
        }
      ],
      wxapp: []
    };
  },
  created() {
    wxappService.getPage().then(res => {
      if (res.code == 0) {
        this.wxapp = res.data.records;
        for (var i = 0; i < this.wxapp.length; i++) {
          if (this.wxapp[i].pageType == 10) {
            this.wxapp[i].pageTypes = "自定义页面";
          } else if (this.wxapp[i].pageType == 20) {
            this.wxapp[i].pageTypes = "首页";
          }
        }
      } else {
        this.$Message.info("登录超时请重新登录");
        this.$router.push("/login");
      }
    });
  },
  methods: {
    // 新增
    add() {
      this.$router.push('addPage')
    },
    // 编辑
    edit() {},
    // 设为首页
    setHome() {},
    // 删除
    remove() {
      this.$Modal.confirm({
        content: "<p>确定要删除吗？</p>",
        okText: "确定",
        cancelText: "取消",
        onOk: () => {
          console.log("ok");
        }
      });
    },
    //翻页
    changePage() {}
  }
};
</script>

<style>
.w_design_setting_cnt .w_design_title {
  font-size: 14px;
  border-bottom: 1px solid #eef1f5;
  padding: 10px;
}
.w_design_setting_cnt .w_design_title span {
  border-left: 3px solid#11a4ee;
  padding-left: 10px;
}
.w_design_setting_cnt .ivu-table-wrapper {
  border: none;
  margin-top: 20px;
}
</style>

