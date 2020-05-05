<!--
 * @Author: 尹庆文
 * @Date: 2020-04-22 21:58:31
 * @LastEditTime: 2020-05-05 16:33:55
 * @LastEditors: Please set LastEditors
 * @Description: 站点使用的软件版本
 * @FilePath: \vue-element-admin\src\views\dashboard\admin\components\SiteAssembly.vue
 -->
<template>
  <el-row :gutter="8">
    <el-col v-for="(item,index) in assembly" :key="index" :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2>{{ item.groupInfo.title }}</h2>
          <small>{{ item.groupInfo.description }}</small>
        </div>
        <div class="text item">
          <el-table :data="item.assemblyModelCollection" style="width:100%s;">
            <el-table-column prop="title" label="模块名称" />
            <el-table-column prop="version" label="本地版本" />
            <el-table-column prop="nugetName" label="Nuget名称" />
            <el-table-column label="Nuget版本">
              <template slot-scope="scope">
                <img :src="scope.row.nugetVersion" alt="Nuget版本">
              </template>
            </el-table-column>
            <el-table-column label="版本支持情况">
              <template slot-scope="scope">
                <p>
                  <img title=".NET 4.5" alt=".NET 4.5" :src="scope.row.supportNet45Src">
                  <img title=".NET CORE 2.2" alt=".NET CORE 2.2" :src="scope.row.supportStandard21Src">
                  <img title=".NET CORE 3.1" alt=".NET CORE 3.1" :src="scope.row.supportNetCore31Src">
                </p>
              </template>
            </el-table-column>
            <el-table-column label="源码地址">
              <template slot-scope="scope">
                <el-link type="primary" :href="scope.row.gitHubUrl" target="_blank">下载地址</el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { getsiteassembly } from '@/api/apiassembly'

export default {
  data() {
    return {
      assembly: null
    }
  },
  mounted: function() {
    getsiteassembly().then(response => {
      this.assembly = response.data
    })
  }
}
</script>
<style scoped>
</style>
