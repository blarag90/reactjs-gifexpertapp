
export const getGifs = async(categoria) => {
    const uri = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=fyVkegrMqb7MF9re1WE3sDIx5vNDRX4z`;
    const resp = await fetch(uri);
    const { data }= await resp.json();
    
    //mapeamos solo los valores que necesitamos
    const gifs = data.map( img => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}