<template>
    <div class="wrap">
        <div class="top">
            <div class="head">
                <p @click="$router.back()">←</p>
                <p>同意</p>
                <p></p>
            </div>
        </div>
        <div class="content">
            <textarea v-model="text"></textarea>
        </div>
        <button @click="click">提交</button>
    </div>
</template>
<script>
import api from "@/api/";
export default {
    data() {
        return {
            text: "",
            option: {}
        }
    },
    created() {
        this.option = this.$route.params.approvallist
    },
    methods: {
        click() {
            this.option.remark = this.text
            api.approval({
                ...this.option
            }).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../uitls/scss/common";

.wrap {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.top {
  width: 100%;
  height: pxTorem(100px);
  background: #0b6242;
  border-bottom-left-radius: pxTorem(40px);
  border-bottom-right-radius: pxTorem(40px);
  .head {
    width: 90%;
    height: pxTorem(40px);
    display: flex;
    justify-content: space-between;
    line-height: pxTorem(40px);
    color: #fff;
    padding-top: pxTorem(5px);
    padding-left: pxTorem(15px);
    font-size: pxTorem(14px);
    
  }
}
.content {
    width: 90%;
    height: pxTorem(170px);
    background: #fff;
    margin-left: 5%;
    border-radius: pxTorem(20px);
    margin-top: pxTorem(-20px);
    textarea {
        width: 100%;
        height: 100%;
        padding-left: 10%;
        padding-top: 10%;
        font-size: pxTorem(14px);
        color: #ccc;
    }
}
button {
     width: 90%;
    height: pxTorem(50px);
    background: #0b6242;
    margin-left: 5%;
    margin-top: pxTorem(20px);
    color: #fff;
    font-size: pxTorem(14px);
    border-radius: pxTorem(5px)
}
</style>
