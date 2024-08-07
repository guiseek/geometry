import { BaseLayer } from "./base-layer";
import { async } from "../utils";

export class ImageLayer extends BaseLayer {
  image = new Image(this.width, this.height);

  render() {
    return async<ImageLayer>((resolve) => {
      this.clear();

      this.image.addEventListener("load", () => {
        /**
         * this.context.drawImage(image,
         * dx: eixo x para o canto superior esquerdo
         * dy: eixo y para o canto superior esquerdo
         * dw: dimensionamento da imagem na largura
         * dh: dimensionamento da imagem na altura
         */

        this.context.drawImage(this.image, 0, 0, this.width, this.height);

        resolve(this);
      });

      this.image.src = this.image.src;
    });
  }
}
