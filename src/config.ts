export const config = {
  width: 540,
  height: 540,
  cols: 6,
  rows: 6,
  get row() {
    return this.height / this.rows;
  },
  get col() {
    return this.width / this.cols;
  },
};
