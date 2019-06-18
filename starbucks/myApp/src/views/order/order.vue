<template>
    <div>点击</div>
</template>
<script>
import {mapState, mapActions} from "vuex"
export default {
    computed: {
        ...mapState('user', ['userinfo'])
    },
    created() {
        this.getUserInfo()
    },
    methods: {
        ...mapActions('user', ['getUserInfo'])
    }
}
</script>
<style>

</style>

