export const postRequest = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch {
    console.log("error");
  }
};


export async function getRequest(url,body){

    try {
        const response = await fetch(url);
    
        const result = await response.json();
        console.log(result);
        return result;
      } catch {
        console.log("error");
      }
}