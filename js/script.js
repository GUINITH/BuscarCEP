async function buscarCep() {
    async function obterDadosDoCep() {
      let cepDoUsuario = document.getElementById("Cep-do-usuario").value;
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepDoUsuario}/json/`);
        const dados = await response.json();
        return dados;
      } catch (error) {
        console.log("Erro na solicitação:", error);
        return null;
      }
    }
  
    function responseCEP(dados) {
      if (!dados) return;
  
      const response = document.getElementById("response");
  
      // Limpando o conteúdo anterior
      response.innerHTML = '';
  
      // Inserindo Cep na resposta no HTML
      const cepUser = document.createElement("p");
      cepUser.innerText = `CEP: ${dados.cep}`;
      response.appendChild(cepUser);
  
      // Inserindo logradouro na resposta no HTML
      const lgdUser = document.createElement("p");
      lgdUser.innerText = `Logradouro: ${dados.logradouro}`;
      response.appendChild(lgdUser);
  
      // Inserindo cidade na resposta no HTML
      const cityUser = document.createElement("p");
      cityUser.innerText = `Cidade: ${dados.localidade}`;
      response.appendChild(cityUser);
  
      // Inserindo bairro na resposta no HTML
      const bairroUser = document.createElement("p");
      bairroUser.innerText = `Bairro: ${dados.bairro}`;
      response.appendChild(bairroUser);
  
      // Inserindo estado na resposta no HTML
      const estadoUser = document.createElement("p");
      estadoUser.innerText = `Estado: ${dados.uf}`;
      response.appendChild(estadoUser);
    }
  
    const dados = await obterDadosDoCep();
    responseCEP(dados);
  }
  