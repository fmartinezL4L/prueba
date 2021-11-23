async function prueba() {
    const API = await axios.get("http://192.168.1.223:8000/api/persona/lista")
    console.log(API)   
}

prueba()