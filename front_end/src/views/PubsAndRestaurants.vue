<template>
    <div class="PubsAndRestaurants">
      <PageTitle
        title    = "Pubs and Restaurants"
        subtitle = "Take a look at one (or three) of our pubs or restaurants"
      />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'PubsAndRestaurants',
    components: {
        PageTitle
    }
}
</script>

<style lang="scss">
    .PubsAndRestaurants{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>