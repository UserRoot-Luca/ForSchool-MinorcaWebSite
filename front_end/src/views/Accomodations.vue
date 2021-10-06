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
            imgLink = ""
            title   = "apartment"
          />
          <Link 
            idLink  = "#room"
            imgLink = ""
            title   = "room"
          />
          <Link 
            idLink  = "#camping"
            imgLink = ""
            title   = "camping"
          />
        </div>
      </div>


      <div class="category" id="hotel">
        hotel
      </div>

      <div class="category" id="apartment">
        apartment
      </div>

      <div class="category" id="room">
        room
      </div>

      <div class="category" id="camping">
        camping
      </div>
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
  .links_container {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  .links_container .main{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>