
import * as THREE from "three";
import Stone5 from "./Stone5.png"
import Stone2 from "./Stone2.png"
import Stone4 from "./Stone4.png"
import Tree1 from "./Tree1.png"
import Tree3 from "./Tree3.png"

const mountScene = (scene, camera, renderer, locX, locY, locZ) => {
   
   const createMountain = (locX, locY, locZ) =>     { 
    let stoneTypes = [ Tree1, Tree3, Stone4, Stone5, Stone2 ]
    let stoneOuter = stoneTypes[(Math.floor(Math.random()*5))]
    let shaH = (Math.floor(Math.random()*200)+100)

    const geometry = new THREE.SphereGeometry(shaH, 7, 4,);
    const texture = new THREE.TextureLoader().load(stoneOuter);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    sphere.position.set(locX, locY, locZ)
    }

    createMountain(locX, locY, locZ)
    createMountain(locX+100, locY, (locZ+750))
    createMountain(locX+450, locY, (locZ+150))
    createMountain(locX+250, locY, (locZ+650))
    createMountain(locX+300, locY, (locZ+450))
    createMountain(locX+550, locY, (locZ+350))
    createMountain(locX+700, locY, (locZ+300))
    createMountain(locX+800, locY, locZ)

    createMountain(locX-125, locY, (locZ-200))
    createMountain(locX-175, locY, (locZ-300))
    createMountain(locX-250, locY, (locZ-150))
    createMountain(locX-325, locY, (locZ-500))
    createMountain(locX-350, locY, (locZ-300))
    createMountain(locX+800, locY, (locZ+450))
    






    

};

export default mountScene;