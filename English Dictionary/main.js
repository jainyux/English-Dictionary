const inputel = document.getElementById("input");
const infotextel = document.getElementById("info-text");
const meaningcontainerel = document.getElementById("meaning-container");
const titleel = document.getElementById("title");
const meaningel = document.getElementById("meaning");
const audioel = document.getElementById("audio");
async function fetchAPI(word){
    try {
        infotextel.style.display = "block";
        meaningcontainerel.style.display = "none";
        infotextel.innerText = `Searching the meaning of "${word}"`;
        
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/"${word}"`;
const result = await fetch(url).then((res)=>res.json());

if(result.title){
    meaningcontainerel.style.display = "block";
    infotextel.style.display = "none";
    titleel.innerText = word;
meaningel.innerText = "N/A";
audioel.style.display= "none";
}else{


    infotextel.style.display = "none";
meaningcontainerel.style.display = "block";

audioel.style.display = "inline-flex";
titleel.innerText = result[0].word;
meaningel.innerText = result[0].meanings[0].definitions[0].definition;
audioel.src = result[0].phonetics[0].audio;

}
        
    } catch (error) {
        console.log(error);
        infotextel.innerText = `an error occured, try again later`;
    }
    
}

inputel.addEventListener("keyup", (e)=>{
if(e.target.value && e.key ==="Enter"){
    fetchAPI(e.target.value);
}
}

);