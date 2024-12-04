const urlPlanets= "https://dragonball-api.com/api/planets?limit=100";

export async function getHomeCharacters(page){
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      let json = await response.json();
      json =
        {
          json: json,
        }
        console.log(json)
      return json;
    } catch (error) {
      console.error(error.message);
    }
  };

  export async function getPlanets() {
  
    try {
      const response = await fetch(urlPlanets);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      return json.items;
    } catch (error) {
      console.error(error.message);
    }
  }



export async function getCharacter(id) {
  try {
    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
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

export async function fetchCharacters(filters) {
  const baseUrl = 'https://dragonball-api.com/api/characters';
  const queryParams = new URLSearchParams();
  console.log(filters.affiliation.label)
  if (filters.affiliation.label) queryParams.append('affiliation', filters.affiliation.label);
  if (filters.gender.label) queryParams.append('gender', filters.gender.label);
  if (filters.race.label) queryParams.append('race', filters.race.label);

  const url = `${baseUrl}?${queryParams.toString()}`;
  try {
    console.log(url)
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch characters');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchPlanets(filters) {
  const baseUrl = 'https://dragonball-api.com/api/planets';
  const queryParams = new URLSearchParams();
  if (filters.state.value) queryParams.append('isDestroyed', filters.state.value);

  const url = `${baseUrl}?${queryParams.toString()}`;
  try {
    console.log(url)
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch characters');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPlanet(id) {
  try {
    const response = await fetch(`https://dragonball-api.com/api/planets/${id}`);
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

