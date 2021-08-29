import { api_url } from '$lib/util'

export async function post({body,headers}){
    const url = `${api_url}/save_expense/`
    const method = 'POST'
    console.log(body)
    const res = await fetch(url,{headers,method,body:JSON.stringify(body)})
    console.log(res.status)
    if(res.status==200){
        return {
            status : 200,
        }
    }else if(res.status==401){
        return {
            headers :{
                location:'/auth/api/logout'
            },
            status:302
        }
    }else{
        return {
            status:res.status,
            body  :await res.json()
        }
    }
    
}