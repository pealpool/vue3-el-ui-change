<template>
  <div class="signBox">
    <h2>注册</h2>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        status-icon
    >
      <el-form-item :label-width="labelW" label="用户名" prop="name">
        <el-input v-model="ruleForm.name"/>
      </el-form-item>
      <el-form-item :label-width="labelW" label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off"/>
      </el-form-item>
      <el-form-item :label-width="labelW" label="再次确认" prop="checkPass">
        <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item :label-width="labelW" prop="type">
        <el-checkbox v-model="ruleForm.type" label="同意协议" name="type"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="toSignUp">登录</el-button>
        <el-button type="primary"
                   @click="submitForm(ruleFormRef)"
                   @keyup.enter="submitForm(ruleFormRef)">注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {ref, reactive, defineEmits} from 'vue'
import type {FormInstance} from 'element-plus'
const emit = defineEmits(['signChange'])
const ruleFormRef = ref<FormInstance>()
let labelW = '70px'

const validatePass = (rule: any, value: any, callback: any) => {
  console.log(1);
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  console.log(2);
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次输入不相同"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  type: []
})

const rules = reactive({
  name: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 3, max: 5, message: '长度必须为3-5', trigger: 'blur'},
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '需要先同意协议',
      trigger: 'change',
    },
  ],
  pass: [{validator: validatePass, trigger: 'blur'}],
  checkPass: [{validator: validatePass2, trigger: 'blur'}]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}


//触发子传父，转注册
function toSignUp() {
  emit('signChange', false)
}
</script>

<style scoped lang="scss">
.signBox{
  height: 370px;
}
</style>