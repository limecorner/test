<template>
  <div>
    <h3>{{ title }}</h3>
    <slot>default </slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
  setup(props) {
    // setup() receives props as the first argument.
    console.log(props.title);
  },
};
</script>
