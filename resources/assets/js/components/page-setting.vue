<template>

<div class="main-panel">

            <header>
                <div class="w-100">
                    <!--first-menu-->
                    <div class="topnav" id="myTopnav">
                        <div class="logo">
                            <a href="dashboard.html" class="simple-text">
                                <img src="img/sidebar/logo.png.jpeg">
                            </a>
                        </div>
                        <a class="responsive-logo">
                            <img src="img/header/logo.jpeg">
                        </a>
                        <a href="#Statics" aria-controls="Statics" role="tab" data-toggle="tab"><i class="fa fa-bar-chart" style="width:auto" aria-hidden="true"></i></a>
                        <div class="appointment">
                            <a class="dropdown-toggle" id="apointments" href="#" role="button" data-toggle="dropdown" expanded="false">
                                <i aria-hidden="true" class="fa fa-calendar-times-o">
                                </i>
                                <span class="noty-bubble">
                                2
                            </span>

                            </a>
                            <div id="dropdown1" class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(335px, 65px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <div class="notification-container">
                                    <h3>Notifications
                                        <i class="material-icons dp48 right">settings</i>
                                    </h3>

                                    <input class="checkbox" type="checkbox" id="size_1" value="small" checked="">
                                    <label class="notification new" for="size_1"><em>1</em> new <a href="">guest account(s)</a> have been created.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_2" value="small" checked="">
                                    <label class="notification new" for="size_2"><em>3</em> new <a href="">lead(s)</a> are available in the system.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_3" value="small" checked="">
                                    <label class="notification" for="size_3"><em>5</em> new <a href="">task(s)</a>.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_4" value="small" checked="">
                                    <label class="notification" for="size_4"><em>9</em> new <a href=""> event(s)</a> are scheduled for today.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_5" value="small" checked="">
                                    <label class="notification" for="size_5"><em>1</em> blog post <a href="">comment(s)</a> need approval.<i class="material-icons dp48 right">clear</i></label>

                                </div>
                            </div>
                        </div>

                        <!--<div class="notification-container">-->
                        <!--<h3>Notifications-->
                        <!--<i class="material-icons dp48 right">settings</i>-->
                        <!--</h3>-->

                        <!--<input class="checkbox" type="checkbox" id="size_1" value="small" checked="">-->
                        <!--<label class="notification new" for="size_1"><em>1</em> new <a href="">guest account(s)</a> have been created.<i class="material-icons dp48 right">clear</i></label>-->

                        <!--<input class="checkbox" type="checkbox" id="size_2" value="small" checked="">-->
                        <!--<label class="notification new" for="size_2"><em>3</em> new <a href="">lead(s)</a> are available in the system.<i class="material-icons dp48 right">clear</i></label>-->

                        <!--<input class="checkbox" type="checkbox" id="size_3" value="small" checked="">-->
                        <!--<label class="notification" for="size_3"><em>5</em> new <a href="">task(s)</a>.<i class="material-icons dp48 right">clear</i></label>-->

                        <!--<input class="checkbox" type="checkbox" id="size_4" value="small" checked="">-->
                        <!--<label class="notification" for="size_4"><em>9</em> new <a href=""> event(s)</a> are scheduled for today.<i class="material-icons dp48 right">clear</i></label>-->

                        <!--<input class="checkbox" type="checkbox" id="size_5" value="small" checked="">-->
                        <!--<label class="notification" for="size_5"><em>1</em> blog post <a href="">comment(s)</a> need approval.<i class="material-icons dp48 right">clear</i></label>-->

                        <!--</div>-->
                        <a href="chat.html">
                            <i aria-hidden="true" class="fa fa-envelope-open-o">
                            </i>
                            <span class="noty-bubble">
                                15
                            </span>
                        </a>
                        <div class="appointment">
                            <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" expanded="false">
                                <i aria-hidden="true" class="fa fa-bullhorn">
                                </i>
                                <span class="noty-bubble">
                                2
                            </span>
                            </a>
                            <div id="dropdown2" class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(335px, 65px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <div class="notification-container">
                                    <h3>Notifications
                                        <i class="material-icons dp48 right">settings</i>
                                    </h3>

                                    <input class="checkbox" type="checkbox" id="size_1" value="small" checked="">
                                    <label class="notification new" for="size_1"><em>1</em> new <a href="">guest account(s)</a> have been created.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_2" value="small" checked="">
                                    <label class="notification new" for="size_2"><em>3</em> new <a href="">lead(s)</a> are available in the system.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_3" value="small" checked="">
                                    <label class="notification" for="size_3"><em>5</em> new <a href="">task(s)</a>.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_4" value="small" checked="">
                                    <label class="notification" for="size_4"><em>9</em> new <a href=""> event(s)</a> are scheduled for today.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_5" value="small" checked="">
                                    <label class="notification" for="size_5"><em>1</em> blog post <a href="">comment(s)</a> need approval.<i class="material-icons dp48 right">clear</i></label>

                                </div>
                            </div>
                        </div>

                        <div class="appointment">
                            <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" expanded="false">
                                <i aria-hidden="true" class="fa fa-info-circle">
                                </i>
                                <span class="noty-bubble">
                                2
                            </span>
                            </a>
                            <div id="dropdown3" class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(335px, 65px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <div class="notification-container">
                                    <h3>Notifications
                                        <i class="material-icons dp48 right">settings</i>
                                    </h3>

                                    <input class="checkbox" type="checkbox" id="size_1" value="small" checked="">
                                    <label class="notification new" for="size_1"><em>1</em> new <a href="">guest account(s)</a> have been created.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_2" value="small" checked="">
                                    <label class="notification new" for="size_2"><em>3</em> new <a href="">lead(s)</a> are available in the system.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_3" value="small" checked="">
                                    <label class="notification" for="size_3"><em>5</em> new <a href="">task(s)</a>.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_4" value="small" checked="">
                                    <label class="notification" for="size_4"><em>9</em> new <a href=""> event(s)</a> are scheduled for today.<i class="material-icons dp48 right">clear</i></label>

                                    <input class="checkbox" type="checkbox" id="size_5" value="small" checked="">
                                    <label class="notification" for="size_5"><em>1</em> blog post <a href="">comment(s)</a> need approval.<i class="material-icons dp48 right">clear</i></label>

                                </div>
                            </div>
                        </div>

                        <a href="#OurFollower" aria-controls="OurFollower" role="tab" data-toggle="tab"><i class="fa fa-star" style="width:auto; color: #777" aria-hidden="true"></i> </a>
                        <a href="#ServiceOffers" aria-controls="ServiceOffers" role="tab" data-toggle="tab"><i class="fa fa-handshake-o" aria-hidden="true" style="width:auto"></i>                              <span class="noty-bubble">
                                2
                            </span>
                        </a>
                        <a href="#JobsOffers" aria-controls="JobsOffers" role="tab" data-toggle="tab"><i class="fa fa-briefcase" aria-hidden="true"></i>                               <span class="noty-bubble">
                                2
                            </span></a>
                        <a href="supportticket.html"><i class="fa fa-life-ring" aria-hidden="true"></i>                              <span class="noty-bubble">
                                2
                            </span></a>
                        <a href="http://clubgoodfood.com/freelance/post-job.html" class="post-job-btn">
                            <i aria-hidden="true" class="fa fa-plus-square">
                            </i>
                            <span>Post Your Job</span>

                        </a>

                        <a href="javascript:void(0);" style="font-size:-webkit-xxx-large;" class="icon" onclick="responsive_header()">&#9776;</a>
                    </div>
                    <!--fm-end-->
                </div>


            </header>


            <div class="tab-content">
                <div class="tab-pane active" id="Statics" role="tabpanel">
                </div>
                <div class="tab-pane" id="ServiceOffers" role="tabpanel">
                    <div class="main-content">
                        <div class="tab-section">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class=" bhoechie-tab">
                                        <div class="bhoechie-tab-content active">
                                            <div>
                                                <ul style="background-color: white;" class="nav nav-tabs" role="tablist">
                                                    <li class="active" role="presentation">
                                                        <a style="margin-top: 10px;" aria-controls="" aria-expanded="false" data-toggle="tab" href="#ServiceOffersn1" role="tab">
                                                            <div class='row'>
                                                                <div class='col-md-6' style="text-align: right;width:10%;">
                                                                    <i aria-hidden="true" class="fa fa-industry">
                                                                    </i>
                                                                </div>
                                                                <div class='col-md-6' style="text-align: left;width:auto;padding-top:4px">
                                                                    Service Offers
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="" role="presentation">
                                                        <a style="margin-top: 10px;" aria-controls="" aria-expanded="true" data-toggle="tab" href="#ServiceOffersn2" role="tab">
                                                            <div class='row'>
                                                                <div class='col-md-6' style="text-align: right;width:10%;">
                                                                    <i aria-hidden="true" class="fa fa-cogs">
                                                                    </i>
                                                                </div>
                                                                <div class='col-md-6' style="text-align: left;width:auto;padding-top:4px">
                                                                    Items Offers
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="ServiceOffersn1" role="tabpanel">
                                                        <div class="">
                                                            <section style="margin-top: -37px;" class="cd-gallery filter-is-visible">
                                                                <ul id="MixItUp83A0F8">
                                                                    <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <d>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end html option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics php option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing front-end php option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end php option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end html option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing front-end php option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment front-end html option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics php option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment front-end php option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                </ul>
                                                                <div class="cd-fail-message">
                                                                    No results found
                                                                </div>
                                                            </section>
                                                            <div class="row">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane" id="ServiceOffersn2" role="tabpanel">
                                                        <section style="margin-top: -37px;" class="cd-gallery filter-is-visible">
                                                            <ul id="MixItUp718A52">
                                                                <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Suns
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end html option2" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics php option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block; margin-top: 54px;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing front-end php option2" style="display: inline-block; margin-top: 54px;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end php option3" style="display: inline-block; margin-top: 54px;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end html option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing front-end php option4" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment front-end html option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics php option2" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment front-end php option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                            </ul>
                                                            <div class="cd-fail-message">
                                                                No results found
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="JobsOffers" role="tabpanel">
                    <div class="main-content">
                        <div class="tab-section">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class=" bhoechie-tab">
                                        <div class="bhoechie-tab-content active">
                                            <div>
                                                <div class="row pdng10-0 searchBar" style="margin-right: 0px; margin-top: 0px; background-color: white">
                                                    <form>
                                                        <div class="col-md-2 col-md-offset-2">
                                                        </div>
                                                        <div class="col-md-2">
                                                            <div>
                                                                <select>
                                                                    <option value="" disabled="" selected="">
                                                                        Select work time
                                                                    </option>
                                                                    <option value="1">
                                                                        Sort by Work Time
                                                                    </option>
                                                                    <option value="2">
                                                                        Sort by Work Time
                                                                    </option>
                                                                    <option value="3">
                                                                        Sort by Work Time
                                                                    </option>
                                                                    <option value="4">
                                                                        Sort by Work Time
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            </select>

                                                        </div>
                                                        <div class="col-md-2">
                                                            <div>
                                                                <select>
                                                                    <option value="" disabled="" selected="">
                                                                        Select work time
                                                                    </option>
                                                                    <option value="1">
                                                                        Sort by Work Time
                                                                    </option>
                                                                    <option value="2">
                                                                        Sort by Work Time
                                                                    </option>
                                                                    <option value="3">
                                                                        Sort by Work Time
                                                                    </option>
                                                                    <option value="4">
                                                                        Sort by Work Time
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <input class="searchbox-ov" type="search" placeholder="Search">
                                                        </div>
                                                    </form>
                                                </div>



                                                <!--End search and select bar area-->
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="JobsOffersn1" role="tabpanel">
                                                        <section style="margin-top: -37px;" class="cd-gallery filter-is-visible">
                                                            <ul id="MixItUp718A52">
                                                                <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 540px; background-color: white;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                            <ol>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Publisher :
                                                                                        </strong>
                                                                                        <a href="Profile.html">
                                                                                            Amanda Sun
                                                                                        </a>
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            In :
                                                                                        </strong> Article Writing
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Date :
                                                                                        </strong> 23.06.2016
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Workstart :
                                                                                        </strong> Agreement
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Payment:
                                                                                        </strong> Fix
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Worktype :
                                                                                        </strong> part time
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="job-for-us.html#" data-toggle="modal" data-target="#myModal" style="width:120px;" class="btn btn-primary">
                                                                                        Contact Us
                                                                                    </a>
                                                                                </li>
                                                                            </ol>
                                                                        </div>



                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end html option2" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 540px;  background-color: white;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                            <ol>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Publisher :
                                                                                        </strong>
                                                                                        <a href="Profile.html">
                                                                                            Amanda Sun
                                                                                        </a>
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            In :
                                                                                        </strong> Article Writing
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Date :
                                                                                        </strong> 23.06.2016
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Workstart :
                                                                                        </strong> Agreement
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Payment:
                                                                                        </strong> Fix
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Worktype :
                                                                                        </strong> part time
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="job-for-us.html#" data-toggle="modal" data-target="#myModal" style="width:120px;" class="btn btn-primary">
                                                                                        Contact Us
                                                                                    </a>
                                                                                </li>
                                                                            </ol>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics php option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 540px;  background-color: white;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                            <ol>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Publisher :
                                                                                        </strong>
                                                                                        <a href="Profile.html">
                                                                                            Amanda Sun
                                                                                        </a>
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            In :
                                                                                        </strong> Article Writing
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Date :
                                                                                        </strong> 23.06.2016
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Workstart :
                                                                                        </strong> Agreement
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Payment:
                                                                                        </strong> Fix
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Worktype :
                                                                                        </strong> part time
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="job-for-us.html#" data-toggle="modal" data-target="#myModal" style="width:120px;" class="btn btn-primary">
                                                                                        Contact Us
                                                                                    </a>
                                                                                </li>
                                                                            </ol>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 540px;  background-color: white;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                            <ol>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Publisher :
                                                                                        </strong>
                                                                                        <a href="Profile.html">
                                                                                            Amanda Sun
                                                                                        </a>
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            In :
                                                                                        </strong> Article Writing
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Date :
                                                                                        </strong> 23.06.2016
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Workstart :
                                                                                        </strong> Agreement
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Payment:
                                                                                        </strong> Fix
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Worktype :
                                                                                        </strong> part time
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="job-for-us.html#" data-toggle="modal" data-target="#myModal" style="width:120px;" class="btn btn-primary">
                                                                                        Contact Us
                                                                                    </a>
                                                                                </li>
                                                                            </ol>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing front-end php option2" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 540px;  background-color: white;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                            <ol>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Publisher :
                                                                                        </strong>
                                                                                        <a href="Profile.html">
                                                                                            Amanda Sun
                                                                                        </a>
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            In :
                                                                                        </strong> Article Writing
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Date :
                                                                                        </strong> 23.06.2016
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Workstart :
                                                                                        </strong> Agreement
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Payment:
                                                                                        </strong> Fix
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Worktype :
                                                                                        </strong> part time
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="job-for-us.html#" data-toggle="modal" data-target="#myModal" style="width:120px;" class="btn btn-primary">
                                                                                        Contact Us
                                                                                    </a>
                                                                                </li>
                                                                            </ol>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end php option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 540px;  background-color: white;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                            <ol>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Publisher :
                                                                                        </strong>
                                                                                        <a href="Profile.html">
                                                                                            Amanda Sun
                                                                                        </a>
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            In :
                                                                                        </strong> Article Writing
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Date :
                                                                                        </strong> 23.06.2016
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Workstart :
                                                                                        </strong> Agreement
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Payment:
                                                                                        </strong> Fix
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span>
                                                                                        <strong>
                                                                                            Worktype :
                                                                                        </strong> part time
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="job-for-us.html#" data-toggle="modal" data-target="#myModal" style="width:120px;" class="btn btn-primary">
                                                                                        Contact Us
                                                                                    </a>
                                                                                </li>
                                                                            </ol>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div class="cd-fail-message">
                                                                No results found
                                                            </div>
                                                        </section>
                                                    </div>
                                                    <div class="tab-pane " id="JobsOffersn2" role="tabpanel">
                                                        <div class="">
                                                            <section style="margin-top: -37px;" class="cd-gallery filter-is-visible">
                                                                <ul id="MixItUp83A0F8">
                                                                    <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift ">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end html option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics php option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing front-end php option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end php option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end html option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing front-end php option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment front-end html option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics php option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment front-end php option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                </ul>
                                                                <div class="cd-fail-message">
                                                                    No results found
                                                                </div>
                                                            </section>
                                                            <div class="row">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane " id="JobsOffersn3" role="tabpanel">
                                                        <section style="margin-top: -37px;" class="cd-gallery filter-is-visible">
                                                            <ul id="MixItUp718A52">
                                                                <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Suns gggg
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end html option2" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics php option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing front-end php option2" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end php option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end html option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing front-end php option4" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment front-end html option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="background-color: white; text-align: center;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="background-color: white; text-align: center;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics php option2" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment front-end php option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                            </ul>
                                                            <div class="cd-fail-message">
                                                                No results found
                                                            </div>
                                                        </section>
                                                    </div>
                                                    <div class="tab-pane " id="JobsOffersn4" role="tabpanel">
                                                        <div class="">
                                                            <section style="margin-top: -37px;" class="cd-gallery filter-is-visible">
                                                                <ul id="MixItUp83A0F8">
                                                                    <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift ">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end html option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics php option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing front-end php option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end php option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end html option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing front-end php option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment front-end html option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics php option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment front-end php option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                </ul>
                                                                <div class="cd-fail-message">
                                                                    No results found
                                                                </div>
                                                            </section>
                                                            <div class="row">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="Portfolio" role="tabpanel">
                    <div class="tab-main-content">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="editabl">
                                    <div class="edittable-title">
                                        <h2>
                                            Our Portfolio
                                        </h2>
                                    </div>
                                    <div class="editable">
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-xs-12">
                                                <div class="img-pop">
                                                    <div class="image-addon">
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="add-more">
                                                            <div class="multi-img">
                                                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                                                    <div class="fileupload-preview thumbnail">
                                                                        <img src="img/job_14.jpg">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="add-more">
                                                        <button class="add_img_button">
                                                            <img src="img/image.svg">
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="OurFollower" role="tabpanel">
                    <div class="main-content">
                        <div class="tab-section">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class=" bhoechie-tab">
                                        <div class="bhoechie-tab-content active">
                                            <div>
                                                <ul style="background-color: white;" class="nav nav-tabs" role="tablist">
                                                    <li class="active" role="presentation">
                                                        <a style="margin-top: 10px;" aria-controls="" aria-expanded="false" data-toggle="tab" href="#n1" role="tab">
                                                            <div class='row'>
                                                                <div class='col-md-6' style="text-align: right;width:10%">
                                                                    <i style="" aria-hidden="true" class="fa fa-industry">
                                                                    </i>
                                                                </div>
                                                                <div class='col-md-6' style="text-align: left;padding-top:3px;width:auto;">
                                                                    My Companies
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="" role="presentation">
                                                        <a style="margin-top: 10px;" aria-controls="" aria-expanded="true" data-toggle="tab" href="#n2" role="tab">
                                                            <div class='row'>
                                                                <div class='col-md-6' style="text-align: right;width:10%">
                                                                    <i aria-hidden="true" class="fa fa-cogs">
                                                                    </i>
                                                                </div>
                                                                <div class='col-md-6' style="text-align: left;padding-top:3px;width:auto;">
                                                                    My Services
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="" role="presentation">
                                                        <a style="margin-top: 10px;" aria-controls="" aria-expanded="true" data-toggle="tab" href="#n3" role="tab">
                                                            <div class='row'>
                                                                <div class='col-md-6' style="text-align: right;width:10%">
                                                                    <i aria-hidden="true" class="fa fa-cart-plus">
                                                                    </i>
                                                                </div>
                                                                <div class='col-md-6' style="text-align: left;padding-top:3px;width:auto;">
                                                                    My Items
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="n1" role="tabpanel">
                                                        <section style="margin-top: -37px;" class="cd-gallery filter-is-visible">
                                                            <ul id="MixItUp718A52">
                                                                <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="text-align: center; background-color: white;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Suns
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="text-align: center; background-color: white;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="text-align: center; background-color: white;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Suns
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="text-align: center; background-color: white;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics php option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="text-align: center; background-color: white;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="text-align: center; background-color: white;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block; margin-top: 47px;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="text-align: center; background-color: white;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="text-align: center; background-color: white;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block; margin-top: 47px;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="text-align: center; background-color: white;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="text-align: center; background-color: white;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block; margin-top: 47px; margin-bottom: 112px;" data-bound="">
                                                                    <div class="job-tab squre-logo" style="display: block;">
                                                                        <div style="max-height: 100px;">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div style="text-align: center; background-color: white;" class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3 style="text-align: center; background-color: white;">
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment back-end html option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing front-end php option4" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment front-end html option3" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-designing graphics php option2" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="mix web-devlopment front-end php option1" style="display: inline-block;" data-bound="">
                                                                    <div class="job-tab squre-logo">
                                                                        <div style="max-height: 350px;" class="card hovercard">
                                                                            <div class="cardheader">
                                                                            </div>
                                                                            <div class="avatar2">
                                                                                <img alt="" src="img/logo_2.jpg">
                                                                            </div>
                                                                            <div class="info">
                                                                                <div class="title">
                                                                                    <a href="profile.html">
                                                                                        Amanda Sun
                                                                                    </a>
                                                                                </div>
                                                                                <h3>
                                                                                    <a href="job-single.html" title="">
                                                                                        Looking blog writer for our blog
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                                <li class="gap">
                                                                </li>
                                                            </ul>
                                                            <div class="cd-fail-message">
                                                                No results found
                                                            </div>
                                                        </section>
                                                    </div>
                                                    <div class="tab-pane " id="n2" role="tabpanel">
                                                        <div class="">
                                                            <section class="cd-gallery filter-is-visible">
                                                                <ul id="MixItUp83A0F8">
                                                                    <li class="mix web-designing front-end html option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift ">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end html option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics php option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing front-end php option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end php option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment back-end html option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing front-end php option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment front-end html option3" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics html option4" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-designing graphics php option2" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="mix web-devlopment front-end php option1" style="display: inline-block;" data-bound="">
                                                                        <div class="thumbnail">
                                                                            <div class="servbox" id="products">
                                                                                <div class="service_details featured_service">
                                                                                    <div class="srvice_box ">
                                                                                        <img src="img/06.jpg" alt="SEO - Search Engine Optimization">
                                                                                        <div class="serves-hover">
                                                                                            <div class="hover-ser">
                                                                                                <div class="col-md-12">
                                                                                                    <a class="hover-eye" href="inner-service.html" data-toggle="tooltip" title="" data-original-title="View Detail">
                                                                                                        <i class="fa fa-eye">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <i data-toggle="tooltip" title="" class="service_box_fav_btn favourite_serv_btn fa fa-gift" data-original-title="Sent it as Gift">
                                                                                                    </i>
                                                                                                </div>
                                                                                                <div class="col-md-12 share-n">
                                                                                                    <h5>
                                                                                                        Share Now
                                                                                                    </h5>
                                                                                                    <a href="http://facebook.com" class="btn btn-social-icon btn-facebook">
                                                                                                        <i class="fa fa-facebook">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-google-plus">
                                                                                                        <i class="fa fa-google-plus">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-linkedin">
                                                                                                        <i class="fa fa-linkedin">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                    <a class="btn btn-social-icon btn-twitter">
                                                                                                        <i class="fa fa-twitter">
                                                                                                        </i>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="list-td">
                                                                                        <div class="service_title">
                                                                                            <a href="buy-services.html#">
                                                                                                create 300 EDU Backlinks for ANY WEBSITE &nbsp;
                                                                                            </a>
                                                                                            <div class="pro-descr">
                                                                                                <p>
                                                                                                    Last January, a 21-year-old woman who worked in a small shop in West Delhi's Kirti Nagar area committed suicide. When police officials finally managed to get in touch with her mother in Assam 12 days later, she asked if her daughter's
                                                                                                </p>
                                                                                            </div>
                                                                                            <span>
                                                                                                <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            <span class="glyphicon glyphicon-star star-active">
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="item-price">
                                                                                                <i class="fa fa-inr">
                                                                                                </i> 450
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="service_meta">
                                                                                            <a href="buy-services.html#" class="by-now">
                                                                                                <i class="fa fa-heart">
                                                                                                </i>+ favorite
                                                                                            </a>
                                                                                            <a href="buy-services.html#" data-toggle="modal" data-target="#paymentmethod" class="by-now">
                                                                                                <i class="fa fa-shopping-cart">
                                                                                                </i>Buy now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                    <li class="gap">
                                                                    </li>
                                                                </ul>
                                                                <div class="cd-fail-message">
                                                                    No results found
                                                                </div>
                                                            </section>
                                                            <div class="row">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane" id="n3" role="tabpanel">
                                                        <div class="col-lg-125">
                                                            <div class="col-lg-12">
                                                                <div class="tabcontent" id="Information" style="display: block;">
                                                                    <div class="tab-main-content">
                                                                        <div class="row">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Settings">
                    <div class="tab-main-content">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="picprofile" style="background-image:url('img/index.jpg');margin-top: 0px;">
                                    <div class="picgraycolor">
                                        <input id="imgupload" style="display:none" type="file">
                                        <i aria-hidden="true" class="fa fa-camera caproimg1" onclick="$('#imgupload').trigger('click'); return false;">
                                        </i>
                                    </div>
                                    <div class="imgusersa" style="">
                                        <div class="framesa" style="background-image:url('img/pro.jpg')">
                                            <div class="upload">
                                                <input id="imgupload2" style="display:none" type="file">
                                                <i aria-hidden="true" class="fa fa-camera caproimg" onclick="$('#imgupload2').trigger('click'); return false;">
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 class="card-title">
                                        Pamela Anderson
                                    </h2>
                                </div>
                                <div class="main-content">
                                    <div class="tab-section">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class=" bhoechie-tab">
                                                    <div class="bhoechie-tab-content active">
                                                        <div>
                                                            <ul style="background-color: white;" class="nav nav-tabs" role="tablist">
                                                                <li class="active" role="presentation">
                                                                    <a aria-controls="" aria-expanded="true" data-toggle="tab" href="#myprofile" role="tab">
                                                                        <i aria-hidden="true" class="fa fa-id-card-o">
                                                                        </i> My Profile
                                                                    </a>
                                                                </li>
                                                                <!-- <li class="" role="presentation">
                                                                    <a aria-controls="" aria-expanded="false" data-toggle="tab" href="#payment" role="tab">
                                                                        <i aria-hidden="true" class="fa fa-money">
                                                                        </i> Payments
                                                                    </a>
                                                                </li>
                                                                <li class="" role="presentation">
                                                                    <a aria-controls="" aria-expanded="false" data-toggle="tab" href="#compsaswda" role="tab">
                                                                        <i aria-hidden="true" class="fa fa-industry">
                                                                        </i> Notification
                                                                    </a>
                                                                </li>
                                                                <li class="" role="presentation">
                                                                    <a aria-controls="" aria-expanded="false" data-toggle="tab" href="#ownerinfo" role="tab">
                                                                        <i aria-hidden="true" class="fa fa-facebook">
                                                                        </i>Social Logins
                                                                    </a>
                                                                </li>
                                                                <li class="" role="presentation">
                                                                    <a aria-controls="" aria-expanded="false" data-toggle="tab" href="#Securityques" role="tab">
                                                                        <i aria-hidden="true" class="fa fa-shield">
                                                                        </i> Security Questions
                                                                    </a>
                                                                </li> -->
                                                            </ul>
                                                            <div class="tab-content">
                                                                <div class="tab-pane active" id="myprofile" role="tabpanel">
                                                                    <div class="row">
                                                                        <div class="col-lg-12">


                                                                            <div class="col-lg-6">
                                                                                <div class="tab-pane active" id="comp" role="tabpanel">
                                                                                    <div class="col-lg-12">
                                                                                        <div class="col-lg-12">
                                                                                            <div class="tabcontent" id="Information" style="display: block;">
                                                                                                <div class="tab-main-content">
                                                                                                    <div class="row">
                                                                                                        <div style="background: #f3f3f3;" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                                            <div class="editabl">
                                                                                                                <div class="editable">
                                                                                                                    <div class="password">
                                                                                                                        <div class="password-fields">
                                                                                                                            <div class="formbox">
                                                                                                                                <label style="text-align: left" class="col-md-8 col-sm-8 col-xs-8 profupdate">
                                                                                                                                    PERSONAL INFORMATION
                                                                                                                                </label>
                                                                                                                                <a class="edit" href="javascript:void(0)">
                                                                                                                                    Edit
                                                                                                                                </a>
                                                                                                                                <ul class="personal-info">
                                                                                                                                    <li>
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label style="text-align: left" class="col-md-4 col-sm-5 col-xs-12 control-label">
                                                                                                                                                Gender
                                                                                                                                            </label>
                                                                                                                                            <div style="text-align: left" class="col-md-8 col-sm-7 col-xs-12">
                                                                                                                                                <div style="float: left" class="form-value">
                                                                                                                                                    <label class="control-label">
                                                                                                                                                        Male
                                                                                                                                                    </label>
                                                                                                                                                </div>
                                                                                                                                                <div style="float: left">
                                                                                                                                                    <div style=" margin: 1px 20px;width: 40px;" class="material-switch pull-right">
                                                                                                                                                        <input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox" />
                                                                                                                                                        <label for="someSwitchOptionDefault" class="label-default">
                                                                                                                                                        </label>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                <div class="form-value">
                                                                                                                                                    <label class="control-label">
                                                                                                                                                        Female
                                                                                                                                                    </label>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                    <li>
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label style="text-align: left" class="col-md-4 col-sm-5 col-xs-12 control-label">
                                                                                                                                                Name
                                                                                                                                            </label>
                                                                                                                                            <div style="text-align: left" class="col-md-8 col-sm-7 col-xs-12">
                                                                                                                                                <div class="form-value">
                                                                                                                                                    <span id="CompanyName">
                                                                                                                                                        Last Name, First Name O.
                                                                                                                                                    </span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                    <li>
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label style="text-align: left" class="col-md-4 col-sm-5 col-xs-12 control-label">
                                                                                                                                                Birthdate
                                                                                                                                            </label>
                                                                                                                                            <div style="text-align: left" class="col-md-8 col-sm-7 col-xs-12">
                                                                                                                                                <div class="form-value">
                                                                                                                                                    <span id="CompanyBirthdate">
                                                                                                                                                        Feb. 21, 1993
                                                                                                                                                    </span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                    <li>
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label style="text-align: left" class="col-md-4 col-sm-5 col-xs-12 control-label">
                                                                                                                                                Location
                                                                                                                                            </label>
                                                                                                                                            <div style="text-align: left" class="col-md-8 col-sm-7 col-xs-12">
                                                                                                                                                <div class="form-value">
                                                                                                                                                    <span id="CompanyLocation">
                                                                                                                                                        Address st., City, Germany
                                                                                                                                                    </span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                    <li>
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label style="text-align: left" class="col-md-4 col-sm-5 col-xs-12 control-label">
                                                                                                                                                Contact Number
                                                                                                                                            </label>
                                                                                                                                            <div style="text-align: left" class="col-md-8 col-sm-7 col-xs-12">
                                                                                                                                                <div class="form-value">
                                                                                                                                                    <span id="CompanyContactNumber">
                                                                                                                                                        +43 9864 7874 986
                                                                                                                                                    </span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                </ul>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="tab-pane active" id="comp" role="tabpanel">
                                                                                    <div class="col-lg-12">
                                                                                        <div class="col-lg-12">
                                                                                            <div class="tabcontent" id="Information" style="display: block;">
                                                                                                <div class="tab-main-content">
                                                                                                    <div class="row">
                                                                                                        <div style="background: #f3f3f3;" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                                            <div class="editabl">
                                                                                                                <div class="editable">
                                                                                                                    <div class="password">
                                                                                                                        <div class="password-fields">
                                                                                                                            <div class="formbox">
                                                                                                                                <label style="text-align: left;" class="col-md-8 col-sm-8 col-xs-8 profupdate">
                                                                                                                                    Email & Password
                                                                                                                                </label>
                                                                                                                                <a class="edit" href="javascript:void(0)">
                                                                                                                                    Edit
                                                                                                                                </a>
                                                                                                                                <ul class="personal-info">
                                                                                                                                    <li>
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label style="text-align: left" class="col-md-6 col-sm-6 col-xs-6 control-label">
                                                                                                                                                E-mail
                                                                                                                                            </label>
                                                                                                                                            <div style="text-align: left" class="col-md-6 col-sm-6 col-xs-6">
                                                                                                                                                <div class="form-value">
                                                                                                                                                    <span id="Companyemail">
                                                                                                                                                        email@gmail.com
                                                                                                                                                    </span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                    <li>
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label style="text-align: left" class="col-md-6 col-sm-6 col-xs-6 control-label">
                                                                                                                                                Password
                                                                                                                                            </label>
                                                                                                                                            <div style="text-align: left" class="col-md-6 col-sm-6 col-xs-6">
                                                                                                                                                <div class="form-value">
                                                                                                                                                    <span id="CompanyPassword">
                                                                                                                                                        **********
                                                                                                                                                    </span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                    <li>
                                                                                                                                        <div class="form-group">
                                                                                                                                            <label style="text-align: left" class="col-md-6 col-sm-6 col-xs-6 control-label">
                                                                                                                                                Repeat Password
                                                                                                                                            </label>
                                                                                                                                            <div style="text-align: left" class="col-md-6 col-sm-6 col-xs-6">
                                                                                                                                                <div class="form-value">
                                                                                                                                                    <span id="CompanyRepeatPassword">
                                                                                                                                                        **********
                                                                                                                                                    </span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </li>
                                                                                                                                </ul>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                                <div class="tab-pane" id="payment" role="tabpanel">
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <div class="col-lg-1">
                                                                            </div>
                                                                            <div class="col-lg-10 paymentbox" style="background:white;height:150px;">
                                                                                <div style="text-align:left; font-size: 24px;font-weight:bolder;float:left;margin-top:30px;">
                                                                                    Balance Due<br />
                                                                                    <span style="text-align:left; font-size: 18px;font-weight:normal;display:block;margin-top:20px;">
                                                                                        Your Balance due is $0.00
                                                                                    </span>

                                                                                </div>
                                                                                <div class="paynowbox" style="float:right;margin-top:30px;margin-right: 9px;">
                                                                                    <button class="bg-secondary btn-paynow" style="padding:10px 50px;border:none;">Pay Now</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-12" style="margin-top:30px;">
                                                                            <div class="col-lg-1">
                                                                            </div>
                                                                            <div class="col-lg-10 billingbox" style="background:white;height:170px;">
                                                                                <div style="text-align:left; font-size: 24px;font-weight:bolder;margin-top:30px;">
                                                                                    Billing Methods<br />
                                                                                </div>
                                                                                <div class="addbillingbox" style="position:absolute;top:10px;right:24px;margin-top:10px;">
                                                                                    <button class="btn-addbilling" style="background:#43a047;color:white;padding:10px 50px;border:none;">Add Billing Method</button>
                                                                                </div>
                                                                                <div style="text-align:left; font-size: 12px;font-weight:normal;display:block;margin-top:39px;border-top: 1px solid #f3f3f3;border-bottom: 1px solid #f3f3f3; padding: 16px 5px;">
                                                                                    <div class="paypalbox" style="margin-left:20px;"><b>Paypal</b> info@yamiyami.de (Primary)</div>
                                                                                    <div class="btn-paypal-box" style="position:absolute;bottom:17px;right:24px;"><button class="btn-paypal"></button></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane" id="compsaswda" role="tabpanel">
                                                                    <div class="col-lg-125">
                                                                        <div class="col-lg-12">
                                                                            <div class="tabcontent" id="Information" style="display: block;">
                                                                                <div class="row">
                                                                                    <div class="notif">
                                                                                        <div style="height: 100%" class="col-lg-12 col-md-12 col-sm-12">
                                                                                            <div class="panel panel-default">
                                                                                                <!-- Default panel contents -->
                                                                                                <div style="text-align: center" class="panel-heading">
                                                                                                    Notification Settings
                                                                                                </div>
                                                                                                <!-- List group -->
                                                                                                <ul class="list-group" style=" flex-direction: column;">
                                                                                                    <li class="list-group-item">
                                                                                                        Bootstrap Switch Default
                                                                                                        <div style=" margin: 0px 0;width: 300px;" class="material-switch pull-right">
                                                                                                            <div class="switch-container">
                                                                                                                <div class="switch switch-yellow">
                                                                                                                    <input type="radio" class="switch-input" name="view1" value="week1" id="week1" checked>
                                                                                                                    <label for="week1" class="switch-label switch-label-off">YES</label>
                                                                                                                    <input type="radio" class="switch-input" name="view1" value="month3" id="month1">
                                                                                                                    <label for="month1" class="switch-label switch-label-on">NO</label>
                                                                                                                    <span class="switch-selection"></span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                    <li class="list-group-item">
                                                                                                        Bootstrap Switch Primary
                                                                                                        <div style=" margin: 0px 0;width: 300px;" class="material-switch pull-right">
                                                                                                            <div class="switch-container">
                                                                                                                <div class="switch switch-yellow">
                                                                                                                    <input type="radio" class="switch-input" name="view2" value="week2" id="week2" checked>
                                                                                                                    <label for="week2" class="switch-label switch-label-off">YES</label>
                                                                                                                    <input type="radio" class="switch-input" name="view2" value="month2" id="month2">
                                                                                                                    <label for="month2" class="switch-label switch-label-on">NO</label>
                                                                                                                    <span class="switch-selection"></span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                    <li class="list-group-item">
                                                                                                        Bootstrap Switch Success
                                                                                                        <div style=" margin: 0px 0;width: 300px;" class="material-switch pull-right">
                                                                                                            <div class="switch-container">
                                                                                                                <div class="switch switch-yellow">
                                                                                                                    <input type="radio" class="switch-input" name="view3" value="week3" id="week3" checked>
                                                                                                                    <label for="week3" class="switch-label switch-label-off">YES</label>
                                                                                                                    <input type="radio" class="switch-input" name="view3" value="month3" id="month3">
                                                                                                                    <label for="month3" class="switch-label switch-label-on">NO</label>
                                                                                                                    <span class="switch-selection"></span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                    <li class="list-group-item">
                                                                                                        Bootstrap Switch Info
                                                                                                        <div style=" margin: 0px 0;width:300px;" class="material-switch pull-right">
                                                                                                            <div class="switch-container">
                                                                                                                <div class="switch switch-yellow">
                                                                                                                    <input type="radio" class="switch-input" name="view4" value="week4" id="week4" checked>
                                                                                                                    <label for="week4" class="switch-label switch-label-off">YES</label>
                                                                                                                    <input type="radio" class="switch-input" name="view4" value="month4" id="month4">
                                                                                                                    <label for="month4" class="switch-label switch-label-on">NO</label>
                                                                                                                    <span class="switch-selection"></span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                    <li class="list-group-item">
                                                                                                        Bootstrap Switch Warning
                                                                                                        <div style=" margin: 0px 0;width:300px;" class="material-switch pull-right">
                                                                                                            <div class="switch-container">
                                                                                                                <div class="switch switch-yellow">
                                                                                                                    <input type="radio" class="switch-input" name="view5" value="week5" id="week5" checked>
                                                                                                                    <label for="week5" class="switch-label switch-label-off">YES</label>
                                                                                                                    <input type="radio" class="switch-input" name="view5" value="month5" id="month5">
                                                                                                                    <label for="month5" class="switch-label switch-label-on">NO</label>
                                                                                                                    <span class="switch-selection"></span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                    <li class="list-group-item">
                                                                                                        Bootstrap Switch Danger
                                                                                                        <div style=" margin: 0px 0;width: 300px;" class="material-switch pull-right">
                                                                                                            <div class="switch-container">
                                                                                                                <div class="switch switch-yellow">
                                                                                                                    <input type="radio" class="switch-input" name="view6" value="week6" id="week6" checked>
                                                                                                                    <label for="week6" class="switch-label switch-label-off">YES</label>
                                                                                                                    <input type="radio" class="switch-input" name="view6" value="month6" id="month6">
                                                                                                                    <label for="month6" class="switch-label switch-label-on">NO</label>
                                                                                                                    <span class="switch-selection"></span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane" id="ownerinfo" role="tabpanel">
                                                                    <div style="background: #f3f3f3f3;" class="col-lg-12">
                                                                        <div class="col-lg-1">
                                                                        </div>
                                                                        <div style="background: white;" class="col-lg-10">
                                                                            <div class="socail-icns">
                                                                                <h2>
                                                                                    Facebook Account
                                                                                </h2>
                                                                                <p>
                                                                                    You Guru account is linked with your Facebook account Rohan Sulaiman. This means you can log in with Facebook.
                                                                                </p>
                                                                                <p>
                                                                                    <a href="#">
                                                                                        <img src="img/1.png">
                                                                                    </a>
                                                                                </p>
                                                                                <p>
                                                                                </p>
                                                                                <hr>
                                                                                <h2>
                                                                                    Facebook Account
                                                                                </h2>
                                                                                <p>
                                                                                    You Guru account is linked with your Facebook account Rohan Sulaiman. This means you can log in with Facebook.
                                                                                </p>
                                                                                <p>
                                                                                    <a href="#">
                                                                                        <img src="img/3.png">
                                                                                    </a>
                                                                                </p>
                                                                                <p>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane" id="Securityques" role="tabpanel">
                                                                    <div class="col-lg-12">
                                                                        <div class="col-lg-1"></div>
                                                                        <div class="col-lg-10">
                                                                            <br>
                                                                            <div id="Security" role="tabpanel" class="tab-pane">
                                                                                <div class="tab-main-content">
                                                                                    <div class="row">
                                                                                        <div style="background: #f3f3f3f3;" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                            <div class="editabl">
                                                                                                <div class="edittable-title">
                                                                                                    <h2>
                                                                                                        Security Question
                                                                                                    </h2>
                                                                                                </div>
                                                                                                <div class="editable">
                                                                                                    <div class="password">
                                                                                                        <div class="password-fields">
                                                                                                            <div class="formbox">
                                                                                                                <a class="edit" href="javascript:void(0)">
                                                                                                                    Edit
                                                                                                                </a>
                                                                                                                <ul class="personal-info">
                                                                                                                    <li>
                                                                                                                        <div class="form-group">
                                                                                                                            <label class="col-md-12 col-sm-12 col-xs-12 control-label" style="text-align:left;">
                                                                                                                                Security Questions
                                                                                                                                <sup class="text-danger">
                                                                                                                                    *
                                                                                                                                </sup>
                                                                                                                            </label>
                                                                                                                            <div class="clearfix">
                                                                                                                            </div>
                                                                                                                            <div class="col-md-6 col-sm-6 col-xs-6">
                                                                                                                                <div class="form-value">
                                                                                                                                    <select name="paypal_status" class="form-control">
                                                                                                                                        <option selected="" value="What is the first and last name of your first boyfriend or girlfriend?">What is the first and last name of your first boyfriend or girlfriend?</option>
                                                                                                                                        <option value="Which phone number do you remember most from your childhood?">Which phone number do you remember most from your childhood?</option>
                                                                                                                                        <option value="What was your favorite place to visit as a child?">What was your favorite place to visit as a child?</option>
                                                                                                                                        <option value="Who is your favorite actor, musician, or artist?">Who is your favorite actor, musician, or artist?</option>
                                                                                                                                        <option value="What is the name of your favorite pet?">
                                                                                                                                            What is the name of your favorite pet?
                                                                                                                                        </option>
                                                                                                                                        <option value="In what city were you born?">In what city were you born?</option>
                                                                                                                                        <option value="What high school did you attend?">What high school did you attend?</option>
                                                                                                                                        <option value="What is the name of your first school?">
                                                                                                                                            What is the name of your first school?
                                                                                                                                        </option>
                                                                                                                                        <option value="What is your favorite movie?">What is your favorite movie?</option>
                                                                                                                                        <option value="What is your mother's maiden name?">What is your mother's maiden name?></option>
                                                                                                                                        <option value="What street did you grow up on?">What street did you grow up on?</option>
                                                                                                                                        <option value="What was the make of your first car?">What was the make of your first car?</option>
                                                                                                                                        <option value="When is your anniversary?">When is your anniversary?</option>
                                                                                                                                        <option value="What is your favorite color?">What is your favorite color?</option>
                                                                                                                                    </select>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-6 col-sm-6 col-xs-6">
                                                                                                                                <div class="form-value">
                                                                                                                                    <span id="CompanyName">Ashish Sharma</span>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><br>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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