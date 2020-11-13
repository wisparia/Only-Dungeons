import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useEffect, useState } from "react";

import tavScene from "./tavScene/tavScene"

import "./ThreeD.css";
import worldScene from "./worldScene/worldScene";

const ThreeD = () => {
  useEffect(() => {
    dimensions();
  }, []);

  
function dimensions() {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor("#e5e5e5");
  renderer.setSize(window.innerWidth, window.innerHeight);
  const container = document.getElementById("myCanvas")
  container.appendChild(renderer.domElement);

  // this is updating the of the scene ever time
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    // every time an adjustment is made on the camera this must be called
    camera.updateProjectionMatrix();
  });

  const createStool = (x, y, z) => {
    const geometry = new THREE.CylinderGeometry(20, 10, 25, 32);
    const material = new THREE.MeshDepthMaterial({ color: 0x191107 });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);
    cylinder.position.set(x, y, z);
  };

  // x = 0, +50, -50 // y = y-10 // z = z+10, z+100 z-100
  camera.position.set(-100, 100, 0);
  

  let controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 1;
  controls.maxDistance = 10000;

  const torchLight = (x, y, z) => {
    const light = new THREE.AmbientLight(0x404040);
    // light.castShadow = true;
    // light.position.set(x,y,z)
    scene.add(light)
  }

  torchLight(0, 100, 100)



  // tracking mouse movement & click events
  // const raycaster = new THREE.Raycaster();
  // const mouse = new THREE.Vector2()

  // function onMouseMove(event) {
  //     event.preventDefault()
  //     mouse.x = ( event.clientX / window.innerWidth) * 2 -1;
  //     mouse.y = - ( event.clientY / window.innerHeight) * 2 -1;

  //     raycaster.setFromCamera(mouse, camera)

  //     var intersects = raycaster.intersectObjects(scene.children, true);
  //     for ( var i = 0; i < intersects.length; i++ )   {
  //         intersects[i].object.material.color.set(0xff0000)
  //     }
  // }

  tavScene(scene, camera, renderer, 0, 20, 0);
  tavScene(scene, camera, renderer, 400, 20, 0);
  worldScene(scene, camera, renderer);

  function animate() {
    requestAnimationFrame(animate);
    // mesh.rotation.x += 0.05;
    // mesh.rotation.y += 0.05;

    renderer.render(scene, camera);
  }
  animate();

  // window.addEventListener("click", onMouseMove)


}











  return (
  <>
  <div id="myCanvas">  </div>
  <div id="info">
    <iframe   src="https://titanembeds.com/embed/776249613778026577?css=183&username=Explorer" height="200" width="100%" frameborder="0" className="chatBorder"></iframe>
  </div>
  </>
  )
};

export default ThreeD;
