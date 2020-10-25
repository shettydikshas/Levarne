<template lang="pug">
#counter
  b-img(src='/img.jpg' fluid='' alt='Fluid image' style='max-width: 20rem;')
  b-card(title='Amsterdam')
    b-card-text
      | Likes on this post is:
      button {{count}}
      button(v-on:click='count++')
        | Like
        b-icon(icon='hand-thumbs-up')

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
.card-title{
  font-weight: bold;
}
.card-text{
  font-weight: normal;
  font-size:large
}
</style>