<!--
 * @Author: 尹庆文
 * @Date: 2020-04-30 21:19:45
 * @LastEditTime: 2020-05-05 16:26:39
 * @LastEditors: Please set LastEditors
 * @Description: 微信基本设置信息
 * @FilePath: \vue-element-admin\src\views\MPInfo\Base.vue
 -->
<template>
  <el-form ref="form" :model="form" label-position="right" label-width="10em" class="form">
    <el-row>
      <el-tabs id="tabnav" :tab-position="tabPosition">
        <el-tab-pane id="base" label="基础信息">
          <el-form-item label="公司名称">
            <el-input v-model="form.companyName" />
          </el-form-item>
          <el-form-item label="公司简称">
            <el-input v-model="form.abbreviations" />
          </el-form-item>
          <el-form-item label="注册地址">
            <el-input v-model="form.address" />
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="加密数据" prop="delivery">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="加密公钥">
            <el-input v-model="form.publicKey" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="公众号">
          <el-form-item label="AppId">
            <el-input v-model="form.weixnAppid" />
          </el-form-item>
          <el-form-item label="AppSecret">
            <el-input v-model="form.weixnSecrect" />
          </el-form-item>
          <el-form-item label="Token">
            <el-input v-model="form.weixnToken" />
          </el-form-item>
          <el-form-item label="EncodingAESKey">
            <el-input v-model="form.weixnEncodingAESKey" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="小程序">
          <el-form-item label="WxOpenAppId">
            <el-input v-model="form.WxOpenAppId" />
          </el-form-item>
          <el-form-item label="WxOpenAppSecret">
            <el-input v-model="form.WxOpenAppSecret" />
          </el-form-item>
          <el-form-item label="WxOpenToken">
            <el-input v-model="form.WxOpenToken" />
          </el-form-item>
          <el-form-item label="WxOpenEncodingAESKey">
            <el-input v-model="form.WxOpenEncodingAESKey" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="企业微信">
          <el-form-item label="WeixinCorpId">
            <el-input v-model="form.WeixinCorpId" />
          </el-form-item>
          <el-form-item label="WeixinCorpAgentId">
            <el-input v-model="form.WeixinCorpAgentId" />
          </el-form-item>
          <el-form-item label="WeixinCorpSecret">
            <el-input v-model="form.WeixinCorpSecret" />
          </el-form-item>
          <el-form-item label="WeixinCorpToken">
            <el-input v-model="form.WeixinCorpToken" />
          </el-form-item>
          <el-form-item label="WeixinCorpEncodingAESKey">
            <el-input v-model="form.WeixinCorpEncodingAESKey" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="微信支付">
          <el-form-item label="TenPayV3_AppId">
            <el-input v-model="form.TenPayV3_AppId" />
          </el-form-item>
          <el-form-item label="TenPayV3_AppSecret">
            <el-input v-model="form.TenPayV3_AppSecret" />
          </el-form-item>
          <el-form-item label="TenPayV3_SubAppId">
            <el-input v-model="form.TenPayV3_SubAppId" />
          </el-form-item>
          <el-form-item label="TenPayV3_SubAppSecret">
            <el-input v-model="form.TenPayV3_SubAppSecret" />
          </el-form-item>
          <el-form-item label="TenPayV3_MchId">
            <el-input v-model="form.TenPayV3_MchId" />
          </el-form-item>
          <el-form-item label="TenPayV3_SubMchId">
            <el-input v-model="form.TenPayV3_SubMchId" />
          </el-form-item>
          <el-form-item label="TenPayV3_Key">
            <el-input v-model="form.TenPayV3_Key" />
          </el-form-item>
          <el-form-item label="TenPayV3_CertPath">
            <el-input v-model="form.TenPayV3_CertPath" />
          </el-form-item>
          <el-form-item label="TenPayV3_CertSecret">
            <el-input v-model="form.TenPayV3_CertSecret" />
          </el-form-item>
          <el-form-item label="TenPayV3_TenpayNotify">
            <el-input v-model="form.TenPayV3_TenpayNotify" />
          </el-form-item>
          <el-form-item label="TenPayV3_WxOpenTenpayNotify">
            <el-input v-model="form.TenPayV3_WxOpenTenpayNotify" />
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="开放平台">
          <el-form-item label="Component_Appid">
            <el-input v-model="form.Component_Appid" />
          </el-form-item>
          <el-form-item label="Component_Secret">
            <el-input v-model="form.Component_Secret" />
          </el-form-item>
          <el-form-item label="Component_Token">
            <el-input v-model="form.Component_Token" />
          </el-form-item>
          <el-form-item label="Component_EncodingAESKey">
            <el-input v-model="form.Component_EncodingAESKey" />
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
export default {
  data() {
    return {
      tabPosition: 'left',
      form: {
        weixinAddId: '',
        weixnSecrect: '',
        weixnToken: '',
        weixnEncodingAESKey: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
