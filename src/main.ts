import { SquareLayer } from "./layers/square-layer";
import { ImageLayer } from "./layers/image-layer";
import { GridLayer } from "./layers/grid-layer";
import { PosterCanvas } from "./poster-canvas";
import { config } from "./config";
import "./style.css";

const canvas = new PosterCanvas(config.width, config.height);

for (let x = 0; x <= config.cols - 0; x++) {
  for (let y = 0; y <= config.rows - 0; y++) {
    const square = new SquareLayer(
      /**
       * Criamos o grid dinamicamente
       */
      // prettier-ignore
      new DOMRect(
        x * config.col,
        y * config.row,
        config.col,
        config.row
      )
    );

    canvas.add(square);
  }
}

// prettier-ignore
const vite = new ImageLayer(
  new DOMRect(
    /**
     * col x0 mantem colado na borda,
     * x1 faz pular uma casa e seegue...
     */
    config.col * 1,
    config.row * 3,
    /**
     * A imagem tem o tamanho
     *  de 1 coluna e 1 linha
     */
    config.col,
    config.row
  )
);

// prettier-ignore
const grid = new GridLayer(
  new DOMRect(
    /**
     * O grid começa no cando superior esquedo
     */
    0,
    0,
    /**
     * E termina no canto inferior direito
     * por isso ele tem o tamanho do canvas
     */
    config.width,
    config.height
  )
);

canvas.add(vite, grid);

vite.image.src = "vite.svg";

canvas.render();

app.append(canvas);
