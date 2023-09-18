<template>
    <div
        class="fixed flex bg-[rgba(0,0,0,0.5)] justify-center items-center w-screen h-screen top-0 right-0"
      >
        <div class="flex flex-col bg-white relative bottom-20 gap-5 p-8 justify-center rounded">
          <h4 class="text-center text-xl">¿Estás seguro que deseas eliminar el libro?</h4>
          <div class="flex justify-center gap-3">
            <button
              @click="$emit('deleteBook')"
              class="bg-[#eb7575] hover:bg-[#b95d5d] duration-300 h-fit min-h-[40%] rounded text-white font-semibold p-2"
            >
              Confirmar
            </button>
            <button
              @click="$emit('toggleDeleteMessage')"
              class="bg-[#477ad1] hover:bg-[#3669c0] duration-300 h-fit min-h-[40%] rounded text-white font-semibold p-2"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
</template>