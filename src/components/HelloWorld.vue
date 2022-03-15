<template>
  <el-space wrap spacer="|">
    <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
      <template>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">

</style>
