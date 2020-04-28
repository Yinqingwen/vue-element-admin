export default [
  {
    url: '/api/assembly',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: [
          {
            'groupInfo': {
              'title': 'Senparc.Weixin SDK',
              'description': '对应于每一个微信平台的基础 SDK，包含了目前微信平台的绝大部分 API，进行微信开发重点是对这些库的使用。'
            },
            'assemblyModelCollection': [
              {
                'title': 'SDK 公共基础库',
                'assemblyName': 'Senparc.Weixin',
                'nugetName': 'Senparc.Weixin',
                'version': '6.7.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '公众号、JSSDK、摇一摇周边',
                'assemblyName': 'Senparc.Weixin.MP',
                'nugetName': 'Senparc.Weixin.MP',
                'version': '16.10.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.MP.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '公众号MvcExtension',
                'assemblyName': 'Senparc.Weixin.MP.MvcExtension',
                'nugetName': 'Senparc.Weixin.MP.Mvc',
                'version': '7.5.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.MP.Mvc.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '小程序',
                'assemblyName': 'Senparc.Weixin.WxOpen',
                'nugetName': 'Senparc.Weixin.WxOpen',
                'version': '3.8.501',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.WxOpen.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '微信支付',
                'assemblyName': 'Senparc.Weixin.TenPay',
                'nugetName': 'Senparc.Weixin.TenPay',
                'version': '1.5.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.TenPay.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '开放平台',
                'assemblyName': 'Senparc.Weixin.Open',
                'nugetName': 'Senparc.Weixin.Open',
                'version': '4.7.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.Open.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '企业微信',
                'assemblyName': 'Senparc.Weixin.Work',
                'nugetName': 'Senparc.Weixin.Work',
                'version': '3.7.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.Work.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              }
            ]
          },
          {
            'groupInfo': {
              'title': 'Senparc.Weixin SDK 的 ASP.NET 运行时基础库',
              'description': '这些库基于 ASP.NET 运行时，依赖 ASP.NET 一些特性完成一系列基于 ASP.NET 及 ASP.NET Core 的操作。<br />分离出这些库的另外一个原因，是为了使 Senparc.Weixin SDK 核心库可以不依赖于 ASP.NET 运行时，<br />以便部署在轻量级的容器等环境中。'
            },
            'assemblyModelCollection': [
              {
                'title': 'ASP.NET<br />运行时基础库',
                'assemblyName': 'Senparc.Weixin.AspNet',
                'nugetName': 'Senparc.Weixin.AspNet',
                'version': '0.1.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.AspNet.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '公众号消息中间件',
                'assemblyName': 'Senparc.Weixin.MP.Middleware',
                'nugetName': 'Senparc.Weixin.MP.Middleware',
                'version': '0.1.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.MP.Middleware.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '小程序消息中间件',
                'assemblyName': 'Senparc.Weixin.WxOpen.Middleware',
                'nugetName': 'Senparc.Weixin.WxOpen.Middleware',
                'version': '0.1.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.WxOpen.Middleware.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': '企业微信消息中间件',
                'assemblyName': 'Senparc.Weixin.Work.Middleware',
                'nugetName': 'Senparc.Weixin.Work.Middleware',
                'version': '0.1.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.Work.Middleware.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              }
            ]
          },
          {
            'groupInfo': {
              'title': 'Senparc.Weixin SDK 扩展组件',
              'description': 'Senparc.Weixin SDK 扩展组件用于提供缓存、WebSocket 等一系列扩展模块，<br />这些模块是盛派官方的一个实现，几乎所有的扩展模块都是严格面向接口开发的，<br />因此，您也可以自行扩展，并对接到微信 SDK 或其他系统中，<br />'
            },
            'assemblyModelCollection': [
              {
                'title': 'Redis 缓存<br />（StackExchange.Redis）',
                'assemblyName': 'Senparc.Weixin.Cache.Redis',
                'nugetName': 'Senparc.Weixin.Cache.Redis',
                'version': '2.8.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.Cache.Redis.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': 'Redis 缓存<br />（CsRedis）',
                'assemblyName': 'Senparc.Weixin.Cache.CsRedis',
                'nugetName': 'Senparc.Weixin.Cache.CsRedis',
                'version': '0.1.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.Cache.CsRedis.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': 'Memcached 缓存',
                'assemblyName': 'Senparc.Weixin.Cache.Memcached',
                'nugetName': 'Senparc.Weixin.Cache.Memcached',
                'version': '2.6.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.Weixin.Cache.Memcached.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              },
              {
                'title': 'WebSocket 模块',
                'assemblyName': 'Senparc.WebSocket',
                'nugetName': 'Senparc.WebSocket',
                'version': '0.10.500',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.WebSocket.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/JeffreySu/WeiXinMPSDK'
              }
            ]
          },
          {
            'groupInfo': {
              'title': '跨平台支持库：Senparc.NeuChar',
              'description': 'NeuChar 是盛派提供的一套跨平台服务的标准（例如跨微信公众号、微信小程序、丁丁、QQ小程序、百度小程序，等等），<br />使用一套代码，同时服务多平台。目前 Senparc.Weixin SDK 就是基于 NeuChar 标准在微信领域内的一个实现分支，<br />您也可以使用 NeuChar 扩展到更多的平台。<br /><a href="https://www.neuchar.com" target="_blank">https://www.neuchar.com</a> 是盛派官方提供的一个基于 NeuChar 标准实现的可视化跨平台配置操作平台。'
            },
            'assemblyModelCollection': [
              {
                'title': 'NeuChar 跨平台支持库',
                'assemblyName': 'Senparc.NeuChar',
                'nugetName': 'Senparc.NeuChar',
                'version': '1.2.106',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.NeuChar.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/NeuChar'
              },
              {
                'title': 'NeuChar APP 以及<br />NeuChar Ending<br />的对接 SDK',
                'assemblyName': 'Senparc.NeuChar.App',
                'nugetName': 'Senparc.NeuChar.App',
                'version': '0.8.106',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.NeuChar.App.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/NeuChar'
              },
              {
                'title': 'NeuChar 的 ASP.NET<br />运行时支持库',
                'assemblyName': 'Senparc.NeuChar.AspNet',
                'nugetName': 'Senparc.NeuChar.AspNet',
                'version': '0.2.106',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.NeuChar.AspNet.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/NeuChar'
              }
            ]
          },
          {
            'groupInfo': {
              'title': '底层公共基础库：Senparc.CO2NET',
              'description': 'Senparc.CO2NET 是一个支持 .NET Framework 和 .NET Core 的公共基础扩展库，包含常规开发所需要的基础帮助类。<br />开发者可以直接使用 CO2NET 为项目提供公共基础方法，免去重复准备和维护公共代码的痛苦。<br />您可以在几乎任何项目中使用 CO2NET。'
            },
            'assemblyModelCollection': [
              {
                'title': 'CO2NET 基础库',
                'assemblyName': 'Senparc.CO2NET',
                'nugetName': 'Senparc.CO2NET',
                'version': '1.3.104',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.CO2NET.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
              },
              {
                'title': 'APM 库',
                'assemblyName': 'Senparc.CO2NET.APM',
                'nugetName': 'Senparc.CO2NET.APM',
                'version': '0.9.104',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.CO2NET.APM.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
              },
              {
                'title': 'Redis 库<br />（StackExchange.Redis）',
                'assemblyName': 'Senparc.CO2NET.Cache.Redis',
                'nugetName': 'Senparc.CO2NET.Cache.Redis',
                'version': '3.9.104',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.CO2NET.Cache.Redis.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
              },
              {
                'title': 'Redis 库<br />（CSRedis）',
                'assemblyName': 'Senparc.CO2NET.Cache.CsRedis',
                'nugetName': 'Senparc.CO2NET.Cache.CsRedis',
                'version': '0.3.104',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.CO2NET.Cache.CsRedis.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
              },
              {
                'title': 'Memcached 库',
                'assemblyName': 'Senparc.CO2NET.Cache.Memcached',
                'nugetName': 'Senparc.CO2NET.Cache.Memcached',
                'version': '3.7.104',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.CO2NET.Cache.Memcached.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
              },
              {
                'title': 'CO2NET 的 ASP.NET<br />运行时支持库',
                'assemblyName': 'Senparc.CO2NET.AspNet',
                'nugetName': 'Senparc.CO2NET.AspNet',
                'version': '0.3.104',
                'nugetVersion': 'https://img.shields.io/nuget/v/Senparc.CO2NET.AspNet.svg?style=flat',
                'supportNet45': true,
                'supportNet45Src': 'https://img.shields.io/badge/4.5-Y-brightgreen.svg',
                'supportStandard20': true,
                'supportStandard21': true,
                'supportStandard21Src': 'https://img.shields.io/badge/standard2.1-Y-brightgreen.svg',
                'supportNetCore22': true,
                'supportNetCore31': true,
                'supportNetCore31Src': 'https://img.shields.io/badge/core3.1-Y-brightgreen.svg',
                'gitHubUrl': 'https://github.com/Senparc/Senparc.CO2NET'
              }
            ]
          }
        ]
      }
    }
  }
]
