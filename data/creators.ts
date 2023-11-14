interface Creator {
  name: string;
  activity: string;
  image: string;
  phrase: string;
}

const creators: Creator[] = [
  {
    name: 'Alexandre Kira',
    activity: 'Desenvolvimento do front-end',
    image: './../creatorsImgs/alexandre.png',
    phrase: '"Para cada ação, há uma reação igual e oposta... a menos que você esteja programando, aí é um bug mesmo." - Isaac Newton, adaptado'
  },
  {
    name: 'Eduardo Fiedler',
    activity: 'Análise de estratégia e finanças',
    image: './../creatorsImgs/eduardo.png',
    phrase: '"Estudantes de SI não procrastinam, apenas otimizam o tempo para pensar melhor."'
  },
  {
    name: 'Gustavo Sá',
    activity: 'Design de UX/UI',
    image: './../creatorsImgs/gustavo.jpeg',
    phrase: '"Mas é claro que IHC é a melhor disciplina do curso."'
  },
  {
    name: 'Vitória Lopes',
    activity: 'Desenvolvimento do back-end',
    image: './../creatorsImgs/vitoria.png',
    phrase: '"A educação é a arma mais poderosa que você pode usar para mudar o mundo, mas o VS Code também ajuda." - Nelson Mandela, adaptado'
  }
]

export default creators;