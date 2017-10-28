<template>
  <div class="ui-swiper">
    <div class="ui-swiper-fram-wrap">
        <div class="ui-swiper-fram" v-for="(frame, i) in frameSet"
             :class="{
                enterance: i == currentIndex,
                dismiss: i!= currentIndex
          }"
        >
        <img :src="frame.image"/>
          <div class="caption">{{frame.caption}}</div>
        </div>
    </div>
  </div>
</template>


<style>

  @keyframes entrance {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }

  @keyframes dismiss {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }

  .ui-swiper {
    height: 200px;
  }
  .ui-swiper-fram-wrap {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .ui-swiper-fram {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: left 1s;
    left: -100%;
    top: 0;
  }

  .ui-swiper-fram.active {
    left: 0;
    background-color: #afa;
  }

  .ui-swiper-fram.enterance {
    animation: entrance 1s;
    animation-timing-function: ease;
  }

  .ui-swiper-fram.dismiss {
    animation: dismiss 1s;
  }

  .ui-swiper-fram img {
    width: 100%;
    height: 100%;
  }
  .ui-swiper-fram .caption {
    position: absolute;
    bottom: 0.8rem;
    left: 1rem;
    right: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>

<script>
  export default {
    name: 'swiper',
    props: {
      autoPlay: Boolean,
      delay: Number,
      frameSet: Array
    },
    data () {
      return {
        currentIndex: 0
      }
    },
    created: function () {
      console.log(this.frameSet)
      console.log(this.delay)
      this.delay && this.autoChange()
//      this.delay && this.autoChange(this.frameSet)
    },
    methods: {
      autoChange: function () {
        console.log('delay %d', this.delay)
        var that = this
        setInterval(function () {
          console.log('ready exchange swiper')
          that.$nextTick(function () {
            that.currentIndex = that.frameSet.length > that.currentIndex ? that.currentIndex + 1 : 0
            console.log('current index %d', that.currentIndex)
          })
        }, 1000)
      }
    }
  }
</script>
