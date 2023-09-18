const STORAGE_KEY = 'books'

export default {
  getBooks() {
    try {
      const booksStorage = localStorage.getItem(STORAGE_KEY)
      return JSON.parse(booksStorage) || []
    } catch (error) {
      console.error('Error al obtener los libros del localStorage:', error)
      return []
    }
  },

  setBooks(books) {
    try {
      const booksStorage = JSON.stringify(books)
      localStorage.setItem(STORAGE_KEY, booksStorage)
    } catch (error) {
      console.error('Error al guardar los libros en el localStorage:', error)
    }
  }
}
