<style>
    
</style>

<template>
    <div>
        <Stylec></Stylec>
    </div>
</template>

<script>    
    import Stylec from "./_style"
    export default {
        data() {            
            return {                 
                text:this.defaultData.text,               
                placeholder: this.defaultData.placeholder,
                type: this.defaultData.type,
                size: this.defaultData.size,
                readonly: this.defaultData.readonly
            };
        },       
        props:['defaultData','staticConfig'],
        components:{
            Stylec:Stylec
        },
        methods:{
            changeStatus(){
                this.$emit("changeStatus",{
                    text:this.text,
                    placeholder: this.placeholder,
                    type: this.type,
                    size: this.size,
                    readonly: this.readonly
                })            
            }
        }
    };
</script>

