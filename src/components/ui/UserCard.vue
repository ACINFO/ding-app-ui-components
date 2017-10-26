<template>
  <div class="">
    <card :title="title" :caption="caption">
      <div class="card-wrap">
        <img :src="avatar" class="card-avatar" />
        <div class="card-profile-wrap">
          <div class="name">John Snow</div>
          <div class="company">Graat Wall .Inc</div>
        </div>
      </div>
    </card>
  </div>
</template>

<style>
  .card-wrap{
    display: flex;
    align-items: center;
  }
  .card-avatar {
    border: 1px solid #efefef;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }
  .card-profile-wrap {
    margin-left: 1rem;
  }
  .card-profile-wrap .name {
    font-size: 1.5rem;
  }
  .card-profile-wrap .company {
    font-size: 1rem;
  }
</style>

<script>
  import Card from '@/components/base/Card.vue'
  export default {
    props: {
      caption: String,
      title: String,
      avatar: String
    },
    data () {
      return {
      }
    },
    components: {
      Card
    },
    methods: {

    }
  }
</script>
