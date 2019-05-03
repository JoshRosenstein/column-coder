# column-coder
encode / decode column index to column names with an optional base index

[![npm version](https://badge.fury.io/js/column-coder.svg)](https://badge.fury.io/js/column-coder)

#### Installation

```bash
yarn add -D column-coder
```
```ts
import {decode} from 'column-coder'

const columns=Array.from(Array(30).keys())
const columnNames=columns.map(v=>decode(v))
//["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD"]

console.log(decode(0)) //=> "A"
console.log(decode(1,1)) //=> "A"
console.log(decode(16073)); //=> "WTF"
```

```ts
import {encode} from 'column-coder'

console.log(encode("A")); //=> 0
console.log(encode("A",1)); //=> 1
console.log(encode("AE")); //=> 30

```
