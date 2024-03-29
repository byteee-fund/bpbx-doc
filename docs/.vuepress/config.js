import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  base: "/doc/bpbx",
  title: 'BPBX',
  description: '轻量级的PBX解决方案',

  theme: defaultTheme({
    logo: '/images/logo.svg',

    navbar: ['/', '/get-started', '/install','/use-guide', {
      text: '购买源码',
      link: 'https://byteee.fund/project/bpbx',
    },],
  }),

  bundler: viteBundler(),
})
