<template>
  <el-table :data="tableData">
    <el-table-column prop="roomNumber" label="房号"/>
    <el-table-column prop="allPowerValue" label="用电量"/>
    <el-table-column prop="allPowerCost" label="用电消费（元）"/>
    <el-table-column prop="socPowerValue" label="插座用电量"/>
    <el-table-column prop="socPowerCost" label="插座消费（元）"/>
    <el-table-column prop="airPowerValue" label="空调用电"/>
    <el-table-column prop="airPowerCost" label="空调消费（元）"/>
  </el-table>
  {{ count[0].id }}
</template>

<script lang='ts' setup>
import {onBeforeMount, ref, computed, reactive} from "vue";
import {useStore} from 'vuex'

const store = useStore()


// const item = {
//   date: '2016-05-02',
//   name: 'Tom',
//   address: 'No. 189, Grove St, Los Angeles',
// }
// const tableData = ref(Array.from({length: 20}).fill(item))
const count = computed(() => store.state.electricStore.electricData.data)
// const item = count
const tableData = ref(Array.from({length: 20}).fill(count))
//todo 表格填充


onBeforeMount(() => {
  store.dispatch('rgElectricData_A')
})

</script>

<style lang='scss' scoped>
.el-table {
  margin-left: 20px;
}

</style>