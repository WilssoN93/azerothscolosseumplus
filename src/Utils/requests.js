

const blizzardUrl = "https://eu.api.blizzard.com";
const battleNetUrl = "https://eu.battle.net";

export const getDungeons = async (realm, characterName, token) => {
  const url = `${blizzardUrl}/profile/wow/character/${realm}/${characterName}/encounters?namespace=profile-eu&access_token=${token.access_token}`;
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
  };

  const request = {
    method: "GET",
    headers: headers,
  };

  const response = await fetch(url, request)
    .then((response) => response.json())
    .catch((err) => console.log(err));

   await getMore(response, token);
};

export const getMore = async (dungeons, token) => {
  console.log(dungeons);

  const instances = dungeons;

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
  };

  const request = {
    method: "GET",
    headers: headers,
  };

  const url = instances.dungeons.href + "&access_token=" + token.access_token;
  console.log(url);
  const response = await fetch(url, request)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  console.log(response);
};

export const authenticate = async () => {
  var url = battleNetUrl + "/oauth/token";
  const client_id = "a3c04f0792984dac834dd8c3fec80115";
  const client_secret = "tpOAAaULsxah8ghN0fStDOih7ljVkkA8";
  const grant_type = "client_credentials";

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const dataBody = new URLSearchParams();

  dataBody.append("client_id", client_id);
  dataBody.append("client_secret", client_secret);
  dataBody.append("grant_type", grant_type);

  var request = {
    method: "POST",
    body: dataBody.toString(),
    headers: headers,
  };

  const response = await fetch(url, request);
  const data = await response.json();

  return data;
};


export const checkToken = async (token) => {

    const url = `${battleNetUrl}/oauth/check_token`;
    const client_id = "a3c04f0792984dac834dd8c3fec80115";

  
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authentication": "Bearer " + token,
    };
  
    const dataBody = new URLSearchParams();
  
    dataBody.append("client_id", client_id);

    var request = {
        method: "POST",
        body: dataBody.toString(),
        headers: headers,
        mode:"no-cors"
      };
    
      const response = await fetch(url, request);
      const data = await response.json();
      console.log(data)
}
