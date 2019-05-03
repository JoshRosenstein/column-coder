
/**
 * ToColumnNotation
 * @param columnIndex - integer to convert to column notation 
 * @param startingIndex -Starting integer that should reference column A
 */
export function decode(columnIndex: number, startingIndex = 0) {
    if (columnIndex < startingIndex) {
      throw new Error(
        `columnIndex ${columnIndex}, should be greater than starting index ${startingIndex}`
      );
    }
    let dividend = columnIndex + (-1 * startingIndex + 1);
    let column: string = "";
    let mod: number;
  
    while (dividend > 0) {
      mod = (dividend - 1) % 26;
      column = String.fromCharCode(65 + mod) + column;
      dividend = Math.floor((dividend - mod) / 26);
    }
    return column;
  }
  

/**
 * FromColumnNotation
 * @param column - Column name to convert to an integer
 * @param startingIndex -Integer references column A
 */
  export function encode(column: string, startingIndex = 0) {
    return (
        column.split("").reduce((acc, v, i) => {
        return acc + (v.charCodeAt(0) - 64) * Math.pow(26, column.length - i - 1);
      }, 0) +
      (startingIndex - 1)
    );
  }