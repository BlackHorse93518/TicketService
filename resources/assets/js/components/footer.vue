<template>
        <footer>
            <div class="container-fluid">
                <nav class="pull-left">
                    <ul>
                        <li>
                            <a class="language" data-target="#langmodal" data-toggle="modal" href="#">
                                <span class="flag-icon flag-icon-us">
                                </span> English
                            </a>
                        </li>
                        <li><a href="dashboard.html#"><i class="fa fa-question"></i> Help</a></li>
                    </ul>
                </nav>
                <p class="copyright pull-right">
                    <ul class="list-inline foo_links text-right">
                        <li><a href="#"><i class="fa fa-copyright"></i>&nbsp;ALL RIGHTS RESERVED. COPYRIGHT SmartSystems 2018.</a></li>
                    </ul>
                </p>
            </div>
        </footer>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>