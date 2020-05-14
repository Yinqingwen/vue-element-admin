<!--
 * @Author: 尹庆文
 * @Date: 2020-04-30 21:19:45
 * @LastEditTime: 2020-05-14 23:57:40
 * @LastEditors: Please set LastEditors
 * @Description: 微信基本设置信息
 * @FilePath: \vue-element-admin\src\views\MPInfo\Base.vue
 -->
<template>
  <el-form ref="form" :model="formdata" label-position="right" label-width="16em" class="form">
    <el-row>
      <el-tabs id="tabnav" :tab-position="tabPosition">
        <el-tab-pane id="base" label="基础信息">
          <el-form-item label="公司名称">
            <el-input v-model="formdata.systemSettings.companyLongName" />
          </el-form-item>
          <el-form-item label="公司简称">
            <el-input v-model="formdata.systemSettings.companyName" />
          </el-form-item>
          <el-form-item label="加密公钥">
            <el-input v-model="formdata.encryptionKey" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="公众号">
          <el-form-item label="AppId">
            <el-input v-model="formdata.weiXinSettings.appId" />
          </el-form-item>
          <el-form-item label="AppSecret">
            <el-input v-model="formdata.weiXinSettings.appSecret" />
          </el-form-item>
          <el-form-item label="Token">
            <el-input v-model="formdata.weiXinSettings.token" />
          </el-form-item>
          <el-form-item label="EncodingAESKey">
            <el-input v-model="formdata.weiXinSettings.encodingAESKey" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="小程序">
          <el-form-item label="WxOpenAppId">
            <el-input v-model="formdata.miniProgramSettings.wxOpenAppId" />
          </el-form-item>
          <el-form-item label="WxOpenAppSecret">
            <el-input v-model="formdata.miniProgramSettings.wxOpenAppSecret" />
          </el-form-item>
          <el-form-item label="WxOpenToken">
            <el-input v-model="formdata.miniProgramSettings.wxOpenToken" />
          </el-form-item>
          <el-form-item label="WxOpenEncodingAESKey">
            <el-input v-model="formdata.miniProgramSettings.wxOpenEncodingAESKey" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="企业微信">
          <el-form-item label="WeixinCorpId">
            <el-input v-model="formdata.corporateWeChat.weixinCorpId" />
          </el-form-item>
          <el-form-item label="WeixinCorpAgentId">
            <el-input v-model="formdata.corporateWeChat.weixinCorpAgentId" />
          </el-form-item>
          <el-form-item label="WeixinCorpSecret">
            <el-input v-model="formdata.corporateWeChat.weixinCorpSecret" />
          </el-form-item>
          <el-form-item label="WeixinCorpToken">
            <el-input v-model="formdata.corporateWeChat.weixinCorpToken" />
          </el-form-item>
          <el-form-item label="WeixinCorpEncodingAESKey">
            <el-input v-model="formdata.corporateWeChat.weixinCorpEncodingAESKey" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="微信支付">
          <el-form-item label="TenPayV3_AppId">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_AppId" />
          </el-form-item>
          <el-form-item label="TenPayV3_AppSecret">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_AppSecret" />
          </el-form-item>
          <el-form-item label="TenPayV3_SubAppId">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_SubAppId" />
          </el-form-item>
          <el-form-item label="TenPayV3_SubAppSecret">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_SubAppSecret" />
          </el-form-item>
          <el-form-item label="TenPayV3_MchId">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_MchId" />
          </el-form-item>
          <el-form-item label="TenPayV3_SubMchId">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_SubMchId" />
          </el-form-item>
          <el-form-item label="TenPayV3_Key">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_Key" />
          </el-form-item>
          <el-form-item label="TenPayV3_CertPath">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_CertPath" />
          </el-form-item>
          <el-form-item label="TenPayV3_CertSecret">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_CertSecret" />
          </el-form-item>
          <el-form-item label="TenPayV3_TenpayNotify">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_TenpayNotify" />
          </el-form-item>
          <el-form-item label="TenPayV3_WxOpenTenpayNotify">
            <el-input v-model="formdata.tenPaySettings.tenPayV3_WxOpenTenpayNotify" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="开放平台">
          <el-form-item label="Component_Appid">
            <el-input v-model="formdata.openSettings.component_Appid" />
          </el-form-item>
          <el-form-item label="Component_Secret">
            <el-input v-model="formdata.openSettings.component_Secret" />
          </el-form-item>
          <el-form-item label="Component_Token">
            <el-input v-model="formdata.openSettings.component_Token" />
          </el-form-item>
          <el-form-item label="Component_EncodingAESKey">
            <el-input v-model="formdata.openSettings.component_EncodingAESKey" />
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row>
      <el-button-group>
        <el-button type="primary" @click="onSubmit">保存数据</el-button>
        <el-button>取消</el-button>
      </el-button-group>
    </el-row>
  </el-form>
</template>

<style scoped>
#tabnav {
  margin-bottom: 2em;
}
#base {
  margin: 0.5em;
}
.form {
  margin: 1em;
}
</style>

<script>
import { getbasesettings } from '@/api/basesettings'
import aes from '@/utils/crypto-aes'

export default {
  data() {
    return {
      tabPosition: 'left',
      formdata: null
    }
  },
  mounted: function() {
    getbasesettings().then(response => {
      // 首先解密密钥供下面使用
      response.data.encryptionKey = aes.AESDecrypt(response.data.encryptionKey, 'Yinqingwen19690219')
      // 系统设置信息
      response.data.systemSettings.companyName = '' || response.data.systemSettings.companyName
      response.data.systemSettings.companyLongName = '' || response.data.systemSettings.companyLongName
      // 获取公众号设置信息，不为空则解密
      response.data.weiXinSettings.appId = '' || aes.AESDecrypt(response.data.weiXinSettings.appId, response.data.encryptionKey)
      response.data.weiXinSettings.appSecret = '' || aes.AESDecrypt(response.data.weiXinSettings.appSecret, response.data.encryptionKey)
      response.data.weiXinSettings.token = '' || aes.AESDecrypt(response.data.weiXinSettings.token, response.data.encryptionKey)
      response.data.weiXinSettings.encodingAESKey = '' || aes.AESDecrypt(response.data.weiXinSettings.encodingAESKey, response.data.encryptionKey)
      // 获取小程序设置，不为空则解密
      response.data.miniProgramSettings.wxOpenAppId = '' || aes.AESDecrypt(response.data.miniProgramSettings.wxOpenAppId, response.data.encryptionKey)
      response.data.miniProgramSettings.wxOpenAppSecret = '' || aes.AESDecrypt(response.data.miniProgramSettings.wxOpenAppSecret, response.data.encryptionKey)
      response.data.miniProgramSettings.wxOpenToken = '' || aes.AESDecrypt(response.data.miniProgramSettings.wxOpenToken, response.data.encryptionKey)
      response.data.miniProgramSettings.wxOpenEncodingAESKey = '' || aes.AESDecrypt(response.data.miniProgramSettings.wxOpenEncodingAESKey, response.data.encryptionKey)
      // 企业微信设置，不为空则解密
      response.data.corporateWeChat.weixinCorpId = '' || aes.AESDecrypt(response.data.corporateWeChat.weixinCorpId, response.data.encryptionKey)
      response.data.corporateWeChat.weixinCorpAgentId = '' || aes.AESDecrypt(response.data.corporateWeChat.weixinCorpAgentId, response.data.encryptionKey)
      response.data.corporateWeChat.weixinCorpSecret = '' || aes.AESDecrypt(response.data.corporateWeChat.weixinCorpSecret, response.data.encryptionKey)
      response.data.corporateWeChat.weixinCorpToken = '' || aes.AESDecrypt(response.data.corporateWeChat.weixinCorpToken, response.data.encryptionKey)
      response.data.corporateWeChat.weixinCorpEncodingAESKey = '' || aes.AESDecrypt(response.data.corporateWeChat.weixinCorpEncodingAESKey, response.data.encryptionKey)
      // 微信支付设置，不为空则解密
      response.data.tenPaySettings.tenPayV3_AppId = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_AppId, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_AppSecret = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_AppSecret, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_SubAppId = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_SubAppId, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_SubAppSecret = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_SubAppSecret, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_MchId = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_MchId, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_SubMchId = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_SubMchId, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_Key = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_Key, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_CertPath = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_CertPath, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_CertSecret = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_CertSecret, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_TenpayNotify = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_TenpayNotify, response.data.encryptionKey)
      response.data.tenPaySettings.tenPayV3_WxOpenTenpayNotify = '' || aes.AESDecrypt(response.data.tenPaySettings.tenPayV3_WxOpenTenpayNotify, response.data.encryptionKey)
      // 微信开放平台设置，不为空则解密
      response.data.openSettings.component_Appid = '' || aes.AESDecrypt(response.data.openSettings.component_Appid, response.data.encryptionKey)
      response.data.openSettings.component_Secret = '' || aes.AESDecrypt(response.data.openSettings.component_Secret, response.data.encryptionKey)
      response.data.openSettings.component_Token = '' || aes.AESDecrypt(response.data.openSettings.component_Token, response.data.encryptionKey)
      response.data.openSettings.component_EncodingAESKey = '' || aes.AESDecrypt(response.data.openSettings.component_EncodingAESKey, response.data.encryptionKey)
      // 传递给界面
      this.formdata = response.data
      console.log(this.formdata)
    })
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
