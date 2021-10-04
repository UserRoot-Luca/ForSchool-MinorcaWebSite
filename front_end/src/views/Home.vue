<template>
  <div class="home">
    <div class="container_title">
      <div class="title">island of menorca</div>
      <div class="subtitle">Where the water is crystalline and the beaches wonderful</div>
    </div>
    <div class="container_top">
      <div class="main">
        <HomeItem 
          title       = "dsds"
          description = " ddddddddddddddddddd dddddddddddddddddd ddddddddddddd sd dd d dd d d dddddd fdfdfdfdfdf  fdfdf d   fdfdfdf ddddddddddddddddddd dddddddddddddddddd ddddddddddddd sd dd d dd d d dddddd fdfdfdfdfdf  fdfdf d   fdfdfdf"
          link        = "./about"
        />
        <HomeItem 
          title = "dsds"
          link  = "./about"
        />
        <HomeItem 
          title = "dsds"
          link  = "./about"
        />
        <HomeItem 
          title = "dsds"
          link  = "./about"
        />
        <HomeItem 
          title = "dsds"
          link  = "./about"
        />
        <HomeItem 
          title = "dsds"
          link  = "./about"
        />
        <HomeItem 
          title = "dsds"
          link  = "./about"
        />
        <HomeItem 
          title = "dsds"
          link  = "./about"
        />
      </div>
    </div>

    <div class="container_history">
      <div class="title">history</div>
      <div class="history">
        <p>
          Some years before 252 BC Menorca was invaded by the Carthaginians thus becoming a Punic colony. After the end of the Punic wars, piracy in the western Mediterranean underwent an increase thanks to its strategic position, between the Iberian and Italian peninsula. The Roman reaction was not long in coming and in 123 BC. the Balearic Islands were occupied by the Romans and incorporated into Hispania Citerior.

          In the 5th century Minorca was conquered by the Byzantines. Subsequently, with the conquest of peninsular Spain by the Arabs, Menorca was assigned to the Caliphate of Cordoba (903) and its name was Arabicized in Manûrqa.
          The island resumed its ancient vocation as a refuge for piracy, now Muslim, and because of this in 1137 a Genoese fleet under the orders of the Oberto Della Torre and the consul Caffaro carried out a punitive expedition to Menorca, known as the enterprise of Almería, crowned from success. In 1146 a second Genoese expedition, again arranged by the consul Caffaro, landed infantry and knights on the island who sacked the Muslim villages for four days. The Muslims tried to attack from behind the Genoese forces awaited on the banks in the Fornello area in front of which the ships were moored, but they were unsuccessful and the capital was also conquered by the Genoese.
          In 1231, after the reconquest of Mallorca by Christian forces, Menorca became an independent Islamic state, albeit a tributary of the Christian king James I of Aragon. On January 17, 1287, the Aragonese of Alfonso III invaded the island and most of the Muslim inhabitants were enslaved and sold on the slave markets of Ibiza, Valencia and Barcelona. Until 1344 the island was part of the Kingdom of Mallorca, a vassal state of the Aragonese one, which was subsequently annexed to the Aragonese empire and then to the unified kingdom of Spain.
          In 1535 the island suffered the raid of the pirate Barbarossa and in 1558 the attack of the Turkish Mustafá Pialí destroyed the city of Maó and the capital Ciudadella.
          In 1708, during the War of the Spanish Succession, Menorca was conquered by the English fleet and British rule was confirmed, together with that on the Rock of Gibraltar, with the Treaty of Utrecht of 1713, which ended the War of the Spanish Succession. Menorca became British governorate under Sir Richard Kane and, after the Anglo-Spanish War 1727 - 1729, its membership of Great Britain was confirmed by the Treaty of Seville (9 November 1729).
          During the Seven Years' War Minorca was placed under French siege and the English naval squadron, under the orders of Admiral John Byng (1704-1757), was unable to overcome the adversaries. The English garrison, which John Byng was unable to evacuate, capitulated on June 29, 1756. Following the Treaty of Paris of 1763, British sovereignty was recognized and the island returned to the control of the British crown. During the American Revolution, the Franco-Spanish forces invaded Menorca again (1781) and, after a long siege of the Castle of San Filippo, occupied it completely on February 5, 1782. During the French Revolution, the British forces again regained the sovereignty of the island in 1798.
          With the Treaty of Amiens, stipulated in 1802 between Great Britain and Napoleonic France, Menorca was definitively assigned to Spain.
          During the civil war Minorca remained in republican hands until the end of the conflict, while all the remaining Balearic islands were, from the beginning, in the hands of the nationalists.
        </p>
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
    min-height: 480px;
    padding: 8px 18px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .container_history {
    display: flex;
    flex-direction: column;
    font-family: "Roboto";
  }

  .container_history .history {

  }
</style>