import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useEffect, useState } from "react";
import Door from "./Door.png";
import Floor from "./tilebg.png";
import Ceiling from "./Ceiling.png";
import Wall from "./Wall.png";
import TavWall from "./TavernWall.png";
import TavFloor from "./TavernFloor.png";
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
      1000
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

    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load(TavWall);
    let texture_bk = new THREE.TextureLoader().load(TavWall);
    let texture_up = new THREE.TextureLoader().load(Floor);
    let texture_dn = new THREE.TextureLoader().load(TavFloor);
    let texture_rt = new THREE.TextureLoader().load(TavWall);
    let texture_lf = new THREE.TextureLoader().load(TavWall);

    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_ft }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_bk }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_up }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_dn }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_rt }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_lf }));

    for (let i = 0; i < 6; i++) {
      materialArray[i].side = THREE.DoubleSide;
    }

    let skyboxGeo = new THREE.BoxGeometry(1000, 200, 800);
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
    skybox.position.set(0, 80, 0);

    const createTable = (ShX, ShY, ShZ, x, y, z) => {
      const geometry = new THREE.BoxGeometry(ShX, ShY, ShZ);
      const material = new THREE.MeshLambertMaterial({ color: 0x191107 });
      const table = new THREE.Mesh(geometry, material);
      scene.add(table);
      table.position.set(x, y, z);
    };

    const createStool = (x, y, z) => {
      const geometry = new THREE.CylinderGeometry(20, 10, 25, 32);
      const material = new THREE.MeshDepthMaterial({ color: 0x191107 });
      const cylinder = new THREE.Mesh(geometry, material);
      scene.add(cylinder);
      cylinder.position.set(x, y, z);
    };

    // x = 0, +50, -50 // y = y-10 // z = z+10, z+100 z-100

    const stools = (x, y, z) => {
      createStool(x, y - 10, z + 10);
      createStool(x + 50, y - 10, z + 10);
      createStool(x - 50, y - 10, z + 10);
      createStool(x, y - 10, z - 100);
      createStool(x + 50, y - 10, z - 100);
      createStool(x - 50, y - 10, z - 100);
    };

    // middle table
    createTable(150, 40, 40, 0, 0, -50);
    stools(0, 0, 0);

    createTable(150, 40, 40, 300, 0, -50);
    stools(300, 0, 0);

    createTable(150, 40, 40, -300, 0, -50);
    stools(-300, 0, 0);

    createTable(150, 40, 40, -300, 0, 200);
    stools(-300, 0, 250);

    createTable(150, 40, 40, 0, 0, -300);
    stools(0, 0, -250);

    createTable(150, 40, 40, 300, 0, -300);
    stools(300, 0, -250);

    createTable(150, 40, 40, -300, 0, -300);
    stools(-300, 0, -250);

    createTable(150, 40, 40, 0, 0, 200);
    stools(0, 0, 250);

  // bar scene
  createTable(40, 40, 300, 200, 0, 250);
  createTable(300, 40, 40, 350, 0, 120);

   // supports
   createTable(20, 200, 20, 480, 80, 0)
   createTable(20, 200, 20, -480, 80, 0)
   createTable(20, 200, 20, 480, 80, -200)
   createTable(20, 200, 20, -480, 80, -200)
   createTable(20, 200, 20, -480, 80, 200)
   createTable(20, 200, 20, 480, 80, 200)

    // (1000, 200, 800);

    camera.position.set(-100, 100, 0);
    

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 1000;

    const torchLight = (x, y, z) => {
      const light = new THREE.PointLight(0xFFFFFF, .65, 0, .55);
      light.castShadow = true;
      light.position.set(x,y,z)
      scene.add(light)
    }

    torchLight(100, 10, 20)
    torchLight(-100, 100, 20)
    torchLight(0, 200, 20)
    // torchLight(0, 0, 200)
    // torchLight(0, 0, -200)

    // const light = new THREE.PointLight(0xffffff);
    // light.position.set(10, -100, 20);
    // scene.add(light);

    // const light2 = new THREE.PointLight(0xffffff, 1, 500);
    // light2.position.set(10, 100, 20);
    // scene.add(light2);

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
  <div id="info"> your journey starts here </div>
  <canvas id="myCanvas">  </canvas>
  </>
  )
};

export default ThreeD;
