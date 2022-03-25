<template>
  <img :src="s" alt="">
<!--  <img src="@/assets/logo.png" alt="">-->
</template>

<script lang='ts' setup>
import {onBeforeMount, onUpdated, ref} from "vue";

let s = ref('');

onBeforeMount(()=>{
  setTimeout(() => {
    s.value = '../logo.png';
    console.log(s.value);
  }, 3000);
/*  s.value = '../logo.png';
  console.log(s.value);*/
})
</script>

<style lang='scss' scoped>

</style>