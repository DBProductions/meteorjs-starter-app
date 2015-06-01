ApplicationController = RouteController.extend({
    layoutTemplate: 'AppLayout'
});

HomeController = ApplicationController.extend({
    action: function () {
        this.render('home');
    }
});

UsersController = ApplicationController.extend({
    action: function () {
        this.render('list');
    }
});

UserdetailController = ApplicationController.extend({
    action: function () {
        uid = this.params._id;
        this.render('detail');
    }
});

InsertuserController = ApplicationController.extend({
    action: function () {
        this.render('insert');
    }
});

EdituserController = ApplicationController.extend({
    action: function () {
        uid = this.params._id;
        this.render('edit');
    }
});