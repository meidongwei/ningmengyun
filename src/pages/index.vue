<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>

        <template v-for="product in productList">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.new" class="new-tag">new</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>

      </div>

      <div class="index-left-block lastest-news">
        <h2>最新活动</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slideShow :slides="slides" :inv="slideSpeed" @onchange="doSome"></slideShow>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item, index) in boardList" :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <a :href="item.href" class="button">马上试用</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow'
export default {
  components: {
    slideShow
  },
  methods: {
    doSome () {
      // console.log('doSomethingOnSlideShow run')
    }
  },
  // created () {
  //   this.$http.get('/api/getNewsList')
  //   .then((res) => {
  //     this.newsList = res.data.data
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // },
  data () {
    return {
      slideSpeed: 2000,
      slides: [
        {
          src: require('../assets/slideShow/1.png'),
          title: '全链路产品服务',
          href: 'detail/ruanjian'
        },
        {
          src: require('../assets/slideShow/2.png'),
          title: '柠檬云内部锤炼和业务验证',
          href: 'detail/youxiang'
        },
        {
          src: require('../assets/slideShow/3.png'),
          title: 'EB级数据海量处理',
          href: 'detail/jifen'
        },
        {
          src: require('../assets/slideShow/4.png'),
          title: '激活海量工业数据潜力助力产业升级',
          href: 'detail/cunchu'
        }
      ],
      boardList: [
        {
          title: '软件著作权加急',
          description: '5天下证，柠檬云客户专享',
          id: 'ruanjian',
          toKey: 'ruanjian',
          saleout: false,
          href: 'detail/ruanjian'
        },
        {
          title: '购邮箱送40000积分 同享5折',
          description: '双12狂欢一个月，每满500元送500积分',
          id: 'youxiang',
          toKey: 'youxiang',
          saleout: false,
          href: 'detail/youxiang'
        },
        {
          title: '领积分 新手积分见面礼',
          description: '首次下载App|实名认证|续费|升级',
          id: 'jifen',
          toKey: 'jifen',
          saleout: true,
          href: 'detail/jifen'
        },
        {
          title: '99积分兑OSS 500G1年',
          description: '存储空间弹性扩容、集成图像处理99积分',
          id: 'cunchu',
          toKey: 'cunchu',
          saleout: false,
          href: 'detail/cunchu'
        }
      ],
      newsList: [
        {
          "id": 1,
          "title": "智能人脸识别考勤机 0元购（多人、远距离、毫秒级精准辨别）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 2,
          "title": "轻量应用服务器 限时75折（简单易用，1分钟搭建应用）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 3,
          "title": "柠檬云免费套餐（40+核心云产品，6个月免费使用）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 4,
          "title": "高性能云服务器 2折起（搭建应用/网站首选，送域名6折券）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 5,
          "title": "马来西亚大区数据中心盛大开服（不限台数，不限配置）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 6,
          "title": "移动测试 600款机型全线85折（测试智能化）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 7,
          "title": "云解析DNS创业板（创业必选，解析快速）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 8,
          "title": "云解析全局负载均衡（主备容灾切换、业务异地）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 9,
          "title": "独享虚机0元试用（为建站用户量身打造的虚拟主机）",
          "url": "http://www.baidu.com"
        },
        {
          "id": 10,
          "title": "WAF按量计费 低至4元/日（按需灵活升降配 每日推送账单）",
          "url": "http://www.baidu.com"
        }
      ],
      productList: {
        pc: {
          title: '弹性计算',
          list: [
            {
              name: '云服务器 ECS',
              url: 'detail/ruanjian'
            },
            {
              name: '轻量应用服务器',
              url: 'detail/youxiang'
            },
            {
              name: '龙珠云服务器',
              url: 'detail/jifen',
              new: true
            },
            {
              name: '容器镜像服务',
              url: 'detail/cunchu'
            }
          ]
        },
        app: {
          title: '移动云',
          last: true,
          list: [
            {
              name: '移动推送',
              url: 'http://www.baidu.com',
              new: true
            },
            {
              name: '短信服务',
              url: 'http://www.baidu.com'
            },
            {
              name: '移动数据分析',
              url: 'http://www.baidu.com'
            },
            {
              name: '移动加速',
              url: 'http://www.baidu.com'
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
/* #00a0e9 */
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  border-radius: 4px;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #00a0e9;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-ruanjian .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-youxiang .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-jifen .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-cunchu .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.index-board-button .button {
  background-color: #00a0e9;
  padding: 8px 15px;
  color: white;
}
.lastest-news {
  min-height: 512px;
}
.new-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
