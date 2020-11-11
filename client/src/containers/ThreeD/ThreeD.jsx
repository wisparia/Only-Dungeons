import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React, { useEffect, useState } from "react";
import Door from "./Door.png";
import Floor from "./tilebg.png";
import Ceiling from "./Ceiling.png";
import Wall from "./Wall.png"
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

    let materialArray = []
    let texture_ft = new THREE.TextureLoader().load(Wall)
    let texture_bk = new THREE.TextureLoader().load(Wall)
    let texture_up = new THREE.TextureLoader().load(Floor)
    let texture_dn = new THREE.TextureLoader().load(Floor)
    let texture_rt = new THREE.TextureLoader().load(Wall)
    let texture_lf = new THREE.TextureLoader().load(Wall)

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))

    for(let i=0; i < 6; i++)  {
      materialArray[i].side = THREE.DoubleSide;
    }
    
    let skyboxGeo = new THREE.BoxGeometry(1000, 100, 400)
    let skybox = new THREE.Mesh(skyboxGeo, materialArray)
    scene.add(skybox);
    skybox.position.set(0,25,0)


    const createBar = () => {
    const geometry = new THREE.BoxGeometry(150, 40, 40);
    const material = new THREE.MeshPhongMaterial({ color: 0x191107 });
    const bar = new THREE.Mesh(geometry, material);
    scene.add(bar);
    bar.position.set(0,-10,-50) }
    createBar()

    const createStool = (x,y,z) =>   {
    const geometry = new THREE.CylinderGeometry( 20, 10, 25, 32 );
    const material = new THREE.MeshPhongMaterial( {color: 0x191107} );
    const cylinder = new THREE.Mesh( geometry, material );
    scene.add( cylinder );
    cylinder.position.set(x, y, z) }
    
    createStool(0,-10,10)
    createStool(50,-10,10)
    createStool(-50,-10,10)
    createStool(0,-10,-100)
    createStool(50,-10,-100)
    createStool(-50,-10,-100)

    camera.position.set(40,60,50);
    camera.rotation.set(0,.5,0)

   let controls = new OrbitControls(camera, renderer.domElement)
   controls.minDistance = 1;
   controls.maxDistance = 1000;


    const light = new THREE.AmbientLight(0xFFFFFF)

    scene.add(light)

    const light2 = new THREE.PointLight(0xFFFFFF, 1, 500)
    light2.position.set(10,100,20)
    scene.add(light2)

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
      </>
  )
};

export default ThreeD;
