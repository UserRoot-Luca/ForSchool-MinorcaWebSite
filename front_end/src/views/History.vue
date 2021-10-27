<template>
    <div class="History">
      <PageTitle
        title    = "History"
        subtitle = "Read the history of the Island"
      />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'History',
    components: {
        PageTitle
    }
}
</script>

<style lang="scss">
    .History{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>