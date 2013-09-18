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

var toDoObjects = new ToDoObjectCollectionClass()


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



// function getFormValues () {
// 	var toDoResult	= $('.input-medium').val();}
	// var toDoSummary 	= $('.todo-summary').val();

// 	var formData = {
// 		name: nameVal,
// 		birthday: birthVal,
// 		hometown: homeVal,
// 		job: jobVal,
// 		phone: teleVal
// 	}

// 	return formData;

// }

// toDoObjects.fetch({
//   success: function(collection) {
//     collection.each(function(toDoObject){
//       addToSideBar(toDoObject)
//     })
//   }
// })

// toDoObject.fetch({
//   success: function(toDoObject) {
//     // The object was refreshed successfully.
//   },
//   error: function(toDoObject, error) {
//     // The object was not refreshed successfully.
//     // error is a Parse.Error with an error code and description.
//   }
// });


// Saves in toDoObjectName in Parse when submit button is pressed
$('.submit').click(function(){
	if (validateForm()) {
  		var toDoObject = new ToDoObject();
  		toDoObject.set('toDoObjectName', $('input').val());
 
  		toDoObject.save(null, {
    		success: function(result){
      		// createToDo(result)
    		},
    		error: function(result, error){
    		}
    	});	
  	};
});

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
