<template>
  <div class="wp">
    <Transition>
      <sign-in @signChange="signChange"/>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import SignIn from "@/views/SignPage/SignIn.vue";
let signC: boolean = true;
function signChange(a: boolean) {
  if (a) {
    console.log('++++',a);
  } else {
    console.log('----',a);
  }
}

</script>

<style scoped lang="scss">

.wp {
  background-color: #f1f8ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>