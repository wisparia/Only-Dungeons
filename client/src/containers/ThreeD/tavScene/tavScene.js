
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import TavWall from "./TavernWall.png"
import TavFloor from "./TavernFloor.png"

const  tavScene = (scene, camera, renderer, locX, locY, locZ) => {
    
        // camera.position.set(-100, 100, 0);

        let materialArray = [];
        let texture_ft = new THREE.TextureLoader().load(TavWall);
        let texture_bk = new THREE.TextureLoader().load(TavWall);
        let texture_up = new THREE.TextureLoader().load(TavFloor);
        let texture_dn = new THREE.TextureLoader().load(TavFloor);
        let texture_rt = new THREE.TextureLoader().load(TavWall);
        let texture_lf = new THREE.TextureLoader().load(TavWall);
    
        materialArray.push(new THREE.MeshLambertMaterial({ map: texture_ft }));
        materialArray.push(new THREE.MeshLambertMaterial({ map: texture_bk }));
        materialArray.push(new THREE.MeshLambertMaterial({ map: texture_up }));
        materialArray.push(new THREE.MeshLambertMaterial({ map: texture_dn }));
        materialArray.push(new THREE.MeshLambertMaterial({ map: texture_rt }));
        materialArray.push(new THREE.MeshLambertMaterial({ map: texture_lf }));
    
        for (let i = 0; i < 6; i++) {
          materialArray[i].side = THREE.DoubleSide;
        }
    
        let skyboxGeo = new THREE.BoxGeometry(250, 80, 200);
        let skybox = new THREE.Mesh(skyboxGeo, materialArray);
        scene.add(skybox);
        skybox.position.set(locX, locY, locZ);

        const createTable = (ShX, ShY, ShZ, x, y, z) => {
          const geometry = new THREE.BoxGeometry((ShX/4), (ShY/4), (ShZ/4));
          const material = new THREE.MeshLambertMaterial({ color: 0x191107 });
          const table = new THREE.Mesh(geometry, material);
          scene.add(table);
          table.position.set((x/4), (y/4), (z/4));
        };

        const createStool = (x, y, z) => {
          const geometry = new THREE.CylinderGeometry(5, 2.5, (25/4), 8);
          const material = new THREE.MeshDepthMaterial({ color: 0x191107 });
          const cylinder = new THREE.Mesh(geometry, material);
          scene.add(cylinder);
          cylinder.position.set((x/4), (y/4), (z/4));
        };

        // x = 0, +50, -50 // y = y-10 // z = z+10, z+100 z-100

        const stools = (x, y, z) => {
          createStool(x, y - 70, z + 10);
          createStool(x + 50, y - 70, z + 10);
          createStool(x - 50, y - 70, z + 10);
          createStool(x, y - 70, z - 100);
          createStool(x + 50, y - 70, z - 100);
          createStool(x - 50, y - 70, z - 100);
        };

        // middle table
        createTable(150, 40, 40, 0,-70, -50);
        stools(0, 0, 0);

        createTable(150, 40, 40, 300, -70, -50);
        stools(300, 0, 0);

        createTable(150, 40, 40, -300, -70, -50);
        stools(-300, 0, 0);

        createTable(150, 40, 40, -300, -70, 200);
        stools(-300, 0, 250);

        createTable(150, 40, 40, 0, -70, -300);
        stools(0, 0, -250);

        createTable(150, 40, 40, 300, -70, -300);
        stools(300, 0, -250);

        createTable(150, 40, 40, -300, -70, -300);
        stools(-300, 0, -250);

        createTable(150, 40, 40, 0, -70, 200);
        stools(0, 0, 250);

        // bar scene
        createTable(40, 40, 300, 200, -70, 250);
        createTable(300, 40, 40, 350, -70, 120);

        // supports
        createTable(20, 200, 20, 480, 10, 0)
        createTable(20, 200, 20, -480, 10, 0)
        createTable(20, 200, 20, 480, 10, -200)
        createTable(20, 200, 20, -480, 10, -200)
        createTable(20, 200, 20, -480, 10, 200)
        createTable(20, 200, 20, 480, 10, 200)

        
      const torchLight = (x, y, z) => {
        const light = new THREE.PointLight(0xFFFFFF, .65, 0, .55);
        light.castShadow = true;
        light.position.set(x,y,z)
        scene.add(light)
      }

      torchLight(100, 10, 20)
      torchLight(-100, 100, 20)
      torchLight(0, 200, 20)
    
    

}

export default tavScene;







