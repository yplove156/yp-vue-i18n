// 引入对于UI组件的国际化文件
import zhCN from 'iview/dist/locale/zh-CN'
// 配置本地国际化对象
const zh = Object.assign({
  // 通用国际化属性
  common: {
    language: '简体中文',
    // 顶部导航国际化属性
    navbar: {},
    // 左侧菜单栏国际化属性
    sider: {},
    // 底部导航栏国际化配置
    footer: {}
  },
  // 页面国际化属性，按页面进行区分
  page: {
    home: {
      title: '简体中文页面',
      content: 'yp-vue-i18n 简体中文页面'
    }
  },
  // 提示消息国际化属性，此处需与后端返回错误码相同
  // 默认仅包含NETWORK_EXCEPTION
  // 如登录提示用户名或密码错误，USERNAME_OR_PASSWORD_ERROR: '用户名或密码错误'
  message: {
    NETWORK_EXCEPTION: '网络异常，请稍后重试'
  }
}, zhCN)

export default zh
