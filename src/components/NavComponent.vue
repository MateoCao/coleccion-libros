<template>
  <nav class="h-12 w-full flex items-center gap-12 px-2 py-8 border-b-gray-700 border-b-2">
    <button
      @click="$emit('openBookForm')"
      class="bg-[#232323] hover:bg-black duration-300 rounded text-white font-semibold p-2"
    >
      Agregar nuevo libro
    </button>
    <select
      class="bg-[#232323] hover:bg-black duration-300 text-white font-semibold p-2 cursor-pointer"
      v-model="selectedFilter"
      @change="handleFilter"
      name="filter"
      id="book-filter"
    >
      <option class="hover:bg-black" value="all">Todos</option>
      <option value="read">Leídos</option>
      <option value="unread">No leídos</option>
    </select>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      selectedFilter: 'all',
      currentFilter: null
    }
  },
  methods: {
    handleFilter() {
      if (this.selectedFilter === 'read') {
        this.currentFilter = true
      } else if (this.selectedFilter === 'unread') {
        this.currentFilter = false
      } else {
        this.currentFilter = null
      }

      this.$emit('handleFilter', this.currentFilter)
    }
  }
}
</script>
