<template>
  <div class="wp">
    <Transition name="si">
      <sign-in v-if="signC" @signChange="signChange"/>
    </Transition>
    <Transition name="su">
      <sign-up v-if="!signC"/>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import SignIn from "@/views/SignPage/SignIn.vue";
import SignUp from "@/views/SignPage/SignUp.vue";
import {ref} from "vue";
let signC = ref(true) ;

function signChange(a: boolean) {
  if (a) {
    signC.value = false;
    console.log('++++',a);
  } else {
    signC.value = true;
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
.si-enter-active,
.si-leave-active,
.su-enter-active,
.su-leave-active,{
  transition: all 0.5s cubic-bezier(0.96, -0.01, 1, 1);
}

.su-enter-from {
  margin-bottom: -100%;
}
.si-leave-to {
  margin-top: -100%;
}

</style>