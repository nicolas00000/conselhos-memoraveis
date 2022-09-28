
//copiar mensagem
document.getElementById("copyCit").addEventListener("click" , ()=>{  
    let autor =  document.querySelector("cite").innerText  
    let txtCit = document.getElementById("citacao").innerText  
    navigator.clipboard.writeText(`" ${txtCit} "   - ${autor}`)
})

document.getElementById("copyConselho").addEventListener("click" , ()=>{    
    let txtCit = document.querySelector(".conselho").innerText
    navigator.clipboard.writeText(txtCit)
})



//sotear um conselho
document.getElementById("sortCit").addEventListener("click", citacao)
function citacao(){
    const maxPage = parseInt(Math.random() * (7000 - 1) + 1)
    axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${maxPage}`)
      .then(function (response) {
        var resultados = response
        let numberOfQuote = parseInt(Math.random() * (resultados.data.data.length - 1) + 1)
        let citacao = resultados.data.data[numberOfQuote]
        let textoCitacao = citacao.quoteText
        let autorCitacao = citacao.quoteAuthor
        imprimirMsg( textoCitacao,  autorCitacao )
    })
    .catch(function (error) {
        console.log(error);
    })
  
  }

function imprimirMsg(text, autor){
    document.getElementById("citacao").innerHTML = text 
    document.querySelector("cite").innerHTML = autor
}

