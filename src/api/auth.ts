import request from '@/utils/request'
import { baseUrls } from './baseUrlConfig'

const authUrl = baseUrls.Auth;

export function Auth(data: object) {
    const params = {
        "client_id": "LimitPolicyClient",
        "client_secret": "aju",
        "grant_type": "password",
        "username": "jindefa",
        "password": "123456"
    };
    return request({
        url: authUrl + "/connect/token",
        method: 'post',
        params
    })
}

