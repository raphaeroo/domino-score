export const rules = {
  html: `<h2 id="play">Como jogar o dominó</h2>
  <p>Cada jogador recebe <strong>7 pedras</strong> quando começa a rodada. Se na partida houver menos de 4 jogadores, as pedras restantes ficam no <strong>dorme</strong> para serem compradas.</p>
  <p>O jogo começa pelo jogador que tenha a pedra dobrada mais alta (se jogam 4 pessoas, sempre começará quem tem o seis dôbre ou carrilhão). No caso de que nenhum jogador tenha dobradas, começará o jogador que tenha a pedra mais alta. A partir desse momento, os jogadores realizam suas jogadas, por turnos e no sentido anti-horário.</p>
  <p>O jogador que começa a partida <strong>leva vantagem</strong>. Este é um conceito importante para a estratégia do dominó, pois o jogador ou dupla que começa, normalmente, é o que leva a vantagem durante a partida.</p>
  <h3 id='gameflow'>Desenvolvimento do jogo</h3>
  <p>Cada jogador, no seu turno, deve colocar uma das suas pedras em uma das 2 extremidades abertas, de forma que os pontos de um dos lados coincida com os pontos da extremidade onde está sendo colocada. As dobradas são colocadas de maneira transversal para facilitar sua localização.</p>
  <p>Quando o jogador coloca sua pedra sobre a mesa, seu turno se acaba e passa-se ao seguinte jogador.</p>
  <p>Se um jogador não puder jogar, deverá <strong>“comprar”</strong> do dorme tantas pedras como forem necessárias. Se não houver pedras no dorme, passará o turno ao seguinte jogador.</p>
  <h3 id='finish'>Final de uma rodada</h3>
  <p class='prelista'>A partida continua com os jogadores colocando suas pedras sobre a mesa até que se apresente alguma das seguintes situações:</p>
  <dl>
  <dt><strong>Dominó</strong></dt>
    <dd>Quando um jogador coloca <strong>sua última pedra na mesa</strong>, essa ação é chamada de bater. Quando joga-se <strong>sozinho</strong>, o jogador que ganhou a partida soma os pontos de todos os seus adversários. Jogando <strong>em dupla</strong>, somam-se os pontos de todos os jogadores incluindo os do seu companheiro.</dd>
  </dl>
  <dl>
  <dt><strong>Fecha</strong></dt>
    <dd>Existem casos onde nenhum dos jogadores pode continuar a partida. Isto ocorre quando o número das extremidades saiu 7 vezes antes. Nesse momento se diz que a partida está fechada. Os jogadores contarão os pontos das pedras que ficaram; o jogador ou dupla com menos pontos vencem e somam-se os pontos da maneira habitual.</dd>
  </dl>
  <p>Pode acontecer de você ter os mesmos pontos que o jogador ou a dupla que tem a vantagem, nesse caso, ganha este jogador.</p>
  <h3 id='next'>Seguinte rodada</h3>
  <p>Nas rodadas seguintes, o jogador que começa o jogo é o seguinte da vez. Este pode começar o jogo com a pedra que <strong>quiser</strong> mesmo que não seja uma dobrada.</p>
  <h3 id='gameover'>Fim de jogo</h3>
  <p>O jogo terminará quando um jogador ou dupla conseguir a quantidade de pontos necessários para ganhar.</p>`
}
