//HAZ UN RELEASE EN GITHUB
export interface libro
{
    id: number
    title: string 
    author: string
    pages: number
    genre: string
}


console.log("Bienvenido a tu biblioteca virtual")
let arraylibros: libro[] = []

function crearlibro()
{  
    let _id = prompt("Dime el id del libro:")
    if(_id===null)
    {   
        console.log("Ese numero de paginas no es valido")
        return null
    }
    //Buscamos si hay algun libro con el mismo id en el array
    //Con some buscamos si hay algun elemento en arraylibros que tenga el mismo id que el que intentamos meter
    let miid = Number(_id)
    while(arraylibros.some((elem)=>elem.id===miid))
    {
        _id = prompt("Ese id no esta disponible, elige otro:")
        if(_id===null)
        {   
            console.log("Ese numero de paginas no es valido")
            return null
        }
        miid = Number(_id)
    }

    const mititle = prompt("Dime el titulo del libro:")
    //Fuente: https://es.stackoverflow.com/questions/393233/validar-prompt-en-js-para-evitar-aceptar-valores-nulos
    if (mititle===null) //Si el titulo es nulo, salimos de la funcion y el libro no se crea
    {
        console.log("Ese titulo no es valido");
        return null //Lo ponemos a null para que no nos de error al introducirlo en el array
    }

    const miauthor = prompt("Dime el autor del libro:")
    if (miauthor===null)
    {
        console.log("Ese autor no es valido");
        return null
    }

    const _pages = prompt("Dime el numero de paginas del libro:")
    if(_pages===null)
    {
        console.log("Ese numero de paginas no es valido")
        return null
    }
    const mipages = Number(_pages)
    const migenre = prompt("Dime el genero del libro:")
        
    if (migenre===null)
    {
        console.log("Ese genero no es valido");
        return null
    }

    //Creamos el objeto si todos los datos han sido introcucidos correctamente
    const milibro:libro = 
    {
        id: miid,
        title: mititle,
        author: miauthor,
        pages: mipages,
        genre: migenre
    }
        
        //arraylibros.push(milibro) //Introducimos el nuevo libro en el array
    console.log("Se ha introducido un nuevo libro en la biblioteca\n")
    return milibro    
}

function buscarporgenero()
{
    //Usamos la funcion filter
    const migenero = prompt("Que genero quieres buscar?:")
    //Obtenemos todos los libros que tengan ese genero
    const generolibros: libro[] = arraylibros.filter(cont=>cont.genre===migenero);
    
    //Usamos la funcion forEach para mostrar todos los libros del array
    console.log("Estos son todos los libros de " + migenero + ":")
    generolibros.forEach((cont)=>
    {
        console.log(cont)
    })
}

function borrarlibro()
{
    const mi_id = prompt("Dime el id del libro que quieres borrar:")
    const _miid = Number(mi_id)
    //Primero vemos si hay algun libro que tenga ese id
    if(arraylibros.some((elem)=>elem.id===_miid))
    {
        //Obtenemos todos los libros que no tengan ese id
        const arrayaux = arraylibros.filter(elem=>elem.id!==_miid)
        arraylibros = arrayaux    

       console.log("El libro con el id " + _miid +" ha sido borrado")
    }
    else
    {
        console.log("No existe ningun libro con ese id")
    }
    
}

function menu() 
{
  let eleccion
  while (eleccion!=="4") 
  {
    console.log("\n1 - Crear libro")
    console.log("2 - Filtrar libro por genero")
    console.log("3 - Borrar libro")
    console.log("4 - Salir")
    eleccion = prompt("Elige una opcion:" )

    switch (eleccion) 
    {
        case "1":
        {
            const milibro = crearlibro()
            if(milibro!==null) //Usamos el mismo metodo que hemos usado con mititle en la funcion crearlibro
            {
                arraylibros.push(milibro)                
            }
            break
        }            
        case "2":
        {
            buscarporgenero()
            break
        }
        case "3":
        {
            borrarlibro()
            break
        }
        case "4":
        {
            console.log("Adiosito!\n")
            break
        }
        default:
        {
            console.log("Opcion incorrecta, elija otra vez.")
        }
    }
  }
}

menu()