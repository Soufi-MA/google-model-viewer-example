import "@google/model-viewer";
import { ModelViewerElement } from "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": Partial<ModelViewerElement>;
    }
  }
}

const Model = () => (
  <div className="h-screen w-full border" id="card">
    <model-viewer
      src="/scene.gltf"
      ios-src=""
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      ar
      orientation="0 -1.5 0"
    ></model-viewer>
  </div>
);

export default Model;
