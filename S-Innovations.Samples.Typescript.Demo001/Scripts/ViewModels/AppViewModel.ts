///<reference path="../knockout.d.ts" />
///<amd-dependency path="knockout" />
export class AppViewModel
{
    title = ko.observable();
    constructor()
    {
        this.title('My Sample');
    }
    setTitle(title: string)
    {
        this.title(title);
    }
}