<template>
  <div class="main">
    <div class="main__nav">
      <div class="main__nav__top">
        <span>
          <svg enable-background="new 0 0 293.334 293.334" version="1.1" viewBox="0 0 293.33 293.33" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <g fill="#4d73c4">
              <path d="m146.67 0c-51.764 0-93.721 41.957-93.721 93.721 0 22.322 7.849 42.789 20.891 58.878 4.204 5.178 11.237 13.331 14.903 18.906 21.109 32.069 48.19 78.643 56.082 116.86 1.354 6.527 2.986 6.641 4.743 0.212 5.629-20.609 20.228-65.639 50.377-112.76 3.595-5.619 10.884-13.483 15.409-18.379 6.554-7.098 12.009-15.224 16.154-24.084 5.651-12.086 8.882-25.466 8.882-39.629 0-51.77-41.957-93.732-93.72-93.732zm0 144.36c-28.892 0-52.313-23.421-52.313-52.313 0-28.887 23.421-52.307 52.313-52.307s52.313 23.421 52.313 52.307c0 28.893-23.421 52.313-52.313 52.313z"/>
              <circle cx="146.67" cy="90.196" r="21.756"/>
            </g>
          </svg>
        </span>
        <a href="http://maps.google.com/maps?ll=39.966667,4.083333&spn=0.1,0.1&t=m&q=39.966667,4.083333" target="_blank" rel="noopener noreferrer">39°58′N 4°05′E</a>
      </div>
      <div class="main__nav__botton">
        
        <router-link to="/" class="main__nav__botton__link">Home</router-link>
        <router-link to="/about" class="main__nav__botton__link">About</router-link>

      </div>

    </div>
    <router-view/>
    <!-- <div class="nav_top__title">island of menorca</div> -->
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
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: "Roboto";
    src: url("assets/fonts/Roboto/Roboto-Regular.ttf") format('truetype');
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html, body, #app{
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
  }

  .main__nav{
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
  }

  .main__nav__top{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
  }
  .main__nav__top svg{
    width: 28px;
  }

  .main__nav__top a{
    text-decoration: none;
    font-family: "Roboto";
    color: #4d73c4;
  }

  .main__nav__botton{
    background-color: #e2e2e2;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    padding-left: 45px;
    margin: 5px 0px;
  }

  .main__nav__botton__link{
    text-decoration: none;
    font-family: "Roboto";
    letter-spacing: 0.6px;
    text-transform: uppercase;
    padding: 25px 10px;
    color: #000000;
    &:hover{
      color: #434777;
    }
  }
</style>
