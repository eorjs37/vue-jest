<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <child-component @childclick="onChildClick()"></child-component>
</template>
<script>
import ChildComponent from '@/components/ChildComponent.vue';
export default {
  components: {
    ChildComponent,
  },
  setup() {
    const onChildClick = () => {};
    return {
      onChildClick,
    };
  },
};
</script>
