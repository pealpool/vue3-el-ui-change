<template>
  <el-container class="h-body">
    <left-view/>
    <el-container>
      <el-header>
        <head-view/>
      </el-header>
      <el-main>
        <el-scrollbar>
          <router-view/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import LeftView from '@/components/LeftView.vue';
import HeadView from "@/components/HeadView.vue";


</script>

<style scoped lang="scss">
.h-body {
  width: 100%;
  height: 100%;
  color: var(--el-text-color-primary);
}

.el-header {
  position: relative;
}

.el-main {
  padding: 0;
}


</style>