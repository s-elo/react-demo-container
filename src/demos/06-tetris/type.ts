export type BlockShapes = "L" | "J" | "T" | "S" | "Z" | "O" | "I" | "B";
export type GameStates = "DROPPING" | "CANCELLING" | "CANCELLED" | "PAUSING";
export type DefaultPannel = {
  pannelWidth: number;
  pannelHeight: number;
  maxRow: number;
  maxCol: number;
  pannel: {
    isActive: boolean;
  }[][];
  curDropState: BlockStates;
  curStartPos: StartPos;
  curDropPos: {
    row: number;
    col: number;
  }[];
  gameState: GameStates;
  topCancelledRow: number;
};
export type SetActivePayload = {
  row: number;
  col: number;
}[];
export type SetDropBlock = {
  startPos: StartPos;
  activePos: SetActivePayload;
  dropState?: BlockStates;
  clearPrev?: boolean;
};

export type Operations = "LEFT" | "RIGHT" | "DOWN" | "ROTATE";

export type StartPos = { row: number; col: number };

export type BlockStates = "LU" | "LD" | "LL" | "LR" | "BLANK";
export type RotateStates = "U" | "D" | "L" | "R";
