<template>

  <el-aside width="200px">
    <el-scrollbar>
      <h5 class="mb-2">Default colors</h5>
      <el-menu
          :default-openeds="['1', '3']"
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo"
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <message/>
            </el-icon>
            Navigator One
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <el-icon>
            <document/>
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-sub-menu index="5">
          <template #title>
            <el-icon>
              <setting/>
            </el-icon>
            Navigator Three
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="3-4">
            <template #title>Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon>
              <setting/>
            </el-icon>
            Navigator Three
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="3-4">
            <template #title>Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <el-icon>
              <setting/>
            </el-icon>
            Navigator Three
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="3-4">
            <template #title>Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>


</template>

<script lang='ts' setup>
import {ref} from 'vue'
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

<style lang='scss' scoped>
.el-aside {
  width: 240px;
  height: auto;
  background-color: #545c64;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
</style>