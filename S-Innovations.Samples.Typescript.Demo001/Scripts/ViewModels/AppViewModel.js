define(["require", "exports", "knockout"], function(require, exports) {
    var AppViewModel = (function () {
        function AppViewModel() {
            this.title = ko.observable();
            this.title('My Sample');
        }
        AppViewModel.prototype.setTitle = function (title) {
            this.title(title);
        };
        return AppViewModel;
    })();
    exports.AppViewModel = AppViewModel;    
})
