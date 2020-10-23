<template>
<div id="counter">
    <Header/>
    <Counter/>
    <br>
</div>
    
</template>
<script>
import Header from '~/components/Header'
import Counter from '~/components/Counter'
export default {
    components:{
        Header,
        Counter
    }
}
</script>
<style>

</style>