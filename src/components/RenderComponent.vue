<template>
  <h1>Render Component</h1>
</template>

<script>
export default {
  setup() {
    const outerFunc = () => {
      console.log(`외부 함수 호출`);
    };

    outerFunc();
  },
};
</script>

<style></style>
