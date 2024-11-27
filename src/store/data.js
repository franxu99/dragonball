const URLS = ["https://www.dragonballapi.com/dragonball/",
              "https://www.dragonballapi.com/dragonballz/",
              "https://www.dragonballapi.com/dragonballgt/",
              "https://www.dragonballapi.com/dragonballsuper/",
              "https://www.dragonballapi.com/dragons/"
            ];

export async function getHomeCharacters(){
    try {
      const randomIndex = Math.floor(Math.random() * URLS.length);
      const randomURL = URLS[randomIndex];
      const response = await fetch(randomURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  };
  export async function getCharactersSaga(saga) {
    let url = getUrl(saga); 
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }

export async function getCharacter(saga, id) {
  let url = getUrl(saga);
  try {
    const response = await fetch(`${url}${id}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}


function getUrl(saga){
  let url = "";
  switch (saga) {
    case 0:
      url = URLS[0];
      break;
    case 1:
      url = URLS[1];
      break;
    case 2:
      url = URLS[2];
      break;
    case 3:
      url = URLS[3];
      break;
    case 4:
      url = URLS[4];
      break;
    default:
      throw new Error("Saga no válida");
  }
  return url;
}