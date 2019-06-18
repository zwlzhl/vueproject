<template>
  <div class="nav">
    <dl :class="item.index===tabindex?'navActive':''" v-for="item in tabnav" :key="item.index" @click="navclick(item.index)">
      <dd :class="item.icon"  ></dd>
      <dt>{{item.title}}</dt>
    </dl>

  </div>
</template>
<script>
export default {
  data() {
    return {
      tabindex: 0,
      tabnav: [
        {
          index: 0,
          title: "待处理",
          icon: "iconfont icon-shijian"
        },
        {
          index: 1,
          title: "已发起",
          icon: "iconfont icon-zhifeiji"
        },
        {
          index: 2,
          title: "已处理",
          icon: "iconfont icon-wancheng"
        }
      ]
    }
  },
  methods: {
    navclick(index) {
      this.tabindex=index
      this.$emit("tabnav", this.tabindex)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../uitls/scss/_minix";
@import '../../../uitls/font-tannav/iconfont.css';
.nav {
  width: 100%;
  height: 140px;
  display: flex;
  color: #dddddd;
  dl {
    flex: 1;
    text-align: center;
    dd {
      font-size: 70px;
      border-radius: 50%;
      margin-top: 25px;
      margin-bottom: 10px;
      text-align: center;
    }
    dt {
      text-align: center;
      font-size: 30px;
    }
  }
}
.navActive {
  dd {
    color: #0d6042;
  }
  dt {
    color: #0d6042;
  }
}

</style>
