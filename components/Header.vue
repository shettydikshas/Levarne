<template lang="pug">
.header
  b-navbar.nav-container(toggleable='lg' type='dark' variant='info')
    b-navbar-brand(href='#') Levarne
    b-navbar-toggle(target='nav-collapse')
    b-collapse#nav-collapse(is-nav='')
      b-navbar-nav
        b-nav-item
          Nuxt-link.home(to='/')
            | HOME
        b-nav-item
          Nuxt-link.intro(to='/intro')
            | ABOUT US
        b-nav-item
          Nuxt-link.count(to='/count')
            | GALLERY
        b-nav-item
          Nuxt-link.add(to='/Message/add')
            | MESSAGES
        b-nav-item
          Nuxt-link.contact(to='/contact')
            | CONTACT

  
</template>
 
<style>
.navbar-brand{
  color:#ffffe6 !important;
  font-weight: 500 !important;
}
.nav-container a{
     color:#ffffe6;
    font-weight: normal;
}
</style>