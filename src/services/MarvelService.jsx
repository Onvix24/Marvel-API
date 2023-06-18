class MarverService {
   _apiBase = "https://gateway.marvel.com:443/v1/public/";
   _apiKey = "apikey=aaed3dfef9313d03455faf6a1e7cae4c";
   
   getResource = async (url) => {
      let res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   };

   getAllCharacters = () => {
      return this.getResource(
         `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
      );
   };

   getCharacter = (id) => {
      return this.getResource(
         `${this._apiBase}characters?${id}?${this._apiKey}`
      );
   };
}

export default MarverService;
