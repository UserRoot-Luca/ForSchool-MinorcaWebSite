<template>
  <div class="main">
    <div class="nav_top">
      <div class="nav_top__onMenu" v-on:click="onMenu">[]</div>
      <div class="nav_top__title">Minorca</div>
    </div>

    <div class="nav_left" ref="nav_left" style="display: block;">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>






    <!-- <div> {{language['eng'].home}} </div> -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        data: null,
        language: {},
      }
    },
    created() {
      this.getData()

      // this.axios.get(`${location.protocol}//${window.location.hostname}/api/routing/languages.php`).then((res) => {this.language = res.data})
      this.axios.get('http://localhost/[projects]/ForSchool-MinorcaWebSite/api/routing/languages.php').then((res) => {this.language = res.data})
    },
    methods: {
      getData() {
        // this.axios.get(`${location.protocol}//${window.location.hostname}/api/routing/get.php`).then((res) => { this.data = res.data;});
        this.axios.get('http://localhost/[projects]/ForSchool-MinorcaWebSite/api/routing/get.php').then((res) => { this.data = res.data;});
      },
      onMenu() {
        let e = this.$refs.nav_left
        if (e.style.display == 'block') e.style.display = 'none'
        else if (e.style.display == 'none') e.style.display = 'block'
      }
    }
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

  .nav_top{
    display: flex;
    justify-content: flex-start;
    padding: 5px 10px;
  }
  .nav_top__title{
    text-transform: uppercase;
    letter-spacing: 0.6px;
    font-size: 23px;
    margin-left: auto;
  }
  .nav_top__onMenu{
  }

  .nav_left{
    display: block;
    position: fixed;
    background-color: #111111;
    height: 100%;
  }
</style>
