//// api table interface
export interface Apignb{
    id : number
    nm : string
    href : string
    parent_id : number
}

interface Oneobj{
    catano : string | number
}

//// 제네릭은 타입변수설정
export interface Commontable<T extends string | number>{
    id : T  
    hp : T
}
export interface Commontable2<Oneobj>{
    productpk : Oneobj  
  
}

