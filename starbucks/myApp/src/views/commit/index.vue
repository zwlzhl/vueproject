<template>
  <div class="wrap">
    <div class="top">
      <div class="head">
        <p @click="$router.back()">←</p>
        <p>{{title}}</p>
        <p></p>
      </div>
      <div class="det">
        <div class="left">
          <img :src="userinfo.avatar" alt class="left_img">
        </div>
        <div class="middle">
          <ul>
            <li>
              <p>申请人姓名</p>
              <p>{{userinfo.nickname}}</p>
            </li>
            <li>
              <p>直接主管</p>
              <p class="p">秦毅超</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <p @click="$router.psuh()">></p>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>申请信息</h2>
      <div class="cont">
        <ul>
          <li>
            <p>{{tit}}日期</p>
            <p>
              <el-date-picker v-model="data"/>
            </p>
          </li>
          <li>
            <p>{{tit}}类型</p>
            <p>
              <select v-model="select">
                <option value="-1">默认</option>
                <option
                  :value="item.id"
                  v-for="item in this[types+'Type']"
                  :key="item.id"
                >{{item.name}}</option>
              </select>
            </p>
          </li>
          <li>
            <p>{{tit}}起始时间</p>
            <p>
              <el-time-picker v-model="startTime" placeholder="选择时间"></el-time-picker>
            </p>
          </li>
          <li>
            <p>{{tit}}截止时间</p>
            <p>
              <el-time-picker v-model="endTime" @change="endchange" placeholder="选择时间"></el-time-picker>
            </p>
          </li>
          <li>
            <p>共计时数</p>
            <p>{{num}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="cont2">
      <h2>加班事由</h2>
      <textarea v-model="text"></textarea>
    </div>
    <div class="cont3">
      <h2>上传附件</h2>
      <div>
        <span>+</span>
        <input type="file" @change="showfile">
      </div>
      <ul>
        <li v-for="(item, i) in images" :key="i">
          <span @click="images.splice(i, 1)">X</span>
          <img :src="'http://172.23.45.16:3000'+item" alt>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p class="btn_l" @click="$router.back()">取消</p>
      <p class="btn_r" @click="submitt">提交</p>
    </div>
    <dialog />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import api from "@/api/";
import ele from '../../plugins/ele';
import dialog from '../../components/dialog/disalog';
export default {
  props: {
    type: String
  },
  components: {
    dialog
  },
  data() {
    return {
      select: -1,
      text: "",
      types: "",
      data: "",
      startTime: "",
      endTime: "",
      num: "",
      overtimeType: [
        {
          id: 1,
          name: "双休日"
        },
        {
          id: 2,
          name: "节假日"
        },
        {
          id: 3,
          name: "工作日"
        }
      ],
      vacationType: [
        {
          id: 1,
          name: "年假"
        },
        {
          id: 2,
          name: "调休"
        }
      ],
      typelist: ["img", "jpg", "gif", "svg", "jpeg"],
      size: 3,
      images: []
    };
  },
  computed: {
    userinfo() {
      return this.$store.state.user.userinfo;
    },
    title() {
      return this.types === "overtime"
        ? "办公室加班申请表"
        : "办公室休假申请表";
    },
    tit() {
      return this.types === "overtime" ? "加班" : "休假";
    }
  },
  created() {
    this.getUserInfo();
    this.types = this.$route.params.type;
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    endchange() {
      let starttime = new Date(this.startTime) * 1;
      let endtime = new Date(this.endTime) * 1;
      let time = endtime - starttime;

      let num = (time / 1000 / 60 / 60).toFixed(2);
      if (num < 0) {
        alert("请选择正确的时间");
      }
      this.num = num;
    },
    showfile(e) {
      let userimg = e.target.files[0];
      let { size, name } = userimg;
      let imgtype = name.match(/\.(\w+)$/i)[1];
      let error = "";
      if (!this.typelist.includes(imgtype)) {
        error = `请上传${this.typelist.join()}格式的图片`;
      }
      if (this.size * 1024 * 1024 < size) {
        error = `请上传小于${this.size}的图片`;
      }
      if (error) {
        alert(error);
        return error;
      }
      let formdata = new FormData();
      formdata.append("file", userimg);
      api.submitfile(formdata).then(res => {
        this.images.push(res.url);
      });
    },
    submitt() {
      let options = {
        annex: this.images,
        describe: this.text,
        endTime: this.endTime,
        startTime: this.startTime,
        type: this.select
      };
      if (
        options.annex === "" ||
        options.describe === "" ||
        options.endTime === "" ||
        options.startTime === "" ||
        options.type === ""
      ) {
        alert("请完善信息在提交！");
      } else {
        api["submitt" + this.types](...options).then(res => {
          let { msg } = res;
          if (msg === "提交成功") {
            this.$router.back();
          } else {
            this.$alert(msg);
          }
        });
      }
    }
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
  height: pxTorem(140px);
  background: #0b6242;
  border-bottom-left-radius: pxTorem(40px);
  border-bottom-right-radius: pxTorem(40px);
  .head {
    width: 90%;
    height: pxTorem(50px);
    display: flex;
    justify-content: space-between;
    line-height: pxTorem(50px);
    color: #fff;
    padding-top: pxTorem(10px);
    padding-left: pxTorem(15px);
    font-size: pxTorem(14px);
  }
  .det {
    width: 100%;
    height: pxTorem(90px);
    display: flex;
    .left {
      flex: 2;
      .left_img {
        width: pxTorem(40px);
        height: pxTorem(40px);
        border-radius: 50%;
        background: #fff;
        margin-left: pxTorem(40px);
      }
    }
    .middle {
      flex: 7;
      ul {
        li {
          display: flex;
          color: #fff;
          padding-left: pxTorem(20px);
          p {
            text-align: center;
            margin-right: pxTorem(50px);
            font-size: pxTorem(10px);
            margin-bottom: pxTorem(10px);
          }
        }
      }
    }
    .right {
      flex: 1;
      p {
        color: #fff;
        font-size: pxTorem(16px);
      }
    }
  }
}
.content {
  width: 90%;
  height: pxTorem(170px);
  background: #fff;
  margin-left: 5%;
  border-radius: pxTorem(20px);
  margin-top: pxTorem(-20px);
  h2 {
    width: 94%;
    height: pxTorem(35px);
    padding-left: pxTorem(15px);
    line-height: pxTorem(40px);
    color: #727272;
    font-size: pxTorem(14px);
    border-bottom: pxTorem(1px) solid #f4f4f4;
  }
  .cont {
    width: 94%;
    padding-left: pxTorem(15px);
    ul {
      li {
        display: flex;
        justify-content: space-between;
        color: #bfbfbf;
        line-height: pxTorem(27px);
        p {
          select {
            width: pxTorem(110px);
            height: pxTorem(24px);
            font-size: pxTorem(12px);
          }
        }
      }
    }
  }
}
.cont2 {
  width: 90%;
  height: pxTorem(100px);
  background: #fff;
  margin-left: 5%;
  border-radius: pxTorem(20px);
  margin-top: pxTorem(10px);
  color: #6f6f6f;
  h2 {
    width: 90%;
    height: pxTorem(30px);
    border-bottom: pxTorem(1px) solid #f4f4f4;
    line-height: pxTorem(30px);
    font-size: pxTorem(14px);
    padding-left: pxTorem(20px);
  }
  textarea {
    width: 90%;
    height: pxTorem(65px);
    font-size: pxTorem(14px);
    padding-left: pxTorem(20px);
    padding-top: pxTorem(5px);
    color: #ccc;
  }
}
.cont3 {
  width: 90%;
  height: pxTorem(140px);
  background: #fff;
  margin-left: 5%;
  border-radius: pxTorem(20px);
  margin-top: pxTorem(10px);
  color: #6f6f6f;
  h2 {
    width: 90%;
    height: pxTorem(30px);
    border-bottom: pxTorem(1px) solid #f4f4f4;
    line-height: pxTorem(30px);
    font-size: pxTorem(14px);
    padding-left: pxTorem(20px);
  }
  ul {
    width: 100%;
    height: pxTorem(200px);
    display: flex;
    li {
      width: pxTorem(100px);
      height: pxTorem(200px);
      position: relative;
      margin-left: pxTorem(15px);
      img {
        max-height: pxTorem(190px);
        max-width: pxTorem(100px);
        margin-right: pxTorem(10px);
      }
      span {
        display: block;
        width: pxTorem(10px);
        height: pxTorem(10px);
        border-radius: 50%;
        border: pxTorem(1px) solid #ccc;
        position: absolute;
        right: pxTorem(-10px);
        top: 0;
      }
    }
  }
}
.bottom {
  width: 99%;
  height: pxTorem(50px);
  margin-top: pxTorem(65px);
  display: flex;
  border: pxTorem(1px) solid #ccc;
  p {
    line-height: pxTorem(50px);
    text-align: center;
  }
  .btn_l {
    flex: 3;
    color: #0b6242;
  }
  .btn_r {
    flex: 7;
    background: #0b6242;
    color: #fff;
  }
}
</style>
