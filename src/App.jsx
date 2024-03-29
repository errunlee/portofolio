import { useEffect, useState } from 'react'
import './App.css'
import * as THREE from "three";
import bg from './assets/texture/galaxy.png'
import dp from './assets/jeff.png'
import water from './assets/water.avif'
import Main from './components/Main';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function App() {
  useEffect(() => {

    // Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg")

    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(40);
    camera.position.setX(-3);

    renderer.render(scene, camera);

    // Torus
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x524947 });
    const torus = new THREE.Line(geometry, material);
    scene.add(torus);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);




    // Avatar
    const jeffTexture = new THREE.TextureLoader().load(dp);

    const jeff = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshBasicMaterial({ map: jeffTexture, side: THREE.DoubleSide })
    );

    scene.add(jeff);


    const moon = new THREE.Line(
      new THREE.BoxGeometry(4, 4, 4),
      new THREE.MeshNormalMaterial()
    );


    scene.add(moon);

    moon.position.z = 30;
    moon.position.setX(-10);

    jeff.position.z = -5;
    jeff.position.x = 2;

    // Scroll Animation
    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      moon.rotation.x += 0.01;
      moon.rotation.y += 0.01;
      moon.rotation.z += 0.01;

      jeff.rotation.y += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    const stargeometry = new THREE.SphereGeometry(100, 64, 64);

    const starmaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(bg),
      side: THREE.BackSide,
    });

    const starmesh = new THREE.Mesh(stargeometry, starmaterial);

    scene.add(starmesh);


    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      moon.rotation.x += 0.005;

      jeff.rotation.y += 0.006;
      // jeff.rotation.z += 0.006;
      // jeff.rotation.x += 0.006;

      starmesh.rotation.y += 0.0005;
      // controls.update();

      renderer.render(scene, camera);
    }

    animate();
  }, [])

  return (
    <>
      <Main />
    </>
  )
}

export default App
