Parse.initialize("Fk0SZFP9h1D2WUAbEWEKFHzQqg7CCoA2s4QMX0jx", "yW9JPHrVWtM9HYMF2Qa26ipd1sBcEB8wuLw6vvdx");

var ToDoObject = Parse.Object.extend("ToDoObject");
var toDoObject = new ToDoObject();
// toDoObject.save({WhatToDo: "ToDo"}, {
//   success: function(toDoObject) {
//     // alert("yay! it worked");
//   }
// });

// var toDo = Parse.Object.extend("ToDo");
// // var toDo = new ToDo()


var ToDoObjectCollectionClass = Parse.Collection.extend({
  	model: toDoObject
});

var toDoObjectCollection = new ToDoObjectCollectionClass()

 //  // OLD ignore
// toDoObject.save(null, {
//   success: function(toDoObject) {
//     // Execute any logic that should take place after the object is saved.
//     alert('New to do item created: ' + toDoObject.id);
//   },
//   error: function(toDoObject, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     alert('Failed to create new object, with error code: ' + error.description);
//   }
// });



// $('document').ready(function() {
// toDoObjectCollection.fetch({
//   success: function(collection) {
//     collection.each(function(toDoObjectName){
//       addToSideBar(toDoObjectName)
//     })
//   }
// });

// toDoObject.fetch({
//   success: function(toDoObjectName) {
//     // The object was refreshed successfully.
//   },
//   error: function(toDoObject, error) {
//     // The object was not refreshed successfully.
//     // error is a Parse.Error with an error code and description.
//   }
// });
// });

// end document ready


// Saves in toDoObjectName in Parse when submit button is pressed
$('.submit').click(function(){
	if (validateForm()) {
  		var toDoObject = new ToDoObject();
  		toDoObject.set('toDoObject', $('input').val());

  		var toDoValue = $('input').val();
	    $('.toDo').text(toDoValue);
 
  		toDoObject.save(null, {
    		success: function(result){
    			alert("Thank you for submitting your ToDo object. Your identification number is " + toDoObject.id);
      		// createToDo(result)
    		},
    		error: function(result, error){
    		}
    	});	
  	};
});

// Uncaught TypeError: Cannot read property 'className' of undefined 
// Uncaught TypeError: Object [object Object] has no method 'each' 
// var toDoObjectName = new ToDoObjectCollectionClass()
// toDoObject.fetch({
// 	success: function(toDoObject) {
// 		toDoObject.each(function(object){
// 			console.warn.object;
// 		});
// 	},
// 	error: function(toDoObject, error) {

// 	}
// });

// toDoObject.fetch({
// 	success: function(toDoObject) {
// 		var toDoTask = toDoObject.get("toDoObjectName")
// 	}
// });

// function createTask(toDoObject) {
//   var li = $('<li>'+toDoObject.get('toDoObject'))
//   $('.toDoObject').append(li)
//   showToDo()
// };

// function showToDo(toDoObject) {
// 	var toDoObject = new ToDoObject();
// 	$('input').val(toDoObject.get('toDo'))
// };


function validateForm() {
	var validate = true																				
	$('input').removeClass("warning")
	$('input').each(function(){
		if ($(this).val() == "") {
			console.log("Please check your input");
			validate = false
			$(this).addClass("warning")
 
		}
	})
	console.log(validate)
	return validate
};



// $('.save').click(function(){
//   var toDoObject = new ToDoObjectClass();
//   // toDoObject.set('title', $('#title').val());
//   toDoObject.set('content', $('#content').val());
// });
