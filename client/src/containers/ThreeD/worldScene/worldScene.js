import * as THREE from "three";
import Landscape from "./bg.png"
import SkyUp from "./SkyUp.png"
import Floor from "./floor.png"


const worldScene = (scene, camera, renderer) => {

    let skyboxGeo = new THREE.CylinderGeometry(2800, 2500, 5, 10);
    let ground  = new THREE.TextureLoader().load(Floor);
    let material = new THREE.MeshBasicMaterial({ map: ground });
    material.side = THREE.DoubleSide
    const groundArea = new THREE.Mesh(skyboxGeo, material)
    scene.add(groundArea);
    groundArea.position.set(0, -1, 0);

    const geometry2 = new THREE.SphereGeometry(2500, 100, 100);
    const texture = new THREE.TextureLoader().load(SkyUp);
    const material2 = new THREE.MeshBasicMaterial({ map: texture });
    material2.side = THREE.DoubleSide
    const sphere2 = new THREE.Mesh(geometry2, material2);
    sphere2.name = "sphere2"
    scene.add(sphere2);

    sphere2.position.set(0, -500, 0)


}
export default worldScene;