export interface Item{
    id:number
    name:string
    status:string
    species:string
    type: string
    gender:string
    origin:object
    location:object
    image:string
    episode:string[]
    url:string
    created:string
}

export interface Idata{
    info?:{
        count:number
        pages:number
        next:string
        prev: null | string 
    }
    results?: Item[]
}
export interface Istate{
    items:Idata
    error:null
    loading:boolean
}