import {api_url} from '$lib/util'

export async function post({body}){
    const url = `${api_url}/login/`
    const method = 'post'
    const headers = {'content-type':'application/json'}
    body = JSON.stringify(body)
    const res = await fetch(url,{method,headers,body})
    const status  = res.status
    if(status==200){
        return {
            headers  :{
                'set-cookie':res.headers.get('set-cookie')
            },
            status:200
        }    
    }
    return {
        status:401
    }
}