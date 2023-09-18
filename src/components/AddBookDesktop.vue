<script setup>
defineProps({
  books: Array
})
</script>

<template>
  <div
    class="hidden md:flex fixed bg-[rgba(0,0,0,0.5)] justify-center items-center w-screen h-screen top-0 right-0"
  >
    <div class="flex flex-col relative bottom-16 bg-white rounded sm:w-[500px] gap-5 p-5">
      <div class="ml-auto">
        <span class="cursor-pointer text-2xl" @click="closeForm">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </span>
      </div>
      <div class="w-11/12">
        <form class="flex flex-col w-full gap-3" @submit.prevent="submitForm">
          <label class="text-xl" for="title">Titulo</label>
          <input
            class="border-b-[#232323] focus:border-b-[#2e4f88] duration-300 border-b-2 outline-none p-1 text-lg"
            type="text"
            placeholder="Veinte mil leguas de viaje submarino"
            name="title"
            id="title"
            v-model="title"
            maxlength="60"
            required
          />
          <label class="mt-3 text-xl" for="author">Autor</label>
          <input
            class="border-b-[#232323] focus:border-b-[#2e4f88] duration-300 border-b-2 outline-none p-1 text-lg"
            type="text"
            placeholder="Jules Verne"
            name="author"
            id="author"
            v-model="author"
            minlength="3"
            maxlength="40"
            required
          />
          <button
            class="bg-[#232323] hover:bg-black duration-300 rounded text-white font-semibold p-2 w-1/3 self-center mt-2"
            type="submit"
          >
            Añadir libro
          </button>
        </form>
      </div>
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
