const botaoNao = document.getElementById('nao');
const botaoSim = document.getElementById('sim');

botaoNao.addEventListener('mouseover', () => {
  const larguraTela = window.innerWidth - botaoNao.offsetWidth;
  const alturaTela = window.innerHeight - botaoNao.offsetHeight;

  const novoX = Math.random() * larguraTela;
  const novoY = Math.random() * alturaTela;

  botaoNao.style.position = 'absolute';
  botaoNao.style.left = `${novoX}px`;
  botaoNao.style.top = `${novoY}px`;
});

botaoSim.addEventListener('click', () => {
  window.location.href = 'sim.html';
});
