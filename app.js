let quotes=document.getElementById("quotes");
let quotes_author=document.getElementById("quotes_author");
let new_quotes=document.getElementById("new-quotes");
let apiQuotes=[];

function setQuotes(){
    const quote = apiQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    quotes.innerHTML=quote.text;
    if(quote.author=="Anonymous"){
        quotes_author.innerHTML="Unknown"
    }else{
        quotes_author.innerHTML=quote.author;
    }
    

}   

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiUrl)
        apiQuotes=await response.json()
        setQuotes()
        
    } catch (error) {
        console.log(error);
    }
}



