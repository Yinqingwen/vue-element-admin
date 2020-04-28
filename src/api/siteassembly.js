/*
 * @Author: your name
 * @Date: 2020-04-28 20:47:32
 * @LastEditTime: 2020-04-29 00:27:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin\src\api\SiteAssembly.js
 */
import request from '@/utils/request'

export function getsiteassembly() {
  return request({
    url: '/api/assembly',
    method: 'get'
  })
}
