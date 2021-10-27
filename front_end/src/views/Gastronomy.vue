<template>
    <div class="Gastronomy">
      <PageTitle
        title    = "Gastronomy"
        subtitle = "See our typical dishes and wines"
      />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'Gastronomy',
    components: {
        PageTitle
    }
}
</script>

<style lang="scss">
    .Gastronomy{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>