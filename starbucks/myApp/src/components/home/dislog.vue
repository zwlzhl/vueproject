<template>
    <div class="dis" @click="dischange">
        <div class="bon">
            <dl @click="bonclick">
                <dd class="iconfont icon-jiabanshenqing l" @click="$router.push('/commit/overtime')"></dd>
                <dt>加班</dt>
            </dl>
            <dl>
                <dd class="iconfont icon-woyaoxiujia r" @click="$router.push('/commit/vacation')"></dd>
                <dt>休假</dt>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        bonclick: function() {
            this.$emit("fun", this.show)
        },
        dischange: function() {
            this.$emit("fun", this.show)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../uitls/font_dislog/iconfont.css';
.dis {
    width: 100%;
    height: 100%;
    background: rgba(000, 000, 000,.6);
    position: absolute;
    top: 0;
    left: 0;
    .bon {
        width: 100%;
        height: 200px;
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        dl {
            flex: 1;
            text-align: center;
            dd {
                font-size: 75px;
                border-radius: 50%;
                margin-top: 50px;
                margin-bottom: 10px;
                border-radius: 50%;
            }
            .l {
                color: #F0AF53;
            }
            .r {
                color: #78B66D;
            }
            dt {
                font-size: 30px;
            }
        }
    }
}
</style>
