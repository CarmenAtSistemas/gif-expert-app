export const getGifs = async(category) => {
        
    const apiKey = 'mAg5joEoBzSe3E2wiLO9SvftDh3bBLcg';
    const limit = 5;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${ limit }&api_key=${ apiKey }`;
    const resp = await fetch(url);
    const {data}= await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return gifs;

};