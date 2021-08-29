import {serialize} from 'cookie'
export async function get(){
    return {
        headers: {
			'set-cookie': serialize('jwt','deleted',{expires:new Date(0),path:'/'}),
            location:'/auth/login'
        },
        status:302
    }
}