export const floorBounds:{min:number[];max:number[]};
export const rooflights:{x:number;z:number;width:number;depth:number}[];
export const ceilingParts:{min:number[];max:number[]}[];
export function ceilingLevel(x:number,z:number):number|null;
export function inFootprint(x:number,z:number):boolean;
export function wallParts(w:{min:number[];max:number[]}):{min:number[];max:number[]}[];
