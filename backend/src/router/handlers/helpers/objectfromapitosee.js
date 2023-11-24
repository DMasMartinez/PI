

const objectformapitosee = (data) =>{
    
    // const poketypes = data.types.map(type => type.type.name);
    const newobj ={
        "name":data.name,
        "height":data.height,
        "weight":data.weight,
        "health":data.stats[0].base_stat,
        "velocity":data.stats[5].base_stat,
        "atack":data.stats[1].base_stat,
        "defense":data.stats[2].base_stat,
        "image":data.sprites.other.dream_world.front_default,
        "type":data.types.map((type)=>type.type.name)
    }
    return newobj
    
}


module.exports = objectformapitosee;