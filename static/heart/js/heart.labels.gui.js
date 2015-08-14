
/*---------------------------------------------------*/
/*------------------------GUI------------------------*/
/*---------------------------------------------------*/

// 0 "heart"                
// 1 "Atrium"               
// 2 "RightCoronaryArtery"    
// 3 "LeftCoronaryArtery"  
// 4 "PosteriorInterventricularArtery" 
// 5 "RightMarginalArtery"
// 6 "CircumflexArtery"
// 7 "Veins"
// 8 "Ventricles"
// 9 "Nerves"
// 10 "AorticValve"
// 11 "BicuspidValve"
// 12 "PulmonaryValve"
// 13 "TricuspidValve"

function unbindCallback(){


}

function bindCallback(){


}


var heartGuiObj = new Object();
var HeartText = function(){
    this.opacity = 100;
     this.visible = true;
     this.name = '';
}
     for( var i = 0; i < modelNames.length; i++){    
        heartGuiObj[i] = new HeartText();
        heartGuiObj[i].name = modelNames[i];
    }

    // var gui = new dat.GUI({ autoplace: false });

    // var customContainer = document.getElementById('heart-gui');
    // customContainer.appendChild(gui.domElement);
    

    // var outerHeart = gui.addFolder('Outer Heart');
    // outerHeart.add(heartGuiObj[0], 'opacity', 0.0, 1.0 ).onChange(function(value) {
    //                                  meshes["heart"].material.opacity = value;
    //                                  console.log('print this value: ', value);
    //                                 });
    // outerHeart.add(heartGuiObj[0], 'visible').onChange(function(value) { 
    //                                  meshes["heart"].visible = value;
    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["heart"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER-> label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT-> label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["heart"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER- label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT- label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }

    //                                 });
    // outerHeart.add(heartGuiObj[0], 'name').onChange(function(value) {
    //                                  meshes["heart"].name = value;
    //                                  console.log('print this value: ', value);
    //                                 });


    // var innerHeart = gui.addFolder('Inner Heart');

    // var ventricles = innerHeart.addFolder('Ventricles');
    // ventricles.add(heartGuiObj[8], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["Ventricles"].material.opacity = value;
    //                                 });
    // ventricles.add(heartGuiObj[8], 'visible').onChange(function(value) {
    //                                  meshes["Ventricles"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["Ventricles"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["Ventricles"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }

    //                                 });
    // ventricles.add(heartGuiObj[8], 'name').onChange(function(value) {
    //                                  meshes["Ventricles"].name = value;
    //                                 });
    

    // var atrium = innerHeart.addFolder('Atrium');
    // atrium.add(heartGuiObj[1], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["Atrium"].material.opacity = value;
    //                                 });
    // atrium.add(heartGuiObj[1], 'visible').onChange(function(value) {
    //                                  meshes["Atrium"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["Atrium"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["Atrium"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // atrium.add(heartGuiObj[1], 'name').onChange(function(value) {
    //                                  meshes["Atrium"].name = value;
    //                                 });
    
    
    // var Arteries = innerHeart.addFolder('Arteries');
    // var LeftCoronaryArtery = Arteries.addFolder('Left Coronary Artery');
    // LeftCoronaryArtery.add(heartGuiObj[3], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["LeftCoronaryArtery"].material.opacity = value;
    //                                 });
    // LeftCoronaryArtery.add(heartGuiObj[3], 'visible').onChange(function(value) {
    //                                  meshes["LeftCoronaryArtery"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["LeftCoronaryArtery"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["LeftCoronaryArtery"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // LeftCoronaryArtery.add(heartGuiObj[3], 'name').onChange(function(value) {
    //                                  meshes["LeftCoronaryArtery"].name = value;
    //                                 });
    

    // var postInterventricularArtery = Arteries.addFolder('Posterior Interventricular Artery');
    // postInterventricularArtery.add(heartGuiObj[4], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["PosteriorInterventricularArtery"].material.opacity = value;
    //                                 });
    // postInterventricularArtery.add(heartGuiObj[4], 'visible').onChange(function(value) {
    //                                  meshes["PosteriorInterventricularArtery"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["PosteriorInterventricularArtery"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["PosteriorInterventricularArtery"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // postInterventricularArtery.add(heartGuiObj[4], 'name').onChange(function(value) {
    //                                  meshes["PosteriorInterventricularArtery"].name = value;
    //                                 });
    

    // var rMarginalArtery = Arteries.addFolder('Right Marginal Artery');
    // rMarginalArtery.add(heartGuiObj[5], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["RightMarginalArtery"].material.opacity = value;
    //                                 });
    // rMarginalArtery.add(heartGuiObj[5], 'visible').onChange(function(value) {
    //                                  meshes["RightMarginalArtery"].visibile = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["RightMarginalArtery"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["RightMarginalArtery"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // rMarginalArtery.add(heartGuiObj[5], 'name').onChange(function(value) {
    //                                  meshes["RightMarginalArtery"].name = value;
    //                                 });
    

    // var circumflexArtery = Arteries.addFolder('Circumflex Artery');
    // circumflexArtery.add(heartGuiObj[6], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["CircumflexArtery"].material.opacity = value;
    //                                 });
    // circumflexArtery.add(heartGuiObj[6], 'visible').onChange(function(value) {
    //                                  meshes["CircumflexArtery"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["CircumflexArtery"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["CircumflexArtery"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // circumflexArtery.add(heartGuiObj[6], 'name').onChange(function(value) {
    //                                  meshes["CircumflexArtery"].name = value;
    //                                 });
    

    // var rCoronaryArtery = Arteries.addFolder('Right Coronary Artery');
    // rCoronaryArtery.add(heartGuiObj[2], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["RightCoronaryArtery"].material.opacity = value;
    //                                 });
    // rCoronaryArtery.add(heartGuiObj[2], 'visible').onChange(function(value) {
    //                                  meshes["RightCoronaryArtery"].material.opacity = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["RightCoronaryArtery"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["RightCoronaryArtery"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // rCoronaryArtery.add(heartGuiObj[2], 'name').onChange(function(value) {
    //                                  meshes["RightCoronaryArtery"].material.opacity = value;
    //                                 });
  

    // var veins = gui.addFolder('Veins');
    // veins.add(heartGuiObj[7], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["Veins"].material.opacity = value;
    //                                 });
    // veins.add(heartGuiObj[7], 'visible').onChange(function(value) {
    //                                  meshes["Veins"].material.visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["Veins"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["Veins"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // veins.add(heartGuiObj[7], 'name').onChange(function(value) {
    //                                  meshes["Veins"].material.name = value;
    //                                 });


    // var nerves = gui.addFolder('Nerves');
    // nerves.add(heartGuiObj[9], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["Nerves"].material.opacity = value;
    //                                 });
    // nerves.add(heartGuiObj[9], 'visible').onChange(function(value) {
    //                                  meshes["Nerves"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["Nerves"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["Nerves"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // nerves.add(heartGuiObj[9], 'name').onChange(function(value) {
    //                                  meshes["Nerves"].name = value;
    //                                 });


    // var valves = gui.addFolder('Valves');
    // var pulmonaryV = valves.addFolder('Pulmonary Valve');
    // pulmonaryV.add(heartGuiObj[12], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["PulmonaryValve"].material.opacity = value;
    //                                 });
    // pulmonaryV.add(heartGuiObj[12], 'visible').onChange(function(value) {
    //                                  meshes["PulmonaryValve"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["PulmonaryValve"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["PulmonaryValve"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // pulmonaryV.add(heartGuiObj[12], 'name').onChange(function(value) {
    //                                  meshes["PulmonaryValve"].name = value;
    //                                 });


    // var tricuspidV = valves.addFolder('Tricuspid Valve');
    // tricuspidV.add(heartGuiObj[13], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["TricuspidValve"].material.opacity = value;
    //                                 });
    // tricuspidV.add(heartGuiObj[13], 'visible').onChange(function(value) {
    //                                  meshes["TricuspidValve"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["TricuspidValve"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["TricuspidValve"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // tricuspidV.add(heartGuiObj[13], 'name').onChange(function(value) {
    //                                  meshes["TricuspidValve"].name = value;
    //                                 });



    // var bicuspidV = valves.addFolder('Bicuspid Valve');
    // bicuspidV.add(heartGuiObj[11], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["BicuspidValve"].material.opacity = value;
    //                                 });
    // bicuspidV.add(heartGuiObj[11], 'visible').onChange(function(value) {
    //                                  meshes["BicuspidValve"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["BicuspidValve"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["BicuspidValve"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }


    //                                 });
    // bicuspidV.add(heartGuiObj[11], 'name').onChange(function(value) {
    //                                  meshes["BicuspidValve"].name = value;
    //                                 });


    // var aorticV = valves.addFolder('Aortic Valve');
    // aorticV.add(heartGuiObj[10], 'opacity', 0.0, 1.0).onChange(function(value) {
    //                                  meshes["AorticValve"].material.opacity = value;
    //                                 });
    // aorticV.add(heartGuiObj[10], 'visible').onChange(function(value) {
    //                                  meshes["AorticValve"].visible = value;

    //                                  //console.log('print this value: ', value);

    //                                  if(value == false){
                                      
    //                                     meshes["AorticValve"].removeEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     }).removeEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                       document.getElementById("labelBox").style.visibility='hidden';
    //                                                     });

                                       


    //                                  }else if(value == true){
                                      
    //                                     meshes["AorticValve"].addEventListener('mouseover', function(event){
    //                                                         console.log('MOUSEOVER label: ' + event.target.name); 
    //                                                         document.getElementById("DivToShow").innerHTML = event.target.name;
    //                                                         $('#DivToShow').css({'display':'inline'}).fadeIn(); 
    //                                                     }).addEventListener('mouseout', function(event){
    //                                                       console.log('MOUSEOUT; label: ' + event.target.name); 
    //                                                        $('#DivToShow').css({'display':'inline'}).fadeOut(); 
    //                                                     });
    //                                 }

                                    
    //                                 });
    // aorticV.add(heartGuiObj[10], 'name').onChange(function(value) {
    //                                  meshes["AorticValve"].name = value;
    //                                 });

