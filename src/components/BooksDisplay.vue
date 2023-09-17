<script setup>
import BookItem from './BookItem.vue'

defineProps({
  books: Array
})
</script>

<template>
  <div class="h-full mt-2 flex items-center" v-if="books.length === 0">
    <h2 class="text-3xl font-semibold text-gray-600">Aún no has ingresado ningún libro</h2>
  </div>
  <ul v-else class="flex flex-col gap-3 mt-5 w-5/6">
    <BookItem
      v-for="(book, i) in books"
      :key="i"
      :book="book"
      @deleteBook="deleteBook"
      @handleIsRead="handleIsRead"
    />
  </ul>
</template>

<script>
export default {
  methods: {
    deleteBook(id) {
      this.$emit('deleteBook', id)
    },
    handleIsRead(id, isRead) {
      this.$emit('handleIsRead', id, isRead)
    }
  }
}
</script>
