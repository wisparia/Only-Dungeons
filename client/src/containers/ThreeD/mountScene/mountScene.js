
import * as THREE from "three";
import Stone5 from "./Stone5.png"

const mountScene = (scene, camera, renderer, locX, locY, locZ) => {
   
    const geometry2 = new THREE.SphereGeometry(500, 4, 7,);
    const texture = Stone5
    const material2 = new THREE.MeshNormalMaterial({ map: texture });
    const sphere2 = new THREE.Mesh(geometry2, material2);
    sphere2.name = "sphere2"
    scene.add(sphere2);

    sphere2.position.set(locX, locY, locZ)
};

export default mountScene;