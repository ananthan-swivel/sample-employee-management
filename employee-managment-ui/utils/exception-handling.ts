export function exceptionHandling(rejectedResponse:any) {

    if (rejectedResponse === undefined || rejectedResponse === null) {
        return "Unable process data";
    } else if (rejectedResponse.data === undefined || rejectedResponse.data === null) {
        return "Unable process data";
    } else if (rejectedResponse.status === undefined || rejectedResponse.status === null) {
        return "Unable process data";
    } else if (rejectedResponse.status === 417) {
        return rejectedResponse.data.msg;
    } else if (rejectedResponse.status === 400) {
        return { msg: rejectedResponse.data.msg, error: rejectedResponse.data.error };
    } else if (rejectedResponse.status === 404) {
        return rejectedResponse.data.msg;
    } else if (rejectedResponse.status === 401) {
        return rejectedResponse.data.msg;
    }
}
