import * as cookie from 'cookie';

export async function handle({ request, resolve }) {
	const cookies = cookie.parse(request.headers.cookie || '');
	if(cookies.jwt=='undefined'){cookies.jwt=undefined}
	const jwt = cookies.jwt && Buffer.from(cookies.jwt.split('.')[1], 'base64');
	request.locals.user = jwt ? JSON.parse(jwt) : undefined;	
	const response = await resolve(request)
	return response;
}

export function getSession({ locals }) {
	console.log('get session running',locals)
	return {
		user: locals.user && {
			username: locals.user.username,
		}
	};
}