
Meteor.subscribe("users");

Session.setDefault("delete", false);

Template.list.helpers({
    users: function () {
        return UsersService.getUsers();
    }
});

Template.detail.helpers({
    user: function() {
        Session.set("delete", false);
        return UsersService.getUser(uid);
    },
    deleteFlag: function () {
        return Session.get("delete");
    }
});
Template.detail.events({
    'click #editBtn': function() {
        Router.go('/edituser/' + uid);
    },
    'click #deleteBtn': function() {
        Session.set("delete", uid);
    },
    'click #deleteConfirmBtn': function() {
        Session.set("delete", false);
        Meteor.call("deleteUser", uid);
        Router.go('/users');
    }
});

Template.insert.helpers({
    user: function() {
        return UsersService.getUser(uid);
    }
});
Template.insert.events({
    'submit .new-user': function (event) {
        var email = event.target.email.value;
        var age = event.target.age.value;
        var gender = event.target.gender.value;
        Meteor.call("addUser", {
            email: email,
            age: age,
            gender: gender
        });
        event.target.email.value = "";
        event.target.age.value = "";
        Router.go('users');
        return false;
    }
});

Template.edit.helpers({
    user: function() {
        return UsersService.getUser(uid);
    },
    checkGender: function (gender) {
        var u = UsersService.getUser(uid);
        if (u) {  
            return gender === u.gender;
        }
    }
});
Template.edit.events({
    'submit .edit-user': function() {
        var email = event.target.email.value;
        var age = event.target.age.value;
        var gender = event.target.gender.value;
        Meteor.call("updateUser", uid, {
            email: email,
            age: age,
            gender: gender
        });
        event.target.email.value = "";
        event.target.age.value = "";
        Router.go('/users/' + uid);
        return false;
    }
});


