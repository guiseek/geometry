import { BaseLayer } from "./base-layer";

export class SquareLayer extends BaseLayer {
  render() {
    this.clear();

    this.context.fillStyle = "#ffc821";
    this.context.fillRect(0, 0, this.width, this.height);

    return this;
  }
}
