<template>
    <div class="item" :style="bgImg">
        <img :src="require(`../../assets/img/accomodations/${this.imgLink}`)" alt="ss">
        <a :href="idLink" class="title">{{title}}</a>
    </div>
</template>

<script>
export default {
    name: 'Link',
    created() {
        console.log(`${this.imgLink}`);
    },
    props: {
        imgLink: String,
        idLink: String,
        title: String
    },
    computed: {
        bgImg() {
            return `background-image: url('${this.imgLink}');`
        }
    }
}
</script>

<style lang="scss" scoped>
    .item{
        // background-color: #000000;
        margin: 8px;
        width: 205px;
        height: 205px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .title {
        background-color: #2c2c2ccc;
        padding: 5px 15px;
        color: #ffffff;
        border-radius: 2px;
        letter-spacing: 0.6px;
    }
</style>