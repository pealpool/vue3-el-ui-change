<template>
  <el-container class="h-body">
    <left-view/>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
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
      </el-header>

      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140"/>
            <el-table-column prop="name" label="Name" width="120"/>
            <el-table-column prop="address" label="Address"/>
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import LeftView from '@/components/LeftView'
import {
  Message, Menu as IconMenu, Setting, Location, Document,
} from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({length: 20}).fill(item))

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.h-body {
  width: 100%;
  height: 100%;
  color: var(--el-text-color-primary);

  .el-header {
    position: relative;
  }


  .el-menu {
    border-right: none;
  }

  .el-main {
    padding: 0;
  }

  .toolbar {
    position: absolute;
    display: inline-flex;
    align-items: center;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}

</style>