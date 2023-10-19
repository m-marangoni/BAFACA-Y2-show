var scene, camera, renderer;
var video, videoTexture;
var plane;

// Initialize Three.js
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);



// Ambient Light
var ambientLight = new THREE.AmbientLight(0xffffff); // Soft white light
scene.add(ambientLight);


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

// Create a plane with the video texture
var geometry = new THREE.PlaneGeometry(1, 0.5625); // Adjust the aspect ratio as needed
var material = new THREE.MeshBasicMaterial({ map: videoTexture });
plane = new THREE.Mesh(geometry, material);
scene.add(plane);

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

  if (videoTexture) {
    videoTexture.needsUpdate = true;
  }

  renderer.render(scene, camera);
}

animate();
