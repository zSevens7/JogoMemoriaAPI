<h1>Jogo da Memória API</h1>

<h5>O que é API?</h5>
<p>API <em>(Application Programming Interface)</em> é uma interface de programação de aplicações. Ela é um conjunto de definições e protocolos que permite que softwares diferentes se comuniquem entre si. Em outras palavras, a API define como os programas interagem com outros sistemas ou com funcionalidades específicas.

As APIs podem ser usadas para:</p>
<ul>
<li>Troca de dados: Como um servidor enviar informações para um aplicativo cliente (ou vice-versa).</li>

<li>Chamada de funções específicas: Como usar funcionalidades de terceiros sem precisar implementar tudo do zero (exemplo: usar um serviço de pagamento sem precisar construir o sistema de pagamento do zero).</li>
</ul>

<h5>Como APi é aplicado no meu jogo?</h5>
<p>Ele é aplicado fazendo que o jogador escolhe uma palavra e o computador vai buscar imagem que mais se assemelha aquilo que foi digitado, portanto podem ter casos que o computador não consegue obter muitas imagem daquele termo escrito e pode ter poucas cartas de memória para jogar.</p>


<h5>Como rodar o Jogo da Memória API</h5>
<p>Para rodar o jogo localmente, siga as instruções abaixo:</p>
<pre>
1. Clone este repositório:
   git clone https://github.com/zSevens7/JogoMemoriaAPI.git

2. Navegue até o diretório do projeto:
   cd JogoMemoriaAPI

3. Instale as dependências necessárias:
   npm install

4. Inicie o servidor da API:
   npm start

5. Abra o jogo no seu navegador em: http://localhost:3000
</pre>

<h5>Funcionalidades</h5>
<ul>
  <li>Busca de imagens relacionadas a palavras-chave digitadas pelo jogador.</li>
  <li>Geração automática de cartas de memória com base nas imagens encontradas.</li>
  <li>Jogo interativo com possibilidade de criar novas palavras e adicionar mais cartas.</li>
</ul>

<h5>Contribuindo para o Projeto</h5>
<p>Se você gostaria de contribuir para o projeto, siga as etapas abaixo:</p>
<pre>
1. Faça um fork deste repositório.
2. Crie uma nova branch para a sua feature:
   git checkout -b minha-nova-feature
3. Faça suas alterações e adicione os arquivos modificados:
   git add .
4. Commit suas alterações:
   git commit -m "Adiciona nova funcionalidade"
5. Envie suas alterações para o repositório remoto:
   git push origin minha-nova-feature
6. Abra um pull request para a branch principal.
</pre>

<h5>Licença</h5>
<p>Este projeto não possui licença, fiz ele pessoalmente como um projeto pessoal.</p>
