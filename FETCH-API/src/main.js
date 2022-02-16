//get cep input data
const cep = document.querySelector("#cep");

//fill inputs dynamic
const showData = (result)  =>{
    for(const campo in result){
        //get and fill all exsinten fields
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    } 
}

cep.addEventListener("blur", (e) =>{
    // replace do cep
    let search = cep.value.replace("-","");
    console.log(search);
    //setting how get data by fetch api
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    //cosntruindo a url de consulta
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    //promisses
    //get response and bring as json format
    .then(response => {response.json()
        //if not error bring response show it on console 
    .then(data => showData(data))
})
    // if error show error mensage on console
    .catch( e => console.log("Error.: " + e.message));
})