import * as THREE from "three";
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

    // let materialArray = [];
    // let texture_ft = new THREE.TextureLoader().load(SkyFront);
    // let texture_bk = new THREE.TextureLoader().load(SkyBack);
    // let texture_up = new THREE.TextureLoader().load(Floor);
    // let texture_dn = new THREE.TextureLoader().load(Floor);
    // let texture_rt = new THREE.TextureLoader().load(SkyRight);
    // let texture_lf = new THREE.TextureLoader().load(SkyLeft);

    // materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
    // materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
    // materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
    // materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
    // materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
    // materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

    // for (let i = 0; i < 6; i++) {
    //   materialArray[i].side = THREE.DoubleSide;
    // }

    let skyboxGeo = new THREE.CylinderGeometry(2800, 2500, 10, 10);
    let ground  = new THREE.TextureLoader().load(Floor);
    let material = new THREE.MeshBasicMaterial({ map: ground });
    material.side = THREE.DoubleSide
    const skybox = new THREE.Mesh(skyboxGeo, material)
    scene.add(skybox);
    skybox.position.set(0, 0, 0);

    const geometry2 = new THREE.SphereGeometry(2500, 100, 100);
    const texture = new THREE.TextureLoader().load(SkyFront);
    const material2 = new THREE.MeshBasicMaterial({ map: texture });
    material2.side = THREE.DoubleSide
    const sphere2 = new THREE.Mesh(geometry2, material2);
    sphere2.name = "sphere2"
    scene.add(sphere2);

    sphere2.position.set(0, -500, 0)


    setTimeout(function(){    
      let fogColor = new THREE.Color(0xa9a9a9  );
      scene.background = fogColor;
      scene.fog = new THREE.Fog(fogColor, 0.005, 3000)}, 55000)
}
export default worldScene;