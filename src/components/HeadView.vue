<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="toolbar">
    <el-dropdown>
      <el-icon style="margin-right: 8px; margin-top: 1px"
      >
        <setting
        />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>Tom</span>
  </div>

</template>

<script lang='ts' setup>
import {
  ArrowRight , Setting,
} from '@element-plus/icons-vue'

</script>

<style lang='scss' scoped>
$t-margin-top:20px;

.el-breadcrumb{
  float: left;
  margin-top: $t-margin-top + 4;
}
.toolbar {
  float: right;
  margin-top: $t-margin-top;
}


</style>