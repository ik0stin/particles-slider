import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import GUI from 'lil-gui'
import gsap from 'gsap'
import particlesVertexShader from './shaders/particles/vertex.glsl'
import particlesFragmentShader from './shaders/particles/fragment.glsl'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

let swiper;

/**
 * Base
 */
// Debug
const gui = new GUI({ width: 340 })
const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Loaders
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('./draco/')
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2)
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

  // Materials
  if (particles)
    particles.material.uniforms.uResolution.value.set(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()


  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(sizes.pixelRatio)
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 10, 15 * 2)
scene.add(camera)

camera.position.y = -3

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(sizes.pixelRatio)


/**
 * Particles
 */
let particles = null

gltfLoader.load('./models.glb', (gltf) => {
  particles = {}
  particles.index = 0

  // Positions
  const positions = gltf.scene.children.map(child => child.geometry.attributes.position)

  particles.maxCount = 0
  for (const position of positions) {
    if (position.count > particles.maxCount)
      particles.maxCount = position.count
  }

  particles.positions = []
  for (const position of positions) {
    const originalArray = position.array
    const newArray = new Float32Array(particles.maxCount * 3)

    for (let i = 0; i < particles.maxCount; i++) {
      const i3 = i * 3

      if (i3 < originalArray.length) {
        newArray[i3 + 0] = originalArray[i3 + 0]
        newArray[i3 + 1] = originalArray[i3 + 1]
        newArray[i3 + 2] = originalArray[i3 + 2]
      }
      else {
        const randomIndex = Math.floor(position.count * Math.random()) * 3
        newArray[i3 + 0] = originalArray[randomIndex + 0]
        newArray[i3 + 1] = originalArray[randomIndex + 1]
        newArray[i3 + 2] = originalArray[randomIndex + 2]
      }
    }

    particles.positions.push(new THREE.Float32BufferAttribute(newArray, 3))
  }

  // Geometry
  const sizesArray = new Float32Array(particles.maxCount)

  for (let i = 0; i < particles.maxCount; i++)
    sizesArray[i] = Math.random()

  particles.geometry = new THREE.BufferGeometry()
  particles.geometry.setAttribute('position', particles.positions[particles.index])
  particles.geometry.setAttribute('aPositionTarget', particles.positions[3])
  particles.geometry.setAttribute('aSize', new THREE.BufferAttribute(sizesArray, 1))


  // Material
  particles.colorA = '#ff7300'
  particles.colorB = '#0091ff'

  particles.material = new THREE.ShaderMaterial({
    vertexShader: particlesVertexShader,
    fragmentShader: particlesFragmentShader,
    uniforms:
    {
      uSize: new THREE.Uniform(0.4),
      uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)),
      uProgress: new THREE.Uniform(0),
      uColorA: new THREE.Uniform(new THREE.Color(particles.colorA)),
      uColorB: new THREE.Uniform(new THREE.Color(particles.colorB))
    },
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  // Points
  particles.points = new THREE.Points(particles.geometry, particles.material)
  particles.points.frustumCulled = false
  scene.add(particles.points)
  

  swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1200,
    allowTouchMove: false,
    effect: "fade",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  // Methods
  particles.morph = (index) => {
    // swiper.allowSlideNext = false;
    // swiper.allowSlidePrev = false;

    // Update attributes
    particles.geometry.attributes.position = particles.positions[particles.index]
    particles.geometry.attributes.aPositionTarget = particles.positions[index]

    // Animate uProgress
    gsap.fromTo(
      particles.material.uniforms.uProgress,
      { value: 0 },
      { 
        value: 1, 
        duration: 3, 
        ease: 'linear',
        onStart: () => {
          console.log('GSAP animation start - Locking buttons');
        },
        onComplete: () => {
          console.log('GSAP animation complete - Unlocking buttons');
          // Разблокировка переключения слайдов после завершения анимации
          swiper.allowSlideNext = true;
          swiper.allowSlidePrev = true;
        }
      }
    );

    // Save index
    particles.index = index
  }
})


document.addEventListener('DOMContentLoaded', () => {
  const leftButton = document.querySelector('.swiper-button-prev');
  const rightButton = document.querySelector('.swiper-button-next');

  let currentIndex = 0;

  leftButton.addEventListener('click', () => {
    if (swiper.allowSlidePrev) { // Проверка разрешения на переключение
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = 3;
      }
      particles.morph(currentIndex);
    }
  });

  rightButton.addEventListener('click', () => {
    if (swiper.allowSlideNext) { // Проверка разрешения на переключение
      if (currentIndex < 3) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      particles.morph(currentIndex);
    }
  });
});










let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (event) => {
  const mouseX = (event.clientX / window.innerWidth) - 0.5;
  const mouseY = (event.clientY / window.innerHeight) - 0.5;

  targetX = mouseX * Math.PI * 0.05;
  targetY = mouseY * Math.PI * 0.05;
});


/**
 * Animate
 */
const tick = () => {

  if (particles && particles.points) {
    particles.points.rotation.y += (targetX - particles.points.rotation.y) * 0.05;
    particles.points.rotation.x += (targetY - particles.points.rotation.x) * 0.05;
  }

  // Update controls
  // controls.update()

  // Render normal scene
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()