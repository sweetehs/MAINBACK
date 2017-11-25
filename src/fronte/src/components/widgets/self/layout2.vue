<style lang="less">
    .layout2-wrapper {
        height: 100%;
        box-sizing: border-box;
        display: flex;
    }
    
    .layout2-inner {
        flex: 1;
        border: 1px solid #eee;
        border-radius: 10px;
        margin-right: 10px;
        padding: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
</style>

<template>
    <div class="layout2-wrapper" @click="clickEvent">
        <div class="layout2-inner">
            <slot name="s1"></slot>
        </div>
        <div class="layout2-inner">
            <slot name="s2"></slot>
        </div>
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