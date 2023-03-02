<template>
  <template v-if="list.length > 0">
    <ul class="list">
      <li v-for="(listItem, listIndex) in list" :key="'list' + listIndex">
        {{ listItem.ToDoItem }}
      </li>
    </ul>
  </template>
  <template v-else>
    <article>검색결과가 없습니다.</article>
  </template>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
};
</script>

<style></style>
