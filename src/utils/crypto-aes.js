/*
 * @Author: your name
 * @Date: 2020-05-07 22:43:53
 * @LastEditTime: 2020-05-08 01:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin\src\utils\crypto-aes.js
 */
import CryptoJs from 'crypto-js'

export default {
  // 加密函数
  encrypet(word, keystr) {
    keystr = keystr || 'Yinqingwen19690219'
    var key = CryptoJs.enc.Utf8.parse(keystr)
    var srcs = CryptoJs.enc.Utf8.parse(word)
    var encrypted = CryptoJs.AES.encrypt(srcs, key, { mode: CryptoJs.mode.ECB, padding: CryptoJs.pad.Pkcs7 })
    return encrypted.toString()
  },
  // 解密函数
  decrypt(word, keystr) {
    keystr = keystr || 'Yinqingwen19690219'
    var key = CryptoJs.enc.Utf8.parse(keystr)
    let wordHexStr = CryptoJs.enc.Hex.parse(word)
    var decrypt = CryptoJs.AES.decrypt(wordHexStr, key, { mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 })
    console.log(decrypt)
    return CryptoJs.enc.Utf8.stringify(decrypt).toString()
  }
}
