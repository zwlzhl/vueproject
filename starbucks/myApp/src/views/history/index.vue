<template>
  <!-- <div v-if="lists == null">抱歉，没有审批历史！</div> -->
  <div class="wrap">
    <div class="top">
      <div class="head">
        <p @click="$router.back()">←</p>
        <p>审批历史</p>
        <p></p>
      </div>
    </div>
    <div class="content">
        <p>
          <span>申请人: </span>
          <span>{{name}}</span>
        </p>
    </div>
    <div class="cont" v-for="(item, i) in list" :key="i">
        <ul>
            <li>
                <span>姓名</span>
                <span>{{item.nickname}}</span>
            </li>
            <li>
                <span>手机号</span>
                <span>{{item.phone}}</span>
            </li>
            <li>
                <span>审批结果</span>
                <span>{{item.remark}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            name: ""
        }
    },
    created() {
    this.list = this.$route.params.lists
    this.name = this.$route.params.name
    console.log(this.list)
  }
};
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
  height: pxTorem(100px);
  background: #fff;
  margin-left: 5%;
  border-radius: pxTorem(20px);
  margin-top: pxTorem(-20px);
  p {
        color: #ccc;
        margin-left: 10%;
        padding-top: pxTorem(20px)
    }
}
.cont {
    width: 90%;
    height: pxTorem(70px);
    margin-left: 5%;
    border-radius: pxTorem(20px);
    margin-top: pxTorem(20px);
    ul {
        li {
            line-height: pxTorem(20px)
        }
    }
}
</style>
