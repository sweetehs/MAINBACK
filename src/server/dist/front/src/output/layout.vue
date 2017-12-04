<style lang="less">
    .layout-wrapper {                
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
</style>

<template>
    <div class="layout-wrapper" @click="clickEvent">
        <slot></slot>
    </div>
</template>

<script>
    export default {       
        methods: {
            clickEvent(event) {
                this.$emit("click", event)
            }
        }
    }
</script>