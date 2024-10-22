import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import * as dat from 'dat.gui';
    
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);
const orbit = new OrbitControls(camera, renderer.domElement)
orbit.update()
const scene = new THREE.Scene();


const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// const loader = new GLTFLoader();
// loader.load('scene.gltf', function (gltf) {
//     scene.add(gltf.scene);
//     gltf.scene.position.set(0, 0, 0);
//     gltf.scene.scale.set(1, 1, 1);
// }, undefined, function (error) {
//     console.error(error);
// });

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
const gui = new dat.GUI();
const options = {
    cubeColor: '#ffea00',
    wireframe: false,
    spinspeed: 0.1,
    bouncespeed: 0.1
};
gui.addColor(options, 'cubeColor').onChange(function(e){
    cube.material.color.set(e)
});
gui.add(options, 'wireframe').onChange(function(e){
    cube.material.wireframe = e
})

// const light = new THREE.AmbientLight(0x666600, 1); // Ambient light
// scene.add(light);
// // Optional: Add a directional light to enhance model visibility
// const dirLight = new THREE.DirectionalLight(0xffffff, 1);
// dirLight.position.set(5, 10, 7.5);
// scene.add(dirLight);

function animate(){
    cube.rotation.x += 0.01 
    cube.rotation.y += 0.01
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate)
// just a test comment