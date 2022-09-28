
//copiar mensagem
document.querySelector(".copyCit").addEventListener("click" , ()=>{    
    let txtCit = document.querySelector(".citacao").innerText
    navigator.clipboard.writeText(txtCit)
})

document.querySelector(".copyConselho").addEventListener("click" , ()=>{    
    let txtCit = document.querySelector(".conselho").innerText
    navigator.clipboard.writeText(txtCit)
})



//sotear um conselho
document.querySelector(".sortCit").addEventListener("click", citacao)
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
    document.querySelector(".citacao").innerHTML = text 
    document.querySelector("cite").innerHTML = autor
}


// const puppeteer = require('puppeteer')

// const traduzMensagem = function (texto, autor){
//     let apiGoogleTranslate = async () => {
//         const browser = await puppeteer.launch()
//         const page = await browser.newPage()
      
//         var url = `https://translate.google.com.br/?hl=en&sl=en&tl=pt&text=${(texto)}&op=translate`;
//         await page.goto(url)
//         await page.waitForTimeout(2000);
        
//         const result = await page.evaluate(() => {
//           return document.getElementsByClassName('NqnNQd')[0].innerText;
//         })
      
//         browser.close()
//         return result
//     }
//     apiGoogleTranslate().then((value) => {
//         try{
//             console.log('Aqui está seu conselho: '+ ''+value+'. ツ')
//         }catch(e){
//             console.log(e)
//             console.log('Desculpe ocorreu um erro. Solicite novamente um conselho')
//         }

//     })

// }

// module.exports = traduzMensagem;