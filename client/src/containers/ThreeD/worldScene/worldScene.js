import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Landscape from "./bg.png"
import Sky from "./sky.png"
import SkyUp from "./SkyUp.png"
import SkyDown from "./SkyDown.png"
import SkyLeft from "./SkyLeft.png"
import SkyRight from "./SkyRight.png"
import SkyFront from "./SkyFront.png"
import SkyBack from "./SkyBack.png"
import Floor from "./floor.png"


const worldScene = (scene, camera, renderer) => {

    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load(SkyFront);
    let texture_bk = new THREE.TextureLoader().load(SkyBack);
    let texture_up = new THREE.TextureLoader().load(SkyUp);
    let texture_dn = new THREE.TextureLoader().load(Floor);
    let texture_rt = new THREE.TextureLoader().load(SkyRight);
    let texture_lf = new THREE.TextureLoader().load(SkyLeft);

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