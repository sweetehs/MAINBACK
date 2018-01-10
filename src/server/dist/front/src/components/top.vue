<style>
    .top-wrapper{
        padding: 0 10px;
    }
</style>

<template>
    <div class="top-wrapper">
        <div class="action">
            <el-select v-model="cview" placeholder="请选择" size="small" @change="viewChange">
                <el-option label="editor" value="editor"></el-option>
                <el-option label="ajax" value="ajax"></el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
    import event from "../util/event"
    export default{
        data(){
            return {
                cview:"editor"
            }
        },
        methods:{
            viewChange(){
                event.eventMiddle.$emit('changeview',this.cview)
            }
        }
    }
</script>