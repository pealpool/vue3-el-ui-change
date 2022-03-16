<template>
  <el-container class="h-body">
    <left-view/>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <head-view/>
      </el-header>
      <right-view/>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import LeftView from '@/components/LeftView.vue';
import HeadView from "@/components/HeadView.vue";
import RightView from "@/components/RightView.vue";




</script>

<style scoped lang="scss">
.h-body {
  width: 100%;
  height: 100%;
  color: var(--el-text-color-primary);

  .el-main {
    padding: 0;
  }
  .el-header {
    position: relative;
  }
}

</style>