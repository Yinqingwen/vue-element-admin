import request from '@/utils/request'

export function getsiteassembly() {
  return request({
    url: '/api/assembly',
    method: 'get'
  })
}
