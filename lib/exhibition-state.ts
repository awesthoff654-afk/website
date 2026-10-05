export const STATE_KEY='vaest.exhibition.state';
export const ENTERED_KEY='vaest.exhibition.entered';
export type SavedExhibition={time:number;speed:number;playing:boolean};
export function readExhibition():SavedExhibition|null{try{const value=JSON.parse(sessionStorage.getItem(STATE_KEY)||'null');return value&&Number.isFinite(value.time)&&[1,2,3,4,12].includes(value.speed)&&typeof value.playing==='boolean'?value:null;}catch{return null;}}
export function saveExhibition(value:SavedExhibition){try{sessionStorage.setItem(STATE_KEY,JSON.stringify(value));}catch{}}
export function hasEntered(){try{return sessionStorage.getItem(ENTERED_KEY)==='true';}catch{return false;}}
export function markEntered(){try{sessionStorage.setItem(ENTERED_KEY,'true');}catch{}}
export function resetExhibition(){try{sessionStorage.removeItem(STATE_KEY);sessionStorage.removeItem(ENTERED_KEY);}catch{}}
