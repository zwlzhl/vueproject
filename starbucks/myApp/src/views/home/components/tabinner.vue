<template>
  <div>
    <div class="inner" v-for="item in list" :key="item.applicationNumber">
      <div class="inner-y">
        <p class="l">{{item.applicationNumber}}</p>
        <p>
          <span :class='status === 0 ? "s" : status === 1 ? "ss" : "sss"'></span>
          <span class="l">{{status === 0 ? "待处理" : status === 1 ? "已发起" : "已处理"}}</span>
          
        </p>
      </div>
      <div class="inner-e" @click="$router.push({
        name: `detial`,
        params: {
          type: item.list_type,
          id: item.applicationNumber
        }
      })">
        <p>
          <span class="l">申请人</span>
          <span>{{item.nickname}}</span>
        </p>
        <p>
          <span class="l">加班类型</span>
          <span>{{showType(item.type, item.list_type)}}</span>
        </p>
      </div>
      <div class="inner-s">
        <p>
          <span class="l">加班日期</span>
          <span>{{new Date(item.startTime).toLocaleDateString()}}</span>
        </p>
        <p>
          <span class="l">加班时数</span>
          <span class="t">{{renderTime(item.startTime, item.endTime)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    },
    status: {
        type: Number
    }
  },
  data() {
      return {
          
      }
  },
    methods: {
      showType(type, title) {
        if(title === 'overtime') {
          switch(type) {
            case 1:
              return '双休日加班'
              case 2:
              return '节假日加班'
              case 3:
              return '工作日加班'
              default: 
              return "加班"
          }
        } else {
          switch(type) {
            case 1:
              return '年假'
              case 2:
              return '调休'
              default:
              return 
          }
        }
      },
      renderTime(start, end) {
        let start_num = new Date(new Date(start).toGMTString()) * 1
        let end_num = new Date(new Date(end).toGMTString()) * 1
        let time = (end_num - start_num) / 1000
        let day = (time/60/60/24).toFixed(2)
        return day

      }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../uitls/scss/_minix";
.inner {
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 20px -5px #f4f4f4;
  margin-top: 20px;
  div {
    width: 96%;
    padding: 2%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    .s {
      display: inline-block;
      width: 35px;
      height: 35px;
      background: #feda50;
      border-radius: 50%;
      margin-right: 20px;
    }
    .ss {
      display: inline-block;
      width: 35px;
      height: 35px;
      background: #CCB37D;
      border-radius: 50%;
      margin-right: 20px;
    }
    .sss {
      display: inline-block;
      width: 35px;
      height: 35px;
      background: green;
      border-radius: 50%;
      margin-right: 20px;
    }
    .l {
      color: #ccc;
      margin-right: 30px;
    }

    .t {
      margin-right: 110px;
    }
  }
}
</style>
