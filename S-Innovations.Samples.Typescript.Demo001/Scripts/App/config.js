require.config({
    baseUrl: '/Scripts/App/',
    paths: {
        'jQuery': '/scripts/jquery-1.9.1',
        'knockout': '/scripts/knockout-2.2.1',
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
    'AppViewModel'
], function (avm) {
    var viewmodel = new avm.AppViewModel();
    ko.applyBindings(viewmodel);
    alert('hello world - SUCCESS');
});
