import * as THREE from "three";
import Tree1 from "./Tree1.png"
import Tree2 from "./Tree2.png"
import Tree3 from "./Tree3.png"
import Tree4 from "./Tree4.png"

const forestScene = (scene, camera, renderer, locX, locY, locZ) => {
   

   const createTree = (locX, locY, locZ) => {
        let treeTypes = [Tree1, Tree2, Tree3, Tree4]
        let treeOuter = treeTypes[(Math.floor(Math.random()*4))]
        let shaY =  (Math.floor(Math.random()*100)+50)

        const geometry = new THREE.ConeGeometry( 30, shaY, 32 );
        let texture = new THREE.TextureLoader().load(treeOuter)
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const cone = new THREE.Mesh( geometry, material );
        scene.add(cone);
        cone.position.set((locX), (locY+(shaY/2)), (locZ));
    }
   
    const createTreeRow1 = (locX, locY, locZ) => {
            createTree(locX, locY, locZ)
            createTree(locX+30, locY, locZ+30)
            createTree(locX-30, locY, locZ+30)
            createTree(locX-60, locY, locZ+30)
            createTree(locX+60, locY, locZ+30)
            createTree(locX+90, locY, locZ+60)
            createTree(locX-90, locY, locZ+60)
            createTree(locX+100, locY, locZ+60)
            
            createTree(locX-120, locY, locZ+200)
            createTree(locX-120, locY, locZ+500)
            createTree(locX-100, locY, locZ-160)
            createTree(locX+60, locY, locZ-200)
            createTree(locX-150, locY, locZ)
            createTree(locX-80, locY, locZ)
            createTree(locX-120, locY, locZ+50)
            createTree(locX-120, locY, locZ-250)
            createTree(locX-200, locY, locZ-100)
    }

            createTreeRow1(locX, locY, locZ)
            createTreeRow1(locX, locY, (locZ+100))
            createTreeRow1((locX-200), locY, (locZ+200))
            createTreeRow1((locX+100), locY, (locZ+100))
            createTreeRow1((locX-350), locY, (locZ+300))
            createTreeRow1((locX-550), locY, (locZ+400))
    
            
            
}

export default forestScene;

