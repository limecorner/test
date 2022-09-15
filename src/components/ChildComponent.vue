<template>
  <h2>父層</h2>
  <button @click="emitUpdateMsg">update</button>
  <grand-child-component />
</template>

<script>
import GrandChildComponent from "./../components/GrandChildComponent.vue";

export default {
  props: ["msg"],
  components: {
    GrandChildComponent,
  },
  setup(props, context) {
    // setup(props, { emit }) {
    function emitUpdateMsg() {
      context.emit("update-msg", "++");
      // emit("update-msg", "++");
    }

    console.log(props);
    console.log(props.msg);
    console.log(context);
    console.log(context.attrs);
    console.log(context.attrs.msg2);
    console.log(context.attrs.msg3);

    return {
      emitUpdateMsg,
    };
  },
};
</script>