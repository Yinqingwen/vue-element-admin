<!--
 * @Author: 尹庆文
 * @Date: 2020-04-22 21:58:31
 * @LastEditTime: 2020-04-22 22:57:35
 * @LastEditors: Please set LastEditors
 * @Description: 站点使用的软件版本
 * @FilePath: \vue-element-admin\src\views\dashboard\admin\components\SiteAssembly.vue
 -->
<template>
  <el-row :gutter="8">
    <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
      1
    </el-col>
    <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
      2
    </el-col>
    <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
      3
    </el-col>
  </el-row>
</template>
<script>
const MyAssembly = [
  {
    'assemblyModelCollection': {
      'WeChatManager.Models.GroupInfo': [
        {
          'title': 'SDK 公共基础库',
          'assemblyName': 'Senparc.Weixin',
          'nugetName': 'Senparc.Weixin',
          'version': '6.7.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '公众号<br />JSSDK<br />摇一摇周边',
          'assemblyName': 'Senparc.Weixin.MP',
          'nugetName': 'Senparc.Weixin.MP',
          'version': '16.10.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '公众号MvcExtension',
          'assemblyName': 'Senparc.Weixin.MP.MvcExtension',
          'nugetName': 'Senparc.Weixin.MP.Mvc',
          'version': '7.5.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '小程序',
          'assemblyName': 'Senparc.Weixin.WxOpen',
          'nugetName': 'Senparc.Weixin.WxOpen',
          'version': '3.8.501',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '微信支付',
          'assemblyName': 'Senparc.Weixin.TenPay',
          'nugetName': 'Senparc.Weixin.TenPay',
          'version': '7.5.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '开放平台',
          'assemblyName': 'Senparc.Weixin.Open',
          'nugetName': 'Senparc.Weixin.Open',
          'version': '4.7.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '企业微信',
          'assemblyName': 'Senparc.Weixin.Work',
          'nugetName': 'Senparc.Weixin.Work',
          'version': '3.7.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        }
      ],
      'WeChatManager.Models.GroupInfo': [
        {
          'title': 'ASP.NET<br />运行时基础库',
          'assemblyName': 'Senparc.Weixin.AspNet',
          'nugetName': 'Senparc.Weixin.AspNet',
          'version': '0.1.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '公众号消息中间件',
          'assemblyName': 'Senparc.Weixin.MP.Middleware',
          'nugetName': 'Senparc.Weixin.MP.Middleware',
          'version': '0.1.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '小程序消息中间件',
          'assemblyName': 'Senparc.Weixin.WxOpen.Middleware',
          'nugetName': 'Senparc.Weixin.WxOpen.Middleware',
          'version': '0.1.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': '企业微信消息中间件',
          'assemblyName': 'Senparc.Weixin.Work.Middleware',
          'nugetName': 'Senparc.Weixin.Work.Middleware',
          'version': '0.1.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        }
      ],
      'WeChatManager.Models.GroupInfo': [
        {
          'title': 'Redis 缓存<br />（StackExchange.Redis）',
          'assemblyName': 'Senparc.Weixin.Cache.Redis',
          'nugetName': 'Senparc.Weixin.Cache.Redis',
          'version': '2.8.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': 'Redis 缓存<br />（CsRedis）',
          'assemblyName': 'Senparc.Weixin.Cache.CsRedis',
          'nugetName': 'Senparc.Weixin.Cache.CsRedis',
          'version': '0.1.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': 'Memcached 缓存',
          'assemblyName': 'Senparc.Weixin.Cache.Memcached',
          'nugetName': 'Senparc.Weixin.Cache.Memcached',
          'version': '2.6.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        },
        {
          'title': 'WebSocket 模块',
          'assemblyName': 'Senparc.WebSocket',
          'nugetName': 'Senparc.WebSocket',
          'version': '0.10.500',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
        }
      ],
      'WeChatManager.Models.GroupInfo': [
        {
          'title': 'NeuChar 跨平台支持库',
          'assemblyName': 'Senparc.NeuChar',
          'nugetName': 'Senparc.NeuChar',
          'version': '1.2.106',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/NeuChar'
        },
        {
          'title': 'NeuChar APP 以及<br />NeuChar Ending<br />的对接 SDK',
          'assemblyName': 'Senparc.NeuChar.App',
          'nugetName': 'Senparc.NeuChar.App',
          'version': '0.8.106',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/NeuChar'
        },
        {
          'title': 'NeuChar 的 ASP.NET<br />运行时支持库',
          'assemblyName': 'Senparc.NeuChar.AspNet',
          'nugetName': 'Senparc.NeuChar.AspNet',
          'version': '0.2.106',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/NeuChar'
        }
      ],
      'WeChatManager.Models.GroupInfo': [
        {
          'title': 'CO2NET 基础库',
          'assemblyName': 'Senparc.CO2NET',
          'nugetName': 'Senparc.CO2NET',
          'version': '1.3.104',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
        },
        {
          'title': 'APM 库',
          'assemblyName': 'Senparc.CO2NET.APM',
          'nugetName': 'Senparc.CO2NET.APM',
          'version': '0.9.104',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
        },
        {
          'title': 'Redis 库<br />（StackExchange.Redis）',
          'assemblyName': 'Senparc.CO2NET.Cache.Redis',
          'nugetName': 'Senparc.CO2NET.Cache.Redis',
          'version': '3.9.104',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
        },
        {
          'title': 'Redis 库<br />（CSRedis）',
          'assemblyName': 'Senparc.CO2NET.Cache.CsRedis',
          'nugetName': 'Senparc.CO2NET.Cache.CsRedis',
          'version': '0.3.104',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
        },
        {
          'title': 'Memcached 库',
          'assemblyName': 'Senparc.CO2NET.Cache.Memcached',
          'nugetName': 'Senparc.CO2NET.Cache.Memcached',
          'version': '3.7.104',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
        },
        {
          'title': 'CO2NET 的 ASP.NET<br />运行时支持库',
          'assemblyName': 'Senparc.CO2NET.AspNet',
          'nugetName': 'Senparc.CO2NET.AspNet',
          'version': '0.3.104',
          'supportNet45': true,
          'supportStandard20': true,
          'supportStandard21': true,
          'supportNetCore22': true,
          'supportNetCore31': true,
          'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
        }
      ]
    }
  }
]
export default {
  data() {
    assembly
  }
}
</script>
<style scoped>
</style>
