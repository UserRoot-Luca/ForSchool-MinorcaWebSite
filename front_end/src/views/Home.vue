<template>
  <div class="home">
    <div class="container_title">
      <div class="title">island of menorca</div>
      <div class="subtitle">Where the water is crystalline and the beaches wonderful</div>
    </div>
    <div class="container_top">
      <div class="main">
        <HomeItem 
          title       = "Places of Interest"
          description = "Places you can visit, such as Ses Pedreres de s'Hostal and Ciutadella Old Town"
          link        = "./about"
        />
        <HomeItem 
          title       = "Beaches"
          description = "Sunbathe in one of our beaches, such as Cala Macarelleta and Calas Mitjana"
          link        = "./about"
        />
        <HomeItem 
          title       = "Gastronomy"
          description = "See our typical dishes and wines"
          link        = "./about"
        />
        <HomeItem 
          title       = "History"
          description = "Read the history of the Island"
          link        = "./about"
        />
        <HomeItem 
          title       = "Pubs and Restaurants"
          description = "Take a look at one (or three) of our pubs or restaurants"
          link        = "./about"
        />
        <HomeItem 
          title       = "Vehicles rental"
          description = "Find out where you can rent a car or a motorbike to move around the Island"
          link        =  "./about"
        />
        <HomeItem 
          title       = "How to get here"
          description = "Find out how you can get here (definetly not by car)"
          link        = "./about"
        />
        <HomeItem 
          title       = "Accomodations"
          description = "Take a look to our accomodations, whether it's a hotel or a house you're looking for, we probably have it"
          link        = "./accomodations"
        />
      </div>
    </div>

    <section class="container_history">
      <div class="main">
        <div class="heading">
          <div class="title">BRIEF HISTORY OF THE ISLAND</div>
        </div>
        <ul class="timeline">
          <HistoryItem
            title = "Circa 252 BC"
            text  = "Menorca was invaded by the Carthaginians thus becoming a Punic colony."
          />
          <HistoryItem
            title = "123 BC"
            text  = "After the end of the Punic wars, piracy in the western Mediterranean underwent an increase thanks to its strategic position, between the Iberian and Italian peninsula.
                    The Roman reaction was not long in coming and in 123 BC. the Balearic Islands were occupied by the Romans and incorporated into Hispania Citerior."
          />
          <HistoryItem
            title = "903"
            text  = "With the conquest of peninsular Spain by the Arabs, Menorca was assigned to the Caliphate of Cordoba (903) and its name was Arabicized in Manûrqa.
                    under Muslim management, the Island resumed its ancient vocation as a refuge for piracy"
          />
          <HistoryItem
            title = "1137"
            text  = "Because of piracy, in 1137 a Genoese fleet under the orders of Oberto Della Torre and the consul Caffaro carried out a punitive expedition to Menorca, known as the enterprise of Almería."
          />
          <HistoryItem
            title = "1146"
            text  = "A second Genoese expedition, again arranged by the consul Caffaro, landed infantry and knights on the island who sacked the Muslim villages for four days. The Muslims tried to attack from behind the Genoese forces on the banks in the Fornello area in front of which the ships were moored, but they were unsuccessful and the capital was also conquered by the Genoese."
          />
          <HistoryItem
            title = "1231"
            text  = "After the reconquest of Mallorca by Christian forces, Menorca became an independent Islamic state, albeit a tributary of the Christian king James I of Aragon."
          />
          <HistoryItem
            title = "1287"
            text  = "On January 17 the Aragonese of Alfonso III invaded the island and most of the Muslim inhabitants were enslaved and sold on the slave markets of Ibiza, Valencia and Barcelona.
                    Until 1344 the island was part of the Kingdom of Mallorca, a vassal state of the Aragonese, which was subsequently annexed to the Aragonese empire and then to the unified kingdom of Spain."
          />
          <HistoryItem
            title = "1708"
            text  = "During the War of the Spanish Succession, Menorca was conquered by the English fleet and British rule was confirmed, together with that on the Rock of Gibraltar, with the Treaty of Utrecht of 1713, which ended the War of the Spanish Succession.
                    Menorca became British governorate under Sir Richard Kane and, after the Anglo-Spanish War, its membership of Great Britain was confirmed by the Treaty of Seville."
          />
          <HistoryItem
            title = "1781"
            text  = "During the American Revolution, the Franco-Spanish forces invaded Menorca and, after a long siege of the Castle of San Filippo, occupied it completely on February 5, 1782."
          />
          <HistoryItem
            title = "1798"
            text  = "During the French Revolution, the British forces again regained the sovereignty of the island."
          />
          <HistoryItem
            title = "1802"
            text  = "With the Treaty of Amiens, stipulated in 1802 between Great Britain and Napoleonic France, Menorca was definitively assigned to Spain"
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import HomeItem from '../components/home/HomeItem.vue'
  import HistoryItem from '../components/home/HistoryItem.vue'

  export default {
    name: 'Home',
    components: {
      HomeItem,
      HistoryItem
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

  .container_title>.title{
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
    min-height: 480px;
    padding: 8px 18px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }


  // This code is based on the one made by chriswrightdesign //
  .container_history {
    min-height: 80vh;
    padding: 2em 0 4em 0;
  }

  .container_history .heading>.title {
    text-align: center;
    margin: 1em 0 0 0;
    line-height: 1;
    color:#000000;
    font-family: "Zilla Slab";
    font-size: 43px;
    letter-spacing: 1.8px;
    font-weight: 900;
  }

  .container_history .heading{
    margin: 0 0 3em 0;
  }

  .container_history .main{
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1em;
    padding-right: 1em;
    @media all and (min-width: 40em) {
      padding-left: 2em;
      padding-right: 2em;
    }
  }

  .container_history .timeline {
    padding-bottom: 1em;
    position: relative;
    max-width: 700px;
    margin: 0 auto;

    &:before {
      content: "";
      border-left: 5px solid #218b63;
      left: -0.35em;
      top: 2em;
      height: 100%;
      position: absolute;
      bottom: 0;
      top: 0;
      transform-origin: 0 0;
    }
    &:after {
      content: "";
      clear: both;
      position: absolute;
      bottom: 0px;
      left: -1.14em;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: none repeat scroll 0% 0% #1b7452;
      border: 5px solid #1b7452;
      box-shadow: 1px 1px 1px #0000001a;
    }
  }
  // --------------------------------------------- //
</style>