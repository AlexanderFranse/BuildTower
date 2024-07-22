export function isPiramideBlockAMulitplierSymbol(symbol: string): boolean {
  return symbol === "*";
}

export function isNumberOfFloorsPositive(x: number): boolean {
  return x > 0;
}

export function calculateTotalBlocksForASingleFloor(nFloor: number): number {
  return nFloor * 2 - 1;
}

export function calculateTotalBlocksForAllFloors(nFloor: number): number {
  return nFloor * nFloor;
}
export function buildTower(nFloor: number): string[] {
  const tower = [];

  for (let i = 1; i <= nFloor; i += 1) {
    const floorWidth = 2 * i - 1;
    tower.push("*".repeat(floorWidth));
  }

  return tower;
}
export function centerBlocks(blocks: string[]): string[] {
  const maxWidth = blocks[blocks.length - 1].length;
  const centeredBlocks = blocks.map((block) => {
    const spaces = " ".repeat((maxWidth - block.length) / 2);
    return `${spaces}${block}${spaces}`;
  });
  return centeredBlocks;
}

export function towerBuilder(nFloor: number, symbol = "*"): string[] {
  if (!isPiramideBlockAMulitplierSymbol(symbol)) {
    return [];
  }
  if (!isNumberOfFloorsPositive(nFloor)) {
    return [];
  }
  const tower = buildTower(nFloor);
  const centeredTower = centerBlocks(tower);
  return centeredTower;
}
