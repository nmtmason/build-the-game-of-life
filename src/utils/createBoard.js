export const createBoard = (rows, cols, value) =>
  Array.from(Array(rows), row =>
    Array.from(
      Array(cols),
      col => (typeof value === 'function' ? value() : value)
    )
  );
