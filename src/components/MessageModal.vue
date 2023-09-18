<script setup>

    defineProps({
        message: String,
        messageError: Boolean
    })

</script>

<template>
    <div class='fixed text-center w-80 p-3 top-0 left-[40%] right-[60%] rounded-sm  text-white font-semibold tracking-wide text-lg z-40' :class="messageError ?  'bg-[#eb7575]': 'bg-[#7bc58b]'">
        <span>
            {{ message }}
        </span>
    </div>
</template>