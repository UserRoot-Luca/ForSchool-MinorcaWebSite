<template>
    <div class="PlacesOfInterest">
      <PageTitle
        title    = "Places of Interest"
        subtitle = "Places you can visit, such as Ses Pedreres de s'Hostal and Ciutadella Old Town"
      />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'PlacesOfInterest',
    components: {
        PageTitle
    }
}
</script>

<style lang="scss">
    .PlacesOfInterest{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>