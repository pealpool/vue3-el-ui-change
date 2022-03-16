<template>
  <div class="wb">
    <Transition name="si">
      <sign-in v-if="signC" @signChange="signChange"/>
    </Transition>
    <Transition name="su">
      <sign-up v-if="!signC" @signChange="signChange"/>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import SignIn from "@/views/SignPage/SignIn.vue";
import SignUp from "@/views/SignPage/SignUp.vue";
import {ref} from "vue";

let signC = ref(true);

function signChange(a: boolean) {
  signC.value = !a;
}
</script>

<style scoped lang="scss">

.wb {
  width: 100%;
  height: 100%;
  background-color: #f1f8ff;
  overflow: hidden;
  position: relative;
}

.signBox {
  width: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0.9px 2.2px 2.2px rgba(4, 52, 100, 0.02),
  2.2px 5.3px 5.3px rgba(4, 52, 100, 0.028),
  4.1px 9.9px 10px rgba(4, 52, 100, 0.035),
  7.4px 17.6px 17.9px rgba(4, 52, 100, 0.042),
  13.8px 33px 33.4px rgba(4, 52, 100, 0.05),
  33px 79px 80px rgba(4, 52, 100, 0.07);

  ::v-deep(h2) {
    text-align: center;
  }
}

$d-time:0.6s;

.si-leave-active,
.su-leave-active, {
  animation: s-leave $d-time cubic-bezier(0.96, -0.01, 1, 1);
}
@keyframes s-leave {
  20%{
    box-shadow: 0.9px 2.2px 2.2px rgba(4, 52, 100, 0.02);
    top: 52%
  }
  30%{
    box-shadow: 0.9px 2.2px 2.2px rgba(4, 52, 100, 0.02),
    2.2px 5.3px 5.3px rgba(0, 0, 0, 0.028);
    top: 50%;
    opacity: 1;
  }
  100%{
    box-shadow: 0.9px 2.2px 2.2px rgba(4, 52, 100, 0.02),
    2.2px 5.3px 5.3px rgba(4, 52, 100, 0.028),
    4.1px 9.9px 10px rgba(4, 52, 100, 0.035),
    7.4px 17.6px 17.9px rgba(4, 52, 100, 0.042),
    13.8px 33px 33.4px rgba(4, 52, 100, 0.05),
    33px 79px 80px rgba(4, 52, 100, 0.07);
    top: -100%;
    opacity: 0;
  }
}

.si-enter-active,
.su-enter-active, {
  animation: s-enter $d-time cubic-bezier(0.96, -0.01, 1, 1);
}
@keyframes s-enter {
  0%{
    box-shadow: 0.9px 2.2px 2.2px rgba(4, 52, 100, 0.02);
    top: 100%;
    opacity: 0;
  }
  70%{
    box-shadow: 0.9px 2.2px 2.2px rgba(4, 52, 100, 0.02),
    2.2px 5.3px 5.3px rgba(0, 0, 0, 0.028);
    top: 45%;
    opacity: 1;
  }
  100%{
    box-shadow: 0.9px 2.2px 2.2px rgba(0, 0, 0, 0.02),
    2.2px 5.3px 5.3px rgba(0, 0, 0, 0.028),
    4.1px 9.9px 10px rgba(0, 0, 0, 0.035),
    7.4px 17.6px 17.9px rgba(0, 0, 0, 0.042),
    13.8px 33px 33.4px rgba(0, 0, 0, 0.05),
    33px 79px 80px rgba(0, 0, 0, 0.07);
    top: 50%;
  }
}

</style>