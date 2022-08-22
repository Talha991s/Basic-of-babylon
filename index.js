
var canvas = document.getElementById("renderCanvas");

const antialias = true;

var engine = new BABYLON.Engine(canvas,antialias,
    {   
        preserveDrawingBuffer:true,
        stencil:true
    }
);

var scene = buildScene();
engine.runRenderLoop(function() {
    if(scene){
        scene.render();
    }

});


