<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary" class="p-2">
        <b-navbar-brand href="#">Florist app</b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/account">Account</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
<!-- 
        <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    </b-navbar>
     <b-sidebar id="sidebar-1" shadow backdrop>
      <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/account">Account</b-nav-item>
            </b-nav>
      </nav>
       <div class="px-3 py-2">
        <p><router-link class="mdl-navigation__link" >Home</router-link></p>
        <p><router-link class="mdl-navigation__link" to="/account">Acount</router-link></p>
      </div>
    </b-sidebar>
-->
    <div class="p-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>