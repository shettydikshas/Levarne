<template>
  <div class="header">
    <b-navbar class="nav-container" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Levarne</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <nuxt-link class="home" to="/">
              HOME
          </nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link class="intro" to="/intro">
              ABOUT US
            </nuxt-link>
          </b-nav-item>
        <b-nav-item>
          <nuxt-link class="count" to="/count">
            GALLERY
          </nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link class="add" to="/Message/add">
            MESSAGES
          </nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link class="contact" to="/contact">
            CONTACT
          </nuxt-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  </div>
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