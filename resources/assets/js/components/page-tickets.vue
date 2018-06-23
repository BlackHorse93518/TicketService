<template>
<div class="main-panel">

            <header>
                <div class="w-100">

                    <!--first-menu-->
                    <div class=" topnav" id="myTopnav">
                        <div class=" col-sm-10 logo">
                            <a href="dashboard.html" class="simple-text">
                                <img src="img/sidebar/logo.png.jpeg">
                            </a>
                        </div>

                        <div class="">

                        </div>
                        <!--fm-end-->
                    </div>
                    <div class="searchbar">
                        <a id="nav2button" href="javascript:void(0);" class="icon" onclick="responsive_header2()">⏬</a>
                        <div class="tab" role="tabpanel">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs" role="tablist">

                                <li role="presentation" class="active">
                                    <a href="#MyContractsAreaContractsStart" aria-controls="MyContractsAreaContractsStart" style="height: 100%" role="tab" data-toggle="tab">
                                        <i class="fa fa-folder-open" style="width:auto" aria-hidden="true"></i> All Tickets
                                        <span class="noty-bubble">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#MyContractsAreaContractsDone" aria-controls="MyContractsAreaContractsDone" role="tab" data-toggle="tab">
                                        <i class="fa fa-tasks" aria-hidden="true" style="width:auto"></i> Tickets in Progress
                                        <span class="noty-bubble">
                                            2
                                        </span>
                                    </a>

                                </li>
                                <li role="presentation">
                                    <a href="#MyContractsAreaContractsDispute" aria-controls="MyContractsAreaContractsDispute" role="tab" data-toggle="tab">
                                        <i class="fa fa-exclamation-triangle" aria-hidden="true" style="width:auto"></i> Dispute
                                        <span class="noty-bubble">
                                            2
                                        </span>
                                    </a>

                                </li>
                                <li role="presentation">
                                    <a href="#MyContractsAreaWorkRecieved" aria-controls="MyContractsAreaWorkRecieved" role="tab" data-toggle="tab">
                                        <i class="fa fa-window-close" style="width: 27px;" aria-hidden="true"></i> Closed ticket </a>
                                </li>
                                <li role="presentation">
                                    <a href="#MyContractsAreaContractsdisputes" aria-controls="MyContractsAreaContractsdisputes" role="tab" data-toggle="tab">
                                        <i class="fa fa-check-square" style="width: 27px;" aria-hidden="true"></i> Sloved Tickets </a>
                                </li>
                                <li role="presentation">
                                    <a href="#MyNotifications" aria-controls="MyNotifications" role="tab" data-toggle="tab">
                                        <i class="fa fa-comment" style="width: 27px;" aria-hidden="true"></i> Notifications </a>
                                    <span class="noty-bubble">
                                        2
                                    </span>
                                </li>
                            </ul>
                            </ul>
                        </div>


                    </div>


            </header>

            <div role="tabpanel" class="tab-pane " id="MyContractsArea" style="min-height: 460px">
                <div class="border-box">
                    <div class=" custom-page-content">

                    </div>
                    <!-- my contracts table -->
                    <div class="main-content">
                        <div class="tab-section">
                            <div class="row" style="background: #f3f3f3; margin-top: -9px;">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bhoechie-tab-container">
                                    <div class=" bhoechie-tab">
                                        <div class="bhoechie-tab-content">
                                            <div>
                                                <ul class="nav nav-tabs" role="tablist"></ul>
                                                <div class="tab-content no-t-m">

                                                    <div role="tabpanel" class="tab-pane  " id="MyContractsAreaWorkRecieved" style="margin-bottom: -100px;">
                                                        <!--second section-->

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-danger" data-toggle="modal" data-target="#closedModal" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 ">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-times-circle pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-danger" data-toggle="modal" data-target="#closedModal" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 ">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-times-circle pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-danger" data-toggle="modal" data-target="#closedModal" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 ">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-times-circle pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-danger" data-toggle="modal" data-target="#closedModal" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 ">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-times-circle pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-danger" data-toggle="modal" data-target="#closedModal" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 ">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-times-circle pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-danger" data-toggle="modal" data-target="#closedModal" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 ">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-times-circle pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="clearfix">
                                                        </div>
                                                        <br>
                                                    </div>
                                                    <div role="tabpanel" class="tab-pane  " id="MyContractsAreaContractsdisputes" style="margin-bottom: -100px;">
                                                        <!--second section-->

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="clearfix">
                                                        </div>
                                                        <br>
                                                    </div>

                                                    <div role="tabpanel" class="tab-pane  " id="MyNotifications" style="margin-bottom: -100px;">
                                                        <!--second section-->

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#notifyModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Supervisor</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>


                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#notifyModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Supervisor</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>


                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#notifyModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Supervisor</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#notifyModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Supervisor</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>

                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#notifyModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Supervisor</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2  brdRight">
                                                                                            <h4 align="center">Date and Time</h4>
                                                                                            <p style="color: black; text-align: center">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdRight text-align">
                                                                                            <h4 align="center">Priority</h4>

                                                                                            <p align="center" style="color: black;">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="clearfix">
                                                        </div>
                                                        <br>
                                                    </div>

                                                    <div role="tabpanel" class="tab-pane  " id="MyContractsAreaCancelledContracts" style="margin-bottom: -100px;">
                                                        <!--second section-->
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 24px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#canModal" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-4 main-log-part">
                                                                                            <div class="main-log-left">
                                                                                                <img src="img/mini.png">
                                                                                            </div>
                                                                                            <div class="main-log-right">
                                                                                                <h4>Company Name</h4>
                                                                                                <p style="color: black;">Company ID</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Project Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3  brdRight">
                                                                                            <div class="circleBar" data-percent="65">
                                                                                                <div style="float: left;margin-left: 87px;">
                                                                                                    <div class="ab" style=" width:80px; height:80px; border-radius: 100%; background-color: rgb(239, 239, 239); background-image: linear-gradient(324deg, transparent 50%, rgb(31, 174, 102) 50%), linear-gradient(90deg, rgb(31, 174, 102) 50%, transparent 50%);">
                                                                                                        <div class="cir" style="position: relative; top: 2px; left: 2px; text-align: center; width: 76px; height: 76px; border-radius: 100%; background-color: rgb(255, 255, 255);">
                                                                                                            <span class="perc" style="display: block; line-height:79px; vertical-align: middle; font-size: 15px; font-weight: normal; color: rgb(92, 147, 200);">
                                                                                                        65%
                                                                                                    </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>
                                                                                                Status
                                                                                            </h4>
                                                                                            <h4 style="margin:0; color: red;">
                                                                                                Canceled
                                                                                            </h4>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="clearfix">
                                                        </div>
                                                        <br>
                                                    </div>
                                                    <div role="tabpanel" class="tab-pane active " id="MyContractsAreaContractsStart" style="margin-bottom: -100px;">
                                                        <!--second section-->
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#newTicketModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 main-log-part">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px; margin-left: 20% ">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px ">

                                                                                        </div>
                                                                                        <div class="col-sm-3 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; margin-left: 50px">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#newTicketModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 main-log-part">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px; margin-left: 20% ">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px ">

                                                                                        </div>
                                                                                        <div class="col-sm-3 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; margin-left: 50px">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#newTicketModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 main-log-part">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px; margin-left: 20% ">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px ">

                                                                                        </div>
                                                                                        <div class="col-sm-3 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; margin-left: 50px">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#newTicketModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 main-log-part">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px; margin-left: 20% ">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px ">

                                                                                        </div>
                                                                                        <div class="col-sm-3 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; margin-left: 50px">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#newTicketModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 main-log-part">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px; margin-left: 20% ">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px ">

                                                                                        </div>
                                                                                        <div class="col-sm-3 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; margin-left: 50px">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#newTicketModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 main-log-part">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px; margin-left: 20% ">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px ">

                                                                                        </div>
                                                                                        <div class="col-sm-3 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; margin-left: 50px">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#newTicketModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 main-log-part">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px; margin-left: 20% ">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px ">

                                                                                        </div>
                                                                                        <div class="col-sm-3 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; margin-left: 50px">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#newTicketModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 main-log-part">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px; margin-left: 20% ">

                                                                                            <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px; margin-left: 10px ">

                                                                                        </div>
                                                                                        <div class="col-sm-3 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>Priority</h4>
                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; margin-left: 50px">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="clearfix">
                                                        </div>
                                                        <br>
                                                    </div>
                                                    <div role="tabpanel" class="tab-pane " id="MyContractsAreaContractsDispute" style="margin-bottom: -100px;">
                                                        <!--second section-->
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#progressModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>


                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#progressModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#progressModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#progressModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#progressModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#progressModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="clearfix">
                                                        </div>
                                                        <br>
                                                    </div>
                                                    <div role="tabpanel" class="tab-pane  " id="MyContractsAreaContractsDone" style="margin-bottom: -100px;">
                                                        <!--second section-->
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#progressModal" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>


                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#progressModal" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#progressModal" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#progressModal" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#progressModal" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>

                                                        <div class="vd_content-section clearfix p-t-0">
                                                            <div class="row">
                                                                <div style="margin-top: 24px;margin-bottom: 20px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#progressModal" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-6 main-log-part">
                                                                                            <div class="col-sm-8">
                                                                                                <div class="main-log-left">
                                                                                                    <img src="img/mini.png" style="height: 75px; width: 120px; border-radius: 50px; margin-top: 10px; ">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                    <img src="img/bobbyjkane.jpg" style="height: 75px; width: 70px; border-radius: 50px; margin-top: 10px;">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-4">
                                                                                                <div class="main-log-right">
                                                                                                    <h4>Operator</h4>
                                                                                                    <p style="color: black;">Name Lastname</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-2 brdLeft brdRight text-align">
                                                                                            <h4>Ticket Title</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2 text-align  brdRight">
                                                                                            <h4>Date and Time</h4>
                                                                                            <p style="color: black;">12-02-2017 /17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-2">
                                                                                            <h4>Priority</h4>

                                                                                            <i class="fa fa-flag pull-right" style=" font-size: 20px; box-shadow: none; color: red; margin-top: -20px; background: transparent"></i>
                                                                                            <p style="color: black; ">Priority </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <!--tab-pane end -->
                                                                    </div>
                                                                    <!-- tab-content end -->
                                                                </div>
                                                                <!-- Projects List col-md-10 end -->
                                                            </div>
                                                            <!-- row end -->
                                                        </div>
                                                        <div class="clearfix">
                                                        </div>
                                                        <br>
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
                <div class="clearfix">
                </div>
                <br />
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
