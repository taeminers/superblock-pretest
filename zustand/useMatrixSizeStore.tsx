import { create } from "zustand";

interface MatrixStore {
  matrixSizeCols: number;
  matrixSizeRows: number;
  setMatrixSizeCols: (cols: number) => void;
  setMatrixSizeRows: (rows: number) => void;
}

export const useMatrixSizeStore = create<MatrixStore>()((set) => ({
  matrixSizeCols: 0,
  matrixSizeRows: 0,
  setMatrixSizeCols: (cols: number) => set({ matrixSizeCols: cols }),
  setMatrixSizeRows: (rows: number) => set({ matrixSizeRows: rows }),
}));
