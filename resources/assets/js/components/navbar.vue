<template>
        <div class="sidebar" data-color="purple" data-image="img/sidebar-1.jpg.html">
            <div class="sidebar-wrapper">
                <div class="user-dropdown show" style="z-index:6;">
                    <a class="btn btn-default dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user-circle"></i> <span class="user-profile-text">Rohan Sulaiman ... <i class="fa fa-angle-down"></i></span></a>

                    <div style="z-index:5; left: 10px !important; top: 71px" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <div style="padding:8px" class="btn-group btn-group-justified btn-group-sm" data-ng-click="$event.stopPropagation()" data-eo-halt="check($event)">
                            <label id="online" class="btn btn-default ng-untouched ng-valid ng-not-empty ng-dirty ng-valid-parse active" style="background-color: #9ac034" data-ng-model="dash.visibility" data-ng-click="setVisibility('VISIBLE')" data-eo-btn-radio="'VISIBLE'">Online</label>
                            <label id="invisible" class="btn btn-light ng-untouched ng-valid ng-not-empty ng-dirty label-bg-2" data-ng-model="dash.visibility" data-ng-click="setVisibility('INVISIBLE')" data-eo-btn-radio="'INVISIBLE'" title="Appear offline to other users">Invisible</label>
                        </div>

                        <li><a class="dropdown-item" href="#"><i class="fa fa-user-circle"></i><span> Rohan Sulaiman</span></a></li>
                        <li><a class="dropdown-item" href="settings"><i class="fa fa-cogs setting-icon"></i> Setting</a></li>
                        <li><a class="dropdown-item" href="login"><i class="fa fa-sign-out"></i> Logout</a></li>
                    </div>
                </div>
                <!--<div class="user-img">-->
                <!--<img src="img/sidebar/user.png" class="img-responsive">-->
                <!--</div>-->
                <ul class="nav" style="margin-top: 74px;">
                    <li class="active" id="menuactive">
                        <a href="/">
                            <span class="icon-btn">
                                <i class="fa fa-home"></i>
                            </span>
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a href="/addsv">
                            <span class="icon-btn">
                                <i class="fa fa-black-tie"></i>
                            </span>
                            <p>Add SV</p>
                        </a>
                    </li>
                    <li>
                        <a href="/addstaff">
                            <span class="icon-btn">
                                <i class="fa fa-user"></i>
                            </span>
                            <p>Add Staff</p>
                        </a>
                    </li>
                    <li>
                        <a href="/tickets">
                            <span class="icon-btn">
                                <i class="fa fa-bug"></i>
                            </span>
                            <p>Tickets</p>
                        </a>
                    </li>
                    <li>
                        <a href="/review">
                            <span class="icon-btn">
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </span>
                            <p>Reviews</p>
                        </a>
                    </li>
                    <li>
                        <a href="/department">
                            <span class="icon-btn">
                                <i class="fa fa-building"></i>
                            </span>
                            <p>Departments</p>
                        </a>
                    </li>
                    <li>
                        <a href="/supportTicket">
                            <span class="icon-btn">
                                <i class="fa fa-question-circle "></i>
                            </span>
                            <p>Support Help</p>
                        </a>
                    </li>

                </ul>
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