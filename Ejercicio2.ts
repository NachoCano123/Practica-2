//En una ruta (https://pokeapi.co/api/v2/pokemon/charizard) tienes que cambiar el nombre del pokemon que aparece al final de esta ruta por el que te pida el usuario

export interface generacion
{
    name: string
}

export interface tipopokemon
{
    name: string
}

export interface Type
{
    type: tipopokemon
}

export interface pokemon
{
    name: string
    types: Type[]
    id: number
    generation: generacion
}

const elec = prompt("Quieres buscar en base al tipo o al nombre del pokemon?\n" + "1. Tipo\n" + "2. Nombre\n")
let eleccion = Number(elec)
if(eleccion==1)
{
    const tipo = prompt("Introduce el tipo de tu pokemon (escrito en ingles): ");
    let ruta:string = "https://pokeapi.co/api/v2/type/" + tipo + "/"

    const fetchData = async () => {
        try {
          const response = await fetch(ruta);
          const data: pokemon = await response.json();
          console.log("Tipo: " + tipo + ". Generacion: " + data.generation.name)
    
        } catch (error) {
          console.log(error);
        }
      };
    
    await fetchData();
}
else if(eleccion==2)
{
    const nombre = prompt("Introduce el nombre de tu pokemon: ");
    let ruta:string = "https://pokeapi.co/api/v2/pokemon/"+nombre;
    
    const fetchData = async () => {
        try {
          const response = await fetch(ruta);
          const data: pokemon = await response.json();
      
          //Si tiene dos tipos, los pongo juntos
          if(data.types.length>1)
          {
            console.log("Nombre: " + data.name + ". Tipos: " + data.types[0].type.name + "/" + data.types[1].type.name + ". Id: " + data.id)
          }
          else
          {
            console.log("Nombre: " + data.name + ". Tipo: " + data.types[0].type.name + ". Id: " + data.id )
          }
    
        } catch (error) {
          console.log(error);
        }
      };
    
    await fetchData();
}
else
{
    console.log("Esa opcion no es valida")
}

