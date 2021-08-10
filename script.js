const inputCep = document.getElementById('cep')
const btnBusca = document.getElementById('btnBusca')
const erro = document.querySelector('.erro')

btnBusca.addEventListener('click', handleClick)

function handleClick(event){
    event.preventDefault()
    const cepValue = inputCep.value
    if(cepValue){
        buscaCep(cepValue)
    } else{
        erro.innerText = 'Por favor insira um CEP para realizar a pesquisa'
        erro.style.visibility = 'visible'
    }
}

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(body => {
        const cepBusca = document.getElementById('cepConsultado')
        cepBusca.innerText = cep 
        const logradouro = document.getElementById('logradouro')
        logradouro.innerText = body.logradouro
        const bairro = document.getElementById('bairro')
        bairro.innerText = body.bairro
        const localidade = document.getElementById('localidade')
        localidade.innerText = body.localidade
        const uf = document.getElementById('uf')
        uf.innerText = body.uf
        erro.style.visibility = 'hidden'
    })
    .catch(() => {
        erro.innerText = 'CEP inválido!'
        erro.style.visibility = 'visible'
    })
}
