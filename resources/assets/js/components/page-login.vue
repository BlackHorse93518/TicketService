<template>

<div class="vid-container">
        <video class="bgvid" autoplay="autoplay" muted="muted" preload="auto" loop>
            <source src="http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?1410742112" type="video/webm">
        </video>
        <div class="inner-container">
            <video class="bgvid inner" autoplay="autoplay" muted="muted" preload="auto" loop>
                <source src="http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?random=1" type="video/webm">
            </video>
            <div class="box">
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button>Login</button>
                <p>Not a member? <span>Sign Up</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>