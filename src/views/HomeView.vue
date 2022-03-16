<template>
  <el-container class="h-body">
    <left-view/>
    <el-container>
      <el-header>
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
}

.el-header {
  position: relative;
  background-color: #74758d;
}

.el-main {
  padding: 0;
}


</style>