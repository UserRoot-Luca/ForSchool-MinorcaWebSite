<template>
    <div class="HowToGetHere">
      <PageTitle
        title    = "How to get here"
        subtitle = "Find out how you can get here (definetly not by car)"
      />
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'HowToGetHere',
    components: {
        PageTitle
    }
}
</script>

<style lang="scss">
    .HowToGetHere{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>