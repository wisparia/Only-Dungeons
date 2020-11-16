import * as THREE from "three";
import Stone1 from "./Stone1.png"
import Stone2 from "./Stone2.png"
import Stone3 from "./Stone3.png"
import Stone4 from "./Stone4.png"
import Stone5 from "./Stone5.png"

const graveScene = (scene, camera, renderer, locX, locY, locZ) => {

    const createGrave1 = (locX, locY, locZ) => {
        let stoneTypeArray = [Stone1, Stone2, Stone3, Stone4, Stone5, Stone3, Stone4, Stone5];
        let stoneType = stoneTypeArray[(Math.floor(Math.random()*8))]
        const geometry = new THREE.BoxGeometry( 8, 20, 5 );
        let texture = new THREE.TextureLoader().load(stoneType)
        const material = new THREE.MeshPhysicalMaterial( {map: texture} );
        const graveStone = new THREE.Mesh( geometry, material );
        scene.add(graveStone);
        // graveStone.rotateX(10)
        graveStone.rotateY(180)
        graveStone.position.set(locX, (locY+10), locZ)
    }

    const createCrypt = (locX, locY, locZ) =>   {
        let stoneTypeArray = [Stone1, Stone2, Stone3, Stone4, Stone5, Stone3, Stone4, Stone5];
        let stoneType = stoneTypeArray[(Math.floor(Math.random()*8))]

        const geometry = new THREE.BoxGeometry( 30, 30, 40 );
        let texture = new THREE.TextureLoader().load(stoneType)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const crypt = new THREE.Mesh( geometry, material );
        scene.add(crypt);

        const geometry1 = new THREE.BoxGeometry( 10, 20, 5 );
        let texture1 = new THREE.TextureLoader().load(stoneType)
        const material1 = new THREE.MeshBasicMaterial( {map: texture1} );      
        const cone = new THREE.Mesh( geometry1, material1 );

        scene.add( cone );
        crypt.position.set(locX, (locY), locZ)
        cone.position.set((locX-5), (locY), (locZ-20))
    }

    const torchLight = (x, y, z) => {
        const light = new THREE.PointLight(0xFF0000, .45, 0, 0);
        light.position.set(x, y, z)
        scene.add(light)
      }

    const  createRow1 = (locX, locY, locZ) => { 
    createGrave1(locX, locY, locZ)
    torchLight(locX, locY, locZ)
    createGrave1((locX-20), locY, locZ)
    // createGrave1((locX+20), locY, locZ)
    createGrave1((locX-40), locY, locZ)
    createGrave1((locX+40), locY, locZ)
    createGrave1((locX-60), locY, locZ)
    createGrave1((locX+60), locY, (locZ+5))
    createGrave1((locX-80), locY, locZ)
    createGrave1((locX+80), locY, locZ)
    createGrave1((locX-100), locY, (locZ))
    createGrave1((locX+120), locY, (locZ))
    createGrave1((locX-120), locY, (locZ))
    createGrave1((locX-140), locY, (locZ))
    }
    const  createRow2 = (locX, locY, locZ) => { 
    createGrave1(locX, locY, (locZ+40))
    torchLight(locX+100, locY, locZ+40)
    createGrave1((locX-20), locY, (locZ+40))
    createGrave1((locX+20), locY, (locZ+40))
    createGrave1((locX-40), (locY-4), (locZ+40))
    createGrave1((locX+40), locY, (locZ+35))
    createGrave1((locX-60), locY, (locZ+40))
    createGrave1((locX+60), locY, (locZ+40))
    createGrave1((locX-80), locY, (locZ+40))
    createGrave1((locX+80), locY, (locZ+40))
    createGrave1((locX+100), locY, (locZ+40))
    // createGrave1((locX-100), locY, (locZ+40))
    createGrave1((locX+120), locY, (locZ+40))
    createGrave1((locX-120), locY, (locZ+40))
    createGrave1((locX-140), locY, (locZ+40))
    }

    const  createRow3 = (locX, locY, locZ) => { 
    createGrave1(locX, locY, (locZ+80))
    createGrave1((locX-20), locY, (locZ+80))
    // createGrave1((locX+20), locY, (locZ+75))
    createGrave1((locX-40), (locY), (locZ+80))
    createGrave1((locX+43), locY, (locZ+80))
    createGrave1((locX-60), locY, (locZ+80))
    createGrave1((locX+60), locY, (locZ+80))
    createGrave1((locX-80), (locY-10), (locZ+80))
    createGrave1((locX+80), locY, (locZ+80))
    createGrave1((locX+100), locY, (locZ+80))
    // createGrave1((locX-100), locY, (locZ+80))
    createGrave1((locX+120), locY, (locZ+80))
    createGrave1((locX-120), locY, (locZ+80))
    createGrave1((locX+140), locY, (locZ+80))
    }

    const  createRow4 = (locX, locY, locZ) => { 
    createGrave1(locX, locY, (locZ+100))
    createGrave1((locX-20), locY, (locZ+100))
    // createGrave1((locX+20), locY, (locZ+75))
    createGrave1((locX-40), (locY), (locZ+100))
    createGrave1((locX+43), locY, (locZ+100))
    createGrave1((locX-60), locY, (locZ+100))
    createGrave1((locX+60), locY, (locZ+100))
    createGrave1((locX-80), (locY-10), (locZ+100))
    createGrave1((locX+80), locY, (locZ+100))
    createGrave1((locX+100), locY, (locZ+100))
    createGrave1((locX-100), locY, (locZ+100))
    createGrave1((locX+120), locY, (locZ+100))
    createGrave1((locX-120), locY, (locZ+100))
    createGrave1((locX+140), locY, (locZ+100))
    }

    const  createCryptRow = (locX, locY, locZ) => { 
    createGrave1(locX, locY, (locZ+120))
    createGrave1((locX-20), locY, (locZ+120))
    // createGrave1((locX+20), locY, (locZ+75))
    createGrave1((locX-40), (locY), (locZ+120))
    createGrave1((locX+43), locY, (locZ+120))
    createCrypt((locX-80), locY, (locZ+120))
    // createGrave1((locX+60), locY, (locZ+120))
    // createGrave1((locX-80), (locY-10), (locZ+120))
    // createGrave1((locX+80), locY, (locZ+120))
    // createGrave1((locX+100), locY, (locZ+120))
    createGrave1((locX-100), locY, (locZ+120))
    createGrave1((locX+120), locY, (locZ+120))
    createGrave1((locX-120), locY, (locZ+120))
    createGrave1((locX+140), locY, (locZ+120))
    }

    createRow1(locX, locY, locZ)
    createRow2(locX, locY, locZ)
    createRow3(locX, locY, locZ)
    createRow4(locX, locY, locZ)
    createCryptRow(locX, locY, locZ)

};

export default graveScene;