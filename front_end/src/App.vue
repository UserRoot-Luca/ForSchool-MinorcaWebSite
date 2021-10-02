<template>
  <div class="main">
    <div class="nav_top">
      <div class="nav_top__onMenu" v-on:click="onMenu" ref="nav_top__onMenu">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div class="nav_top__title">island of menorca</div>
    </div>

    <div class="nav_left" ref="nav_left" style="display: none;">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>


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
      },
      onMenu() {
        this.$refs.nav_top__onMenu.classList.toggle("change")

        let e = this.$refs.nav_left
        if (e.style.display == 'block') e.style.display = 'none'
        else if (e.style.display == 'none') e.style.display = 'block'
      }
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: "Zilla Slab";
    src: url("assets/fonts/Zilla Slab/ZillaSlab-Regular.ttf") format('truetype');
  }
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
    align-items: center;
  }

  .nav_top__title{
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 30px;
    margin-left: 30px;
    font-family: 'Zilla Slab', serif;
  }

  .nav_top__onMenu{
      cursor: pointer;
  }

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-6px, 6px);
    transform: rotate(-45deg) translate(-6px, 6px);
  }

  .change .bar2 {opacity: 0;}

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }

  .nav_left{
    display: block;
    position: fixed;
    background-color: #b83a3a;
    height: 100%;
    z-index: 2147483647;
  }
</style>
