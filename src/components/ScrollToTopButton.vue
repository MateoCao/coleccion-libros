<template>
    <div
        ref="scrollTopButton"
        class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition"
    >
        <div
            class="flex items-center justify-center text-white text-xl md:text-2xl transition bg-[#232323] hover:bg-black rounded-full w-10 h-10 md:w-12 md:h-12 "
        >
            <button @click="scrollToTop">
                <font-awesome-icon :icon="['fas', 'chevron-up']" />
            </button>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue"
 
    export default defineComponent({
        mounted() {
            window.addEventListener("scroll", this.handleScroll)
        },
 
        beforeUnmount() {
            window.removeEventListener("scroll", this.handleScroll)
        },
 
        methods: {
            handleScroll() {
                const scrollBtn = this.$refs.scrollTopButton;
 
                if (window.scrollY > 0) {
                    scrollBtn.classList.remove("invisible");
                } else {
                    scrollBtn.classList.add("invisible");
                }
            },
            scrollToTop() {
                window.scrollTo({ top: 0, behavior: "smooth" })
            },
        },
    });
</script>