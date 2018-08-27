<template>
    <div class="video-container">
        <div class="img-container"></div>
        <slot></slot>
    </div> 
</template>

<script>
export default {
    name: 'List',
    props: ['videoInfo'],
    data(){
        return{
            
        }
    }
}
</script>

