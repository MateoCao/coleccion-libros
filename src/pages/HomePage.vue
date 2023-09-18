<script setup>
import Navbar from '../components/NavComponent.vue'
import BooksDisplay from '../components/BooksDisplay.vue'
import AddBookDesktop from '../components/AddBookDesktop.vue'
import AddBookMobile from '../components/AddBookMobile.vue'
import PageFooter from '../commons/PageFooter.vue'
import localStorageHandler from '../utils/localStorageHandler.js'
import MessageModal from '../components/MessageModal.vue'
import ScrollToTopButton from '../components/ScrollToTopButton.vue'
</script>

<template>
  <header class="h-16 bg-black flex items-center">
    <h1 class="text-white font-bold text-3xl ml-5">BiblioTrack</h1>
    <Transition name="slideMessage">
      <MessageModal v-show="showMessage" :message="message" :messageError="messageError" />
    </Transition>
  </header>
  <main class="flex justify-center mt-6">
    <section
      class="flex flex-col items-center w-full lg:min-w-[850px] md:w-5/6 xl:w-2/3 min-h-[800px]"
    >
      <Navbar @openBookForm="toggleBookForm" @handleFilter="toggleFilter" />
      <BooksDisplay
        :books="filterBooks(books)"
        @deleteBook="deleteBook"
        @handleIsRead="handleIsRead"
      />
      <Transition name="fade">
        <AddBookDesktop
          v-show="showBookForm"
          :books="books"
          @closeBookForm="toggleBookForm"
          @addNewBook="addBook"
        />
      </Transition>

      <Transition name="slideForm">
        <AddBookMobile
          v-show="showBookForm"
          :books="books"
          @closeBookForm="toggleBookForm"
          @addNewBook="addBook"
        />
      </Transition>
    </section>
  </main>
  <ScrollToTopButton />
  <PageFooter />
</template>

<style>
.fade-enter-active {
  animation: fadeIn 300ms ease-in-out;
}

.fade-leave-active {
  animation: fadeOut 300ms ease-in-out;
}

.slideForm-enter-active {
  animation: slideInLeft 400ms ease-in-out;
}

.slideForm-leave-active {
  animation: slideOutLeft 400ms ease-in-out;
}

.slideMessage-enter-active {
  animation: slideDown 400ms ease-in-out;
}

.slideMessage-leave-active {
  animation: slideUp 400ms ease-in-out;
}

@keyframes slideInLeft {
  100% {
    transform: translateX(0);
  }
  0% {
    transform: translateX(100vw);
  }
}

@keyframes slideOutLeft {
  100% {
    transform: translateX(100vw);
  }
  0% {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slideDown {
  from {
    transform: translatey(-38px);
  }

  to {
    transform: translatey(0);
  }
}

@keyframes slideUp {
  from {
    transform: translatey(0);
  }

  to {
    transform: translatey(-55px);
  }
}
</style>

<script>
export default {
  data() {
    return {
      books: [],
      filteredBooks: [],
      filter: null,
      showBookForm: false,
      bookFormClass: '',
      showMessage: false,
      message: '',
      messageError: false
    }
  },
  created() {
    this.getBooks()
  },
  methods: {
    getBooks() {
      this.books = localStorageHandler.getBooks()
    },

    toggleFilter(currentFilter) {
      this.filter = currentFilter
    },

    filterBooks(books) {
      if (this.filter === null) return books
      return books.filter((book) => {
        return book.isRead === this.filter
      })
    },

    handleBookForm() {
      this.showBookForm = !this.showBookForm
    },

    addBook(newBook) {
      this.books.push(newBook)
      localStorageHandler.setBooks(this.books)
      this.openMessage('Libro añadido exitosamente')
    },

    deleteBook(id) {
      const index = this.books.findIndex((books) => books.id === id)
      if (index !== -1) {
        this.books.splice(index, 1)
        localStorageHandler.setBooks(this.books)
        this.openMessage('Libro eliminado exitosamente')
      } else {
        this.messageError = true
        this.openMessage('Error al eliminar el libro')
      }
    },

    handleIsRead(id, isRead) {
      const index = this.books.findIndex((books) => books.id === id)
      if (index !== -1) {
        this.books[index].isRead = !isRead
        localStorageHandler.setBooks(this.books)
      }
    },

    toggleBookForm() {
      this.showBookForm = !this.showBookForm
      if (!this.showBookForm) {
        document.documentElement.style.overflow = 'auto'
      } else {
        document.documentElement.style.overflow = 'hidden'
      }
    },
    openMessage(content) {
      this.showMessage = true
      this.message = content
      setTimeout(() => {
        this.showMessage = false
        this.messageError = false
      }, 3500)
    }
  }
}
</script>
