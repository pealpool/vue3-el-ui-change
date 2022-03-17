<template>

  <el-aside width="200px">
    <el-scrollbar>
      <h5 >Default colors</h5>
      <el-menu
          :default-openeds="['1', '3']"
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo"
          default-active="2"
          background-color="none"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <message/>
            </el-icon>
            给水检测系统
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="1-1"
                          @click="toPage('table-view')">
              table-view
            </el-menu-item>
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
        <el-menu-item index="2">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span>用电检测系统</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document/>
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-sub-menu index="4">
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
      </el-menu>
    </el-scrollbar>
  </el-aside>


</template>

<script lang='ts' setup>
import {
  Message, Document, Menu as IconMenu, Setting,
} from '@element-plus/icons-vue'
import router from "@/router";

function toPage(path: string) {
  router.push({name: path});
}

//一级菜单打开响应
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
//一级菜单关闭响应
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

</script>

<style lang='scss' scoped>
.el-aside {
  width: 240px;
  height: 100%;
  background-color: #195a9b;
  box-sizing: border-box;

}

.el-menu {
  border-right-width: 0;
}


</style>