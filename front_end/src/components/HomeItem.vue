<template>
    <div class="homeitem">
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
export default {
    name: 'HomeItem',
    props: {
        title: String,
        link: String,
    }
}
</script>

<style lang="scss">
    .homeitem{
        background-color: aqua;
        color: #ffffff;
    }
</style>