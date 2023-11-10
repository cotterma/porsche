import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import SceneComponent from 'babylonjs-hook'

export default function Porsche3D() {
  let camera;

  const onSceneReady = (scene) => {
    // This creates and positions a free camera (non-mesh)
    camera = new BABYLON.ArcRotateCamera("camera1", 0, Math.PI / 2, 4, new BABYLON.Vector3(0, 0, 0), scene);

    const envTexture = new BABYLON.CubeTexture("textures/environment.dds", scene);
    scene.createDefaultSkybox(envTexture, true, 1000, 0.7);

    // This targets the camera to scene origin
    const targetPosition = new BABYLON.Vector3(0, 0, 0);
    camera.setTarget(targetPosition);

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    // camera.attachControl(canvas, true);

    BABYLON.SceneLoader.ImportMesh('', '/models/porsche/', 'scene.gltf', scene, function (meshes) {
      // for (const mesh of meshes) {
        // mesh.translate(new BABYLON.Vector3(0, 0, 1), 1, BABYLON.Space.WORLD);
      // }
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
