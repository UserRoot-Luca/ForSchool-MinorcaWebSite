<template>
    <div class="VehiclesRental">
      <PageTitle
        title    = "Vehicles rental"
        subtitle = "Find out where you can rent a car or a motorbike to move around the Island"
      />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'VehiclesRental',
    components: {
        PageTitle
    }
}
</script>

<style lang="scss">
    .VehiclesRental{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>