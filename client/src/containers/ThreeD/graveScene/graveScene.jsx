import * as THREE from "three";
import Stone1 from "./Stone1.png"
import Stone2 from "./Stone2.png"
import Stone3 from "./Stone3.png"
import Stone4 from "./Stone4.png"
import Stone5 from "./Stone5.png"

const graveScene = (scene, camera, renderer, locX, locY, locZ) => {

    const createGrave1 = (locX, locY, locZ) => {
        const geometry = new THREE.BoxGeometry( 8, 20, 5 );
        let texture = new THREE.TextureLoader().load(Stone1)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const graveStone = new THREE.Mesh( geometry, material );
        scene.add(graveStone);
        // graveStone.rotateX(10)
        graveStone.rotateY(180)
        graveStone.position.set(locX, (locY+10), locZ)
    }

    const createGrave2 = (locX, locY, locZ) => {
        const geometry = new THREE.BoxGeometry( 8, 20, 5 );
        let texture = new THREE.TextureLoader().load(Stone2)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const graveStone = new THREE.Mesh( geometry, material );
        scene.add(graveStone);
        // graveStone.rotateX(10)
        graveStone.rotateY(180)
        graveStone.position.set(locX, (locY+10), locZ)
    }

    const createGrave3 = (locX, locY, locZ) => {
        const geometry = new THREE.BoxGeometry( 8, 20, 5 );
        let texture = new THREE.TextureLoader().load(Stone3)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const graveStone = new THREE.Mesh( geometry, material );
        scene.add(graveStone);
        graveStone.rotateX(.1)
        graveStone.rotateY(180)
        graveStone.position.set(locX, (locY+10), locZ)
    }

    const createCrypt = (locX, locY, locZ) =>   {
        const geometry = new THREE.BoxGeometry( 40, 40, 40 );
        let texture = new THREE.TextureLoader().load(Stone4)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const crypt = new THREE.Mesh( geometry, material );
        scene.add(crypt);

        const geometry1 = new THREE.TetrahedronGeometry( 100, 0 );
        const material1 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        const cone = new THREE.Mesh( geometry1, material1 );
        scene.add( cone );


        crypt.position.set(locX, (locY+20), locZ)
        cone.position.set(locX, (locY+40), locZ)
    }

    // createCrypt(locX, locY, locZ)
    const  createRow1 = (locX, locY, locZ) => { 
    createGrave1(locX, locY, locZ)
    createGrave3((locX-20), locY, locZ)
    // createGrave2((locX+20), locY, locZ)
    createGrave2((locX-40), locY, locZ)
    createGrave2((locX+40), locY, locZ)
    createGrave2((locX-60), locY, locZ)
    createGrave3((locX+60), locY, (locZ+5))
    createGrave2((locX-80), locY, locZ)
    createGrave2((locX+80), locY, locZ)
    }
    const  createRow2 = (locX, locY, locZ) => { 
    createGrave3(locX, locY, (locZ+40))
    createGrave3((locX-20), locY, (locZ+40))
    createGrave2((locX+20), locY, (locZ+40))
    createGrave2((locX-40), (locY-4), (locZ+40))
    createGrave3((locX+40), locY, (locZ+35))
    createGrave2((locX-60), locY, (locZ+40))
    // createGrave2((locX+60), locY, (locZ+40))
    createGrave1((locX-80), locY, (locZ+40))
    createGrave2((locX+80), locY, (locZ+40))
    }

    createRow1(locX, locY, locZ)
    createRow2(locX, locY, locZ)


};

export default graveScene;