/*
 * @Author: your name
 * @Date: 2020-05-07 20:10:49
 * @LastEditTime: 2020-05-14 21:25:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin\mock\basesettings.js
 */
const basesettings = {
	"encryptionKey": "H8qeOyEgc61di0a1ZF0EQiwpI6S28tfT0CrV8404RgLEpoDQecn4Qe+g7W/8y2J0tqqH8YCNB1uoUUJM6IBeEv0lbFN4R/8y5zEwkrudxps=",
	"systemSettings": {
	  "companyName": "",
	  "companyLongName": ""
	},
	"weiXinSettings": {
	  "token": "aM7NMVweGphzRgR8QNJgL5wUHK1BXJHJA0d/nSKqbSUAHJveEFN2CbWDN8HhsGOz/F6b1dZYcW88BAexOyZQlZEiEqWDDtLr3cbZM0iCZIE=",
	  "encodingAESKey": "2iCsRYt6oHZ7a4NQayHmqpFWD7a1qwM/5X5pvmMEsQFva9y6oxDfgM1dYk1ufJxct8YmeIZVNNCvf3ZjOpU8K6pP8KXknwN86z/ZqdG6h5Q=",
	  "appId": "SbyiKrPBBMM0VSRHoDx5jrNj9uJlBXyfnGw0BLp0Al17pDzB5S9S4/M8iUQL7OLZo0OjW0YSLC6eQiULswu76GjVyEStbOg4xBtnPH4XnvE=",
	  "appSecret": "bU2zKQ2pMRgLZoxgGfmI0M3a3tPb5VD5TJP+UgSKsdbHHYo+sT5utpEZd3zxhkzypuFnV2+GbwrY5Ax9WlZh+CI3YL2aSg5FFqs6J92TlDWB+vgHrFUu5QeXe7lPw7S4"
	},
	"miniProgramSettings": {
	  "wxOpenAppId": "",
	  "wxOpenAppSecret": "",
	  "wxOpenToken": "",
	  "wxOpenEncodingAESKey": ""
	},
	"corporateWeChat": {
	  "weixinCorpId": "",
	  "weixinCorpAgentId": "",
	  "weixinCorpSecret": "",
	  "weixinCorpToken": "",
	  "weixinCorpEncodingAESKey": ""
	},
	"tenPaySettings": {
	  "tenPayV3_AppId": "",
	  "tenPayV3_AppSecret": "",
	  "tenPayV3_SubAppId": "",
	  "tenPayV3_SubAppSecret": "",
	  "tenPayV3_MchId": "",
	  "tenPayV3_SubMchId": "",
	  "tenPayV3_Key": "",
	  "tenPayV3_CertPath": "",
	  "tenPayV3_CertSecret": "",
	  "tenPayV3_TenpayNotify": "",
	  "tenPayV3_WxOpenTenpayNotify": ""
	},
	"openSettings": {
	  "component_Appid": "",
	  "component_Secret": "",
	  "component_Token": "",
	  "component_EncodingAESKey": ""
	}
  }

export default [
	{
		url: '/api/basesettings',
		type: 'get',
		response: _ => {
			return {
				code: 20000,
				data: basesettings
			}
		}
	}
]