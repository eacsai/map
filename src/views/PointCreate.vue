<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="设备名称" prop="name">
      <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="经度" prop="log">
      <el-input v-model="ruleForm.log" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="纬度" prop="lng">
      <el-input v-model.number="ruleForm.lng"></el-input>
    </el-form-item>
    <el-form-item label="造价" prop="money">
      <el-input v-model.number="ruleForm.money"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("设备名称不能为空"));
      } else {
        callback();
      }
    };
    var checkLog = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var checkLng = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        callback();
      }
    };
    var checkMoney = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        log: "",
        lng: "",
        money: "",
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        log: [{ validator: checkLog, trigger: "blur" }],
        lng: [{ validator: checkLng, trigger: "blur" }],
        money: [{ validator: checkMoney, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          let item = this.ruleForm;
          console.log(item);
          this.$emit("form_data", item);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>