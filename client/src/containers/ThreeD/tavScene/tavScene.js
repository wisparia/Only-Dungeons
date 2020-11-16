import * as THREE from "three";
import TavFloor from "./TavernFloor.png"
import Stone1 from "./Stone1.png"
import Stone2 from "./Stone2.png"
import Stone4 from "./Stone4.png"
import DwellCeil from "./DwellCeil.png"
import DwellWall from "./DwellWall.png"

const  tavScene = (scene, camera, renderer, locX, locY, locZ) => {
        
        let tavernWallType = [Stone1, Stone2, Stone4, DwellCeil, DwellWall];
        let tavernWall = tavernWallType[(Math.floor(Math.random()*2))]
        let furnitureAccent = tavernWallType[(Math.floor(Math.random()*5))]
        let furnitureAccent1 = tavernWallType[(Math.floor(Math.random()*5))]

        let materialArray = [];
        let texture_ft = new THREE.TextureLoader().load(tavernWall);
        let texture_bk = new THREE.TextureLoader().load(tavernWall);
        let texture_up = new THREE.TextureLoader().load(Stone4);
        let texture_dn = new THREE.TextureLoader().load(TavFloor);
        let texture_rt = new THREE.TextureLoader().load(tavernWall);
        let texture_lf = new THREE.TextureLoader().load(tavernWall);
        let texture = new THREE.TextureLoader().load(furnitureAccent);
        let texture1 = new THREE.TextureLoader().load(furnitureAccent1);
    
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));
    
        for (let i = 0; i < 6; i++) {
          materialArray[i].side = THREE.DoubleSide;
        }
    
        let skyboxGeo = new THREE.BoxGeometry(250, 80, 200);
        let skybox = new THREE.Mesh(skyboxGeo, materialArray);
        scene.add(skybox);
        skybox.position.set(locX, (locY + 40), locZ);

        const createTable = (ShX, ShY, ShZ, locX, locY, locZ) => {
          const geometry = new THREE.BoxGeometry((ShX/4), (ShY/4), (ShZ/4));
          const material = new THREE.MeshBasicMaterial({ map: texture });
          const table = new THREE.Mesh(geometry, material);
          scene.add(table);
          table.position.set((locX), (locY/4), (locZ));
        };

        const createStool = (locX, locY, locZ) => {
          const geometry = new THREE.CylinderGeometry(5, 2.5, (25/4), 8);
          const material = new THREE.MeshBasicMaterial({ map: texture1 });
          const cylinder = new THREE.Mesh(geometry, material);
          scene.add(cylinder);
          cylinder.position.set((locX), (locY), (locZ));
        };

        // x = 0, +50, -50 // y = y-10 // z = z+10, z+100 z-100

      const stools = (locX, locY, locZ) => {
      createStool((locX), locY + 3.8, locZ + 2.5);
      createStool((locX + 16), locY + 3.8, locZ + 2.5);
      createStool((locX - 16), locY + 3.8, locZ + 2.5);
      createStool(locX, locY + 3.8, locZ - 25);
      createStool((locX + 16), locY + 3.8, locZ - 25);
      createStool((locX - 16), locY + 3.8, locZ - 25);
    };

      // middle table
      createTable(150, 40, 40, locX, (locY+16), (locZ-50/4));
      stools(locX, locY, locZ);

      createTable(150, 40, 40, (locX + 300/4), (locY+16), (locZ-50/4));
      stools((locX + 300/4), (locY), locZ);

      createTable(150, 40, 40, (locX - 300/4), (locY+16), (locZ-50/4));
      stools((locX-300/4), locY, locZ);

      createTable(150, 40, 40, (locX-300/4), (locY+16), (locZ + 200/4));
      stools((locX-300/4), locY, (locZ + 250/4));

      createTable(150, 40, 40, (locX), (locY+16), (locZ-300/4));
      stools(locX, locY, (locZ - 250/4));

      createTable(150, 40, 40, (locX + 300/4), (locY+16), (locZ-300/4));
      stools((locX + 300/4), locY, (locZ-250/4));

      createTable(150, 40, 40, (locX-300/4), (locY+16),(locZ -300/4));
      stools((locX-300/4), locY, (locZ - 250/4));

      createTable(150, 40, 40, locX, (locY+16), (locZ + 200/4));
      stools(locX, locY, (locZ + 250/4));

      // // bar scene
      createTable(40, 40, 300, (locX+188/4), (locY + 30), (locZ +250/4));
      createTable(300, 40, 40, (locX + 350/4), (locY + 30), (locZ + 120/4));

      // // supports
      createTable(20, 200, 20, (locX + 480/4), locY + 100, locZ + 0/4)
      createTable(20, 200, 20, (locX - 480/4), locY + 100, locZ +0/4)
      createTable(20, 200, 20, (locX + 480/4), locY + 100, locZ - 200/4)
      createTable(20, 200, 20, (locX - 480/4), locY + 100, locZ - 200/4)
      createTable(20, 200, 20, (locX - 480/4), locY + 100, locZ + 200/4)
      createTable(20, 200, 20, (locX + 480/4), locY + 100, locZ + 200/4)
    

        
      const torchLight = (x, y, z) => {
      const light = new THREE.PointLight(0xFFFFFF, .95, 0, 0);
      light.position.set(x,y,z)
      scene.add(light)
      }

      torchLight((locX+100), (locY+10), (locZ+20))
      torchLight((locX-100), (locY+100), (locZ+20))    

}

export default tavScene;







