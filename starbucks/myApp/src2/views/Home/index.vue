<template>
    <div id="Home">
        <Header></Header>
       <!-- <router-link to="/page">tianzhuan</router-link> -->
       <tableMenu @change="menuchange"></tableMenu>
       <div class="con">
           <tableType></tableType>
           <router-view></router-view>
       </div>
       <div class="btn">
           <button>发起任务</button>
       </div>
       <popUp :show="false"></popUp>
    </div>
</template>
<script>
import tableMenu from './component/tableMenu.vue'
import tableType from './component/tableType.vue'
import  api from '@/api/'
export default {
    name: 'Home',
    props:{

    },
    components:{
        tableMenu,
        tableType
    },
    data(){
        return {
            tableoption:{
                index:0,
                type:'overtime',
                create_at:0,
                pageSize:10,
                page:1
            }
        }
    },
    computed:{

    },
    created(){
        console.log(1)
         api.tasklist({...this.tableoption}).then(res=>{
             console.log(res, 1)
         })
        //this.getTaskList()
    },  
    methods:{
        menuchange(index){
            this.tableoption.status=index;
        },
        // getTaskList(){
        //     request.get('/api/task/list',{
        //         ...this.tableoption
        //     }).then(res=>{
        //         console.log(res)
        //     })
        // }
    },
    
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '@/static/common.scss';
    #Home{
        width: 100%;
        height: 100%;
        position: relative;
        .btn{
            width: pxTorem(100px);
            height: pxTorem(40px);
            border-radius: pxTorem(40px);
            overflow: hidden;
            position: absolute;
            right: pxTorem(10px);
            bottom: pxTorem(10px);
            button{
                width: 100%;
                height: 100%;
                font-size: pxTorem(15px);
                color: #fff;
                
                background: rgb(1, 104, 6);
            }
        }
    }
   
</style>