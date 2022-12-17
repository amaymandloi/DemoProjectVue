<template>
  <v-app>
    <div id="app">
    <nav>
      <router-link to ="/HomeView">Home | &nbsp;</router-link>
      <router-link to ="/SignUp">SignUp | &nbsp;</router-link>
      <router-link to ="/Login">Login | &nbsp;</router-link>
      <router-link to ="/DashBoard">DashBoard &nbsp;</router-link>
    </nav>
    <router-view/>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>
