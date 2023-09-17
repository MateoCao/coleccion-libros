<script setup>
defineProps({
  book: Object
})
</script>

<template>
  <li :class="this.book.isRead ? 'bg-[#7bc58b]' : 'bg-white'" class="h-28 rounded flex">
    <div class="basis-2/12">
      <div class="mx-auto w-4/6 h-full p-1">
        <img class="h-full w-full" src="../assets/books/libro1.jpeg" alt="" />
      </div>
    </div>
    <div class="basis-6/12 flex justify-center flex-col gap-2">
      <h4 class="font-semibold text-2xl">{{ book.title }}</h4>
      <p>{{ book.author }}</p>
    </div>
    <div class="basis-4/12 flex gap-4 items-center justify-around text-sm">
      <button
        @click="handleIsRead"
        class="h-fit min-h-[40%] rounded text-white font-semibold p-1 w-[150px]"
        :class="
          this.book.isRead
            ? 'bg-[#477ad1] hover:bg-[#3669c0] duration-300'
            : 'bg-[#7bc58b] hover:bg-[#64a575] duration-300'
        "
      >
        {{ this.book.isRead ? 'Marcar como no leído' : 'Marcar como leído' }}
      </button>
      <button
        @click="toggleDeleteMessage"
        class="bg-[#eb7575] hover:bg-[#b95d5d] duration-300 h-fit min-h-[40%] rounded text-white font-semibold p-1"
      >
        Eliminar
      </button>
      <div
        v-show="deleteMessage"
        class="fixed flex bg-[rgba(0,0,0,0.5)] justify-center items-center w-screen h-screen top-0 right-0"
      >
        <div class="flex flex-col bg-white relative bottom-20 gap-5 p-8 justify-center rounded">
          <h4 class="text-center text-xl">¿Estás seguro que deseas eliminar el libro?</h4>
          <div class="flex justify-center gap-3">
            <button
              @click="deleteBook"
              class="bg-[#eb7575] hover:bg-[#b95d5d] duration-300 h-fit min-h-[40%] rounded text-white font-semibold p-2"
            >
              Confirmar
            </button>
            <button
              @click="toggleDeleteMessage"
              class="bg-[#477ad1] hover:bg-[#3669c0] duration-300 h-fit min-h-[40%] rounded text-white font-semibold p-2"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      deleteMessage: false
    }
  },

  methods: {
    deleteBook() {
      this.deleteMessage = false
      document.documentElement.style.overflow = 'auto'
      this.$emit('deleteBook', this.book.id)
    },

    handleIsRead() {
      this.$emit('handleIsRead', this.book.id, this.book.isRead)
    },

    toggleDeleteMessage() {
      this.deleteMessage = !this.deleteMessage
      console.log(this.deleteMessage)
      if (this.deleteMessage) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  }
}
</script>
