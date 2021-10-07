<template>
    <div class="Accomodations">
      <div class="links_container">
        <div class="main">
          <Link 
            idLink  = "#hotel"
            imgLink = "bg_link_hotel.jpg"
            title   = "hotel"
          />
          <Link 
            idLink  = "#apartment"
            imgLink = "bg_link_apartment.jpg"
            title   = "apartment"
          />
          <Link 
            idLink  = "#room"
            imgLink = "bg_link_room.jpg"
            title   = "single room"
          />
          <Link 
            idLink  = "#camping"
            imgLink = "bg_link_camping.jpg"
            title   = "camping"
          />
        </div>
      </div>

      <fieldset class="category" id="hotel">
        <legend>hotel</legend>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui delectus deserunt expedita, dolorem amet impedit officiis nesciunt, eveniet sit blanditiis temporibus. Facilis iste beatae voluptas quidem eligendi odio sed velit?
      </fieldset>

      <fieldset class="category" id="apartment">
        <legend>apartment</legend>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur unde laborum minima voluptatum dolores odit deserunt sequi sint minus voluptate, ut, aut dolor iusto cupiditate asperiores beatae omnis voluptatibus veniam.
      </fieldset>

      <fieldset class="category" id="room">
        <legend>single room</legend>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corrupti voluptatem molestias voluptatum ipsam, sapiente ad quidem ut animi quibusdam repellendus nam nihil, inventore unde vero similique saepe? Sit, est?
      </fieldset>

      <fieldset class="category" id="camping">
        <legend>camping</legend>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem sequi dignissimos ullam optio repudiandae repellendus. Officia, molestiae, aliquam, quod corrupti consectetur obcaecati recusandae animi blanditiis placeat sequi sapiente eveniet.
      </fieldset>
    </div>
</template>

<script>
import Link from '../components/accomodations/Link.vue'

export default {
    name: 'Accomodations',
    data() {
      return {
        
      }
    },
    components: {
      Link
    }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Zilla Slab";
    src: url("../assets/fonts/Zilla Slab/ZillaSlab-Regular.ttf") format('truetype');
  }
  @font-face {
    font-family: "Roboto";
    src: url("../assets/fonts/Roboto/Roboto-Regular.ttf") format('truetype');
  }

  .links_container {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 75px;
  }

  .links_container .main{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .category{
    padding: 8px 13px;
    font-size: 16px;
    font-family: "Roboto";
    margin: 20px 35px;
    border: solid 1px #000000;
    &>legend{
      font-size: 19px;
      font-family: "Zilla Slab";
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
  }
</style>