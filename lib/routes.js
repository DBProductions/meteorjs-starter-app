Router.route('/', { 
    name: 'home' 
});

Router.route('/users', { 
    name: 'users'
});

Router.route('/users/:_id', {
    name: 'userdetail'
});

Router.route('/insertuser', { 
    name: 'insertuser' 
});

Router.route('/edituser/:_id', { 
    name: 'edituser' 
});