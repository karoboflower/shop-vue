<template>
  <div class="send_setting_cnt">
    <div class="setting_title">
      <span>菜单管理</span>
    </div>
    <Row type="flex" justify="start">
      <Col span="4" style="background-color:#f9f9f9;">
        <Tree :data="data5" :render="renderContent"></Tree>
      </Col>
      <Col span="8">
        <Form
          ref="formValidate"
          :model="formItem"
          :label-width="80"
          style="margin-top:10px"
          :rules="ruleValidate"
        >
          <Row>
            <Col span="11">
              <FormItem label="上级菜单" prop="parentName">
                <Input v-model="formItem.parentName" placeholder readonly></Input>
              </FormItem>
            </Col>
            <Col span="2"></Col>
            <Col span="11">
              <FormItem label="菜单名" prop="pname">
                <Input v-model="formItem.pname" placeholder clearable></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="11">
              <FormItem label="顺序" prop="porder">
                <Input v-model="formItem.porder" placeholder clearable></Input>
              </FormItem>
            </Col>
            <Col span="2"></Col>
            <Col span="11">
              <FormItem label="菜单图标">
                <Input v-model="formItem.picon" placeholder clearable></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="11">
              <FormItem label="权限值" prop="pval">
                <Input v-model="formItem.pval" placeholder clearable></Input>
              </FormItem>
            </Col>
            <Col span="11">
              <FormItem label="权限类型" prop="ptype">
                <Select v-model="formItem.ptype">
                  <Option value="1">菜单</Option>
                  <Option value="2">按钮</Option>
                  <Option value="3">接口</Option>
                  <Option value="4">特殊</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row v-show="formItem.ptype==='1'">
            <Col span="24">
              <FormItem label="url">
                <Input v-model="formItem.purl" placeholder clearable></Input>
              </FormItem>
            </Col>
          </Row>

          <FormItem>
            <Button type="primary" @click="setMenu('formValidate')">保存</Button>
            <Button style="margin-left: 8px">取消</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>
<script>
import roleService from "../../../service/user/userService";
export default {
  data () {
    return {
      data5: [
        {
          title: '菜单列表',
          expand: true,
          id: 0,
          pname: '顶级菜单',
          render: (h, { root, node, data }) => {
            return h('span', {
              style: {
                display: 'inline-block',
                width: '100%'
              }
            }, [
              h('span', [
                h('Icon', {
                  props: {
                    type: 'ios-folder-outline'
                  },
                  style: {
                    marginRight: '8px'
                  }
                }),
                h('span', data.title)
              ]),
              h('span', {
                style: {
                  display: 'inline-block',
                  float: 'right',
                  marginRight: '32px'
                }
              }, [
                h('Button', {
                  props: Object.assign({}, this.buttonProps, {
                    icon: 'ios-add',
                    type: 'primary'
                  }),
                  style: {
                    width: '64px'
                  },
                  on: {
                    click: () => { this.append(data) }
                  }
                })
              ])
            ])
          },
          children: []
        }
      ],
      buttonProps: {
        type: 'default',
        size: 'small'
      },
      menuInfo: '',
      currentIndex: -1,
      formItem: {
        parent: '',
        parentName: '',
        pname: '',
        porder: '',
        picon: '',
        id: '',
        purl: '',
        pval: '',//权限值
        ptype: '',//权限类型
      },
      ruleValidate: {
        pname: [
          { required: true, message: '必填项，不可为空', trigger: 'blur' }
        ],
        porder: [
          { required: true, message: '必填项，不可为空', trigger: 'blur' },
        ],
        pval: [
          { required: true, message: '必填项，不可为空', trigger: 'blur' }
        ],
        ptype: [
          { required: true, message: '必选项，不可为空', trigger: 'blur' }
        ],
        parentName: [
          { required: true, message: '必选项，不可为空', trigger: 'blur' }
        ],

      }
    }
  },
  methods: {
    renderContent (h, { root, node, data }) {
      return h('span', {
        style: {
          display: 'inline-block',
          width: '100%'
        }
      }, [
        h('span', [
          h('Icon', {
            props: {
              type: 'ios-paper-outline'
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', {
            domProps: {
              innerHTML: data.title
            },
            class: {
              span_title: true,
              selected: this.currentIndex === node.nodeKey

            },
            on: {
              click: () => {
                this.selectedRoot(root, node, data)
              }
            }
          })
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        }, [
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-add'
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => { this.append(data) }
            }
          }),
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-remove'
            }),
            on: {
              click: () => { this.remove(root, node, data) }
            }
          })
        ])
      ])
    },
    append (data) {
      const children = data.children || []
      children.push({
        title: '菜单名称',
        expand: true,
        parentId: data.parentId,
        parentName: data.pname ? data.pname : '顶级菜单',
      })
      this.$set(data, 'children', children)
    },
    remove (root, node, data) {
      let _this = this
      const parentKey = root.find(el => el === node).parent
      const parent = root.find(el => el.nodeKey === parentKey).node
      const index = parent.children.indexOf(data)
      parent.children.splice(index, 1)
      if (data.id) {
        roleService.deletePowerList(data.id).then(res => {
          if (res.code === 0) {
            _this.$Message.info("删除成功");
            _this.$refs['formValidate'].resetFields();
          } else {
            _this.$Message.info("删除失败");
            return false
          }

        })
      }
    },
    selectedRoot (root, node, data) {
      this.currentIndex = node.nodeKey;
      this.$refs['formValidate'].resetFields();
      this.formItem = {
        parent: root[node.parent].node.id,
        parentName: root[node.parent].node.pname,
        pname: data.pname,
        porder: data.porder?String(data.porder):'',
        picon: data.picon,
        id: data.id,
        purl: data.purl,
        pval: data.pval,//权限值
        ptype: String(data.ptype),//权限类型
      }
    },
    setMenu (name) {
      let params = this.formItem
      let _this = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.formItem.id) {
            roleService.updatePowerList(params).then(res => {
              if (res.code === 0) {
                _this.$Message.info("修改成功");
                  _this.$refs['formValidate'].resetFields();
                  _this.getInfo();
              } else {
                _this.$Message.info("修改失败");
                return false
              }
            })
          } else {
            roleService.addPowerList(params).then(res => {
              if (res.code === 0) {
                _this.$Message.info("新增成功");
                _this.$router.go(0)
              } else {
                _this.$Message.info("新增失败");
                return false
              }

            })
          }
        } else {
          this.$Message.error('Fail!');
        }
      })

    },
    getInfo(){
       roleService.getPowerList({ current: 1, size: 10 }).then(res => {
      if (res.code === 0) {
        this.menuInfo = res.data
        this.data5[0].children = this.menuInfo
      }


    }) 
    }
  },
  created () {
    this.getInfo();
  },
}
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
.select_btn {
  width: 80%;
  margin: 20px 0px 0px 0px;
}
/deep/ .selected {
  background-color: #d5e8fc;
}
.send_setting_cnt /deep/ .span_title {
  display: inline-block;
  margin: 0;
  padding: 0 4px;
  border-radius: 3px;
  cursor: pointer;
  vertical-align: top;
  color: #515a6e;
  transition: all 0.2s ease-in-out;
}
</style>
