require.config({
    baseUrl: '/Scripts/App/',
    paths: {
        'jQuery': '/Scripts/jquery-1.9.1',
        'knockout': '/Scripts/knockout-2.2.1.debug',
        'AppViewModel': '/Scripts/ViewModels/AppViewModel'
    },
    urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
        jQuery: {
            exports: '$'
        },
        'knockout': {
            deps: [
                "jQuery"
            ],
            exports: 'ko'
        },
        'AppViewModel': {
            deps: [
                'knockout'
            ]
        }
    }
});
require([
    'knockout', 
    'AppViewModel'
], function (koo, avm) {
    (window).ko = koo;
    var viewmodel = new avm.AppViewModel();
    ko.applyBindings(viewmodel);
    alert('hello world - SUCCESS');
});
