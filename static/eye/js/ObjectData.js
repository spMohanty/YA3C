// Class for Object Data.  Contains properties for metadata used in labels and info box as well as methods for binding and unbinding mouse events


function ObjectData(label, anatomy, physiology, infoLink) {
//properties
this.label = label;
this.anatomy = anatomy;
this.physiology = physiology;
this.infoLink = infoLink

}
// All ObjectData objects inherit from this object.
ObjectData.prototype = {
	
	//methods
	
};

	


// Here are example uses of a range object
//var $Name = new ObjectData($Name, $Label, $Anatomy, $Physiology); // Create a range object
