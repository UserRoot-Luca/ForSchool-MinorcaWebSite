<template>
    <div class="item" :style="bgImg">
        <div class="coloredTint" v-on:click="this.$router.push(idLink)">
            <div :href="idLink" class="title">{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Link',
    props: {
        imgLink: String,
        idLink: String,
        title: String
    },
    computed: {
        bgImg() {
            return `background-image: url(${require(`@/assets/img/accomodations/${this.imgLink}`)});`
        },
    },
}
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: "RobotoBold";
        src: url("../../assets/fonts/Roboto/Roboto-Bold.ttf") format('truetype');
    }
    .item{
        background-color: #000000;
        margin: 8px;
        width: 205px;
        height: 205px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .title {
        padding: 5px 15px;
        color: #ffffff;
        border-radius: 2px;
        letter-spacing: 1.2px;
        text-decoration: none;
        font-size: 20px;
        text-transform: uppercase;
        font-family: "RobotoBold";
    }
    
    .coloredTint{
        background-color: #19282e9d;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>