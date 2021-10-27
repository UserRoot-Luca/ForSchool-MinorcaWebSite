<template>
    <div class="Beaches">
      <PageTitle
        title    = "Beaches"
        subtitle = "Sunbathe in one of our beaches, such as Cala Macarelleta and Calas Mitjana"
      />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'Beaches',
    components: {
        PageTitle
    }
}
</script>

<style lang="scss">
    .Beaches{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>