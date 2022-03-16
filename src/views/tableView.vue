<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="房号"/>
    <el-table-column prop="name" label="用电量"/>
    <el-table-column prop="address" label="用电消费（元）"/>
    <el-table-column prop="address" label="插座用电量"/>
    <el-table-column prop="address" label="插座消费（元）"/>
    <el-table-column prop="address" label="空调用电"/>
    <el-table-column prop="address" label="空调消费（元）"/>
  </el-table>
</template>

<script lang='ts' setup>
import {onBeforeMount, ref} from "vue";

// const item = {
//   date: '2016-05-02',
//   name: 'Tom',
//   address: 'No. 189, Grove St, Los Angeles',
// }
// const tableData = ref(Array.from({length: 20}).fill(item))


onBeforeMount(() => {
  console.log(`the component is now mounted.`)
})

</script>

<style lang='scss' scoped>
.el-table {
  margin-left: 20px;
}

</style>