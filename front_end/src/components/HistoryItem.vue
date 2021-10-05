<template>
    <li>
        <div class="content">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: 'HistoryItem',
    props: {
        title: String,
        text: String,
    }
}
</script>

<style lang="scss">
    .content h3 {
        font-size: 1.2em;
        line-height:1.2;
        letter-spacing:0.02em;
        color:#fff;

        @media all and (min-width:40em) {
            font-size: 2.5em;
        }
    }
    p {
        line-height:1.5;
    }
</style>