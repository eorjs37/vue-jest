<template>
  <section>
    <article class="child-desc" @click="click">자식 article</article>
  </section>
</template>

<script>
export default {
  emits: ['childclick'],
  setup(_, { emit }) {
    const click = () => {
      emit('childclick');
    };

    return {
      click,
    };
  },
};
</script>

<style></style>
