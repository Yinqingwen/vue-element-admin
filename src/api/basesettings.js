/*
 * @Author: your name
 * @Date: 2020-05-07 20:23:29
 * @LastEditTime: 2020-05-07 23:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin\src\api\basesetting.js
 */
import request from '@/utils/request'

export function getbasesettings() {
  return request({
    url: '/api/basesettings',
    method: 'get'
  })
}
