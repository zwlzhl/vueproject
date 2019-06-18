import request from '@/utils/request'

 const api={
     islogin(){
         return request.get('/api/user/info')
     },
     userlogin(data){
         return request.post('/api/login',data)
     },
     tasklist(data){
         return request.get('/api/task/list',data)
     },
     overtimeDetail(data){
         return request.get('api/apply/overtime',data)
     },
     vacationDetail(data){
         return request.get('/api/apply/vacation',data)
     }
 }

 export default api;