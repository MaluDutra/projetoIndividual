function submit_form(){
    let nome_filme = document.querySelector("#nomeFilme");
    let avaliacao = document.querySelector("#avaliacao");
    let estrelas = document.getElementsByName("rating");
    let avaliou = false;

    for (let estrela of estrelas){
        if (estrela.checked){
            avaliou = true;
        }
    }

    if (nome_filme.value == '' || avaliacao.value == '' || !avaliou){
        alert("Por favor, preencha todos os campos!");        
    }
    else{
        alert(`Muito obrigada por enviar sua opinião sobre o filme ${nome_filme.value}! =D`);
        location.reload();
    }
}

window.addEventListener("load", function(){
    let btn = document.querySelector("#submit_ghilbi");

    btn.addEventListener("click", submit_form);
})