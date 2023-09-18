<script setup>
defineProps({
  books: Array
})
</script>

<template>
  <div
    class="flex flex-col md:hidden fixed h-screen w-screen left-0 top-0 m-0 p-0 z-50 bg-[#f0f0f0] text-black"
  >
    <div className="ml-full mr-0 w-auto">
      <span @click="closeForm" className="absolute right-3 top-2 text-3xl">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </span>
    </div>
    <div class="flex items-center justify-center h-4/6">
      <form class="flex flex-col w-5/6 gap-5" @submit.prevent="submitForm">
        <label class="text-xl" for="title">Titulo</label>
        <input
          class="border-b-[#232323] focus:border-b-[#2e4f88] bg-[#f0f0f0] h-14 duration-300 border-b-2 outline-none p-1 text-xl"
          type="text"
          placeholder="Veinte mil leguas de viaje submarino"
          name="title"
          id="title"
          v-model="title"
          required
        />
        <label class="mt-3 text-xl" for="author">Autor</label>
        <input
          class="border-b-[#232323] focus:border-b-[#2e4f88] bg-[#f0f0f0] h-14 duration-300 border-b-2 outline-none p-1 text-xl"
          type="text"
          placeholder="Jules Verne"
          name="author"
          id="author"
          v-model="author"
          required
        />
        <button
          class="bg-[#232323] hover:bg-black duration-300 rounded text-white font-semibold p-2 w-full self-center mt-5"
          type="submit"
        >
          Añadir libro
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      author: '',
      isRead: false
    }
  },
  methods: {
    submitForm() {
      const newBook = {
        id: this.books.length === 0 ? 1 : this.books[this.books.length - 1].id + 1,
        title: this.title,
        author: this.author,
        isRead: this.isRead
      }

      ;(this.title = ''), (this.author = '')

      this.$emit('addNewBook', newBook)
      this.$emit('closeBookForm')
    },
    closeForm() {
      this.$emit('closeBookForm')
      ;(this.title = ''), (this.author = '')
    }
  }
}
</script>
