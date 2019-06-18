<template>
  <div class="wrap">
    <div class="head">
      <div class="top">
        <p class="top-l">
          <b>←</b>
        </p>
        <p class="tit">
          <b>加班/休假</b>
        </p>
        <p class="icon">
          <span class="iconfont icon-rili"></span>
          <span class="iconfont icon-sousuo"></span>
        </p>
      </div>
      <tabnav @tabnav="tabClick"></tabnav>
    </div>
    <div class="content">
      <tabadie @tabadie="tabadie"></tabadie>
      <div class="cont">
        <tabinner :list="list" :status="tablist.status"></tabinner>
      </div>
    </div>
    <div class="btn" @click="click">
      <span class="btn-l">+</span>
      <span>发起任务</span>
    </div>
    <dislog v-if="show" @fun="child"/>
  </div>
</template>
<script>
import dislog from "../../components/home/dislog.vue";
import tabnav from "./components/tabnav.vue";
import tabadie from "./components/tabadie";
import tabinner from "./components/tabinner";
import api from "@/api/";
import {mapState, mapActions} from "vuex"
export default {
  name: "home",
  data() {
    return {
      show: false,
      tablist: {
        status: 0,
        page: 1,
        pageSize: 100,
        type: "overtime",
        create_at: 0
      },
      list: []
    };
  },
  components: {
    dislog,
    tabnav,
    tabadie,
    tabinner
  },
  computed: {
    ...mapState('user', ['userinfo'])
  },
  created() {
    this.axios()
    this.getUserInfo()
  },
  methods: {
    ...mapActions('user', ['getUserInfo']),
    tabClick(data) {
      this.tablist.status = data;
      this.axios()
    },
    tabadie(data){
      if(data === 1) {
        this.tablist.type = "vacation"
        this.axios()
      } else {
        this.tablist.type = "overtime"
        this.axios()
      }
    },
    click() {
      this.show = true;
    },
    child(data) {
      this.show = data;
    },
    axios(){
    api.tasklist({
        ...this.tablist

      })
      .then(res => {
        this.list = res.data;
        console.log(this.list);
      });
  }
  }

  
};
</script>
<style lang="scss" scoped>
@import "../../uitls/scss/_minix.scss";
@import "../../uitls/font_1221609_28lze41vpuq/iconfont.css";
html,
body {
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .head {
    width: 100%;
    height: 240px;
    box-shadow: 0 50px 50px -5px #f4f4f4;
    .top {
      width: 94%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      font-size: 30px;
      padding: 0 2%;
      margin-top: 10px;
      .top-l {
        font-size: 40px;
      }
      .tit {
        margin-left: 140px;
      }
      .icon {
        span {
          font-size: 40px;
          margin-left: 20px;
        }
      }
    }
  }
  .content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    .cont {
      flex: 1;
      overflow-y: auto;
      color: #747474;
    }
  }
  .btn {
    width: 300px;
    height: 100px;
    border-radius: 50px;
    background: #0d6042;
    position: fixed;
    right: 40px;
    bottom: 80px;
    span {
      display: inline-block;
      line-height: 100px;
      font-size: 35px;
      color: #ffffff;
    }
    .btn-l {
      margin-left: 50px;
      margin-right: 20px;
      font-size: 45px;
    }
  }
}
</style>
