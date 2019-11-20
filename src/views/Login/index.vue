<template>
  <div class="pageFullScreen">
    <div class="login-wrapper">
      <h1>管理系统</h1>
      <el-form
        label-width="1px"
        :model="form"
        :rules="rules"
        ref="ruleForm"
        class="login-form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-button type="primary" class="login-btn" @click="submitForm"
          >login</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入用户名"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$router.push({ name: "home" });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped></style>
