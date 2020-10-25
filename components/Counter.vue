<template>
<div id="counter">
    
    <h3>Gallery</h3>
    <b-img src="/img.jpg" fluid alt="Fluid image" style="max-width: 20rem;">
    </b-img>
    <b-card title="Amsterdam">
    <b-card-text>
      Likes on this post is:
    <button>{{count}}</button>
    <button v-on:click="count++">
        Like<b-icon icon="hand-thumbs-up"></b-icon>
    </button>
    </b-card-text>
  </b-card>
</div>
    
</template>
<script>

export default {
     data: function () {
    return {
      count: 0
    }
  },
    
}
</script>
<style>
img{
  margin: 20px;
}
</style>