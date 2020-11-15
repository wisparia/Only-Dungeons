import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import AvatarImage from "../../components/AvatarImage/AvatarImage";
import dmImage from "./dmImage.png";
import DmProfileCheckbox from "../../components/DmProfileCheckbox/DmProfileCheckbox";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import tavScene from "./tavScene/tavScene";
import dwellScene from "./dwellScene/dwellScene";
import forestScene from "./forestScene/forestScene";
import worldScene from "./worldScene/worldScene";
import graveScene from "./graveScene/graveScene";
import mountScene from "./mountScene/mountScene";
import threeDLoader from "./ThreeDLoader/ThreeDLoader";

import "./ThreeD.css";

const ThreeD = () => {
  const [dm, setDm] = useState({
    userName: "",
    email: "",
    roomName: "",
    tagLine: "",
    categoryType: {
      byTheBook: false,
      campaigns: false,
      norestriction: false,
      homebrew: false,
      lvl1only: false,
      rpersonly: false,
      oneshots: false,
      displaydice: false,
      voyuerallowed: false,
    },
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    preferredRole: "",
    discordServer: "",
  });

  const { id } = useParams();
  const ServerID = dm.discordServer;
  const serverURL =
    "https://titanembeds.com/embed/" + ServerID + "?css=183&username=Explorer";
  const defaultServerURL =
    "https://titanembeds.com/embed/776249613778026577?css=183&username=Explorer";
  const SpotifyID = dm.getSpotify;
  const spotifyURL = "https://open.spotify.com/embed/playlist/" + SpotifyID;
  const defaultSpotifyURL =
    "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2MKTk6";

  useEffect(async () => {
    const response = await API.getUser(id);
    console.log(response.data);
    const ServerID = dm.discordServer;
    console.log(dm.discordServer);
    console.log(serverURL);
    setDm(response.data);
    dimensions();
  }, []);

  function dimensions() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#000000");
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById("myCanvas");
    container.appendChild(renderer.domElement);

    // this is updating the of the scene ever time
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      // every time an adjustment is made on the camera this must be called
      camera.updateProjectionMatrix();
    });

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 5000;

    const torchLight = () => {
      const light = new THREE.AmbientLight(0x404040);
      scene.add(light);
    };

    torchLight();
    torchLight();
    torchLight();

    // tracking mouse movement & click events
    // const raycaster = new THREE.Raycaster();
    // const mouse = new THREE.Vector2()

    // function onMouseMove(event) {
    //     event.preventDefault()
    //     mouse.x = ( event.clientX / window.innerWidth) * 2 -1;
    //     mouse.y = - ( event.clientY / window.innerHeight) * 2 -1;

    //     raycaster.setFromCamera(mouse, camera)

    //     var intersects = raycaster.intersectObjects(scene.children, true);
    //     for ( var i = 0; i < intersects.length; i++ )   {
    //         intersects[i].object.material.color.set(0xff0000)
    //     }
    // }

    // camera.position.set(-900, 600, 300);

    // Forest 400, 400, -1000
    setTimeout(
      function () {
        forestScene(scene, camera, renderer, -50, 0, -500);
        // forestScene(scene, camera, renderer, 400, 0, 0);
        forestScene(scene, camera, renderer, -150, 0, -250);
        forestScene(scene, camera, renderer, 0, 0, -400);
        forestScene(scene, camera, renderer, -450, 0, -800);
        forestScene(scene, camera, renderer, -300, 0, 100);
      },
      // 0);
      35000
    );

    // Village 1000, 400, -1000
    setTimeout(
      function () {
        tavScene(scene, camera, renderer, 1200, 1, 0);
        tavScene(scene, camera, renderer, 800, 1, -1000);
        dwellScene(scene, camera, renderer, 800, 1, -300);
      },
      // 0);
      38000
    );

    // Graveyard scene -1400, 0, 500
    setTimeout(
      function () {
        graveScene(scene, camera, renderer, -1400, 0, -800);
        graveScene(scene, camera, renderer, -1450, 0, -1000);
        graveScene(scene, camera, renderer, -1450, 0, -1080);
      },
      // 0);
      40000
    );

    // Mountain scene
    setTimeout(function () {
      mountScene(scene, camera, renderer, 600, 0, 1000);
    });

    // start position cam
    camera.position.set(0, 2800, 140);
    // camera.position.set(0, 800, 500)

    let cameraAnimate;

    function animate() {
      cameraAnimate = requestAnimationFrame(animate);

      camera.position.y -= 0.8;
      camera.position.z -= 0.19;
      camera.rotation.x -= 0.0025;

      if (camera.rotation.x <= -1) {
        camera.rotation.x += 0.0025;
      } else if (camera.rotation.x <= 0.9) {
        camera.rotation.x -= 0.0025;
      }

      renderer.render(scene, camera);
    }

    animate();

    // setTimeout(function() {
    //   cancelAnimationFrame( cameraAnimate )
    //   camera.position.set(0, 800, 500)
    //  },  50000)

    threeDLoader(scene, camera, renderer, 0, 2502, 0);

    setTimeout(function () {
      worldScene(scene, camera, renderer);
    }, 0);
  }

  return (
    <>
        <div className="content-border row">
          <div className="col s12 m6 l4 center vertical-spacer-sm">
            <div className="hide-on-large-only">
            <AvatarImage dmImage={dmImage} preferredRole={dm.preferredRole} />
            </div>
            <h5 className="vertical-spacer-sm">{dm.userName}</h5>
            <div className="row center">
              <a
                className="col s12 btn vertical-spacer-sm"
                href={`mailto:${dm.email}`}
              >
                Email
              </a>
              <div className="btn col s12 vertical-spacer-sm">Back</div>
              {dm.getSpotify === "" || dm.getSpotify === undefined ? (
                <iframe
                  src={defaultSpotifyURL}
                  className="vertical-spacer-sm col s12"
                  width="300"
                  height="80"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              ) : (
                <iframe
                  src={spotifyURL}
                  className="vertical-spacer-sm col s12"
                  width="300"
                  height="80"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              )}
            </div>
          </div>

          <div className="col s12 m6 l4 vertical-spacer-sm">
            <p className="vertical-spacer-sm ">Category:</p>
            {dm.categoryType.campaigns ? (
              <DmProfileCheckbox name={"Campaigns"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.categoryType.oneshots ? (
              <DmProfileCheckbox name={"One Shots"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.categoryType.homebrew ? (
              <DmProfileCheckbox name={"Homebrews"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.categoryType.byTheBook ? (
              <DmProfileCheckbox name={"By The Book"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.categoryType.rpersonly ? (
              <DmProfileCheckbox name={"Role Play Only"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.categoryType.norestriction ? (
              <DmProfileCheckbox name={"No Restrictions"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.categoryType.displaydice ? (
              <DmProfileCheckbox name={"Display Dice"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.categoryType.lvl1only ? (
              <DmProfileCheckbox name={"Level Ones"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.categoryType.voyuerallowed ? (
              <DmProfileCheckbox name={"Watchers Allowed"} />
            ) : (
              <input type="checkbox" disabled />
            )}
          </div>

          {/* <div className="col s12 m8">
            <div className="row">
              <div className="col s12 l12 xl6">
               
              </div> */}

          <div className="col s12 m6 l4 vertical-spacer-sm">
            <p className="vertical-spacer-sm">Availability:</p>
            {dm.availability.monday ? (
              <DmProfileCheckbox name={"Monday"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.availability.tuesday ? (
              <DmProfileCheckbox name={"Tuesday"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.availability.wednesday ? (
              <DmProfileCheckbox name={"Wednesday"} />
            ) : (
              <input type="checkbox" disabled />
            )}
            {dm.availability.thursday ? (
              <DmProfileCheckbox name={"Thursday"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.availability.friday ? (
              <DmProfileCheckbox name={"Friday"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.availability.saturday ? (
              <DmProfileCheckbox name={"Saturday"} />
            ) : (
              <input type="checkbox" disabled />
            )}

            {dm.availability.sunday ? (
              <DmProfileCheckbox name={"Sunday"} />
            ) : (
              <input type="checkbox" disabled />
            )}
          </div>
        </div>
    
      <div id="myCanvas"></div>

      {dm.discordServer === "" || dm.discordServer === undefined ? (
        <iframe
          src={defaultServerURL}
          height="200"
          width="100%"
          frameborder="0"
          id="info"
          className="chatBorder"
        ></iframe>
      ) : (
        <iframe
          src={serverURL}
          height="200"
          width="100%"
          frameborder="0"
          id="info"
          className="chatBorder"
        ></iframe>
      )}
    </>
  );
};

export default ThreeD;
