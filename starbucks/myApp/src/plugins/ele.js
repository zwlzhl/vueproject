class Dislog {
    constructor(Vue) {
        this.AlertClass = Vue.extend(alertConfig)
        this.AlertComponent = null
    }
    init() {
        if(this.AlertComponent) {
            return this.AlertComponent
        } else {
            this.AlertComponent = new this.AlertClass()
            this.AlertComponent.$.mount()
            document.body.appendChild(this.AlertComponent.$el)
            return this.AlertComponent;
        }
    }
}
export default {
    install (Vue) {
        const dialog = new Dialog(Vue)
        Vue.prototype.$alert= (text) =>{
            dialog.init().alertOpen(text)
        }
    }
}