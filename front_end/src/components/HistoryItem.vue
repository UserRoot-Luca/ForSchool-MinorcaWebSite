<template>
    <li>
        <div class="item">
            <div class="title">{{ title }}</div>
            <p class="text">{{ text }}</p>
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

<style lang="scss" scoped>
    // This code is based on the one made by chriswrightdesign //
    .item>.title{
        line-height: 1.2;
        letter-spacing: 0.02em;
        color:#000000;
        font-family: "Roboto";
        font-size: 26px;
        padding-bottom: 12px;
        font-weight: 900;
    }
    .item>.text{
        line-height: 1.5;
        color:#262929;
        font-family: "Roboto";
        font-size: 1em;
        -webkit-font-smoothing: antialiased;
        margin: 0 auto 1em auto;
    }

    li {
        margin: 0 0 3em 0;
        padding: 0 2em 0em 2em;
        position: relative;

        &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: -1.45em;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: none repeat scroll 0% 0% #1b6448;
            border: 5px solid #9faf9d;
        }
    }
</style>