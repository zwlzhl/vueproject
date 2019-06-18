<template>
    <div>
        <div class="mark" v-show="this.show">
            <div class="mark_bg">
                <div class="mark_text">
                    <dl>
                        <dt></dt>
                        <dd>加班</dd>
                    </dl>
                    <dl>
                        <dt></dt>
                        <dd>休假</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        show:{
          type:Boolean,
          default:false
        }

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
    .mark{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        left: 0;
        background: rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .mark_text{
            width: 100%;
            height: pxTorem(100px);
            background: #fff;
            flex: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
            dt{
                width: pxTorem(30px);
                height: pxTorem(30px);
                background: #ccc;
                border-radius: 50%;
            }
            dd{
                text-align: center;
                margin-top: pxTorem(10px);
            }
        }
    }
</style>