export abstract class BaseLayer extends OffscreenCanvas {
  constructor(public rect: DOMRect) {
    super(rect.width, rect.height);
  }

  get context() {
    const ctx = this.getContext("2d");
    if (!ctx) throw `Context layer error`;
    return ctx;
  }

  /**
   * Abstração que devem implementar
   * Cada nova implementação dece ter
   * uma responsabilidade de render
\   */
  abstract render(): BaseLayer | PromiseLike<BaseLayer>;

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }
}
