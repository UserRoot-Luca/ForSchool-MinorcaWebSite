<template>
  <div class="home">
    <div class="container_title">
      <div class="title">island of menorca</div>
      <div class="subtitle">Where the water is crystalline and the beaches wonderful</div>
    </div>
    <div class="container_top">
      <div class="main">
        <HomeItem 
          title = "dsds"
          link  = "dsds"
        />
      </div>
    </div>

    <div class="container_history">
      <div class="title">history</div>
      <div class="history">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint praesentium tempore voluptatum. Fuga vero accusamus, rem, neque recusandae, necessitatibus dolor ratione similique et eveniet fugit? Reprehenderit, tempora porro. Vero, aspernatur?
      </div>
    </div>


  </div>
</template>

<script>
  import HomeItem from '../components/HomeItem.vue'

  export default {
    name: 'Home',
    components: {
      HomeItem
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: "Zilla Slab";
    src: url("../assets/fonts/Zilla Slab/ZillaSlab-Bold.ttf") format('truetype');
  }
  @font-face {
    font-family: "Roboto";
    src: url("../assets/fonts/Roboto/Roboto-Regular.ttf") format('truetype');
  }

  .container_title{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .container_title .title{
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: "Zilla Slab";
    font-size: 50px;
    margin-bottom: 15px;
    color: #000000;
  }

  .container_title .subtitle{
    letter-spacing: 0.6px;
    font-size: 19px;
    font-family: "Roboto";
    color: #161616;
  }

  .container_top{
    display: flex;
    justify-content: center;
    margin: 35px 0px;
    margin-top: 50px;
  }

  .container_top .main{
    background-color: #262626;
    width: 75%;
    height: 480px;
  }



  .container_history {
    display: flex;
    flex-direction: column;
  }


</style>