const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();
// Deep space fog
scene.fog = new THREE.FogExp2(0x050510, 0.0015);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 80, 500);

const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 1. Neon Cyber Terrain
const planeGeometry = new THREE.PlaneGeometry(4000, 4000, 100, 100);
const planeMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x00f0ff, 
    wireframe: true,
    transparent: true,
    opacity: 0.15
});

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -100;
scene.add(plane);

// 2. AI Core / Black Hole (Representing Deep Learning / Intelligence)
const coreGroup = new THREE.Group();
coreGroup.position.set(0, 150, -400);
scene.add(coreGroup);

// The pitch black anomaly
const sphereGeo = new THREE.SphereGeometry(80, 64, 64);
const sphereMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
const blackHole = new THREE.Mesh(sphereGeo, sphereMat);
coreGroup.add(blackHole);

// Inner data ring
const ring1Geo = new THREE.RingGeometry(110, 160, 64, 8);
const ring1Mat = new THREE.MeshBasicMaterial({ 
    color: 0xff00ff, 
    wireframe: true, 
    transparent: true, 
    opacity: 0.5,
    side: THREE.DoubleSide
});
const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
ring1.rotation.x = Math.PI / 2.5;
coreGroup.add(ring1);

// Outer solid neon ring
const ring2Geo = new THREE.RingGeometry(180, 185, 128);
const ring2Mat = new THREE.MeshBasicMaterial({ 
    color: 0x00f0ff, 
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.8
});
const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
ring2.rotation.x = Math.PI / 2.2;
coreGroup.add(ring2);

// 3. Floating Data Particles (Stars/Information)
const particlesGeo = new THREE.BufferGeometry();
const particlesCount = 4000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i+=3) {
    posArray[i] = (Math.random() - 0.5) * 3000;     // X
    posArray[i+1] = Math.random() * 1500 - 200;     // Y (mostly up)
    posArray[i+2] = (Math.random() - 0.5) * 3000;   // Z
}

particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMat = new THREE.PointsMaterial({
    size: 2.5,
    color: 0xffffff,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
});
const starfield = new THREE.Points(particlesGeo, particlesMat);
scene.add(starfield);

// Mouse interaction
let mouseX = 0;
let mouseY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX) * 0.15;
    mouseY = (event.clientY - windowHalfY) * 0.15;
});

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // 1. Terrain Wavy Motion (Ocean of Data)
    const vertices = plane.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const y = vertices[i+1];
        // Calculate a sine wave that rolls over time
        vertices[i+2] = Math.sin(x * 0.005 + elapsedTime * 1.5) * 25 
                      + Math.cos(y * 0.005 + elapsedTime * 1.5) * 25;
    }
    plane.geometry.attributes.position.needsUpdate = true;

    // 2. Rotate AI Core Rings
    ring1.rotation.z -= 0.005;
    ring2.rotation.z += 0.01;

    // 3. Move Starfield slowly towards camera to create infinite flight illusion
    starfield.position.z = (elapsedTime * 60) % 1500;
    
    // Slow rotation of the stars
    starfield.rotation.y = elapsedTime * 0.02;

    // 4. Camera Parallax based on Mouse (Adds extreme depth)
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y + 100) * 0.05;
    // Always look near the central AI core
    camera.lookAt(coreGroup.position.x, coreGroup.position.y + 50, coreGroup.position.z);

    renderer.render(scene, camera);
}
animate();

// Handle Resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
