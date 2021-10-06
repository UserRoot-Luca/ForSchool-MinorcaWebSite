<template>
    <div class="homeitem" v-on:click="this.$router.push(link)">
        <div class="box">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="40px" height="40px" viewBox="0 0 96.000000 96.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                    <path d="M240 780 l0 -60 -60 0 -60 0 0 -80 0 -80 60 0 60 0 0 -80 0 -80 -60
                    0 -60 0 0 -80 0 -80 60 0 60 0 0 -60 0 -60 80 0 80 0 0 60 0 60 80 0 80 0 0
                    -60 0 -60 80 0 80 0 0 60 0 60 60 0 60 0 0 80 0 80 -60 0 -60 0 0 80 0 80 60
                    0 60 0 0 80 0 80 -60 0 -60 0 0 60 0 60 -80 0 -80 0 0 -60 0 -60 -80 0 -80 0
                    0 60 0 60 -80 0 -80 0 0 -60z m320 -300 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80
                    0 0 -80z"/>
                </g>
            </svg>
        </div>
        <div class="contaire_text">
            <div class="title">{{title}}</div>
            <div class="description">{{description}}</div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'HomeItem',
    props: {
        title: String,
        link: String,
        description: String,
    }
}
</script>

<style lang="scss">
    @font-face {
        font-family: "Roboto";
        src: url("../../assets/fonts/Roboto/Roboto-Regular.ttf") format('truetype');
    }
    @font-face {
        font-family: "RobotoBold";
        src: url("../../assets/fonts/Roboto/Roboto-Bold.ttf") format('truetype');
    }

    .homeitem{
        flex: 1;
        flex-basis: 40%;
        color: #ffffff;
        display: flex;
        font-family: "Roboto";
        margin: 10px 10px;
        padding: 5px;
        transition: 0.3s;
        &:hover{
            background-color: #1b7452;
            border-radius: 2px;
            cursor: pointer;
        }
    }
    .homeitem .box{
        background-color: #000000;
        margin-right: 15px;
        min-width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .homeitem .title {
        font-family: "RobotoBold";
        letter-spacing: 1.4px;
        text-transform: capitalize;
    }
    .homeitem .description {
        margin-top: 8px;
        letter-spacing: 0.7px;
        font-size: 16px;
    }
</style>