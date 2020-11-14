import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Landscape from "./bg.png"
import Sky from "./sky.png"
import Floor from "./floor.png"

const worldScene = (scene, camera, renderer) => {

    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load(Landscape);
    let texture_bk = new THREE.TextureLoader().load(Landscape);
    let texture_up = new THREE.TextureLoader().load(Sky);
    let texture_dn = new THREE.TextureLoader().load(Floor);
    let texture_rt = new THREE.TextureLoader().load(Landscape);
    let texture_lf = new THREE.TextureLoader().load(Landscape);

    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_ft }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_bk }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_up }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_dn }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_rt }));
    materialArray.push(new THREE.MeshLambertMaterial({ map: texture_lf }));

    for (let i = 0; i < 6; i++) {
      materialArray[i].side = THREE.DoubleSide;
    }

    let skyboxGeo = new THREE.BoxGeometry(4000, 2000, 4000);
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
    skybox.position.set(0, 1000, 0);

}
export default worldScene;