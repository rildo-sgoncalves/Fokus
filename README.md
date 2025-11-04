# Fokus — Aplicação de Pomodoro em JavaScript

Projeto desenvolvido durante o treinamento de **JavaScript** da [Alura](https://www.alura.com.br/), com o objetivo de praticar manipulação da árvore DOM, eventos, objetos de áudio e controle de tempo em aplicações web.

---

## Sobre o Projeto

O **Fokus** é uma aplicação web baseada na técnica **Pomodoro**, que ajuda o usuário a gerenciar o tempo de foco e descanso durante o trabalho ou estudos.

O usuário pode:

* Iniciar um timer de foco para se concentrar em suas tarefas.
* Alternar entre pausas curtas e pausas longas.
* Ouvir sons personalizados ao iniciar ou encerrar cada ciclo.

O projeto foi totalmente construído com **HTML**, **CSS** e **JavaScript puro**, sem o uso de frameworks.

---

## Funcionalidades

* **Timer dinâmico:** contagem regressiva para períodos de foco e descanso.
* **Sons interativos:** uso de objetos `new Audio()` para tocar alertas sonoros.
* **Eventos de clique:** interação fluida com botões de iniciar, pausar e resetar.
* **Manipulação do DOM:** atualização em tempo real de elementos HTML com `innerHTML`.
* **Biblioteca de tempo:** controle preciso de intervalos e pausas utilizando funções nativas (`setInterval`, `setTimeout`).

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)

---

## Conceitos Praticados

Durante o desenvolvimento, foram aplicados diversos conceitos fundamentais de JavaScript, incluindo:

* Manipulação da **árvore DOM**
* Alteração dinâmica de conteúdo com `innerHTML`
* Criação e controle de objetos de áudio (`new Audio()`)
* Registro e tratamento de eventos de clique (`addEventListener`)
* Uso de funções assíncronas e temporizadores (`setInterval`, `clearInterval`)
* Organização e refatoração de código para melhor legibilidade

---

## Estrutura do Projeto

```
fokus/
│
├── index.html
├── style.css
├── script.js
└── assets/
    ├── audio/
    │   ├── som-foco.mp3
    │   ├── som-pausa-curta.mp3
    │   └── som-pausa-longa.mp3
    └── img/
        ├── foco.png
        ├── pausa-curta.png
        └── pausa-longa.png
```

---

## Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/fokus.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd fokus
   ```

3. **Abra o arquivo `index.html` diretamente no navegador.**

> Dica: o projeto não necessita de servidor local — basta abrir o arquivo HTML no navegador para testar.

---

## Próximos Passos

* Adicionar personalização de tempos de foco e descanso.
* Salvar preferências do usuário no `localStorage`.
* Criar tema escuro/claro para a interface.

---

## Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de **JavaScript da Alura**.
Sinta-se à vontade para usar, modificar e compartilhar conforme desejar.
