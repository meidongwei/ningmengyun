<template>
  <div @click="resetComponent">
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img src="./assets/logo.png">
          <span class="head-title">柠檬云</span>
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{ username }}</li>
            <li v-if="username!==''" class="nav-pile">|</li>
            <li v-if="username!==''" @click="logOut">退出</li>
            <li v-if="username===''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username===''">注册</li>
            <li v-if="username===''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>© 2015-2017<span class="nav-pile">|</span>Ningmengyun<span class="nav-pile">|</span>Mei</p>
    </div>
    <Dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <LogForm @has-log="onSuccessLog"></LogForm>
    </Dialog>
    <Dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>
        柠檬云 —- 柠檬集团旗下公司，是全球领先的云计算及人工智能科技公司。提供云服务器、云数据库、云安全等云计算服务，
        以及大数据、人工智能服务、精准定制基于场景的行业解决方案。专业快速备案，7x24小时售后支持，助企业无忧上云。
      </p>
    </Dialog>
  </div>
</template>

<script>
import Dialog from './components/dialog'
import LogForm from './components/logForm'
import { eventBus } from './eventBus'
export default {
  name: 'app',
  components: {
    Dialog,
    LogForm
  },
  data () {
    return {
      isShowLogDialog: false,
      isShowAboutDialog: false,
      username: '',
      apiName: '小柠檬'
    }
  },
  methods: {
    logClick () {
      this.isShowLogDialog = true
    },
    aboutClick () {
      this.isShowAboutDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    // onSuccessLog (data) {
    //   this.closeDialog ('isShowLogDialog')
    //   this.username = data.data.username
    // },
    onSuccessLog () {
      this.closeDialog ('isShowLogDialog')
      this.username = this.apiName
    },
    logOut () {
      this.username = ''
    },
    resetComponent () {
      eventBus.$emit('reset-component')
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: white;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
  border-bottom: 1px solid #d5d5d5;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
  position:relative;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 100px;
  margin-top: 10px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #00a0e9;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}
.button:hover {
  background: #1190ca;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
.head-title {
  /* border: 1px solid red; */
  font-size: 25px;
  display:block;
  margin-left: 100px;
  position:absolute;
  top: 0;

}
</style>
