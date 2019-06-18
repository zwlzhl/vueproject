<template>
    <div>
        <div class="navLink">
            <dl  
            v-for="item in menudata" :key='item.index'
            :class="{
                active:item.index===index
            }"
            @click="change(item.index)">
                <router-link :to="'/Home/'+item.path">
                        <dt></dt>
                        <dd>{{item.title}}</dd>
                </router-link>
            </dl>
            <!-- <dl>
                <router-link to="/Home/Initiate">
                        <dt></dt>
                        <dd>已发起</dd>
                </router-link>
            </dl>
            <dl>
                <router-link to="/Home/Processed">
                        <dt></dt>
                        <dd>已处理</dd>
                </router-link>
            </dl> -->
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
            index:0,
            menudata:[
                {
                    title:'待处理',
                    index:0,
                    path:'Pending'
                },{
                    title:'已发起',
                    index:1,
                    path:'Initiate'
                },{
                    title:'已处理',
                    index:2,
                    path:'Processed'
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        change(index){
            this.index=index;
            this.$emit('change',index)
        }
    },
    created(){
    
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '@/static/common.scss';
    .navLink{
            width: 100%;
            display: flex;
            height: pxTorem(100px);
            box-shadow: pxTorem(0px) pxTorem(7px) pxTorem(5px) #ddd;
            dl{
                width: 33.3%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                a{
                 display: flex;
                align-items: center;
                justify-content: center; 
                flex-direction: column;  
                }
                dt{
                    width: pxTorem(20px);
                    height: pxTorem(20px);
                    background: #ddd;
                    border-radius: 50%;
                    margin-bottom: pxTorem(10px);
                }
            }
           

        }
         dl.active{
                a{
                    dt{
                       background: rgb(1, 104, 6);
                    } 
                    dd{
                        color:rgb(1, 104, 6);
                    }
                }
            }
</style>