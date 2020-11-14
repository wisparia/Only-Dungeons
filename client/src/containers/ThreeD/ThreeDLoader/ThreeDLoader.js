import * as THREE from "three";
import Calle from  "./teamBox/Calle.png"
import Canales from "./teamBox/Canales.png"
import Fleming from "./teamBox/Fleming.png"
import OnlyDungeonIcon from "./teamBox/OnlyDungeonsIcon.png"
import Sully from "./teamBox/Sully.png"
import Walker from "./teamBox/Walker.png"

const ThreeDLoader = (scene, camera, renderer, locX, locY, locZ) => {
    
    const createLoadingBox = (locX, locY, locZ) => {

        let materialArray = []

        let texture_ft = new THREE.TextureLoader().load(OnlyDungeonIcon);
        let texture_bk = new THREE.TextureLoader().load(Calle);
        let texture_up = new THREE.TextureLoader().load(Fleming);
        let texture_dn = new THREE.TextureLoader().load(Sully);
        let texture_rt = new THREE.TextureLoader().load(Canales);
        let texture_lf = new THREE.TextureLoader().load(Walker);
    
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));
    
        for (let i = 0; i < 6; i++) {
          materialArray[i].side = THREE.DoubleSide;
        }
    
        let skyboxGeo = new THREE.BoxGeometry(100, 60, 100);
        let skybox = new THREE.Mesh(skyboxGeo, materialArray);
        scene.add(skybox);
        skybox.position.set(locX, (locY), locZ);
    }



};

export default ThreeDLoader;