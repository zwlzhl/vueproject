<template>
    <div class="dialog" v-show="open">{{text}}</div>
</template>
<script>
export default {
    props: {
        text: String
    },
    data() {
        return {
            open: false,
            timer: null
        }
    },
    methods: {
        alertOpen(text) {
            this.text = text
            this.open = true
            this.timer = setTimeout(()=>{
                this.open = false
            }, 3000)
        }

        },
    destroyed() {
        clearTimeout(this.timer)
    }
}
</script>
<style lang="scss" scoped>
.dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .6);
    color: #fff;
    padding: pxTorem(20px);
    font-size: pxTorem(14px);
    z-index: 999;
}
</style>
