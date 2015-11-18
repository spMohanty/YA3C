// Class for Conditions.  Contains properties for metadata used in Condition info box, list of components (3d objects) that make up that condition
// as well as methods for binding and unbinding mouse events and turning visibility of objects in the condition on or off

//constructor
function Condition(label, components, cause, symptoms, diagnoses, treatment, infoLink) {
	// properties
	this.label = label;
	this.components = components;  //this is an array of the objects in the condition
	this.cause = cause;
	this.symptoms = symptoms;
	this.diagnoses = diagnoses;
	this.treatment = treatment;
	this.infoLink = infoLink;
}


Condition.prototype = {
	//Methods
	testMethod: function(){
		for (var key in this.components){
			console.log('components: ' + this.components[key]);
		}
	},
	
	bindLabels: function(loadedObjects){  
		//for all the components, unbind mouse event for interactive labels
		//call this when interactive labels is turned on
		//bindEvents for displaying labels------reference jerome ettiene teapot domevents example NOTE--need to unbind events when switching to new condition because even if not visible, they will trigger events.
			
		console.log('binding labels...');
		
		var key;
		for (var i in this.components){
			key = this.components[i];
			loadedObjects[key].on('mouseover', function(event){
					console.log('MOUSEOVER label: ' + event.target.label); 
					document.getElementById("labelBox").innerHTML = event.target.label;
					if (labels==true){
						document.getElementById("labelBox").style.visibility='visible';
					}
				}).on('mouseout', function(event){
				  console.log('MOUSEOUT; label: ' + event.target.label); 
				  //document.getElementById("labelBox").style.visibility='hidden';
				});	
			}
	},
	
	unbindLabels: function(loadedObjects){
		//for all the components, unbind mouse event for interactive labels
		//call this when interactive labels is turned off
		console.log('unbinding labels...');
		
		var key;
		for (var i in this.components){
			key = this.components[i];
			loadedObjects[key].off('mouseover', function(event){
					console.log('MOUSEOVER label: ' + event.target.label); 
					document.getElementById("labelBox").innerHTML = event.target.label;
					document.getElementById("labelBox").style.visibility='visible';	
				}).off('mouseout', function(event){
				  console.log('MOUSEOUT; label: ' + event.target.label); 
				  document.getElementById("labelBox").style.visibility='hidden';
				});	
			}
	}, 
	
	bindAnatomyInfo: function (loadedObjects){
		//for all the components, bind mouse event for updating the anatomy tab of info box
		//call this when MoreInfo is turned on
		console.log('binding labels...');
		
		var key;
		for (var i in this.components){
			key = this.components[i];
			loadedObjects[key].on('click', function(event){
					console.log('CLICK label: ' + event.target.label); 
					document.getElementById("anatomyName").innerHTML = event.target.label;
					if (info==true){
						document.getElementById("anatomyName").innerHTML = event.target.label;
						document.getElementById("anatomyContent").innerHTML = event.target.anatomy;
						//document.getElementById("anatomyLink").innerHTML = "more info";
						document.getElementById("anatomyLink").href =  event.target.infoLink;
					}
				});	
			}
	}, 
	
	unbindAnatomyInfo: function (loadedObjects){
		//for all the components, unbind mouse event for updating the anatomy tab of info box
		//call this when MoreInfo is turned off
		console.log('unbinding labels...');
		
		var key;
		for (var i in this.components){
			key = this.components[i];
			loadedObjects[key].off('click', function(event){
					console.log('CLICK label: ' + event.target.label); 
					document.getElementById("anatomyName").innerHTML = event.target.label;
					if (info==true){
						document.getElementById("anatomyName").innerHTML = event.target.label;
						document.getElementById("anatomyContent").innerHTML = event.target.anatomy;
						//document.getElementById("anatomyLink").innerHTML = "more info";
						document.getElementById("anatomyLink").href =  event.target.infoLink;
					}
				});	
			}
	},
	
	//Turn on visibility for all the components in the condition.  Call this method for the selectedCondition.	
	makeVisible: function (loadedObjects){		
		var key;
		for (var i in this.components){
			key = this.components[i];
			loadedObjects[key].visible=true; 
		}
	},
	
	//Turn off visibility for all the components in the condition.  Call this for previousCondition.
	makeInvisible: function(loadedObjects){
		var key;
		for (var i in this.components){
			key = this.components[i];
			loadedObjects[key].visible=false;
		}
	}
};
	

// Here are example uses of a Condition object

//var $Name = new Condition(name, components, cause, symptoms, diagnoses, treatment, infoLink); // Create a Condition object
//
//selectedCondition.bindLabel(); 
//selectedCondition.unbindLabel(); 
//
//selectedCondition.bindInfoBox();
//selectedCondition.unbindInfoBox();
//
//selectedCondition.makeVisible();
//previousCondition.makeInvisible();