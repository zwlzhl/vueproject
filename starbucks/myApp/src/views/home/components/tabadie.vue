<template>
  <div class="adie">
    <div class="adie-left">
      
      <span
        :class="item.index === index ? 'adie-l' : ''"
        v-for="item in tabadie"
        :key="item.index"
        @click="click(item.index)"
      >{{item.title}}</span>
    </div>
    <div class="adie-right">
      <span>☶</span>
      <span class="adie-s">≡</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      tabadie: [
        {
          index: 0,
          title: "加班"
        },
        {
          index: 1,
          title: "休假"
        }
      ]
    };
  },
  methods: {
    click(index) {
        this.index = index
        this.$emit("tabadie", this.index)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../uitls/scss/_minix";
.adie {
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 20px;
  margin-left: 60px;
  .adie-left {
    width: 222px;
    height: 44px;
    display: flex;
    border-radius: 17px;
    overflow: hidden;
    border: 0.5px solid #0c6142;
    margin-left: 200px;
    span {
      flex: 1;
      line-height: 44px;
      text-align: center;
      color: #0c6142;
    }
    .adie-l {
      background: #0d6042;
      color: #fff;
    }
  }
  .adie-right {
    margin-left: 80px;
    line-height: 50px;
    span {
      display: inline-block;
      font-size: 40px;
      margin-left: 20px;
      color: #ccc;
    }
    .adie-s {
      font-size: 50px;
    }
  }
}
.active {
  background: #0d6042;
  color: #fff;
}
</style>
