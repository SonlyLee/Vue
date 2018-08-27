<template>
    <div id="BaseInput">
        <!-- 具名插槽 -->
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BaseInput'
}
</script>
