<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">Picker with quick options</span>
      <el-date-picker
          v-model="value2"
          type="date"
          placeholder="Pick a day"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
      >
      </el-date-picker>
    </div>
  </div>
  <div>{{value1}}，{{value2}}</div>
</template>

<script lang="ts" setup>
import {value1, value2, shortcuts, disabledDate} from '@/composables/datePicker';
</script>
<style scoped lang="scss">
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px getCssVar('border-color');
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
