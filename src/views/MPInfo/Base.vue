<template>
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="基础信息">用户管理</el-tab-pane>
    <el-tab-pane label="公众号信息">
      <el-form ref="form" :model="form" label-position="right" label-width="10em" class="form">
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
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存数据</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="支付设置信息">角色管理</el-tab-pane>
    <el-tab-pane label="小程序信息">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.form {
  margin: 1em;
}
</style>

<script>
export default {
  data() {
    return {
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
