export const artworks: {title:string;year:string;medium:string;position:number[];rotation:number[];size:number[];color:string;url?:string;blank?:boolean;description?:string}[];
export const walls: {name:string;min:number[];max:number[]}[];
export const duration:number;
export const destinations:number[];
export const viewingWindows:[number,number][];
export function sampleRoute(time:number):{position:number[];target:number[];artwork:number;phase:string;time:number;complete:boolean};
export function collisionAt(p:number[],radius?:number):string[];

export const closingView:{align:number;start:number;end:number;position:number[];target:number[]};
