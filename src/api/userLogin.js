
import request from '../utils/request'
// 获取登录接口
export const longinApi = (formLabelAlign) => {
    return request('/user/v1/register/', 'post', formLabelAlign)
}