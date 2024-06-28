import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.137/build/three.module.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.137/examples/jsm/loaders/FBXLoader.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Load FBX model
const fbxLoader = new FBXLoader();
fbxLoader.load('path/to/your/model.fbx', (object) => {
    scene.add(object);
});

// Animation loop
const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
