import * as THREE from "three";
import DwellCeil from "./DwellCeil.png"
import DwellFloor from "./DwellFloor.png"
import DwellWall from "./DwellWall.png"


const dwellScene = (scene, camera, renderer, locX, locY, locZ) => {
    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load(DwellWall);
    let texture_bk = new THREE.TextureLoader().load(DwellWall);
    let texture_up = new THREE.TextureLoader().load(DwellCeil);
    let texture_dn = new THREE.TextureLoader().load(DwellFloor);
    let texture_rt = new THREE.TextureLoader().load(DwellWall);
    let texture_lf = new THREE.TextureLoader().load(DwellWall);

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
    
};

export default dwellScene;