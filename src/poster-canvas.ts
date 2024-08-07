import { BaseLayer } from "./layers/base-layer";

export class PosterCanvas extends HTMLCanvasElement {
  layers: BaseLayer[] = [];

  add(...layers: BaseLayer[]) {
    this.layers.push(...layers);
  }

  constructor(public width: number, public height: number) {
    super();
  }
  
  get context() {
    const ctx = this.getContext("2d");
    if (!ctx) throw `Context layer error`;
    return ctx;
  }

  render() {
    Promise.all(this.layers.map((layer) => layer.render())).then((layers) => {
      for (const layer of layers) {
        const dx = layer.rect.x;
        const dy = layer.rect.y;
        console.log(layer);

        this.context.drawImage(layer, dx, dy);
      }
    });
  }
}
customElements.define("poster-canvas", PosterCanvas, { extends: "canvas" });
