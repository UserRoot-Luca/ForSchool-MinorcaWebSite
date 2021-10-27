<template>
    <div class="Accomodations">
      <div class="links_container">
        <div class="main">
          <Link 
            idLink  = "#hotel"
            imgLink = "bg_link_hotel.jpg"
            title   = "Hotels"
          />
          <Link 
            idLink  = "#apartment"
            imgLink = "bg_link_apartment.jpg"
            title   = "Apartments"
          />
          <Link 
            idLink  = "#room"
            imgLink = "bg_link_room.jpg"
            title   = "Single room"
          />
          <Link 
            idLink  = "#camping"
            imgLink = "bg_link_camping.jpg"
            title   = "Camping"
          />
        </div>
      </div>

      <fieldset class="category" id="hotel">
        <legend>Hotels</legend>
        <p>
          <img src="@/assets/img/accomodations/bg_link_hotel.jpg">
          Menorca can claim to have very prestigious tourist facilities and hotels. there are many of them all throught the Island, with star ratings that range from 3 to 5 stars, and in each and every one of them you will be treat with respect and professionality.
          the hotels are located both in central zones, near places of interests and beaches, and in further away from the cities, where you can spend your holidays in contact with nature.
          Rest assured that every hotel is located near public transportations and busses, even should you choose to stay in the most remote one.
          Naturally, the offers are quite numerous, so you can be sure that you'll be able to find one that'll be sure to satisfy you
        </p>
      </fieldset>

      <fieldset class="category" id="apartment">
        <legend>Apartments</legend>
        <p>
          <img src="@/assets/img/accomodations/bg_link_apartment.jpg">
          If you are looking for a more indipendent stay, or maybe you are with a group of friends and intend to split the bill, our apartments may be for you.
          They are more convenient than hotels and offer more freedom, and you can bring your pet too; our apartment are also a great choice for large families and will make you feel like at home!
          Should you opt for a longer stay, you'll probably be happy to know that the average rent is 400 euros monthly.
        </p>
      </fieldset>

      <fieldset class="category" id="room">
        <legend>Single room</legend>
        <p>
          <img src="@/assets/img/accomodations/bg_link_room.jpg">
          If you are a couple or you are traveling alone, and are planning to stay for an extended period of time, such as 3 months, you may want to rent a room and get a taste of the ospitality the Island of Menorca is famous for.
          Different landlords offer different rooms, but the offer is great and you'll be sure to find the room that suits your need the most, and why not, maybe the needs of your pet too, should you have one and decide to bring along your trusted companion.
        </p>
      </fieldset>

      <fieldset class="category" id="camping">
        <legend>Camping</legend>
        <p>
          <img src="@/assets/img/accomodations/bg_link_camping.jpg">
          If what you are looking for is a holiday fully immersed in the nature, we have got you covered as well, all you need is to pack your tent and your camping gear and come spend the holidays at one of our two camping sites, Camping Son Bou and Camping S'Atalaia.
          both camping sites have excellent facilities for your needs and are located no more than 3 kilometers from the sea.
        </p>
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

  .Accomodations{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding: 8px 25px;
    font-size: 20px;
    font-family: "Roboto";
    margin: 25px 6%;
    // border: solid 1px #000000;
    border: none;
    width: 62%;
    &>legend{
      font-size: 30px;
      font-family: "Zilla Slab";
      text-transform: uppercase;
      letter-spacing: 0.8px;
      font-weight: bold;
    }
  }
  .category>p{
    letter-spacing: 0.8px;
    line-height: 25px;
    text-align: justify;
  }
  .category>p img{
    float: right;
    width: 330px;
    height: 330px;
    object-fit: cover;
    margin-left: 23px;
    margin-bottom: 23px;
  }
</style>