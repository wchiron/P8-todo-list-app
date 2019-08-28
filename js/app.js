/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list. // The param tag provides the name, type, and description of a function parameter. 
	 */
	function Todo(name) {
		this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view); // initialise the Controller class with model and view js files as parameters
	}

	var todo = new Todo('todos-vanillajs');

	function setView() {
		todo.controller.setView(document.location.hash);// retrieve everything after the # 
	}
	$on(window, 'load', setView);  // when html page is loaded or hashchanged (the hash after the index.html in the url), it will trigger setView function which is above. setView function will trigger the setView function in the controller file in line 54. That function will trigger another function called updateFilterState, it will show the list of items according to the hash after the index.html, to create an idea of 'categories' in a single page application
	$on(window, 'hashchange', setView);
})(); // the way this function is written means the function will be called immediately
