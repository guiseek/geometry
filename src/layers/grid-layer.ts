import { BaseLayer } from "./base-layer";
import { config } from "../config";

export class GridLayer extends BaseLayer {
  render() {
    this.clear();

    const col = this.width / config.cols;
    const height = this.height / config.rows;

    for (let x = 0; x < config.cols; x++) {
      for (let y = 0; y < config.rows; y++) {
        
        /**
         * Path2D faz parte da API da Web
         * pra trabalhar com geometria tbm
         */
        const path = new Path2D();

        this.context.lineWidth = 3;
        this.context.strokeStyle = "#bd34fe";

        path.rect(x * col, y * height, col, height);
        this.context.stroke(path);
      }
    }

    return this;
  }
}
