<template>
  <div class="r-big-box">
    <el-table :data="tableData" :height="tableHeight"
              :default-sort="{ prop: 'roomNumber', order: 'descending' }"
              :row-class-name="tableRowClassName"
              :cell-class-name="tableColClassName"
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
import {onBeforeMount, ref, computed, onUpdated} from "vue";
// import {useStore} from 'vuex'
// const store = useStore()
import {useElectricStoreStore} from '@/store/electricStore'

const useElectric = useElectricStoreStore()

let tableHeight = ref(600)
const fixedHeight = 170;

//表格prop对应接受数据的字面量即可
// const tableData = computed(() => store.state.electricStore.electricData.data)
const tableData = computed(() => useElectric.data.data)

//分页相关
const currentPage3 = ref(5)
const pageSize3 = ref(100)

//表格row上色
interface User {
  allPowerValue: number
  property: any
}

const tableRowClassName = ({row}: { row: User }) => {
  if (row.allPowerValue >= 95) {
    return 'danger-row'
  } else if (row.allPowerValue >= 90) {
    return 'warning-row'
  }
  return ''
}

//表格column上色
const tableColClassName = ({row, column, columnIndex}: {
  row: any; column: User; columnIndex: number
}) => {
  // console.log(row[column.property]);
  if (columnIndex === 1 && row[column.property] >= 95) {
    return 'danger-col-font'
  } else if (columnIndex === 1 && row[column.property] >= 90) {
    return 'warning-col-font'
  }
  return ''
}


onBeforeMount(() => {
  useElectric.rgElectricData_A();
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
  margin-right: 30px;
}

.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

//表格上变色
::v-deep(.el-table .warning-row) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

::v-deep(.el-table .danger-row) {
  --el-table-tr-bg-color: var(--el-color-danger-light-9);
}

::v-deep(.warning-col-font) {
  color: var(--el-color-warning);
}

::v-deep(.danger-col-font) {
  color: var(--el-color-danger);
}

</style>