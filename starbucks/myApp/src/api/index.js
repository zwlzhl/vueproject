import request from '../uitls/request'
export const api = {
    //验证是否登录
    islogin: ()=>request.get("/api/user/info"),
    //登录
    userlogin: (data)=>request.post("/api/login", data),
    //主页数据
    tasklist: (data)=>request.get("/api/task/list", data),
    //详情：overtime 数据
    overtimedetial: (data)=>request.get("/api/apply/overtime", data),
    //详情：vacation 数据
    vacationdetial: (data)=>request.get("/api/apply/vacation", data),
    //上传附件
    submitfile: (filedata)=>request.post("/api/upload", filedata),
    //提交休假申请
    submittvacation: (data)=>request.post("/api/apply/vacation", data),
    //提交加班申请
    submittovertime: (data)=>request.post("/api/apply/overtime", data),
    //审批历史
    history: (data)=>request.get("/api/task/history", data),
    //同意审批
    approval: (data)=>request.post("/api/task/approval", data)
}
export default api