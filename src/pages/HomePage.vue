<script setup>
import Navbar from '../components/NavComponent.vue'
import BooksDisplay from '../components/BooksDisplay.vue'
import AddBookDesktop from '../components/AddBookDesktop.vue'
import AddBookMobile from "../components/AddBookMobile.vue"
</script>

<template>
  <header class="h-16 bg-black flex items-center">
    <h1 class="text-white font-bold text-3xl ml-5">BiblioTrack</h1>
  </header>
  <main class="flex justify-center mt-6">
    <section class="flex flex-col items-center w-full lg:min-w-[850px] md:w-5/6 xl:w-2/3 min-h-[800px]">
      <Navbar @openBookForm="toggleBookForm" @handleFilter="toggleFilter" />
      <BooksDisplay
        :books="filterBooks(books)"
        @deleteBook="deleteBook"
        @handleIsRead="handleIsRead"
      />
      <AddBookDesktop
        v-show="showBookForm"
        :books="books"
        @closeBookForm="toggleBookForm"
        @addNewBook="addBook"
      />
      <AddBookMobile
        :class="showBookForm ? 'animate-slideOutLeft' : 'animate-slideOutLeft'" 
        v-show="showBookForm"
        :books="books"
        @closeBookForm="toggleBookForm"
        @addNewBook="addBook"
      />
    </section>
  </main>
  <footer class="bg-black h-10 mt-5"></footer>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      filteredBooks: [],
      filter: null,
      showBookForm: false
    }
  },
  created() {
    this.getBooks()
  },
  methods: {
    getBooks() {
      const booksStorage = localStorage.getItem('books')
      const savedBooks = JSON.parse(booksStorage)
      if (savedBooks) {
        this.books = savedBooks
      } else {
        return
      }
    },

    toggleFilter(currentFilter) {
      console.log(currentFilter)
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
      const booksStorage = JSON.stringify(this.books)
      localStorage.setItem('books', booksStorage)
    },

    deleteBook(id) {
      const index = this.books.findIndex((books) => books.id === id)
      if (index !== -1) {
        this.books.splice(index, 1)
        const booksStorage = JSON.stringify(this.books)
        localStorage.setItem('books', booksStorage)
      }
    },

    handleIsRead(id, isRead) {
      const index = this.books.findIndex((books) => books.id === id)
      if (index !== -1) {
        this.books[index].isRead = !isRead
        const booksStorage = JSON.stringify(this.books)
        localStorage.setItem('books', booksStorage)
      }
    },

    toggleBookForm() {
      this.showBookForm = !this.showBookForm
      if (this.showBookForm) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  }
}
</script>
