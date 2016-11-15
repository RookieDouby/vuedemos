<template>
    <div id="app">
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header">
                    <h2>Router Demo-01</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <a href="" class="list-group-item" v-link="{path: '/home'}">Home</a>
                    <a href="" class="list-group-item" v-link="{path: '/about'}">About</a>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    body {
        background-color:#ccc;
    }
</style>