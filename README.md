# PacMan

Este é um projeto de recriação do clássico jogo **Pac-Man**, desenvolvido em JavaScript puro, HTML5 e CSS. 

## Funcionalidades

- Movimentação do Pac-Man via teclado (WASD / Setas)
- Comportamento básico dos fantasmas
- Colisão entre Pac-Man e paredes
- Detecção de fim de jogo (Game Over)
- Consumo de pontos
- Sistema de pontuação

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Estrutura do Projeto

```
PacMan/
├── images/ # Imagens do jogo (Pac-Man, fantasmas, mapa)
├── scripts/
│ ├── Enemy.js # Lógica de movimentação dos inimigos
│ ├── MovingDirection.js# Direções possíveis
│ ├── Pacman.js # Lógica de movimentação do Pac-Man
│ └── TileMap.js # Mapa e lógica de colisão
├── index.html # HTML principal
└── style.css # Estilização do jogo
```

## Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/Duckbill-Tech/PacMan.git
```

2. Clone o repositório:

```bash
cd PacMan
```

3. Abra o arquivo `index.html` em seu navegador.

Abra no arquivo `index.html`, ou rode um servidor local com Python:

```bash
# Python 3.x
python -m http.server
```

### Sobre o Projeto

Este jogo foi desenvolvido como **projeto de finalização de semestre** do curso de **Ciência da Computação** da **Universidade Anhembi Morumbi**.

O principal objetivo, além da recriação do clássico Pac-Man, foi ensinar conceitos matemáticos fundamentais de maneira lúdica e interativa. A proposta é que os usuários possam entender, por meio do jogo, noções como:

- Representação por matrizes
- Posicionamento em plano cartesiano
- Direções e movimentações em um grid bidimensional

A interação pedagógica está disponível na seção **“Aprenda Aqui”**, acessível diretamente pela interface do jogo.

---

### Aprenda Aqui

Essa seção oferece explicações simples e visuais sobre:

- Como o Pac-Man se movimenta em um mapa representado por matriz
- Como os fantasmas usam direções baseadas em vetores simples
- Como os conceitos de plano cartesiano são usados para colisão e movimentação

Esse recurso visa aproximar o aprendizado de lógica e matemática de estudantes ou curiosos por programação e jogos.


https://trello.com/invite/b/67f84a18a93a5b137c241bc3/ATTI6c03b047969b6560b5e52d351d6bcbd02C6C9A0F/pacman
