<template>
  <div class="r-big-box">
    <el-table :data="tableData" :height="tableHeight"
              :default-sort="{ prop: 'roomNumber', order: 'descending' }"
              :row-class-name="tableRowClassName"
    >
      <el-table-column sortable="custom" align="center" prop="roomNumber" label="房号"/>
      <el-table-column sortable="custom" align="center" prop="allPowerValue" label="用电量"/>
      <el-table-column sortable="custom" align="center" prop="allPowerCost" label="用电消费（元）"/>
      <el-table-column sortable="custom" align="center" prop="socPowerValue" label="插座用电量"/>
      <el-table-column sortable="custom" align="center" prop="socPowerCost" label="插座消费（元）"/>
      <el-table-column sortable="custom" align="center" prop="airPowerValue" label="空调用电"/>
      <el-table-column sortable="custom" align="center" prop="airPowerCost" label="空调消费（元）"/>
    </el-table>
    <el-pagination
        v-model:currentPage="currentPage3"
        v-model:page-size="pageSize3"
        background
        layout="prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang='ts' setup>
import {onBeforeMount, ref, computed, reactive} from "vue";
import {useStore} from 'vuex'

const store = useStore()
let tableHeight = ref(600)
const fixedHeight = 170;

//表格prop对应接受数据的字面量即可
const tableData = computed(() => store.state.electricStore.electricData.data)

//分页相关
const currentPage3 = ref(5)
const pageSize3 = ref(100)

//表格警告上色
interface User {
  allPowerValue: number
}

//todo 未能上色
const tableRowClassName = (row: User) => {
  console.log(row);
  if (row.allPowerValue === 85) {
    console.log('danger-row');
    return 'danger-row'
  } else if (row.allPowerValue >= 50) {
    console.log('warning-row');
    return 'warning-row'
  }else{
    // console.log('aaaaaaaaa');
    return ''
  }
}

onBeforeMount(() => {
  store.dispatch('rgElectricData_A')
  tableHeight.value = window.innerHeight - fixedHeight;
})
window.onresize = function () {
  tableHeight.value = window.innerHeight - fixedHeight;
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

</script>

<style lang='scss' scoped>
.r-big-box {
  padding: 20px;
}

.el-pagination {
  float: right;
  margin-top: 20px;
  margin-right: 50px;
}

.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .danger-row {
  --el-table-tr-bg-color: var(--el-color-danger-light-9);
}
</style>