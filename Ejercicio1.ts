//Tipos
export interface Pagination
{
    currentPage: number;
    nextPage: number;
    totalPages: number;
}

export interface Data
{
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: number;
}

export interface respuesta
{
    statusCode: number;
    message: string;
    pagination: Pagination;
    totalQuotes: number;
    data: Data[];
}

const fetchData = async () => {
    try {
      // Obtener un recurso de la red. Devuelve una promesa que resuelve la Respuesta a dicha Solicitud, sea exitosa o no.
      const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes");
  
      // Toma un flujo de respuesta y lo lee hasta su finalización. 
      //Devuelve una promesa (en binario) que se resuelve con el resultado de analizar el texto del cuerpo como JSON.
      const data: respuesta = await response.json();
  
        data.data.forEach(author => {
            console.log("---------------------------------")
            console.log("Genero: " + author.quoteGenre + ". Autor: " + author.quoteAuthor + ". Quote: " + author.quoteText)
          })
    } catch (error) {
      // Debemos tratar siempre los errores cuando trabajemos con Promesas
      console.log(error);
    }
  };

  //Es otro metodo para conseguir la solucion, este lo hace sin esperar
  const secondMethod = () => {
    fetch("https://quote-garden.onrender.com/api/v3/quotes")
      .then((response) => response.json())
      .then((data: respuesta) => {
          data.data.forEach(author => {
          console.log("---------------------------------")
          console.log("Genero: " + author.quoteGenre + ". Autor: " + author.quoteAuthor + ". Quote: " + author.quoteText)
        })
      })
      .catch((error) => console.log(error));
  };

await fetchData();
console.log("---------------------------------")
console.log("---------------------------------")
console.log("---------------------------------")
console.log("SEGUNDO METODO")
console.log("---------------------------------")
console.log("---------------------------------")
console.log("---------------------------------")
secondMethod();