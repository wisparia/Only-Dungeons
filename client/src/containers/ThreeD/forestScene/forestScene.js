import * as THREE from "three";
import Tree1 from "./Tree1.png"
import Tree2 from "./Tree2.png"
import Tree3 from "./Tree3.png"

const forestScene = (scene, camera, renderer, locX, locY, locZ) => {
   
   const createTreeSm = (locX, locY, locZ) => {
        const geometry = new THREE.ConeGeometry( 30, 60, 32 );
        let texture = new THREE.TextureLoader().load(Tree1)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const cone = new THREE.Mesh( geometry, material );
        scene.add(cone);
        cone.position.set((locX), (locY+25), (locZ));
    }
   
    const createTreeMed = (locX, locY, locZ) => {
        const geometry = new THREE.ConeGeometry( 40, 75, 32 );
        let texture = new THREE.TextureLoader().load(Tree2)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const cone = new THREE.Mesh( geometry, material );
        scene.add(cone);
        cone.position.set((locX), (locY+35), (locZ-20));
    }

    const createTreeLg = (locX, locY, locZ) => {
        const geometry = new THREE.ConeGeometry( 50, 100, 32 );
        let texture = new THREE.TextureLoader().load(Tree3)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const cone = new THREE.Mesh( geometry, material );
        scene.add(cone);
        cone.position.set((locX), (locY+50), (locZ-40));
    }




            createTreeSm(locX, locY, locZ)
            createTreeSm(locX+30, locY, locZ+30)
            createTreeSm(locX-30, locY, locZ+30)
            createTreeSm(locX-30, locY, locZ-30)
            createTreeSm(locX-30, locY, locZ+120)
            createTreeSm(locX-60, locY, locZ+60)
            createTreeSm(locX+60, locY, locZ+60)
            createTreeSm(locX+60, locY, locZ+200)
            createTreeSm(locX-100, locY, locZ-160)
            createTreeSm(locX+60, locY, locZ-200)
            createTreeMed(locX-150, locY, locZ)
            createTreeMed(locX-80, locY, locZ)
            createTreeLg(locX-120, locY, locZ+50)
            createTreeLg(locX-120, locY, locZ-250)
            createTreeLg(locX-200, locY, locZ-100)

        let fogColor = new THREE.Color(0x383838);
 
        scene.background = fogColor;
        scene.fog = new THREE.Fog(fogColor, 0.005, 800);
}

export default forestScene;

