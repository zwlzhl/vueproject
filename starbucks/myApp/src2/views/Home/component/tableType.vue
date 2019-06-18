<template>
    <div>
        <div class="typeLink">
                <div></div>
                <div class="type">
                    <span id="active">加班</span>
                    <span>休假</span>
                </div>
                <dir>
                    <span>数量</span>
                    <span>排序</span>
                </dir>
           </div>
    </div>
</template>
<script>
export default {
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
    .typeLink{
                width: 100%;
                height: pxTorem(50px);
                display: flex;
                justify-content: space-around;
                align-items: center;
                
            }
            .type{
        width: pxTorem(100px);
        margin-left:pxTorem(70px);
        display: flex;
        overflow: hidden;
        border:solid 1px rgb(1, 104, 6);
        border-radius: pxTorem(50px);
        span{
            &:nth-child(1){
            border-right: solid 1px rgb(1, 104, 6)
            }
            color:rgb(1, 104, 6);
            width: pxTorem(50px);
            height: pxTorem(30px);
            display: flex;
            justify-content: center;
            align-items: center;
        }
}
   .con .typeLink .type #active{
        color:#fff;
        background: rgb(1, 104, 6);
    }
</style>