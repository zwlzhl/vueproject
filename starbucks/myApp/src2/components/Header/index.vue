<template>
    <div id="Header">
        <span><</span>
        <span class="HText">加班/休假</span>
        <span><router-link to="/Search">搜索</router-link></span>
    </div>
</template>
<script>
export default {
    name:'Header',
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
   @import '@/static/common.scss';
    #Header{
        display: flex;
        height: pxTorem(40px);
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 pxTorem(15px);
        .HText{
            font-size: pxTorem(15px)
        }
    }
</style>