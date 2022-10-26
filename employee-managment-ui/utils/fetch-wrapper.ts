import { ApiResponseInterface } from "../interfaces";
import http from "./api-handler";


export async function get(url: string) {
    const response = await http().get(url).then(function (response) {
        const data: ApiResponseInterface = {
            msg: response.data['message'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        if (error.response !== undefined) {
            const data: ApiResponseInterface = {
                msg: error.response.data.msg,
                code: error.response.status,
                data:  error.response.data.data,
                error: error.response.data.error,
                success: false
            }
        return data;

        }else{
            const data: ApiResponseInterface = {
                msg: 'something went wrong please try again',
                code: 500,
                data:  null,
                error: error,
                success: false
            }
        return data;

        }
        
    });
    return response;
}

export async function post(url: string, body: any) {
    const response = await http().post(url, body).then(function (response) {
        
        const data: ApiResponseInterface = {
            msg: response.data['msg'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        if (error.response !== undefined) {
            const data: ApiResponseInterface = {
                msg: error.response.data.msg,
                code: error.response.status,
                data:  error.response.data.data,
                error: error.response.data.error,
                success: false
            }
        return data;

        }else{
            const data: ApiResponseInterface = {
                msg: 'something went wrong please try again',
                code: 500,
                data:  null,
                error: error,
                success: false
            }
        return data;

        }

    });
    return response;
}

export async function filePost(url: string, body: any,onUploadProgress:any) {
    const response = await http().post(url, body,onUploadProgress).then(function (response) {
        
        const data: ApiResponseInterface = {
            msg: response.data['msg'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        if (error.response !== undefined) {
            const data: ApiResponseInterface = {
                msg: error.response.data.msg,
                code: error.response.status,
                data:  error.response.data.data,
                error: error.response.data.error,
                success: false
            }
        return data;

        }else{
            const data: ApiResponseInterface = {
                msg: 'something went wrong please try again',
                code: 500,
                data:  null,
                error: error,
                success: false
            }
        return data;

        }

    });
    return response;
}

export async function put(url: string, body: any) {
    const response = await http().put(url, body).then(function (response) {
        const data: ApiResponseInterface = {
            msg: response.data['msg'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        if (error.response !== undefined) {
            const data: ApiResponseInterface = {
                msg: error.response.data.msg,
                code: error.response.status,
                data:  error.response.data.data,
                error: error.response.data.error,
                success: false
            }
        return data;

        }else{
            const data: ApiResponseInterface = {
                msg: 'something went wrong please try again',
                code: 500,
                data:  null,
                error: error,
                success: false
            }
        return data;

        }
    });
    return response;
}

export async function deleteMethod(url: string) {
    const response = await http().delete(url).then(function (response) {
        const data: ApiResponseInterface = {
            msg: response.data['msg'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        if (error.response !== undefined) {
            const data: ApiResponseInterface = {
                msg: error.response.data.msg,
                code: error.response.status,
                data:  error.response.data.data,
                error: error.response.data.error,
                success: false
            }
        return data;

        }else{
            const data: ApiResponseInterface = {
                msg: 'something went wrong please try again',
                code: 500,
                data:  null,
                error: error,
                success: false
            }
        return data;

        }
    });
    return response;
}
