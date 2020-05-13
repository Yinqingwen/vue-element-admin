/*
 * @Author: your name
 * @Date: 2020-05-07 22:43:53
 * @LastEditTime: 2020-05-13 23:26:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin\src\utils\crypto-aes.js
 */

import CryptoJS from 'crypto-js'

var keySize = 256
var ivSize = 128
var saltSize = 256
var iterations = 1000

function hexToBase64(str) {
  return btoa(String.fromCharCode.apply(null,
    str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
  )
}

function base64ToHex(str) {
  for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
    var tmp = bin.charCodeAt(i).toString(16)
    if (tmp.length === 1) tmp = "0" + tmp
    hex[hex.length] = tmp
  }
  return hex.join("")
}

export default {
  
  encrypt(msg,pass) {
    var salt = CryptoJS.lib.WordArray.random(saltSize/8)
    var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize/32,
      iterations: iterations
    })
    var iv = CryptoJS.lib.WordArray.random(ivSize/8)
    var encrypted = CryptoJS.AES.encrypt(msg, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    })
  
    var encryptedHex = base64ToHex(encrypted.toString())
    var base64result = hexToBase64(salt + iv + encryptedHex)
  
    return base64result
  },

  decrypt (transitmessage, pass) {

    var hexResult = base64ToHex(transitmessage)
  
    var salt = CryptoJS.enc.Hex.parse(hexResult.substr(0, 64))
    var iv = CryptoJS.enc.Hex.parse(hexResult.substr(64, 32))
    var encrypted = hexToBase64(hexResult.substring(96))
  
    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: keySize/32,
        iterations: iterations
      })
  
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    })
  
    return decrypted.toString(CryptoJS.enc.Utf8)
  }
}
/*
function base64ToHex(str) {
  for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
    var tmp = bin.charCodeAt(i).toString(16)
    if (tmp.length === 1) tmp = "0" + tmp
    hex[hex.length] = tmp
  }
  return hex.join("")
}

function hexToBase64(str) {
  return btoa(String.fromCharCode.apply(null,
    str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
  )
}

export default {
  encrypt(msg, pass) {
    //alert(CryptoJS.AES.encrypt('Yinqingwen19690219', 'Yinqingwen19690219').toString())
    var salt = CryptoJS.lib.WordArray.random(saltSize / 8)

    var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize / 32,
      iterations: iterations
    })

    var iv = CryptoJS.lib.WordArray.random(ivSize / 8)

    var encrypted = CryptoJS.AES.encrypt(msg, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    })

    var encryptedHex = base64ToHex(encrypted.toString());
    var base64result = hexToBase64(salt + iv + encryptedHex);
    alert(encrypted)
    return base64result
  },

  decrypt(transitmessage, pass) {
    var decrypted = CryptoJS.TripleDES.decrypt(
      {
        ciphertext: CryptoJS.enc.Hex.parse('723024D59CF7801A295F81B9D5BB616E')
      }, 
      key, 
      { 
      iv : iv, 
      mode:CryptoJS.mode.CBC
      }
    )
    /*
    var hexResult = base64ToHex(transitmessage)

    var salt = CryptoJS.enc.Hex.parse(hexResult.substr(0, 64));
    var iv = CryptoJS.enc.Hex.parse(hexResult.substr(64, 32));
    var encrypted = hexToBase64(hexResult.substring(96));

    var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize / 32,
      iterations: iterations
    })

    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC

    })

    return decrypted.toString(CryptoJS.enc.Utf8)*/
  /*}

  
  // 加密函数
  /*encrypet(word, keystr) {
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
  }*/
/*}*/
