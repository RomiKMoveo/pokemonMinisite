export interface Resource {
    name: string;
    url: string;
}

export interface RawAbility {
    ability: Resource;
    slot: number;
    is_hidden: boolean;
}

export interface RawStats {
    base_stat: number;
    effort: number;
    stat: Resource;
}
   

export interface PokemonDetailInterface {
    url:string;
    id: number;
    name: string;
    imageUrl: string;
    types: string[]; 
    height: number;
    weight: number;
    stats: RawStats [],
    abilities: RawAbility[]
}

    


