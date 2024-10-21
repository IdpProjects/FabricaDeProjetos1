# Boas-vindas ao repositório do projeto de Fabrica de Projetos!

Para realizar o projeto, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por mensagem! 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

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

Nesse projeto, a pessoa que joga deve conseguir completar o jogo e conseguir ver seu placar depois de responder todas as 5 perguntas, além de acessar a tela de configurações e de ranking.

:warning: **Lembrem-se de utilizar os conhecimentos adquiridos ao longo dos últimos projetos nas ferramentas do React como o Router, Link, Redux e testes para ajudá-los a completar os requisitos.** :warning:

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

  * Será validado se ao clicar no botão "Play" o jogo é iniciado salvando um token de jogador
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

## 8. Desenvolva um timer onde a pessoa que joga tem 30 segundos para responder

  **PRIORIDADE 3**
  
  A página deve conter um timer com o tempo máximo de 30 segundos para responder. Caso ultrapasse o tempo, a pergunta é considerada errada

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Caso a pergunta não seja respondida a tempo, a resposta é considerada como errada
  * Respostas incorretas não somam pontos ao placar
  * Um temporizador deve aparecer na tela da pessoa, começando de 30 segundos e indo de forma decrescente até zero
  * Após o tempo se esgotar, todos os botões das alternativas devem ser desabilitados

  :bulb: **Dica**: Lembre-se do `setTimeout` e do `setInterval`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se é possível aguardar 5 segundos e responder a alternativa correta
  * Será validado se ao aguardar mais de 30 segundos para responder, todos botões estão desabilitados
</details>

---

## 9. Crie o placar com as seguintes características:

  **PRIORIDADE 3**
  
  Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Você deve salvar a pontuação **atual** no estado no redux na chave player.score
  * :bulb: Leia a sub-seção Observações técnicas, na seção [:convenience_store: Desenvolvimento](#orientações) para mais detalhes
  * Respostas erradas não devem somar ao placar
  * A fórmula para cálculo dos pontos por pergunta é: `10 + (timer * dificuldade)`, onde timer é o tempo restante no contador de tempo e dificuldade é `hard: 3, medium: 2, easy: 1`, dependendo da pergunta. :bulb: Exemplo: Se no momento da resposta correta o timer estiver contando 17 segundos, e a dificuldade da pergunta é 2 (média), a pontuação deve ser: `10 + (17 * 2) = 44`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

   * Será validado se os pontos são somados ao acertar uma questão
   * Será validado se os pontos não são somados ao errar uma questão
</details>

---

## 10. Crie um botão de `Next` que apareça após a resposta ser dada

  **PRIORIDADE 3**
  
  Deve aparecer um botão de próxima ("Next") pergunta após a resposta ser dada

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O botão "Next" deve possuir o atributo `data-testid` com o valor `btn-next`
  * Ao clicar nesse botão, a próxima pergunta deve aparecer na tela
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se o botão "Next" não existe no início do jogo
  * Será validado se o botão "Next" está presente quando a pergunta é respondida corretamente
  * Será validado se o botão "Next" está presente quando a pergunta é respondida incorretamente
</details>

---

## 11. Desenvolva o jogo de forma que a pessoa jogadora deve responder 5 perguntas no total

  **PRIORIDADE 2**
  
  O jogo deve ser composto por 5 perguntas, onde, a cada nova pergunta, o timer é reiniciado. Após respondê-las, a pessoa que joga deve ser redirecionada para a tela de feedback

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A cada nova pergunta o temporizador deve ser reiniciado para 30 segundos
  * Após a quinta pergunta, o botão "Next" deve redirecionar a pessoa para a tela de _Feedback_
  * Para perguntas com type:"boolean", mostrar somente 2 campos (um para cada resposta possível)
  * Para perguntas com type:"multiple", mostrar a quantidade necessária de campos (um para cada resposta possível)
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao clicar no botão "Próxima", uma nova pergunta é exibida
  * Será validado se os pontos são somados de forma correta ao acertar todas as respostas
  * Será validado se os pontos são somados de forma correta ao errar todas as respostas
  * Será validado se a pessoa usuária é redirecionada para a tela de _feedback_ após a quinta pergunta
</details>

---

## Tela de feedback

>Obs: É necessário que a página de Feedback tenha o caminho `src/pages/Feedback.js`

## 12. Desenvolva o header de _feedback_ que deve conter as informações da pessoa jogadora

  **PRIORIDADE 2**
  
  A tela de feedback deve conter as informações da pessoa que joga, incluindo o placar com o valor referente ao desempenho no jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo `data-testid` com o valor `header-profile-picture`
  * O nome da pessoa em um elemento que deve possuir o atributo `data-testid` com o valor `header-player-name`
  * O placar com o valor **atual** em um elemento que deve possuir o atributo `data-testid` com o valor `header-score`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a imagem do Gravatar está presente no header
  * Será validado se o nome da pessoa está presente no header
  * Será validado se o placar com o valor atual está presente no header
</details>

---

## 13. Crie a mensagem de _feedback_ para ser exibida a pessoa usuária

  **PRIORIDADE 1**
  
  A tela de feedback deve exibir uma mensagem relacionada ao desempenho da pessoa que jogou

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A mensagem deve ser "Could be better..." caso a pessoa acerte menos de 3 perguntas
  * A mensagem deve ser "Well Done!" caso a pessoa acerte 3 perguntas ou mais
  * O elemento da mensagem de _feedback_ deve possuir o atributo `data-testid` com o valor `feedback-text`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao acertar menos de 3 perguntas a mensagem de _feedback_ é "Could be better..."
  * Será validado se ao acertar 3 perguntas a mensagem de _feedback_ é "Well Done!"
  * Será validado se ao acertar mais de 3 perguntas a mensagem de _feedback_ é "Well Done!"
</details>

---

## 14. Exiba as informações relacionadas aos resultados obtidos para a pessoa usuária

  **PRIORIDADE 1**
  
  A tela de feedback deve exibir informações sobre o desempenho da pessoa, como o placar final e o número de perguntas que acertou

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O placar final deve ser mostrado em um elemento com o atributo `data-testid` com o valor `feedback-total-score`
  * O número de perguntas que a pessoa acertou deve ser exibido em um elemento com o atributo `data-testid` com o valor `feedback-total-question`
  * Os elementos com os `data-testid` devem possuir apenas o número
  * No `estado do redux` as chaves score e assertions devem ser do tipo number
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se o número exibido é correto quando a pessoa usuária não acerta nenhuma pergunta
  * Será validado se o número exibido é correto quando a pessoa usuária acerta 2 perguntas
  * Será validado se o número exibido é correto quando a pessoa usuária acerta 4 perguntas
</details>

---

## 15. Crie a opção para a pessoa jogadora poder jogar novamente

  **PRIORIDADE 3**
  
  A pessoa terá a opção de jogar novamente ("Play Again") que, ao ser clicada, levará para a tela de inicial

<details>
  <summary><strong> Observações técnicas:</strong></summary>
  
  * Ao clicar no botão "Play Again", a pessoa deve ser redirecionada para a tela de início (login)
  * O botão para "Play Again" deve possuir o atributo `data-testid` com o valor `btn-play-again`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se a pessoa é redirecionada para tela inicial ao clicar no botão "Play Again"
</details>

---

## 16. Crie a opção para a pessoa jogadora poder visualizar a tela de _ranking_

  **PRIORIDADE 3**
  
  Deve existir um botão que redirecione a pessoa para a tela de ranking

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Ao clicar no botão "Ranking", a pessoa deve ser redirecionada para a tela de _ranking_
  * O botão para ir para a tela de _ranking_ deve possuir o atributo `data-testid` com o valor `btn-ranking`
  * A tela de _ranking_ deve possuir um título com o atributo `data-testid` contendo o valor `ranking-title`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao clicar no botão "Ranking" a pessoa é redirecionada para tela de ranking
</details>

---

## 17. Desenvolva testes para atingir 90% de cobertura da tela de Feedbacks

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Feedbacks com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 2**
  
  Cobertura de testes da tela de Feedbacks

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Feedbacks tenha o caminho `src/pages/Feedback.js`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido os seguintes resultados:
      * `% Funcs` e `% Lines` da linha `Feedback` é maior ou igual a 90.
</details>

---

## Tela de ranking

>Obs: É necessário que a página de Ranking tenha o caminho `src/pages/Ranking.js`

## 18. Crie um botão para ir ao início

  **PRIORIDADE 2**
  
  O botão deve redirecionar a pessoa para a tela de inicial (login)

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Esse botão deve possuir o atributo `data-testid` com o valor `btn-go-home`
  * Esse botão deve enviar a pessoa para o início (tela de preenchimento dos dados)
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao clicar no botão a pessoa volta para a tela inicial
</details>

---

## 19. Crie o conteúdo da tela de _ranking_

  **PRIORIDADE 2**
  
  A tela de ranking deve possuir uma lista com a imagem, nome e pontuação das pessoas que jogaram e deve ficar armazenado no localStorage

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar, nome e pontuação das pessoas que jogaram em ordem decrescente (da maior pontuação para a menor)
  * Os elementos com os nomes das pessoas que jogaram devem possuir o atributo `data-testid` com o valor `player-name-${index}`, onde `${index}` é iniciado em zero
  * Os elementos com as pontuações das pessoas que jogaram devem possuir o atributo `data-testid` com o valor `player-score-${index}`, onde `${index}` é iniciado em zero
  * O ranking deve ser armazenado no navegador através do `localStorage`.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se existe uma pessoa no _ranking_
  * Será validado se existem duas pessoas no _ranking_
  * Será validado se o _ranking_ é ordenado pela pontuação
</details>

---

## 20. Desenvolva testes para atingir 90% de cobertura da tela de Ranking

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Ranking com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 2**
  
  Cobertura de testes da tela de Ranking

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Ranking tenha o caminho `src/pages/Ranking.js`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido os seguintes resultados:
      * `% Funcs` e `% Lines` da linha `Ranking` é maior ou igual a 90.
</details>

---

## Testes da tela de jogo

## 21. Desenvolva testes para atingir 90% de cobertura da tela de Jogo

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Jogo com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 3**
  
  Cobertura de testes da tela de Jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Jogo tenha o caminho `src/pages/Game.js`
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido os seguintes resultados:
      * `% Funcs` e `% Lines` da linha `Game` é maior ou igual a 90.
</details>

---

## Testes de cobertura da aplicação

## 22. Desenvolva testes para atingir 95% de cobertura total

> :bulb: Obs: Neste requisito vamos cobrir a nossa aplicação com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 3**
  
  Cobertura de testes da aplicação

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  * Será validado se ao executar `npm run test-coverage` é obtido o seguinte resultado:
      * `% Branch` da linha `All files` é maior ou igual a 95.
</details>

---

# Requisitos não avaliativos

## Tela de configurações

### 23. Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API;

---

### 24. Ao mudar o valor do dropdown dificuldade, apenas perguntas da dificuldade selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave difficulty no retorno da API;

---

### 25. Ao mudar o valor do dropdown tipo, apenas perguntas do tipo selecionado devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave type no retorno da API.

***Obs: A maneira como a API deve ser estruturada segue o seguinte modelo: https://opentdb.com/api_config.php***


# Requisitos do Projeto

Este documento lista os principais requisitos para o desenvolvimento da página modularizada e responsiva em React.

## 1. Estrutura do Projeto
- **Tecnologia:** React
- **Arquitetura:** Componentes modulares
- **Responsividade:** Layout responsivo para diversos tamanhos de tela (desktop, tablet e mobile)

## 2. Sessões da Página

### 2.1. Primeira Sessão: Pergunta de Localização do Usuário
- **Descrição:** Perguntar ao usuário sua localização atual para oferecer uma experiência personalizada.
- **Comportamento:**
  - O usuário é solicitado a compartilhar sua localização via API de geolocalização do navegador.
  - Caso o usuário não permita a localização, exibir uma mensagem solicitando que ele insira manualmente sua localidade.

### 2.2. Segunda Sessão: Informações da Carreta da Defensoria
- **Descrição:** Exibir informações sobre a carreta da defensoria com base na localização do usuário.
- **Comportamento:**
  - **Caso 1:** Se o usuário estiver na mesma localidade da carreta, exibir um `span` com uma foto da carreta.
  - **Caso 2:** Se o usuário estiver em uma localidade diferente da carreta, exibir um `span` com informações sobre onde a carreta está atualmente e os locais pelos quais ela passará.
  - Incluir um botão que leve à próxima sessão.

### 2.3. Terceira Sessão: Carrossel de Personas e Problemas
- **Descrição:** Apresentar um carrossel com diferentes personas e os problemas que os levam a procurar a defensoria.
- **Comportamento:**
  - O usuário pode escolher com qual problema/persona ele mais se identifica, em um estilo de "Tinder de problemas".
  - Após a escolha, exibir um `popup` com uma lista de documentos e informações úteis que a pessoa precisa levar para a defensoria.

### 2.4. Quarta Sessão: Notícias da Defensoria
- **Descrição:** Página de notícias relacionadas à defensoria pública.
- **Comportamento:**
  - Exibir uma lista de notícias mais recentes, com links para cada uma delas.
  - O design deve ser responsivo, adaptando-se bem para visualização em dispositivos móveis.

## 3. Funcionalidades Gerais
- **API de Geolocalização:** A página deve usar a API de geolocalização do navegador para obter a localização do usuário.
- **Design Responsivo:** A página deve ser completamente responsiva, adaptando-se a diferentes tamanhos de tela.
- **Carrossel Interativo:** O carrossel de personas deve ser fácil de usar, com a funcionalidade de swipe em dispositivos móveis.
- **Popup Informativo:** O popup que exibe as informações sobre o que a pessoa precisa levar para a defensoria deve ser de fácil navegação e conter todas as informações necessárias.

## 4. Tecnologias Utilizadas
- **Frontend:**
  - React.js para a criação da interface de usuário modularizada.
  - Styled-components ou CSS modules para estilização dos componentes.
  - React Router para navegação entre as sessões.
- **APIs Externas:**
  - API de Geolocalização para determinar a localização do usuário.
  - API de Notícias (opcional) para fornecer atualizações sobre a defensoria.

## 5. Requisitos Não Funcionais
- **Desempenho:** A página deve carregar rapidamente em todas as plataformas.
- **Acessibilidade:** Seguir as melhores práticas de acessibilidade, como uso adequado de `aria-labels` e navegação por teclado.
- **Segurança:** Garantir que os dados de localização do usuário sejam tratados de forma segura e não sejam armazenados sem o consentimento do mesmo.

## 6. Próximos Passos
- Implementar um protótipo funcional das primeiras três sessões.
- Revisar o design e a usabilidade com base no feedback dos usuários e da equipe.
