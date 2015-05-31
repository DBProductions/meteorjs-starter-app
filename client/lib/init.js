
Meteor.subscribe("users");

Session.setDefault("delete", false);

Template.users.helpers({
    users: function () {
        return UsersService.getUsers();
    }
});

Template.userdetail.helpers({
    user: function() {
        return UsersService.getUser(uid);
    },
    deleteFlag: function () {
      return Session.get("delete");
    }
});
Template.userdetail.events({
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

Template.insertuser.helpers({
    user: function() {
        return UsersService.getUser(uid);
    }
});

Template.insertuser.events({
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

Template.edituser.helpers({
    user: function() {
        return UsersService.getUser(uid);
    }
});

Template.edituser.events({
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
        Router.go('/user/' + uid);
        return false;
    }
});


