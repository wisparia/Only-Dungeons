import * as THREE from "three";
import Calle from  "./teamBox/Calle.png"
import Canales from "./teamBox/Canales.png"
import Fleming from "./teamBox/Fleming.png"
import OnlyDungeonIcon from "./teamBox/OnlyDungeonsIcon.png"
import Sully from "./teamBox/Sully.png"
import Walker from "./teamBox/Walker.png"

import Corona_bk from "./loadBox/corona_bk.png"
import Corona_ft from "./loadBox/corona_ft.png"
import Corona_rt from "./loadBox/corona_rt.png"
import Corona_lf from "./loadBox/corona_lf.png"
import Corona_up from "./loadBox/corona_up.png"
import Corona_dn from "./loadBox/corona_dn.png"


const threeDLoader = (scene, camera, renderer, locX, locY, locZ) => {
    
    const createLoadBox = (locX, locY, locZ) => {
     
        const mainLoadBox = () => {
        let materialArray = []
   
        let texture_ft = new THREE.TextureLoader().load(Corona_ft)
        let texture_bk = new THREE.TextureLoader().load(Corona_bk)
        let texture_up = new THREE.TextureLoader().load(Corona_up)
        let texture_dn = new THREE.TextureLoader().load(Corona_dn)
        let texture_rt = new THREE.TextureLoader().load(Corona_rt)
        let texture_lf = new THREE.TextureLoader().load(Corona_lf)

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
    }

    const logoLoadBox = () => {
        let materialArray = []
   
        let texture_ft = new THREE.TextureLoader().load(Canales)
        let texture_bk = new THREE.TextureLoader().load(Calle)
        let texture_up = new THREE.TextureLoader().load(Fleming)
        let texture_dn = new THREE.TextureLoader().load(OnlyDungeonIcon)
        let texture_rt = new THREE.TextureLoader().load(Sully)
        let texture_lf = new THREE.TextureLoader().load(Walker)

        materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))
    
        for(let i=0; i < 6; i++)  {
          materialArray[i].side = THREE.DoubleSide;
        }
    
        let skyboxGeo = new THREE.BoxGeometry(10, 10, 10)
        let skybox = new THREE.Mesh(skyboxGeo, materialArray)
        scene.add(skybox);

        const animate = () => {
            requestAnimationFrame(animate)
            skybox.rotation.x += .015
            skybox.rotation.y += .02
    
            renderer.render(scene, camera);
          }
          animate()
    };

    setTimeout(function() {
            mainLoadBox();
    logoLoadBox()
    }, 0)

    
        // const geometry1 = new THREE.BoxGeometry(10, 10, 10);
        // const material1 = new THREE.MeshNormalMaterial({ wireframe: true });
        // const mesh1 = new THREE.Mesh(geometry1, material1);
        // scene.add(mesh1);
    
        const geometry2 = new THREE.SphereGeometry(20, 20, 20,);
        const material2 = new THREE.MeshNormalMaterial({ wireframe: true });
        const sphere2 = new THREE.Mesh(geometry2, material2);
        sphere2.name = "sphere2"
        scene.add(sphere2);

       

        const animate = () => {
            requestAnimationFrame(animate)
            sphere2.rotation.x -= .002
            sphere2.rotation.y -= .002
            
            renderer.render(scene, camera);
          }
          animate()
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

export default threeDLoader;