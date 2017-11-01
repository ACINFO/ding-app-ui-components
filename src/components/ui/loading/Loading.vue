<template>
  <div v-if="show">
    <div class="ui-loading-mask"></div>
      <div class="ui-loading-wrap">
        <div class="ui-loading-icon">
          <div :class='loadingClass'
          ></div>
        </div>
        <div v-if="content" class="content"></div>
      </div>
  </div>
</template>

<style>
  .ui-loading-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background-color: #efefef;
    opacity: 0.7 ;
  }
  .ui-loading-wrap {
    z-index: 1000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .ui-loading-icon {
    margin: 0 auto;
  }


  /*
    Rotate cube style loading
  */
  .ui-loading-icon-cube {
    width: 50px;
    height: 50px;
    border: 2px solid #007aff;
    display: inline-flex;
    justify-content: center;
    align-items:center;
    animation: loadingCube 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }

  @keyframes loadingCube {
    from {
      transform: rotate(0deg) scale(1,1);
      border-radius: 0;
    }
    to {
      transform: rotate(360deg) scale(0, 0);
      border-radius: 50%;
    }
  }

  .ui-loading-icon-cube::after, .ui-loading-icon-cube::before {
    content: '';
    position: absolute;
    border: 2px solid #007aff;
  }

  .ui-loading-icon-cube::after {
    width: 35px;
    height: 35px;
  }

  .ui-loading-icon-cube::before {
    width: 20px;
    height: 20px;
  }

  /*
  Rotate cube style loading End
  */


  /*
    Rotate Colorful circle Style Loading
  */
  .ui-loading-icon-circle {
    /*width: 50px;*/
    /*height: 50px;*/
    /*border-radius: 50%;*/
    border: 30px solid transparent;
    border-left-color: #e74c3c;
    border-right-color: #f1c40f;
    border-top-color: #3498db;
    border-bottom-color: #2ecc71;

    animation: loadingCircle 1.5s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-timing-function: ease-in-out;
  }
  @keyframes loadingCircle {
    0% {
      transform: rotate(0deg) scale(1,1);
      border-radius: 0;
      width: 0;
      height: 0;
    }

    50% {
      transform: rotate(360deg) scale(.5,.5);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      border-width: 20px;
    }

    100% {
      transform: rotate(720deg) scale(1,1);
      border-width: 30px;
      border-radius: 0;
      width: 0;
      height: 0;
    }
  }

</style>


<script>
  let loadingTypeEnum = [
    'ui-loading-icon-circle',
    'ui-loading-icon-cube'
  ]
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      content: {
        type: String
      },
      loadingType: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        loadingClass: loadingTypeEnum[this.loadingType]
      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>
