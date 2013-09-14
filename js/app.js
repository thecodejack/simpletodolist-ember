App = Ember.Application.create();

App.Router.map(function() {
    // put your routes here
});

App.Todo = Ember.Object.extend({});

/*App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'App.TodosAdapter'
});

App.Todo.FIXTURES = [
    { id: 1, isDone: true, text: 'Test123' },
    { id: 2, isDone: false, text: 'Test546' }
];

App.TodosAdapter = DS.FixtureAdapter.extend({});*/

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return [];
    }
});

App.IndexController = Ember.ArrayController.extend({
    actions: {
        addTodo: function() {
            this.addObject(App.Todo.create({
                text: this.get('newText'),
                isDone: false
            }));
            this.set('newText', '');
            console.log("Add Test");
        },
        removeTodo: function(item) {
            this.removeObject(item);
        },
        clearTodo: function(){
        	this.removeObjects(this.filterProperty('isDone', true));
        }
    },
    remaining: function () {
		return this.filterProperty('isDone', false).get('length');
	}.property('@each.isDone'),
	count: function () {
		return this.get('length');
	}.property('@each')

});
