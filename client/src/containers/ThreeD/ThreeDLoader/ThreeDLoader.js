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
     
        const mainLoadBox = (locX, locY, locZ) => {
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
        skybox.position.set(locX, locY, locZ)
    }

        const logoLoadBox = (locX, locY, locZ) => {
        
        let teamArray = [Canales, Calle, Fleming, Sully, Walker ]

        let materialArray = []
   
        let texture_ft = new THREE.TextureLoader().load(Canales)
        let texture_bk = new THREE.TextureLoader().load(Calle)
        let texture_up = new THREE.TextureLoader().load(OnlyDungeonIcon)
        let texture_dn = new THREE.TextureLoader().load(Fleming)
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
    
        let skyboxGeo = new THREE.BoxGeometry(25, 25, 25)
        let skybox = new THREE.Mesh(skyboxGeo, materialArray)
        skybox.position.set(locX, locY, locZ)
        scene.add(skybox);

        let loadingID
        const animate = () => {
          loadingID =
            requestAnimationFrame(animate)
            skybox.rotation.x += .01
            skybox.rotation.y += .01
            skybox.position.y -= .4
            
            
            camera.position.y -= 0.8;
            camera.position.z -= 0.19;
            camera.rotation.x -= 0.0025;
    
          if (camera.rotation.x <= -1.15) {
            camera.rotation.x += 0.0025;
          } else if (camera.rotation.x <= 1.15) {
            camera.rotation.x -= 0.0025;
          }
      
          }
          animate()

          setTimeout(function() {
            cancelAnimationFrame( loadingID )
          },  45000)
    };

        mainLoadBox(locX, locY, locZ);
        logoLoadBox(locX, locY, locZ);
    
        const geometry2 = new THREE.SphereGeometry(60, 5, 5,);
        const material2 = new THREE.MeshNormalMaterial({ wireframe: true });
        const sphere2 = new THREE.Mesh(geometry2, material2);
        sphere2.name = "sphere2"
        scene.add(sphere2);

        sphere2.position.set(locX, locY, locZ)
      
        let loadingID

        const animate = () => {
          
          loadingID =
            requestAnimationFrame(animate)
            sphere2.rotation.x -= .012
            sphere2.rotation.y -= .0125
            sphere2.position.y -= .4
            renderer.render(scene, camera);
          
          }
          animate()
          
        setTimeout(function() {
          cancelAnimationFrame( loadingID )
        },  45000)
          

    }

    createLoadBox(locX, locY, locZ);

};

export default threeDLoader;