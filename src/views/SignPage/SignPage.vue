<template>
  <div class="wp">
    <div class="signBox">
      <h2>登录</h2>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          :size="formSize"
      >
        <el-form-item :label-width="labelW" label="用户名" prop="name">
          <el-input v-model="ruleForm.name"/>
        </el-form-item>
        <el-form-item :label-width="labelW" label="密码" prop="password">
          <el-input :type="passw"
                    v-model.trim="ruleForm.password"
                    show-password
          />
        </el-form-item>
        <el-form-item :label-width="labelW" prop="type" label="密码">
          <el-checkbox v-model="ruleForm.type" label="同意协议" name="type"/>
        </el-form-item>
        <el-form-item>
          <el-button>注册</el-button>
          <el-button type="primary"
                     @click="submitForm(ruleFormRef)"
                     @keyup.enter="submitForm(ruleFormRef)">登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type {FormInstance} from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import {useStore} from 'vuex'
const router = useRouter()
const store = useStore()


const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  type: []
})
let passw = ref<string>('password')
let labelW: string
labelW = '70px'

const rules = reactive({
  name: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 3, max: 5, message: '长度必须为3-5', trigger: 'blur'},
  ],
  password: [
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
})


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      store.dispatch('setUserCookie_A')
      router.push({name: 'home'})
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped lang="scss">

.wp {
  background-color: #f1f8ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signBox {
  width: 450px;
  height: 350px;
  box-sizing: border-box;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0.9px 2.2px 2.2px rgba(0, 0, 0, 0.02),
  2.2px 5.3px 5.3px rgba(0, 0, 0, 0.028),
  4.1px 9.9px 10px rgba(0, 0, 0, 0.035),
  7.4px 17.6px 17.9px rgba(0, 0, 0, 0.042),
  13.8px 33px 33.4px rgba(0, 0, 0, 0.05),
  33px 79px 80px rgba(0, 0, 0, 0.07);

  h2 {
    text-align: center;
  }
}
</style>