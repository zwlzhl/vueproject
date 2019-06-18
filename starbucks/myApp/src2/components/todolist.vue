<template>
    <div>
		<div class="list">
				<h3>
					<p>KG19960705</p>
				<p>待审批</p>
				</h3>
				<div class="title">
					<p>申请人
						<em>KG</em>
					</p>
					<p>加班类型
						<em>工作日加班</em>
					</p>
					<p>加班日期
						<em>2019-06-10</em>
					</p>
				<p>加班时数
					<em>1</em>
				</p>
			</div>
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
    .list {
        width: 100%;
        display: flex;
        padding: 15px;
        box-sizing: border-box;
        flex-direction: column;
        background: #fff;
        margin: 15px 0;
    }

    .list h3 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: normal;
        color: #ccc;
    }

    .title {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .title p {
        width: 50%;
        margin: 10px 0;
        color: #666;
    }

    .title p em {
        font-style: normal;
        margin-left: 15px;
        font-weight: bolder;
        color: #000;
    }

</style>