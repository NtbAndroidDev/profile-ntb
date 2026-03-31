const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();
// Optional fog for depth
scene.fog = new THREE.FogExp2(0x0f172a, 0.015);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Group for objects
const group = new THREE.Group();
scene.add(group);

// 1. Cyberpunk Wireframe Torus Knot
const geometry = new THREE.TorusKnotGeometry( 12, 3, 150, 20 );
const material = new THREE.MeshBasicMaterial( { 
    color: 0x00f0ff, 
    wireframe: true,
    transparent: true,
    opacity: 0.15
} );
const torusKnot = new THREE.Mesh( geometry, material );
group.add( torusKnot );

// 2. Data Particles (Deep Learning / Matrix vibe)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 3000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 150;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 0.15,
    color: 0xff00ff,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particleMaterial);
group.add(particlesMesh);

camera.position.z = 30;

// Mouse Interaction
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
});

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Smooth mouse following
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;
    
    group.rotation.y += 0.05 * (targetX - group.rotation.y);
    group.rotation.x += 0.05 * (targetY - group.rotation.x);
    
    // Constant slow rotation
    torusKnot.rotation.z += 0.002;
    particlesMesh.rotation.y = -elapsedTime * 0.02;
    particlesMesh.rotation.x = elapsedTime * 0.01;

    renderer.render(scene, camera);
}
animate();

// Resize handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
