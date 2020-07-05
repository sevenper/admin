<template>
  <div class="page">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
      style="width:500px"
    >
      <el-form-item label="项目" prop="project">
        <el-input v-model="ruleForm.project"></el-input>
      </el-form-item>
      <el-form-item label="uri" prop="uri">
        <el-input v-model="ruleForm.uri"></el-input>
      </el-form-item>
      <el-form-item label="method" prop="method">
        <el-select
          v-model="ruleForm.method"
          placeholder="请选择方法"
          style="width:100%"
        >
          <el-option
            v-for="item in urlData"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="requestBody" prop="requestBody">
        <el-input type="textarea" v-model="ruleForm.requestBody"></el-input>
      </el-form-item>
      <el-form-item label="responseBody" prop="responseBody">
        <el-input type="textarea" v-model="ruleForm.responseBody"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="info">
        <el-input type="textarea" v-model="ruleForm.info"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          确定
        </el-button>
        <el-button @click="$router.go(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      urlData: ["GET", "POST", "PUT", "DELETE"],
      ruleForm: {
        project: "",
        uri: "",
        method: "GET",
        requestBody: "",
        responseBody: "",
        info: ""
      },
      rules: {
        project: [
          { required: true, message: "请输入project", trigger: "blur" }
        ],
        uri: [{ required: true, message: "请输入uri", trigger: "blur" }],
        method: [
          { required: true, message: "请选择method", trigger: "change" }
        ],
        requestBody: [
          { required: true, message: "请输入requestBody", trigger: "blur" }
        ],
        responseBody: [
          { required: true, message: "请输入responseBody", trigger: "blur" }
        ]
      },
      detail: this.$route.query.detail
        ? JSON.parse(this.$route.query.detail)
        : null
    };
  },
  mounted() {
    const form = this.ruleForm;
    this.ruleForm = this.detail ? this.detail : form;
  },
  methods: {
    submitForm(formName) {
      let data = {
        ...this.ruleForm
      };
      if (this.detail) {
        data = {
          id: this.detail.id,
          ...data
        };
      }
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let res = null;
          if (this.detail) {
            res = await this.$http.put(`/api/mock/${this.detail.id}`, data);
          } else {
            res = await this.$http.post("/api/mock", data);
          }
          if (res.success) {
            this.$message.success(`${this.detail ? "编辑成功" : "创建成功"}`);
            this.$router.go(-1);
          }
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped></style>
