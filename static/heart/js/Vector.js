function Vector(optional) { 
    if (optional) {
        this.x = optional.x
        this.y = optional.y
        this.z = optional.z
        this.w = optional.w
    } else {
        this.x = 0
        this.y = 0
        this.z = 0
        this.w = 0
    }
}

Vector.prototype.length = function () {
  var length = Math.sqrt( this.x*this.x + this.y*this.y + this.z*this.z )  
  return length
}

Vector.prototype.scale = function (scale) { 
  this.x *= scale
  this.y *= scale
  this.z *= scale
}

Vector.prototype.normalize = function() {
  //scales a vector back to a unit vector. It will have a length of 1

  var lengthval = this.length()

  if (lengthval != 0) {
    this.x /= lengthval;
    this.y /= lengthval;
    this.z /= lengthval; 
    return true 
  } else { 
    return false
  }
}


Vector.prototype.cross = function(vectorB)
{
  var tempvec = new Vector(this) 
  tempvec.x = (this.y*vectorB.z) - (this.z*vectorB.y);
  tempvec.y = (this.z*vectorB.x) - (this.x*vectorB.z);
  tempvec.z = (this.x*vectorB.y) - (this.y*vectorB.x);
  this.x = tempvec.x
  this.y = tempvec.y
  this.z = tempvec.z
  this.w = tempvec.w
}



Vector.prototype.dot = function (vectorB)
{
    return this.x*vectorB.x+this.y*vectorB.y+this.z*vectorB.z; 
}

Vector.prototype.angle = function(bvector) {
  var anorm = new Vector(this)  
  anorm.normalize()
  var bnorm = new Vector(bvector)
  bnorm.normalize()
  var dotval = anorm.dot(bnorm);
  return Math.acos(dotval);
}



Vector.prototype.QuaternionMultiply = function(vectorB) {
    var out = new Vector();
    out.w = this.w*vectorB.w - this.x*vectorB.x - this.y*vectorB.y - this.z*vectorB.z;
    out.x = this.w*vectorB.x + this.x*vectorB.w + this.y*vectorB.z - this.z*vectorB.y;
    out.y = this.w*vectorB.y - this.x*vectorB.z + this.y*vectorB.w + this.z*vectorB.x;
    out.z = this.w*vectorB.z + this.x*vectorB.y - this.y*vectorB.x + this.z*vectorB.w;
    this.x = out.x
    this.y = out.y
    this.z = out.z
    this.w = out.w
}


Vector.prototype.rotate = function (inputaxis, inputangle) 
{
    var vector = new Vector(this)
    vector.w = 0

    var axis = new Vector({ 
      x: inputaxis.x * Math.sin(inputangle/2),     
      y: inputaxis.y * Math.sin(inputangle/2),     
      z: inputaxis.z * Math.sin(inputangle/2),     
      w: Math.cos(inputangle/2)} 
      )

    var axisInv = new Vector({ x: -axis.x, y: -axis.y, z: -axis.z, w: axis.w}  )

    axis.QuaternionMultiply(vector)
    axis.QuaternionMultiply(axisInv)

    this.x = axis.x
    this.y = axis.y
    this.z = axis.z
}




