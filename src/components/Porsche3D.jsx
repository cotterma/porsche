import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import SceneComponent from 'babylonjs-hook'

export default function Porsche3D() {
  let camera; 

  const onSceneReady = (scene) => {
    // This creates and positions a free camera (non-mesh)
    camera = new BABYLON.ArcRotateCamera("camera1", 0, Math.PI/2, 4, new BABYLON.Vector3(0, 0, 0), scene);

    // This targets the camera to scene origin
    const targetPosition = new BABYLON.Vector3(0, 0, 0);
    camera.setTarget(targetPosition);

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    BABYLON.SceneLoader.Append('/models/porsche/', 'scene.gltf', scene, function(scene) {
    });
  };

  const onRender = (scene) => {
    camera.alpha += 0.01;  
  };

  return (
    <div>
      <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
    </div>
  );
}