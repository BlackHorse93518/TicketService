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


                        <a href="javascript:void(0);" style="font-size:-webkit-xxx-large;" class="icon" onclick="responsive_header()">&#9776;</a>
                    </div>
                    <!--fm-end-->
                </div>
                <div class="searchbar">
                    <a id="nav2button" href="javascript:void(0);" class="icon" onclick="responsive_header2()">⏬</a>
                    <div class="tab" role="tabpanel">

                    </div>
                    <div class="topnav" id="myTopnav" style="background-color: #F8F8FF; border: none !important">
                        <ul class="nav nav-tabs" role="tablist" style="border: none !important">

                            <a href="" data-toggle="modal" data-target="#addDepartemnt" class="post-job-btn" style="width: 160px">
                                <i aria-hidden="true" style="background-color: transparent; box-shadow: none; border: none" class="fa fa-plus-square"> </i>
                                <span>Add Department</span>

                            </a>
                        </ul>
                    </div>


                </div>

            </header>


            <div role="tabpanel" class="tab-pane " id="MyPostsArea">
                <div class="border-box">
                    <div class=" custom-page-content">

                    </div>
                    <div style="background-color: #f3f3f3;" class="main-content">
                        <div class="tab-section">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bhoechie-tab-container">
                                    <div class=" bhoechie-tab">
                                        <div class="bhoechie-tab-content">
                                            <div>

                                                <div class="tab-content no-t-m">
                                                    <div role="tabpanel" class="tab-pane  active" id="MyPostsAreaInCheck">

                                                        <!--second section-->
                                                        <div class="clearfix">
                                                        </div>
                                                        <br>

                                                        <div class="col-md-12" style="margin-top: 15px;">

                                                            <div class="sales card">
                                                                <div class="card-header card-header-icon" data-background-color="rose">
                                                                    <i class="material-icons">assignment</i>
                                                                </div>
                                                                <!--start form-->



                                                                <!--end of form-->

                                                                <div class="card-content">
                                                                    <h4 class="card-title">Simple Table</h4>
                                                                    <div class="table-responsive">
                                                                        <table class="table">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        <input id="checkall" type="checkbox">
                                                                                    </th>
                                                                                    <th>No</th>
                                                                                    <th>Name</th>
                                                                                    <th>
                                                                                        <div class="pull-right" style="margin-right: 40px">
                                                                                            Option
                                                                                        </div>
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input class="checkthis" type="checkbox">
                                                                                    </td>
                                                                                    <td>01</td>
                                                                                    <td>01.07.2017</td>


                                                                                    <td class="td-actions">
                                                                                        <div class="pull-right">
                                                                                            <i class="fa fa-eye" data-toggle="modal" data-target="#SVModal" style="border: none; box-shadow: none; background: blue; color: white; cursor: pointer"></i>
                                                                                            <i class="fa fa-trash" data-toggle="modal" data-target="#alert" style="border: none; box-shadow: none; background: red; color: white; cursor: pointer"></i>
                                                                                            <i class="fa fa-plus" data-toggle="modal" data-target="#addDepartemnt" style="border: none; box-shadow: none; background: green; color: white; cursor: pointer"></i>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input class="checkthis" type="checkbox">
                                                                                    </td>
                                                                                    <td>01</td>
                                                                                    <td>01.07.2017</td>


                                                                                    <td class="td-actions">
                                                                                        <div class="pull-right">
                                                                                            <i class="fa fa-eye" data-toggle="modal" data-target="#SVModal" style="border: none; box-shadow: none; background: blue; color: white; cursor: pointer"></i>
                                                                                            <i class="fa fa-trash" data-toggle="modal" data-target="#alert" style="border: none; box-shadow: none; background: red; color: white; cursor: pointer"></i>
                                                                                            <i class="fa fa-plus" data-toggle="modal" data-target="#addDepartemnt" style="border: none; box-shadow: none; background: green; color: white; cursor: pointer"></i>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div role="tabpanel" class="tab-pane  " id="MyPostsAreaInHold">
                                                        <!--second section-->
                                                        <div class="vd_content-section clearfix">
                                                            <div class="row">
                                                                <div style="margin-bottom: -89px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" title="" data-toggle="modal" data-target="#failedModal" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 brdRight">
                                                                                            <h4>Project Title</h4>
                                                                                            <p style="color: black;">12-02-2017 / 17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 brdRight text-align">
                                                                                            <h4>
                                                                                                Budget
                                                                                            </h4>
                                                                                            <h4 class="text-height">
                                                                                                15,-€ Hourly
                                                                                            </h4>
                                                                                        </div>
                                                                                        <div class="col-sm-3 brdRight text-align">
                                                                                            <h4>
                                                                                                Total Task
                                                                                            </h4>
                                                                                            <h4 class="text-height">
                                                                                                4
                                                                                            </h4>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>
                                                                                                Proposals
                                                                                            </h4>
                                                                                            <h4 class="text-height" style="color: red;">
                                                                                                0
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
                                                    <div role="tabpanel" class="tab-pane  " id="MyPostsAreaCancelled">
                                                        <!--second section-->
                                                        <div class="vd_content-section clearfix">
                                                            <div class="row">
                                                                <div style="margin-bottom: -89px;" class="col-md-12">
                                                                    <div class="tab-content no-bd mrgn0 pdng0">
                                                                        <div class="tab-pane active fade in" id="category1">
                                                                            <!-- my -->
                                                                            <div class="panel widget container-fluid">
                                                                                <div class="row mrgn30-0 projectRow">
                                                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#cancelModal" title="" class="notice notice-success" style="color: black;">
                                                                                        <div class="col-sm-3 brdRight">
                                                                                            <h4>Project Title</h4>
                                                                                            <p style="color: black;">12-02-2017 / 17:30 Uhr</p>
                                                                                        </div>
                                                                                        <div class="col-sm-3 brdRight text-align">
                                                                                            <h4>
                                                                                                Budget
                                                                                            </h4>
                                                                                            <h4 class="text-height">
                                                                                                Agreement
                                                                                            </h4>
                                                                                        </div>
                                                                                        <div class="col-sm-3 brdRight text-align">
                                                                                            <h4>
                                                                                                Total Task
                                                                                            </h4>
                                                                                            <h4 class="text-height">
                                                                                                4
                                                                                            </h4>
                                                                                        </div>
                                                                                        <div class="col-sm-3 text-align">
                                                                                            <h4>
                                                                                                Proposals
                                                                                            </h4>
                                                                                            <h4 class="text-height" style="color: red;">
                                                                                                12
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
