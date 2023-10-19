// const backgroundColor = 0x000000;


// /*////////////////////////////////////////*/

// var renderCalls = [];
// function render () {
//   requestAnimationFrame( render );
//   renderCalls.forEach((callback)=>{ callback(); });
// }
// render();

// /*////////////////////////////////////////*/

// var scene = new THREE.Scene();

// var camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 800 );
// camera.position.set(5,5,5);

// var renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setPixelRatio( window.devicePixelRatio );
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setClearColor( backgroundColor );//0x );

// renderer.toneMapping = THREE.LinearToneMapping;
// renderer.toneMappingExposure = Math.pow( 0.94, 5.0 );
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFShadowMap;

// window.addEventListener( 'resize', function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize( window.innerWidth, window.innerHeight );
// }, false );

// document.body.appendChild( renderer.domElement);

// function renderScene(){ renderer.render( scene, camera ); }
// renderCalls.push(renderScene);

// /* ////////////////////////////////////////////////////////////////////////// */

// var controls = new THREE.OrbitControls( camera );
// camera.rotation.z += Math.PI/2


// controls.rotateSpeed = 0.3;
// controls.zoomSpeed = 0.9;

// controls.minDistance = 3;
// controls.maxDistance = 20;

// controls.minPolarAngle = 0; // radians
// controls.maxPolarAngle = Math.PI /2; // radians

// controls.enableDamping = true;
// controls.dampingFactor = 0.05;

// renderCalls.push(function(){
//   controls.update()
// });


// /* ////////////////////////////////////////////////////////////////////////// */


// // var light = new THREE.PointLight( 0xffffcc, 20, 200 );
// // light.position.set( 4, 30, -20 );
// // scene.add( light );

// var light2 = new THREE.AmbientLight( 0x1b1f1a, 20, 500 );
// light2.position.set( 30, 10, 30 );
// scene.add( light2 );

// /* ////////////////////////////////////////////////////////////////////////// */



// var loader = new THREE.GLTFLoader();
// loader.crossOrigin = true;
// loader.load( 'poly.glb', function ( data ) {

  
//     var object = data.scene;
//      object.position.set(0, 3, 0);


//     TweenMax.from( object.position, 10, {
//       y: 2,
//       yoyo: true,
//       repeat: -1,
//       ease: 'Power2.circInOut'
//     });

//     scene.add( object );

// });





var scene, camera, renderer, controls;
var cubes = [];
var model, model2;
var video, videoTexture;
var plane;
var tooltipText;

emissiveOn= false;


// Initialize Three.js
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// Initialize the renderer with the appropriate toneMapping and gammaOutput settings
// renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.toneMapping = THREE.ReinhardToneMapping;
// renderer.toneMappingExposure = 2.0;
// renderer.gammaOutput = true;
document.getElementById('container').appendChild(renderer.domElement);

// Orbit Controls with autoRotate
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.1;

// Ambient Light
var ambientLight = new THREE.AmbientLight(0xffffff); // Soft white light
scene.add(ambientLight);

// Create and display a tooltip
function showTooltip(cube) {
  var tooltip = document.getElementById('tooltip');
  tooltip.textContent = cube.userData.tooltip;
// Calculate the position of the tooltip relative to the cube
var cubePosition = cube.position.clone();
cubePosition.project(camera);
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var tooltipX = (cubePosition.x * windowHalfX) + windowHalfX;
var tooltipY = -(cubePosition.y * windowHalfY) + windowHalfY;

tooltip.style.left = tooltipX + 'px';
tooltip.style.top = tooltipY + 'px';

tooltip.style.display = 'block';
}

// Hide the tooltip
function hideTooltip() {
  var tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'none';
}

// Create and add cubes
function createCube(position, link, texturePath, tooltipText) {
  var texture = new THREE.TextureLoader().load(texturePath);
  var cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  var cubeMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    emissive: 0xffffff, // Initialize with no emissive light
    emissiveIntensity: 0.5, // Adjust emissive intensity as needed
  })
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(position.x, position.y, position.z);
  cubes.push({ cube, link, tooltipText });
  scene.add(cube);

  cube.userData.link = link;
  cube.userData.tooltip = tooltipText;





}

createCube({ x: -2, y: 0, z: 0 },"https://phoenixkea.github.io/phoenixswebpage/", 'phoenix.png', "Phoenix Kea" );
createCube({ x: 2, y: 0, z: 0 }, "innards.html", 'full_teeth.jpg', "INNARDS - Vaughn Valentine");
createCube({ x: -3, y: 0, z: 2 }, "https://cynthiaolubodun.github.io/New-sabi-world", 'girl.jpg', "NEW SABI WORLD - Cynthia Olubodun");
createCube({ x: 3, y: 0, z: 2 }, "new.html", 'flower.png', "NEW LOGOS ORDER - Chihiro Tateno");
createCube({ x: -3, y: 0, z: -2 }, "https://aidanthomasual.github.io/Rot/", 'rot.jpg', "ROT - Aidan Thomas");
// createCube({ x: 3, y: 0, z: -2 }, "https://example.com/link6", 'texture6.jpg', "Adam");
createCube({ x: -2, y: 0, z: 4 },  "https://melissayunzhi.github.io/U5test/posedetect.html", 'cells.png', "Yunzhi Li (Melissa)");
createCube({ x: 2, y: 0, z: 4 }, "https://ae023.github.io/Erin/", '3.png', "Erin Anderson Doherty" );
createCube({ x: -1, y: 0, z: -1 }, "https://lost-in-translation-theta.vercel.app/", 'translation.png', "LOST IN TRANSLATION - Rizq Yazed");
createCube({ x: 2, y: 0, z: -4 }, "wang.html", './image/hand.png', "I would like to be a BLACKBIRD - Wangshu Zhou");



// Create a tooltip element
var tooltipElement = document.createElement('div');
tooltipElement.id = 'tooltip';
tooltipElement.style.position = 'absolute';
tooltipElement.style.display = 'none';
document.body.appendChild(tooltipElement);


// GLTF Model
var loader = new THREE.GLTFLoader();
loader.load('poly.glb', function (gltf) {
  model = gltf.scene;
  model.position.set(0, 0, 0);
  scene.add(model);
});


// GLTF Model
// var loader = new THREE.GLTFLoader();
// loader.load('melissa.glb', function (gltf) {
//   melissa = gltf.scene;
//   melissa.position.set(-2, 0, 4);
//   scene.add(melissa);
// });

// Handle cube clicks
document.addEventListener("mousedown", onDocumentMouseDown, false);

function onDocumentMouseDown(event) {
  event.preventDefault();

  var mouse = new THREE.Vector2();
  var raycaster = new THREE.Raycaster();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(cubes.map((c) => c.cube));
  if (intersects.length > 0) {
    var cube = intersects[0].object;

    window.open(cube.userData.link, "_blank");
  }
}


// Function to handle mouse over events
function onDocumentMouseOver(event) {
  event.preventDefault();
  emissiveOn= false;
  var mouse = new THREE.Vector2();
  var raycaster = new THREE.Raycaster();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(cubes.map((c) => c.cube));

  if (intersects.length > 0) {
    var cube = intersects[0].object;
    cube.userData.emissiveOn = true;
    showTooltip(cube);
    cube.material.color.set( Math.random() * 0xffffff );
    cube.material.emissiveIntensity = 0.7; // Adjust the emissive intensity as needed for the hover effect
    $('html,body').css('cursor', 'pointer');
    } else if (intersects.length === 0) {
      cubes.forEach((c) => {
        c.cube.userData.emissiveOn = false;
        hideTooltip();

        c.cube.material.emissiveIntensity = 0.0; // Adjust emissive intensity as needed
      });  } else {
        $('html,body').css('cursor', 'default');
        hideTooltip();
        c.cube.userData.emissiveOn = false;
        c.cube.material.emissiveIntensity = 0.0;  }
}

// Function to handle mouse out events
function onDocumentMouseOut(event) {
  event.preventDefault();

  var mouse = new THREE.Vector2();
  var raycaster = new THREE.Raycaster();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(cubes.map((c) => c.cube));
  if (intersects.length === 0) {
    // Reset emissive intensity for all cubes
    cubes.forEach((c) => {
      c.cube.userData.emissiveOn = false;
      c.cube.material.emissiveIntensity = 0.0; // Adjust emissive intensity as needed
    });
  }
}







// Add event listeners for mouse over and mouse out events
document.addEventListener("mousemove", onDocumentMouseOver, false);
document.addEventListener("mouseout", onDocumentMouseOut, false);









// Create a video element for webcam feed
video = document.createElement('video');
document.body.appendChild(video);

// Set up constraints for the getUserMedia API
const constraints = {
  video: {
    facingMode: 'user', // Use the user-facing camera
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
};

// Request access to the webcam
navigator.mediaDevices.getUserMedia(constraints)
  .then(function(stream) {
    video.srcObject = stream;
    video.play();
  })
  .catch(function(error) {
    console.error('Error accessing webcam:', error);
  });

// Create a video texture
videoTexture = new THREE.VideoTexture(video);
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;
videoTexture.format = THREE.RGBFormat;

var loader2 = new THREE.GLTFLoader();
loader2.load('people.glb', function (gltf) {
  model2 = gltf.scene;
  model2.position.set(0, -1, 0);

  // Traverse the model to apply the video texture to all materials
  model2.traverse((node) => {
    if (node.isMesh) {
      node.material.map = videoTexture;
      node.material.needsUpdate = true; // Ensure material update
    }
  });

  scene.add(model2);
});

// Handle window resize
window.addEventListener('resize', function() {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  if (videoTexture) {
    videoTexture.needsUpdate = true;
  }

  renderer.render(scene, camera);
}


animate();