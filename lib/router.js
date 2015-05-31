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
        this.render('users');
    }
});

UserdetailController = ApplicationController.extend({
    action: function () {
        uid = this.params._id;
        this.render('userdetail');
    }
});

InsertuserController = ApplicationController.extend({
    action: function () {
        this.render('insertuser');
    }
});

EdituserController = ApplicationController.extend({
    action: function () {
        uid = this.params._id;
        this.render('edituser', {data: {_id: this.params._id}});
    }
});

Router.route('/', {
    name: 'home'
});

Router.route('/users', {
    name: 'users'
});

Router.route('/user/:_id', {
    name: 'userdetail'
});

Router.route('/insertuser', {
    name: 'insertuser'
});

Router.route('/edituser/:_id', {
    name: 'edituser'
});