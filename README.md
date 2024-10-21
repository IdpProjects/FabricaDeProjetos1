# Boas-vindas ao repositório do projeto de Fabrica de Projetos!

Para realizar o projeto, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por mensagem! 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone https://github.com/IdpProjects/FabricaDeProjetos1`.

  - Entre na pasta do repositório que você acabou de clonar:
    - `cd FabricaDeProjetos1`
  - Crie e Vá para a branch do seu grupo com o codigo a seguir:
    - `git checkout main-group-XX && git pull`, onde `XX` é o nome do seu grupo. Exemplos: `main-group-pesquisa1`, `main-group-pesquisa2`.

  2. Instale as dependências e inicialize o projeto

  - Instale as dependências:
    - `npm install`
  - Inicialize o projeto:
    - `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  
  3. Faça alterações separadas por novas branchs criadas a partir da branch `main-group-XX`, criando uma nova branch para cada demanda

  - Verifique que você está na branch `main-group-XX`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main-group-XX`
    - Exemplo: `git checkout main-group-XX && git pull`
  - Agora, crie uma branch para a demanda que você vai desenvolver do seu projeto
    - Você deve criar uma branch com uma breve descrição da demanda a ser desenvolvida
    - Exemplo: `git checkout -b main-group-XX-cria-campo-de-input`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (devem aparecer listadas as novas alterações em verde)
  - Faça o `commit`
    - Exemplo:
      - `git commit -m 'cria componente de input'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin main-group-XX-cria-campo-de-input`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/IdpProjects/FabricaDeProjetos1/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"[GRUPO XX] Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/IdpProjects/FabricaDeProjetos1/pulls) e confira que o seu _Pull Request_ está criado

  7. Assim que aprovado por pelo menos duas pessoas do grupo de Revisores acesse **SEU** _Pull Request_ e clique no botão _"Merge pull request"_

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>


<details>
  <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

Você pode estar se perguntando: *"Como deixo meu projeto com um layout mais atrativo?"* 🤔

Para isso, disponibilizamos esse [protótipo do Figma](xxxx) para lhe ajudar !

⚠️ A estilização de sua aplicação será avaliada nesse projeto, portanto esse protótipo é apenas uma **sugestão** e seu uso é **opcional**.

</details>

<br/>

# Requisitos

:warning: **PULL REQUESTS COM PROBLEMAS DE FUNCIONAMENTO SERÃO AVALIADOS.** :warning:

## Tela de início

>Obs: É necessário que a página de Login tenha o caminho `src/pages/Landing.js`

## 1. Complete a função que renderiza para o usuario a opção de coletar sua localização

**PRIORIDADE 0**

Criar a tela que obtenha a localização do usuario, onde a pessoa que joga deve conseguir escolher sua localidade nos inputs ou obter atráver da api de localização da propria google e o botão de ("Continuar") deve estar desabilitado caso não tenha alguma dessas informações.
  
:bulb: Pesquisar sobre essa forma de obter a localição do usuario através de API's externas!

:warning: **Lembre-se das observações técnicas descritas acima.**

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A pessoa que chega na pagina deve receber a opção de ativar a localização do dispositivo e compartilhar conosco.
  * A pessoa que joga deve conseguir selecionar uma cidade na lista de cidades disponiveis por input select.
  * O botão "Continuar" deve ser desabilitado caso não tenhamos acesso a informação de localidade da pessoa.
  * O botão "Continuar" que leva a pessoa a pessoa para a proxima sessão, deve ter a classe "travel-btn"`
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a pergunta de usar a localidade do usuario é acionada ao carregar a pagina.
  * Será validado se é possível selecionar uma cidade na lista de cidades disponiveis.
  * Será validado se o botão "Continuar" está disponivel apenas após conseguir as informações de localidade.
  * Será validado que as informações de localidade são verificadas por outro componente, que avalia se as localidades do usuario e da carreta são as mesmas. 
  * Será validado que ao clicar no botão "Continuar" o usuario é redirecionado ao caminho /Home da pagina, com a informação de que o usuario está no mesmo local da carreta, ou não está no mesmo local.

</details>

---

## 2. Implemente a função que recebe as localidades

  **PRIORIDADE 1**
  
  A função deve comparar a localidade do usuario, com a localidade da carreta obtida por meio de API da defensoria.

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Ao obter a localização do usuario, uma requisição para a API da defensoria deve ser feita para obter o a localidade da carreta e comparar se estão em localidades iguais.

  * Exemplo : Gama === Gama, Taguatinga != Asa Sul
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado que...
</details>

---

## 3. Crie um botão que leva a pessoa para tela de configuração

  **PRIORIDADE 1**
  
  A tela inicial deve conter um botão que leve para a configuração do jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O botão que leva a pessoa a tela de configurações deve possuir o atributo `data-testid` com o valor `btn-settings`
  * A tela de configurações deve possuir um título com o atributo `data-testid` contendo o valor `settings-title`
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se o botão existe na página
  * Será validado se a tela de configurações possui um título
</details>

---

## 4. Desenvolva testes para atingir 90% de cobertura da tela de Login

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de login com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 1**
  
  Cobertura de testes da tela de Login

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Login tenha o caminho `src/pages/Login.js`
</details>
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido os seguintes resultados:
      * `% Funcs` e `% Lines` da linha `Login` é maior ou igual a 90.
</details>

---

## Tela de jogo

>Obs: É necessário que a página de Game tenha o caminho `src/pages/Game.js`

## 5. Crie um _header_ que deve conter as informações da pessoa jogadora

  **PRIORIDADE 1**
  
  O _header_ deve conter as informações sobre a pessoa jogadora, como a imagem do Gravatar, o nome e o placar

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo `data-testid` com o valor `header-profile-picture`
  * O nome da pessoa em um elemento que deve possuir o atributo `data-testid` com o valor `header-player-name`
  * O placar zerado em um elemento que deve possuir o atributo `data-testid` com o valor `header-score`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a imagem do Gravatar está presente no header
  * Será validado se o nome da pessoa está presente no header
  * Será validado se o placar zerado está presente no header
</details>

---

## 6. Crie a página de jogo que deve conter as informações relacionadas à pergunta

  **PRIORIDADE 1**
  
  Deve ser feita a requisição para a API para popular o jogo com as perguntas, categoria e alternativas

<details><summary> Ilustração:</summary>

  ![img](req6.gif)
</details><br />
<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Acessar o jogo com um token inválido leva a um logout, excluindo o token do `localStorage` e redirecionando a página para a tela de login
  * A pergunta e suas alternativas de resposta devem ser recebidas da API do Trivia
  * Apenas **uma** pergunta deve ser exibida por vez
  * A categoria da pergunta (campo _category_) deve ser exibida em um elemento com o atributo `data-testid` com o valor `question-category` para a pessoa que está jogando
  * O texto da pergunta (campo _question_) deve ser exibido em um elemento com o atributo `data-testid` com o valor `question-text` para a pessoa que está jogando
  * <details><summary> O texto com as alternativas devem ser exibidos seguindo as regras abaixo:</summary>

    * Os botões das alternativas devem ser elementos irmãos; ou seja, não podem estar dentro de outra tag
    * O elemento com a alternativa correta deve possuir o atributo `data-testid` com o valor `correct-answer`
    * Os elementos com as alternativas incorretas devem possuir o atributo `data-testid` com o valor `wrong-answer-${index}`, com `${index}` iniciando com o valor `0`
    * As alternativas devem estar dentro de uma tag que possui o atributo `data-testid` com o valor `answer-options`
    * As alternativas devem ser exibidas em ordem aleatória
    * Dica: utilize botões (`<button/>`) para as alternativas
  </details>
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se o token inválido é excluído e a aplicação é redirecionada
  * Será validado se as respostas da API são tratadas corretamente
  * Será validado se a categoria da pergunta está presente
  * Será validado se o texto da pergunta está presente
  * Será validado se as alternativas estão presentes
  * Será validado se a quantidade de alternativas corretas é 1
  * Será validado se as alternativas estão posicionadas em ordem aleatória
</details>

---

## 7. Desenvolva o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas

  **PRIORIDADE 2**
  
  Ao responder a pergunta, se a alternativa for correta, deve ficar verde, caso contrário, vermelha

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Utilize a propriedade css `border` com o valor `3px solid rgb(6, 240, 15)` para a alternativa correta.
  * Utilize a propriedade css `border` com o valor `3px solid red` para as alternativas incorretas.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a cor da alternativa correta é "rgb(6, 240, 15)" ao acertar a questão
  * Será validado se a cor das alternativas incorretas é definida como "red" ao acertar a questão.
  * Será validado se a cor da alternativa correta é "rgb(6, 240, 15)" ao errar a questão
  * Será validado se a cor das alternativas incorretas é definida como "red" ao errar a questão
</details>

---

