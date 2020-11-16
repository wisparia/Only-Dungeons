import * as THREE from "three";
import Stone4 from "./Stone4.png"
import dmImage from "./dmImage.png"

const dungeonScene = (scene, camera, renderer, locX, locY, locZ) => {

    let stoneType = [Stone4]
    let stoneWall = stoneType[(Math.floor(Math.random()*1))]
    let texture = new THREE.TextureLoader().load(stoneWall)

    const createFortress = (locX, locY, locZ) => {
    const geometry = new THREE.BoxGeometry((600), (250), (600));
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const fortress = new THREE.Mesh(geometry, material);
    scene.add(fortress);
    fortress.position.set((locX), (locY+ 250/2), (locZ));
      };

    const tower = (locX, locY, locZ) => {
    const geometry = new THREE.BoxGeometry((150), (350), (150));
    const material = new THREE.MeshBasicMaterial({ map: texture });
    
    const fortress = new THREE.Mesh(geometry, material);
    scene.add(fortress);
    fortress.position.set((locX), (locY+ 350/2), (locZ));
      };

    const centralTower = (locX, locY, locZ) => {
    const geometry = new THREE.BoxGeometry((175), (450), (175));
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const fortress = new THREE.Mesh(geometry, material);
    scene.add(fortress);
    fortress.position.set((locX), (locY+ 450/2), (locZ));
      };

    const EvilChar = (locX, locY, locZ) => {
    const geometry2 = new THREE.SphereGeometry(60, 8, 6);
    const texture = new THREE.TextureLoader().load(dmImage);
    const material2 = new THREE.MeshBasicMaterial({ map: texture });
    material2.side = THREE.DoubleSide
    const evilEye = new THREE.Mesh(geometry2, material2);
    evilEye.name = "evilEye"

    scene.add(evilEye);
    evilEye.position.set(locX, (locY+600), locZ)       
    
    const animate = () => { 
    requestAnimationFrame(animate)
    evilEye.rotation.y -= .035
    }

    animate()
}

    
    createFortress(locX, locY, locZ)
    tower((locX+300), locY, (locZ+200))
    tower((locX+300), locY, (locZ-200))
    tower((locX-300), locY, (locZ-200))
    tower((locX-300), locY, (locZ+200))
    centralTower(locX, locY, locZ)
    EvilChar(locX, locY, locZ)


};

export default dungeonScene;