

<template>
    <div class = "wrapper">
            <nav-bar></nav-bar>
            <router-view></router-view>
            <foot-bar></foot-bar>          
    </div>
</template>



<script>
    import navBar from "./components/navbar.vue";
    import footBar from "./components/footer.vue";
    export default{
        components:{
            navBar:navBar,
            footBar:footBar
		},
    }
</script>