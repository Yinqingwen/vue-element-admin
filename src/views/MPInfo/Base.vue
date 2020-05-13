<!--
 * @Author: 尹庆文
 * @Date: 2020-04-30 21:19:45
 * @LastEditTime: 2020-05-13 23:23:49
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
    console.log(aes.encrypt('Yinqingwen19690219','Yinqingwen19690219'))
    console.log(aes.decrypt('A3UjhupfIR9iY3Von+r49cRtzJ6DcGtwuBZOeOtq3YqNkC+DXDeGE+JpqZYtd0iAqJtb6b9oDm2nCjtIeLTOGS0XWonm3RNDxP9aeDZ4iv4=','Yinqingwen19690219'))
      //console.log(aes.encrypt('Yinqingwen19690219', 'Yinqingwen19690219'))
    getbasesettings().then(response => {
      //console.log(aes.encrypt('Yinqingwen19690219','Yinqingwen19690219'))
      //console.log(aes.decrypt(response.data.encryptionKey))
      this.formdata = response.data
    })
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
