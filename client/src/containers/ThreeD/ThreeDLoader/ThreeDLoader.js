import * as THREE from "three";
import Calle from  "./teamBox/Calle.png"
import Canales from "./teamBox/Canales.png"
import Fleming from "./teamBox/Fleming.png"
import OnlyDungeonIcon from "./teamBox/OnlyDungeonsIcon.png"
import Sully from "./teamBox/Sully.png"
import Walker from "./teamBox/Walker.png"

import Corona_bk from "./loadBox/Corona_bk"
import Corona_ft from "./loadBox/Corona_ft"
import Corona_rt from "./loadBox/Corona_rt"
import Corona_lf from "./loadBox/Corona_lf"
import Corona_up from "./loadBox/Corona_up"
import Corona_dn from "./loadBox/Corona_dn"


const ThreeDLoader = (scene, camera, renderer, locX, locY, locZ) => {
    
    const createLoadBox = (locX, locY, locZ) => {
        let materialArray = []
        let texture_ft = new THREE.TextureLoader().load(corona_ft)
        let texture_bk = new THREE.TextureLoader().load(corona_bk)
        let texture_up = new THREE.TextureLoader().load(corona_up)
        let texture_dn = new THREE.TextureLoader().load(corona_dn)
        let texture_rt = new THREE.TextureLoader().load(corona_rt)
        let texture_lf = new THREE.TextureLoader().load(corona_lf)
    
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))
    
        for(let i=0; i < 6; i++)  {
          materialArray[i].side = THREE.DoubleSide;
        }
    
        let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000)
        let skybox = new THREE.Mesh(skyboxGeo, materialArray)
        scene.add(skybox);
    
        const geometry1 = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const material1 = new THREE.MeshNormalMaterial({ wireframe: true });
        const mesh1 = new THREE.Mesh(geometry1, material1);
        scene.add(mesh1);
    
        const geometry2 = new THREE.SphereGeometry(4, 4, 4);
        const material2 = new THREE.MeshNormalMaterial({ wireframe: true });
        const sphere2 = new THREE.Mesh(geometry2, material2);
        scene.add(sphere2);
    }

    // const createTeamBox = (locX, locY, locZ) => {
    //     let materialArray = []

    //     let texture_ft = new THREE.TextureLoader().load(OnlyDungeonIcon);
    //     let texture_bk = new THREE.TextureLoader().load(Calle);
    //     let texture_up = new THREE.TextureLoader().load(Fleming);
    //     let texture_dn = new THREE.TextureLoader().load(Sully);
    //     let texture_rt = new THREE.TextureLoader().load(Canales);
    //     let texture_lf = new THREE.TextureLoader().load(Walker);
    
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));
    
    //     for (let i = 0; i < 6; i++) {
    //       materialArray[i].side = THREE.DoubleSide;
    //     }
    
    //     let skyboxGeo = new THREE.BoxGeometry(100, 60, 100);
    //     let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    //     scene.add(skybox);
    //     skybox.position.set(locX, (locY), locZ);
    // }

    // createTeamBox(locX, locY, locZ);
    createLoadBox(locX, locY, locZ);

};

export default ThreeDLoader;