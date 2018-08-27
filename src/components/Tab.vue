<template>
    <div id="Tab">
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    data(){
        return{
            show: true
        }
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>


