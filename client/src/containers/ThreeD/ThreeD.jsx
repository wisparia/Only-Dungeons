import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useEffect, useState } from "react";
import tavScene from "./tavScene/tavScene"
import dwellScene from "./dwellScene/dwellScene"
import forestScene from "./forestScene/forestScene"
import worldScene from "./worldScene/worldScene";
import graveScene from "./graveScene/graveScene";

import "./ThreeD.css";

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
    5000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor("#000000");
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

  // x = 0, +50, -50 // y = y-10 // z = z+10, z+100 z-100
  camera.position.set(-1200, 100, 300);
  

  let controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 1;
  controls.maxDistance = 5000;

  const torchLight = () => {
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light)
  }

 
  torchLight()
  torchLight()
  torchLight()



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

  forestScene(scene, camera, renderer, -50, 0 , 0);
  forestScene(scene, camera, renderer, 50, 0 , 0);
  forestScene(scene, camera, renderer, -100, 0 , -150);
  forestScene(scene, camera, renderer, -150, 0 , -250);
  forestScene(scene, camera, renderer, -150, 0 , -300);
  forestScene(scene, camera, renderer, -200, 0 , 150);
  forestScene(scene, camera, renderer, -250, 0 , 300);
  forestScene(scene, camera, renderer, -300, 0 , -400);
  forestScene(scene, camera, renderer, -400, 0 , -450);
  forestScene(scene, camera, renderer, -350, 0 , -450);
  forestScene(scene, camera, renderer, -450, 0 , -550);
  forestScene(scene, camera, renderer, -450, 0 , 500);
  forestScene(scene, camera, renderer, -450, 0 , -600);
  forestScene(scene, camera, renderer, -450, 0 , 600);

  tavScene(scene, camera, renderer, 1200, 1, 0);
  tavScene(scene, camera, renderer, 800, 1, -1000);
  dwellScene(scene, camera, renderer, 800, 1, -300);
  // dwellScene(scene, camera, renderer, 300, 1, -600);
  // dwellScene(scene, camera, renderer, 600, 1, -500);
  // dwellScene(scene, camera, renderer, 1000, 1, -650);
  
  

  
  
  graveScene(scene, camera, renderer, -1400, 0, 150)
  graveScene(scene, camera, renderer, -1450, 0, 300)
  graveScene(scene, camera, renderer, -1450, 0, 480)

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
  {/* <div id="info">
    <iframe   src="https://titanembeds.com/embed/776249613778026577?css=183&username=Explorer" height="200" width="100%" frameborder="0" className="chatBorder"></iframe>
  </div> */}
  </>
  )
};

export default ThreeD;
