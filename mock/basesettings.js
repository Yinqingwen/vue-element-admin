/*
 * @Author: your name
 * @Date: 2020-05-07 20:10:49
 * @LastEditTime: 2020-05-07 23:02:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin\mock\basesettings.js
 */
const basesettings = {
	"encryptionKey": "rhrW4OfTjJq9ofLqAUpDMku4ob1s5P0NB3mXrYvRUy8=",
	"systemSettings": {
		"companyName": "name",
		"companyLongName": "LongName"
	},
	"weiXinSettings": {
		"token": "rhrW4OfTjJq9ofLqAUpDMku4ob1s5P0NB3mXrYvRUy8=",
		"encodingAESKey": "y8JkvxHSdkySNyZWJrNaM9d0Cx2Z4tOjB+D5XTQZDd0=",
		"appId": "V0Je4FX8RzvAgffh3kKBaUoyDP/+3l3E4RG6Lm+Y6pw=",
		"appSecret": "uMdkppipnfPmMsYjl8ovzT39UiuysU0FkjDTx2JhQevhe/uyXtCGfWNmGUveqUo7"
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