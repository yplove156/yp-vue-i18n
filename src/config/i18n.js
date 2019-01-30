import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 引入支持的语言文件
import zhCN from '../language/zh-CN'
import enUS from '../language/en-US'

Vue.use(VueI18n)
// 获取用户本地语言
const navLang = navigator.language
// 判断用户本地语言是否在支持语言列表中
const localLang = (navLang.toUpperCase() === 'zh-CN'.toUpperCase() || navLang.toUpperCase() === 'en-US'.toUpperCase()) ? navLang : false
// 设置语言优先及 已选择语言 > 用户语言 > 默认语言
const language = localStorage.language || localLang || 'zh-CN'

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
}
// 存储语言
localStorage.setItem('language', language)
// 将语言配置到i18n
const i18n = new VueI18n({
  locale: language,
  messages
})
export default i18n
