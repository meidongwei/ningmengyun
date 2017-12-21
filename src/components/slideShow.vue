<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{ on: index === nowIndex }"></a>
      </li>
    </ul>
    <a class="left" @click="goto(preIndex)">&lt;</a>
    <a class="right" @click="goto(nextIndex)">&gt;</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  computed: {
    preIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1

      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
        this.$emit('onchange', index)
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 5px;
  right: 15px;
  display:flex;
  align-items:center;
}
.slide-pages li {
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
  color: white;
}
.slide-pages li a {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #fff;

}
.slide-pages li .on {
  background-color:inherit;
  border: 1px solid white;
}
.left {
  position: absolute;
  padding: 17px 20px;
  /* border: 1px solid red; */
  background-color: white;
  opacity: .5;
  cursor:pointer;
  border-radius: 100px;
  top: 45%;
  left: 5%;
}
.right {
  position: absolute;
  padding: 17px 20px;
  /* border: 1px solid red; */
  background-color: white;
  opacity: .5;
  cursor:pointer;
  border-radius: 100px;
  top: 45%;
  right: 5%;
}
.left:hover {
  opacity: .8;
}
.right:hover {
  opacity: .8;
}
</style>
