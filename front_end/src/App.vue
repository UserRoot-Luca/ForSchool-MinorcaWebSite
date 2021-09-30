<template>
  <div class="main">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        data: null,
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        // this.axios.get(`${location.protocol}//${window.location.hostname}/api/routing/get.php`).then((res) => { this.data = res.data;});
        this.axios.get('http://localhost/[projects]/ForSchool-MinorcaWebSite/api/routing/get.php').then((res) => { this.data = res.data;});
      }
    },
  }
</script>

<style lang="scss">
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html, body, #app{
    width: 100%;
    height: 100%;
  }
</style>
