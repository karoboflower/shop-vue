<template>
  <div class="login_bg">
    <div class="login_box">
      <div class="login_title">账号登录</div>
      <input type="text" placeholder="手机号/用户名/UID/邮箱" v-model="userName" />
      <div class="code d_start">
        <input type="password" placeholder="请输入密码" v-model="password" ref="pwd" />
        <i class="iconfont icon-eye pwd" v-if="eye" @click="showPad"></i>
        <i class="iconfont icon-eye txt" v-else @click="showPad"></i>
      </div>
      <div class="code d_start">
        <input type="text" placeholder="请输入验证码" v-model="code" />
        <img :src="codeImg" alt @click="chagneCode" />
      </div>
      <div class="d_btw login_notice">
        <span>账号注册</span>
        <span>忘记密码</span>
      </div>
      <Button type="primary" long @click="submit">登录</Button>
    </div>
  </div>
</template>
<script>
import loginService from "../../service/login/loginService";
export default {
  name: "login",
  data () {
    return {
      codeImg: "",
      userName: "",
      password: "",
      code: "",
      cToken: "",
      eye: true
    };
  },
  created () {
    localStorage.clear();
    this.chagneCode();
  },

  methods: {
    //   改变验证码
    chagneCode () {
      loginService.getCode().then(res => {
        this.codeImg = res.img;
        this.cToken = res.cToken;
      });
    },
    //显示或隐藏密码
    showPad () {
      this.eye = !this.eye;
      if (this.eye) {
        this.$refs.pwd.type = "password";
      } else {
        this.$refs.pwd.type = "text";
      }
    },
    //提交登录
    submit () {
      var _this = this;
      if (this.userName == "") {
        this.$Message.info("用户名不能为空");
      } else if (this.password == "") {
        this.$Message.info("密码不能为空");
      } else if (this.code == "") {
        this.$Message.info("验证码不能为空");
      } else {
        loginService.getCity().then(res => {
          localStorage.setItem('TENANTID', res.data.shopId);
          if (res.code === 0) {
            loginService
              .login(this.userName, this.password, this.code, this.cToken)
              .then(res => {
                if (res.code === 0) {
                  localStorage.setItem('logindata', res.data);
                  loginService.getUserInfo().then(res=>{
                       localStorage.setItem('userdata', JSON.stringify(res.data));
                      _this.$router.push('/index');
                  })
                 

                } else {
                  this.$Message.info("登录失败，请重新登录");
                }
              });

          } else {
            this.$Message.info("登录失败，请重新登录");
          }

        });

      }
    }
  }
};
</script>

<style scoped>
.login_bg {
  background-color: #3895e8;
  height: 100vh;
}
.login_bg .login_box {
  padding: 50px;
  background-color: #fff;
  width: 460px;
  position: absolute;
  left: 50%;
  margin-left: -230px;
  top: 50%;
  transform: translateY(-50%);
  height: 500px;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

.login_bg .login_box .login_title {
  color: #3895e8;
  text-align: center;
  margin-bottom: 20px;
}
.login_bg .login_box .login_notice {
  margin: 20px auto;
}
.login_bg .login_box span {
  font-size: 12px;
  color: #8d8d8d;
}
.ivu-btn {
  padding: 10px 0;
  border: none;
  font-weight: bold;
  font-size: 18px;
}
.login_box input {
  display: block;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  margin: 20px auto;
  width: 100%;
  padding: 10px;
  outline: none;
}
.login_box input::placeholder {
  color: #e5e5e5;
  font-size: 14px;
}
.login_box .code {
  border-bottom: 1px solid #e5e5e5;
  margin: 20px auto;
}
.login_box .code input {
  border: none;
  padding: 10px;
  margin: 0;
}
.login_box .code img {
  margin-bottom: 3px;
}

.pwd {
  font-size: 20px;
  padding-right: 20px;
  color: #dfdfdf;
}
.txt {
  font-size: 20px;
  padding-right: 20px;
  color: #4cd964;
}
</style>


