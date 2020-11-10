import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import THREEx from "threex-domevents"
import React, { useEffect, useState } from "react";

import "./ThreeD.css";

const ThreeD = () => {
  useEffect(() => {
    dimensions();
  }, []);

  function dimensions() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // scene.background = new THREE.Color("rgb(148,0,211)");
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#e5e5e5")
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // this is updating the of the scene ever time
    window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        // every time an adjustment is made on the camera this must be called
        camera.updateProjectionMatrix()
    })

    // tracking mouse movement & click events
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2()

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x9400D3 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const geometry1 = new THREE.SphereGeometry(1,5,20);
    const material1 = new THREE.MeshLambertMaterial({ color: 0x00FF00}) 
    const mesh = new THREE.Mesh(geometry1, material1)
    const mesh1 = new THREE.Mesh(geometry1, material)
    scene.add(mesh)
    scene.add(mesh1)
    // position is based on XYZ
    mesh.position.set(1,2,2.5)
    mesh1.position.set(5,0,-4)
    // can you .rotation.set() & scale.set()
    camera.position.z = 0;

   let controls = new OrbitControls(camera, renderer.domElement)
   controls.minDistance = 1;
   controls.maxDistance = 1000;


    const light = new THREE.PointLight(0xFFFFFF, 1, 500)
    light.position.set(10,0,25)
    scene.add(light)

    function onMouseMove(event) {
        event.preventDefault()
        mouse.x = ( event.clientX / window.innerWidth) * 2 -1;
        mouse.y = - ( event.clientY / window.innerHeight) * 2 -1;

        raycaster.setFromCamera(mouse, camera)

        var intersects = raycaster.intersectObjects(scene.children, true);
        for ( var i = 0; i < intersects.length; i++ )   {
            intersects[i].object.material.color.set(0xff0000)
        }
    }

    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.05;
      mesh.rotation.y += 0.05;
      
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("click", onMouseMove)

  }
  return (
      <>
      </>
  )
};

export default ThreeD;
