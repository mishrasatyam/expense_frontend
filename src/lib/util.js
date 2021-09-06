import {dev} from '$app/env'
export const api_url = dev?`http://localhost:8000`:'https://api.expense.satyam.life'
export const headers = {'content-type':'application/json'}