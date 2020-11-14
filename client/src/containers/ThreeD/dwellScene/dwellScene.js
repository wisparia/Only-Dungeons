import * as THREE from "three";
import DwellCeil from "./DwellCeil.png"
import DwellFloor from "./DwellFloor.png"
import DwellWall from "./DwellWall.png"
import Stone2 from "./Stone2.png"
import Stone3 from "./Stone3.png"
import Stone4 from "./Stone4.png"
import Stone5 from "./Stone5.png"


const dwellScene = (scene, camera, renderer, locX, locY, locZ) => {

    const createHouse = (locX, locY, locZ) => {
    let houseType = [Stone2, Stone3, Stone3, Stone4, Stone4, DwellFloor, DwellFloor,  DwellWall]
    let houseWall = houseType[(Math.floor(Math.random()*8))]

    let ceilingType = [Stone2, Stone3, Stone3, Stone4, DwellWall, DwellCeil]
    let ceilMat = ceilingType[(Math.floor(Math.random()*6))]

    console.log(houseWall)
    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load(houseWall);
    let texture_bk = new THREE.TextureLoader().load(houseWall);
    let texture_up = new THREE.TextureLoader().load(ceilMat);
    let texture_dn = new THREE.TextureLoader().load(DwellFloor);
    let texture_rt = new THREE.TextureLoader().load(houseWall);
    let texture_lf = new THREE.TextureLoader().load(houseWall);

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
    skybox.position.set(locX, (locY+30), locZ);

    const createTable = (ShX, ShY, ShZ, locX, locY, locZ) => {
      const geometry = new THREE.BoxGeometry((ShX/4), (ShY/4), (ShZ/4));
      const material = new THREE.MeshLambertMaterial({ color: 0x191107 });
      const table = new THREE.Mesh(geometry, material);
      scene.add(table);
      table.position.set((locX), (locY/4), (locZ));
    };

    const createStool = (locX, locY, locZ) => {
      const geometry = new THREE.CylinderGeometry(5, 2.5, (25/4), 8);
      const material = new THREE.MeshDepthMaterial({ color: 0x191107 });
      const cylinder = new THREE.Mesh(geometry, material);
      scene.add(cylinder);
      cylinder.position.set((locX), (locY), (locZ));
    };

    const stools = (locX, locY, locZ) => {
      createStool((locX), locY + 3.8, locZ );
      createStool((locX + 16), locY + 3.8, locZ );
      createStool((locX - 16), locY + 3.8, locZ );
      createStool(locX, locY + 3.8, locZ - 25);
      createStool((locX + 16), locY + 3.8, locZ - 25);
      createStool((locX - 16), locY + 3.8, locZ - 25);
    };

    //table
    createTable(150, 40, 40, locX, (locY+16), (locZ-100/4));
    stools(locX, locY, (locZ-50/4))
    //bed
    createTable(150, 40, 80, locX+25, (locY), (locZ+190/5))
  }

    const createHouseRow1 = (locX, locY, locZ) =>  {
      createHouse(locX, locY, locZ)
      createHouse((locX+150), locY, locZ)
      createHouse((locX-150), locY, locZ)
      createHouse((locX+450), locY, locZ)
      createHouse((locX+300), locY, locZ)
    }

    const createHouseRow2 = (locX, locY, locZ) =>  {
      createHouse(locX, locY, (locZ-250))
      createHouse((locX+150), locY, (locZ-250))
      createHouse((locX-150), locY, (locZ-250))
      createHouse((locX+450), locY, (locZ-250))
      createHouse((locX+300), locY, (locZ-250))
    }

    const createHouseRow3 = (locX, locY, locZ) =>  {
      createHouse(locX, locY, (locZ-500))
      createHouse((locX+150), locY, (locZ-500))
      createHouse((locX-150), locY, (locZ-500))
      createHouse((locX+450), locY, (locZ-500))
      createHouse((locX+300), locY, (locZ-500))
    }

    createHouseRow1(locX, locY, locZ)
    createHouseRow2(locX, locY, locZ)
    createHouseRow3(locX, locY, locZ)

};

export default dwellScene;