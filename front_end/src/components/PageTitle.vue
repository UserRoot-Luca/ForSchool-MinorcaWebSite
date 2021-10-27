<template>
    <div class="container_title">
      <div class="title"><h1>{{title}}</h1></div>
      <div class="subtitle"><h3>{{subtitle}}</h3></div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        title: String,
        subtitle: String,
    },
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Zilla Slab Bold";
    src: url("../assets/fonts/Zilla Slab/ZillaSlab-Bold.ttf") format('truetype');
  }
  .container_title{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0px;
    text-align: center;
  }

  .container_title>.title{
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: "Zilla Slab Bold";
    // font-size: 41px;
    font-size: 4.19vh;
    margin-bottom: 15px;
    color: #000000;
  }

  .container_title .subtitle{
    letter-spacing: 1px;
    // font-size: 23px;
    font-size: 2.35vh;
    padding: 0px 5px;
    font-family: "Roboto";
    color: #161616;
  }
</style>