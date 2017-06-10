var demo = (function(){

    "use strict";
    
    var scene=new THREE.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls=null;

        function initScene(){
    
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);
                      
            camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth / window.innerHeight,
                    1,
                    1000
            );

	    var fieldOfViewRadians = degToRad(60);
	    var rotationsspeed = 1.2;

	    function drawScene(){

	    
            camera.position.set( -10, 10, 100 ); // x y z
            
            scene.add(camera);  

            box = new THREE.Mesh(
              new THREE.CubeGeometry(
                20,
                20,
                20),
              new THREE.MeshBasicMaterial({color: 0xFF0000}));

            scene.add(box);

		requestAnimationFrame(render);
	    }

        };

        function render() {
                renderer.render(scene, camera); 
                requestAnimationFrame(render);
        };
       
        window.onload = initScene;

})();