
import * as THREE from "three";
import Stone5 from "./Stone5.png"
import Stone4 from "./Stone4.png"
import Tree1 from "./Tree1.png"
import Tree3 from "./Tree3.png"

const mountScene = (scene, camera, renderer, locX, locY, locZ) => {
   
   const createMountain = (locX, locY, locZ) =>     { 
    let stoneTypes = [ Tree1, Tree3, Stone4, Stone5 ]
    let stoneOuter = stoneTypes[(Math.floor(Math.random()*4))]
    let shaH = (Math.floor(Math.random()*200)+100)

    const geometry = new THREE.SphereGeometry(shaH, 7, 4,);
    const texture = new THREE.TextureLoader().load(stoneOuter);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    sphere.position.set(locX, locY, locZ)
    }

    createMountain(locX, locY, locZ)
    createMountain(locX+200, locY, locZ)
    createMountain(locX-700, locY, (locZ-350))
    createMountain(locX-250, locY, (locZ+150))
    createMountain(locX-500, locY, (locZ-300))
    createMountain(locX+300, locY, (locZ-450))
    createMountain(locX-300, locY, (locZ-150))
    createMountain(locX-300, locY, (locZ-650))
    createMountain(locX-300, locY, (locZ-850))
};

export default mountScene;