import React from 'react'
import Layout from '../components/Layout'
import * as styles from './agenda.module.css'

export default function AgendaIBPG() {
  return (
    <Layout>
      <div className={styles.floatButton}>
        <a href='#sumario'>sumário</a>
      </div>

      <div className={styles.agendaMainStyle}>
        <h1>AGENDA 2024</h1>
        <p>
          Esta é a nossa estrutura organizacional e agenda para o ano de 2024.
        </p>
      </div>

      {/* funcionários */}
      <div className={styles.funcionarios + ' ' + styles.agendaMainStyle}>
        <h1>FUNCIONÁRIOS</h1>
        <h2>Secretaria</h2>
        <p>Adriani Silva dos Santos</p>

        <h2>Zeladoria</h2>
        <p>Marcos Luis Medeiros Cruz</p>
        <p>Marcos Rodrigues Flor</p>
      </div>

      {/* introdução */}
      <div className={styles.intro + ' ' + styles.agendaMainStyle}>
        <h1>TEMA ANUAL</h1>
        <p className={styles.tema}>"Vivamos o Verdadeiro Amor Em Um Novo Tempo"</p>

        <h1>DIVISA</h1>
        <p className={styles.divisa}>
          "Nisto todos conhecerão que sois meus discípulos, se vos amardes uns
          aos outros.” (João 13.35)
        </p>

        <h1>ATIVIDADES DOMINICAIS</h1>
        <p>09:00 – Escola Bíblica Dominical</p>
        <p>10:00 – Culto de Louvor e Adoração</p>
        <p>18:00 – DCC (Organizações)</p>
        <p>19:30 – Culto de Louvor e Adoração</p>

        <h1>ALVOS DE MISSÕES PARA 2024</h1>
        <p>1. MISSÕES MUNDIAIS – R$10.000,00</p>
        <p>2. MISSÕES ESTADUAIS – R$ 4.000,00</p>
        <p>3. MISSÕES NACIONAIS – R$10.000,00</p>

        <h1>SEMINARISTAS – TEOLOGIA</h1>
        <p>Fabiano Leite Colares</p>
        <p>Rodolfo Santos Gama de Castro</p>
        <p>Luis André Lage de Almeida</p>
      </div>

      {/* sumário */}
      <div
        id='sumario'
        className={styles.sumario + ' ' + styles.agendaMainStyle}
      >
        <h1>SUMÁRIO</h1>
        <ol>
          <li>
            <a href='#palavra-pastoral'>
              Palavra Pastoral – Pastor Fábio S. dos Santo
            </a>
          </li>
          <li>
            <a href='#palavra-pastoral-pr-emerito'>
              Palavra Pastoral – Pr. Emérito Alceir F. Pereira
            </a>
          </li>
          <li>
            <a href='#meditacao-1-vice'>
              Meditação 1º Vice-Presidente – Sem. Luis André
            </a>
          </li>
          <li>
            <a href='#meditacao-2-vice'>
              Meditação 2º Vice-Presidente – Ir. Uarli Santos
            </a>
          </li>
          <li>
            <a href='#diretoria-executiva-e-corpo-diaconal'>
              Diretoria Executiva e Corpo Diaconal
            </a>
          </li>
          <li>
            <a href='#conselho-fiscal-e-administrativo'>
              Conselho Fiscal e Administrativo
            </a>
          </li>
          <li>
            <a href='#diretoria-eclesiastica'>Diretoria Eclesiástica</a>
          </li>
          <li>
            <a href='#conselheiros'>Conselheiros</a>
          </li>
          <li>
            <a href='#escola-biblica'>Escola Bíblica Dominical</a>
          </li>
          <li>
            <a href='#organizacoes'>Organizações</a>
          </li>
          <li>
            <a href='#calendario'>Calendário de Atividades</a>
          </li>
          <li>
            <a href='#membros'>Rol de Membros</a>
          </li>
          <li>
            <a href='#regimento-interno'>Regimento Interno IBPG</a>
          </li>
          <li>
            <a href='#estatuto'>Estatuto da IBPG</a>
          </li>
        </ol>
      </div>

      {/* reflexao presidente */}
      <div
        id='palavra-pastoral'
        className={styles.palavraPastoral + ' ' + styles.agendaMainStyle}
      >
        <h1>PALAVRA PASTORAL</h1>
        <h2>REFLEXÃO - PASTOR PRESIDENTE</h2>
        <h2>Vivamos o verdadeiro amor em um novo tempo</h2>
        <h3>
          "Com isso todos saberão que vocês são meus discípulos, se vocês se
          amarem uns aos outros". João 13:35
        </h3>

        <p>
          A nossa esperança é o Senhor, pois encontramos Nele o verdadeiro amor.
          Estamos iniciando uma nova jornada, um novo tempo, onde é parte
          obrigatória de todo crente em Jesus viver o amor em todas as suas
          ações, levando a Palavra de esperança, alegria, paz e Salvação. É
          necessário pedirmos sempre a Deus o amadurecimento do amor em nós para
          que, como igreja do Senhor possamos fazer a diferença em um mundo que
          vive uma escassez de amor.
        </p>

        <p>
          Supliquemos ao Senhor que Ele venha em socorro das nossas fraquezas no
          trato com as pessoas, porque a qualidade do nosso amor que faz a
          diferença no mundo onde a frieza dos relacionamentos humanos está
          sufocada pelos relacionamentos virtuais. Podemos ter em nossa igreja
          uma membresia farta em talentos e dons espirituais, capaz de realizar
          feitos extraordinários em eventos, celebrações e organizações, mas se
          não houver o amor de nada adianta (1º Coríntios 13:2b), de nada
          adianta sermos uma igreja que carrega em seus adornos uma frase tão
          bonita, porém pouco vivida em muitos de nós (“Uma Igreja que Ama e
          Prega a Verdade”).
        </p>

        <p>
          Só seremos reconhecidos como discípulos de Jesus se realmente existir
          amor entre nós sem acepção de pessoas, a ponto das pessoas de fora da
          igreja verem esse amor sendo praticado e reconhecer em nosso meio os
          verdadeiros discípulos de Jesus. Não cabe a igreja reconhecer os
          discípulos, cabe ao mundo, olhar para a igreja apontando os
          verdadeiros discípulos que expressão um viver de amor para com os
          irmãos. Que em 2024, os incrédulos olhem para a Igreja Batista em
          Parque Guarus e vejam não somente um aglomerado de pessoas, mas um
          grupo crescente de verdadeiros discípulos que vivem o verdadeiro amor
          entre eles, e com autoridade moral, ética e espiritual pregam a
          verdade.
        </p>

        <p className={styles.assinatura}>
          Pastor Fábio S. dos Santos
          <img
            className={styles.avatar}
            src='/prFabio-e-familia.png'
            alt='Foto do Pastor Fábio e sua Familia'
          />
        </p>
      </div>

      <hr />

      {/* reflexao pr emerito */}
      <div
        id='palavra-pastoral-pr-emerito'
        className={styles.palavraPastoral + ' ' + styles.agendaMainStyle}
      >
        <h1>PALAVRA PASTORAL</h1>
        <h2>MEDITAÇÃO - PASTOR EMÉRITO</h2>
        <h2>Vivamos o verdadeiro amor em um novo tempo</h2>
        <h3>
          "Com isso todos saberão que vocês são meus discípulos, se vocês se
          amarem uns aos outros". João 13:35
        </h3>

        <p>
          Este Tema me fez unir a expressão “Verdadeiro Amor”, com o pregar a
          “Verdadeira mensagem do amor de Deus”, demonstrado em Cristo Jesus;
          que se resume em “Igreja que ama e prega a verdade”.
        </p>

        <p>
          O apóstolo João no texto citado como Divisa (13.35), cita o ensino de
          Jesus, que é o Senhor de todos os tempos, e quer que os seus
          verdadeiros discípulos se amem como seus verdadeiros seguidores.
        </p>

        <p>
          Muitas pessoas pensam que teremos um “Novo Tempo”, em um futuro
          distante; outros estão pregando que Ele, Jesus, já está voltando.
          Teremos um novo tempo para pregar o evangelho de Jesus? Que diz a
          Bíblia: “...se hoje ouvirdes a sua voz não endureçais os vossos
          corações. A salvação é para hoje.
        </p>
        <p>
          Fomos criados à imagem e semelhança do Criador. A nossa relação
          primitiva com Deus era de comunhão pura e verdadeira. Deus falava com
          a criatura e era ouvido. O pecado entrou na vida humana e essa
          primeira relação teve fim. Mas Deus prometeu um novo tempo. Ele
          enviaria o seu Filho, Jesus o Salvador.{' '}
        </p>
        <p>
          Hoje, todos nós temos nova oportunidade. Temos o enviado do Pai, o
          Criador, e ele próprio disse: “Eu sou o Bom Pastor, eu dou a minha
          vida em resgate dos pecadores. O apóstolo João escreveu para que as
          igrejas (o povo de Deus) conhecessem e proclamassem a vida eterna:
          “Deus enviou o seu Filho ao mundo não para que condenasse o mundo, mas
          para que o mundo fosse salvo por Ele”. (João 3.17).
        </p>
        <p>
          Esta meditação não é uma mensagem evangelística, pode ser também, mas
          é para toda igreja; é para cada crente. Como verdadeiros discípulos,
          amem e proclamem o verdadeiro amor de Deus em Cristo Jesus.
          Lembremo-nos que o Novo Tempo para nós é hoje, amanhã, o ano inteiro e
          enquanto vivermos aqui na terra sob a graça e misericórdia do Senhor.
        </p>
        <p>
          Finalmente, o crente dedicado à obra do Senhor: vive em comunhão com o
          Mestre;obedece os mandamentos do Senhor; vive uma vida na prática do
          Amor cristão e trabalha para produzir frutos para a glória de Deus.
        </p>

        <p>Tenham um Feliz 2024.</p>

        <p className={styles.assinatura}>
          Pastor Alceir Faria Pereira - Pr. Emérito
          <img
            className={styles.avatar}
            src='/prAlceir-e-familia.png'
            alt='Foto do Pastor Alceir e sua esposa'
          />
        </p>
      </div>

      <hr />

      {/* reflexao 1º vice presidente */}
      <div
        id='meditacao-1-vice'
        className={styles.palavraPastoral + ' ' + styles.agendaMainStyle}
      >
        <h1>REFLEXÃO – 1º VICE-PRESIDENTE</h1>
        <h2>Vivamos o verdadeiro amor em um novo tempo</h2>
        <h3>
          "Com isso todos saberão que vocês são meus discípulos, se vocês se
          amarem uns aos outros". João 13:35
        </h3>

        <p>
          Hoje se fala muito em amor. Na verdade, o mundo de hoje está bem
          desproporcional em relação ao amor que tanto se fala. Há um esforço
          exacerbado da sociedade atual ao falar do amor, mas infelizmente, todo
          esse esforço não é percebido na prática. Vivemos um tempo onde tem se
          enfatizado, por exemplo, campanhas de conscientização relacionadas ao
          feminismo, homofobia e algumas outras questões, onde temos o subtema
          do amor inseridos como pano de fundo. Mas até aqui, falei do amor que
          o mundo sem Jesus vive.
        </p>

        <p>
          Um amor que é anunciado, mas não é vivido. Um amor que defende
          movimentos sem bases bíblicas. O verdadeiro amor que hoje venho
          apresentar, não é esse falso amor que a sociedade diz existir e ser
          verdadeiro. Mas para falarmos do verdadeiro amor, se faz necessário
          trazer Jesus para o nosso contexto. A Bíblia nos fala o seguinte:
        </p>

        <p>
          Amados, amemo-nos uns aos outros; porque o amor é de Deus; e qualquer
          que ama é nascido de Deus e conhece a Deus. Aquele que não ama não
          conhece a Deus; porque Deus é amor. (1 João 4.7-8)
        </p>
        <p>
          O amor agora em questão, é diferente do “amor” que tratamos até agora.
          Existe uma relevância quando trazemos Jesus para o tema amor. Essa
          perícope bíblica nos revela com exatidão alguns fundamentos do amor,
          sendo assim, quero fazer dois destaques:
        </p>
        <p>
          1-Devemos amar uns aos outros; 2-Quem ama é nascido de Deus e conhece
          a Deus.
        </p>
        <p>
          Diante dos destaques apresentados, surge uma pergunta: A igreja hoje
          tem vivido verdadeiramente o Amor? A Igreja é constituída de pessoas
          imperfeitas, regeneradas e dotadas do novo nascimento em Cristo Jesus,
          onde se tornaram filhos de Deus. Sendo assim, o texto lido nos remete
          a definição acima descrita, como Igreja, somos filhos de Deus e por
          isso amamos verdadeiramente o nosso semelhante e principalmente a
          Deus.
        </p>
        <p>
          Mas o que seria amar verdadeiramente a Deus e ao meu próximo? Ir aos
          cultos aos domingos? Cumprimentar o irmão no momento de louvor?
          Queridos, isso precisa levar-nos á uma importante reflexão. Sendo
          filhos de Deus (Igreja) o amor deve ser algo natural exalando dos
          nossos corações. Apóstolo Paulo exortando a Igreja em Roma, diz que o
          amor deve não ser com fingimento. E ainda completa dizendo que
          precisamos amar cordialmente uns aos outros. Que coisa linda!
        </p>

        <p>
          É muito mais que bater nas costas e dizer que vai orar pelo irmão que
          está desempregado, mas é perguntar se precisa de um pacote de arroz. É
          muito mais que marcar presença na EBD ou no culto da noite, mas é
          mover o coração de Deus, é ter relacionamento profundo com o mestre.
        </p>
        <p>
          Amados, que o exemplo de Jesus Cristo, possa ser a nossa bússola para
          avançarmos como Igreja em um tempo tão difícil... a escolha é sua.
          Você esta disposto a viver o verdadeiro amor? Então junte-se a nós e
          de mãos dadas vamos viver um novo tempo!
        </p>

        <p className={styles.assinatura}>
          Luis André Lage de Almeida
          <img
            className={styles.avatar}
            src='/viceAndre-e-familia.png'
            alt='Foto do 1º Vice Presidente Luiz André e sua esposa'
          />
        </p>
      </div>

      <hr />

      {/* reflexao 2º vice presidente */}
      <div
        id='meditacao-2-vice'
        className={styles.palavraPastoral + ' ' + styles.agendaMainStyle}
      >
        <h1>REFLEXÃO – 2º VICE-PRESIDENTE</h1>
        <h2>Vivamos o verdadeiro amor em um novo tempo</h2>
        <h3>
          "Com isso todos saberão que vocês são meus discípulos, se vocês se
          amarem uns aos outros". João 13:35
        </h3>

        <p>Saúdo a Igreja com a graça e a paz do nosso Senhor Jesus Cristo</p>

        <p>
          É motivo de gratidão a Deus em poder iniciar mais um ano sob Seus
          cuidados, pois temos a certeza de que ELE esteve, está e sempre estará
          cuidando do Seu povo. “ Viver o verdadeiro Amor em Um Novo Tempo é
          algo imprescindível para nós, pois uma vez alcançado e transformado
          por esse o Amor, é preciso que seja evidenciado em nossas vidas, em
          nossa caminhada com o Senhor. “ E assim, se alguém está em Cristo, é
          nova criatura; as coisas antigas já passaram; eis que se fizeram
          novas”( 2Co 5:17). Como igreja, precisamos continuar avançando e
          crescendo para glória de Deus.
        </p>

        <p>
          O apóstolo Paulo escrevendo aos Colossenses no capitulo 3:1-2 e 3:17
          nos diz “Portanto, se fostes ressuscitados juntamente com Cristo,
          buscai as coisas lá do alto, onde Cristo vive, assentado à direita de
          Deus. Pensai nas coisas lá do alto, não nas que são aqui da terra.“ E
          tudo que fizerdes, seja em palavra, seja em ação, fazei-o em nome do
          Senhor Jesus, dando por Ele graças a Deus Pai”.
        </p>
        <p>
          omo igreja é motivo de gratidão a Deus pelo ano de 2023 e já
          agradecemos a Deus pelo ano de 2024, pois temos a certeza de que nosso
          Deus continuará cuidando e usando nossas vidas para mostrar ao mundo o
          que é “ Viver o Verdadeiro Amor, Em Um novo Tempo.
        </p>
        <p>Que Deus nos abençoe, e que vivamos para glorificar o nome DELE.</p>

        <p className={styles.assinatura}>
          Uarli Rodrigues dos Santos
          <img
            className={styles.avatar}
            src='/viceUarli-e-familia.png'
            alt='Foto do 2º Vice Presidente Uarli e sua esposa'
          />
        </p>
      </div>

      <hr />

      {/* diretoria executiva e corpo diaconal*/}
      <div
        id='diretoria-executiva-e-corpo-diaconal'
        className={styles.diretoriaExecutiva + ' ' + styles.agendaMainStyle}
      >
        <h1>DIRETORIA EXECUTIVA DA IGREJA 2024/2026</h1>
        <p>Presidente: Pastor Fábio Soares dos Santos</p>
        <p>1º Vice-Presidente: Luis André Lage de Almeida</p>
        <p>2º Vice-Presidente: Uarli Rodrigues dos Santos</p>
        <p>1ª Secretária: Izabella Manhães Soares</p>
        <p>2ª Secretária: Raquel da Silva Ramos Monteiro</p>
        <p>3ª Secretária: Ana Leia Souza Oliveira Barbosa</p>
        <p>1º Tesoureiro: Evaldo Felizardo Ribeiro</p>
        <p>2º Tesoureiro: José Carlos de Oliveira</p>
        <p>3º Tesoureiro: Marcelo Felismindo da Silva</p>
        <h1>MINISTÉRIO DIACONAL</h1>
        <p>Presidente: Arisvaldo Rosa Soares</p>
        <h1>OUTROS MEMBROS DO CORPO DIACONAL</h1>
        <p>José Carlos de Oliveira</p>
        <p>Juarez Peixoto da Silva</p>
        <p>Ruth Maria Ramos de Almeida Gama</p>
        <p>Evaldo Felizardo Ribeiro</p>
        Edilza Rodrigues dos Santos
        <p></p>
        <p>Esmeralda Alves Machado de Oliveira</p>
        <p>Laerte Nunes de Almeida</p>
        <p>Lucas Tavares Soares</p>
        <p>Manassés Silva Mendes</p>
        <p>Maria das Graças Ferreira Inácio</p>
        <p>Marilan Barreto Silva</p>
        <p>Marly Alves Machado</p>
        <p>Jefferson Ferreira Inácio</p>
        <p>Paulo Roberto de Oliveira</p>
        <p>Waulter Pereira Gomes</p>
        <p>Luis Manoel Gaia da Silva</p>
      </div>

      {/* conselho fiscal e administrativo */}
      <div
        id='conselho-fiscal-e-administrativo'
        className={styles.agendaMainStyle + ' ' + styles.conselho}
      >
        <h1>CONSELHO FISCAL</h1>
        <p>Relator: Jefferson Ferreira Inácio</p>
        <p>
          Lúcia Cristina dos Santos Gomes Silva, Ezilda Alves de Souza Flor,
          Arisvalter Rosa Soares e Matheus Vicente Sardinha Fernandes
        </p>

        <h1>CONSELHO ADMINISTRATIVO</h1>
        <ul>
          <li>Diretoria Executiva</li>
          <li>Conselho Fiscal</li>
          <li>Líder de Cada Departamento / Ministério</li>
          <li>Presidente das Organizações</li>
          <li>Ministério Diaconal</li>
          <li>Relatores de Comissões Permanentes</li>
        </ul>
      </div>

      {/* diretoria eclesiástica */}
      <div id='diretoria-eclesiastica' className={styles.agendaMainStyle}>
        <h1>DIRETORIA ECLESIASTICA</h1>
        <h2>Evangelismo</h2>
        <p>Líder: Luiz André Lage de Almeida</p>

        <h2>Promotoras de Missões</h2>
        <p>Franciny Ramos Monteiro</p>
        <p>Lidiane Pereira Braga Rodrigues</p>

        <h2>Escola de Música Louvart</h2>
        <p>Líder: Grasiela Nunes Nolasco</p>

        <h2>Ministério de Libras</h2>
        <p>Líder: Gabriella de Souza Elias</p>
        <h2>Adoração e Louvor</h2>
        <p>Líder: Amellyn Campos Freitas Almeida</p>

        <h2>Ação Social</h2>
        <p>Líder: Juarez Peixoto da Silva</p>

        <h2>Visitação e Integração</h2>
        <p>Líderes e Conselheiros das Organizações</p>

        <h2>Oração</h2>
        <p>Líder: Eloísa Maria Santiago Camilo</p>

        <h2>Patrimônio</h2>
        <p>Líder: Luiz Fernando de Almeida Fernandes</p>

        <h2>Sonoplastia</h2>
        <p>Líder: Caio Nogueira Menezes</p>

        <h2>Transmissão</h2>
        <p>Líder: Rafael de Souza Silva</p>

        <h2>Projeção</h2>
        <p>Líder: Jaiany dos Santos Gomes Silva</p>

        <h2>Publicidade</h2>
        <p>Líder: Maycon Barreto Lopes</p>

        <h2>Ornamentação</h2>
        <p>Líder: Edilza Rodrigues dos Santos</p>

        <h2>Introdutores / Recepcionistas</h2>
        <p>Líder: Márcia de Bastos Fernandes</p>

        <h2>Transporte</h2>
        <p>Líder: Jean Carlos C. dos Santos Oliveira</p>

        <h2>Ministério da Família</h2>
        <p>
          Casal Líder: Fabiano Leite Colares e Cazuza Gomes dos Santos Colares
        </p>

        <h2>Grupo de Integração da 3ª idade (GITI)</h2>
        <p>Líder: Alba Valéria dos Santos Oliveira</p>

        <h2>Curso Dorcas</h2>
        <p>Líderes: Airtes Silva e Paulo Roberto de Oliveira</p>

        <h2>Ginásio Esportivo</h2>
        <p>Gestor: Paulo Roberto de Oliveira</p>

        <h2>Acampamento em Buena</h2>
        <p>Gestor: Paulo Roberto de Oliveira</p>

        <h2>Comissão de Cantina e Salão de Festas</h2>
        <p>
          Relatora: Lúcia Cristina dos Santos G. Silva, Jamil Meirelles Silva,
          Julieta Conceição dos Santos, Ezilda Alves de Souza Flor, Sheila
          Márcia Aurélio de Paula Galdencio.
        </p>
      </div>

      {/* conselheiros */}
      <div id='conselheiros' className={styles.agendaMainStyle}>
        <h1>CONSELHEIROS</h1>
        <h2>União de Juniores</h2>
        <p>
          Adailce Braga Pereira, Rosane Maria Nunes Pontes Ribeiro e Neide Alves
          Monteiro Pessanha e José Carlos de Oliveira
        </p>

        <h2>União de Adolescentes</h2>
        <p>
          Rodolfo Santos Gama de Castro, Lucimara Aurélio de Paula Marques,
          Danielle Barbosa Cordeiro da Silva e Jean Carlos C. dos Santos
          Oliveira
        </p>

        <h2>Embaixadores do rei</h2>
        <p>
          Rodolfo Santos G. de Castro, Caio Nogueira Menezes e Jean Carlos C.
          dos Santos Oliveira.
        </p>

        <h2>Jovens casados</h2>
        <p>Fabiano Leite Colares e Cazuza Gomes dos Santos Colares</p>
      </div>

      {/* escola bíblica dominical */}
      <div id='escola-biblica' className={styles.agendaMainStyle}>
        <h1>ESCOLA BÍBLICA DOMINICAL</h1>
        <h2>Diretoria Geral</h2>
        <p>Tânia Mª Rodrigues Flôr de Oliveira</p>

        <h2>Departamento Infantil</h2>
        <p>Esthéfany da Silva Figueredo</p>

        <h2>PROFESSORES</h2>
        <h2>Maternal / Principiantes / Primários</h2>
        <p>
          Gláucia Verônica Coutinho Nogueira Menezes, Lidiane Pereira Braga
          Rodrigues, Esmeralda Alves Machado de Oliveira, Andréia Adão Penha da
          Silva e Priscila da Silveira Oliveira dos Santos, Josimery Gomes de
          Oliveira e Neuzimar Aurélio de Paula Corrêa Lorena da Silva Figueredo,
          Jaqueline Rosa da Silva e Nilza Silva Martins
        </p>

        <h2>Juniores</h2>
        <p>
          Neide Alves Monteiro Pessanha e Alba Valéria dos Santos Oliveira e Ana
          Júlia Machado de Oliveira.
        </p>

        <h2>Adolescentes - Pr. Alceir Faria Pereira</h2>
        <p>
          Adelaide Rodrigues Celino dos Santos, Edson Magno Monteiro, Amellyn
          Campos Freitas Almeida e Uarli Rodrigues dos Santos
        </p>

        <h2>Jovens - Classes Clarim Celeste e Lírio dos Vales</h2>
        <p>
          Fabiano Leite Colares, Lucimara Aurélio de P. Marques, Lucas Coutinho
          Siqueira, Lúcia Cristina dos S. Gomes Silva.
        </p>

        <h2>Classe de Homens - Odilon Colares</h2>
        <p>
          Juarez Peixoto da Silva, Luis André Lage de Almeida e Júlio César da
          Conceição Marques.
        </p>

        <h2>Classe de Mulheres (1) - Jonila Crispim Pereira</h2>
        <p>
          Eliette Gama de Castro Rangel e Elizabeth Nunes Martins e Ana Leia
          Souza Oliveira Barbosa.
        </p>

        <h2>Classe de Mulheres (2) - Diva Faria de Souza</h2>
        <p>
          Diva Faria de Souza, Leila Regina Castro da S. Lopes Solange Maria da
          Amaral Paes e Ezilda Alves de S. Flor.
        </p>

        <h2>Classe de novos convertidos - Airtes Silva</h2>
        <p>(Não batizados) Airtes Silva e Rodolfo Santos G. de Castro</p>

        <h2>Classe de novos membros - Rui Carlos S. Pessanha</h2>
        <p>
          (doutrinamento) Luiz Fernando de A. Fernandes e Marilan Barreto Silva
        </p>

        <h2>Classe Mista - Marly Alves Machado</h2>
        <p>
          Carla Beatriz Ferreira Inácio de Mattos, Luiz Carlos Pereira de
          Mattos, Márcia de Bastos Fernandes e Aurenio Colares
        </p>

        <h1>DEPARTAMENTO DO LAR</h1>
        <p>
          Eloisa Mª Santiago Camilo, Maria Natalícia Batista Tavares, Luciene da
          Silva Castro Colares, Scheila Viana Nunes, Ailson Silva, Ruth Souza
          Oliveira, Anselmo Martins Filho, Maria Lúcia de Almeida Ramos, Glaucea
          Castro Colares, Nilza Silva Martins, Airtes Silva, Ruth Mª Ramos de
          Almeida Gama, Helenice de Carvalho Soares Maia, Sérgio Silva, Julieta
          Conceição dos Santos, Silvana Mirian Sousa da Silva Figueredo e
          Efigênia Mª Alves de S. de Mattos.
        </p>
      </div>

      {/* organizações */}
      <div id='organizacoes' className={styles.agendaMainStyle}>
        <h1>ORGANIZAÇÕES</h1>
        <h2>Mulher Cristã em Missão - Magnólia Gomes Crispim</h2>
        <p>Coordenadora Geral: Cazuza Gomes dos Santos Colares</p>
        <p>Desperta Débora: Sheila Márcia Aurélio Galdencio</p>

        <h2>MCM - Jovem</h2>
        <p>Coordenadora Geral: Franciny Ramos Monteiro</p>

        <h2>Jovens Casados</h2>
        <p>Líderes: Fabiano Leite Colares e Cazuza Gomes dos Santos Colares</p>
        
        <h2>Mensageiras do Rei</h2>
        <p>Presidente: Maria Clara Santos de Oliveira</p>

        <h2>Sociedade de Homens - Arino Gomes</h2>
        <p>Laerte Nunes de Almeida</p>

        <h2>Grupo de Ação Missionária</h2>
        <p>Presidente: Rodolfo Santos Gama de Castro</p>

        <h2>Embaixadores do Rei - Pr. Antonio João Crispim</h2>
        <p>Embaixador Chefe: Heitor Silva dos Santos</p>

        <h2>UNIÃO DE JUNIORES – Adailce Braga Pereira</h2>
        <p>Presidente: Lívia Oliveira dos Santos</p>

        <h2>
          UNIÃO DE ADOLESCENTES
          <p>Presidente: Kamilly de Paula Galdencio</p>
        </h2>

        <h2>
          UNIÃO DE JOVENS – Pr. Alceir Faria Pereira
          <p>Presidente: Rafael de Souza Silva</p>
        </h2>
      </div>

      {/* calendário de atividades */}
      <div
        id='calendario'
        className={styles.agendaMainStyle + ' ' + styles.calendario}
      >
        <h1>CALENDÁRIO DE ATIVIDADES PARA 2024</h1>
        <a
          target='_blank'
          href='/calendario-2024.pdf'
          style={{ alignSelf: 'center' }}
        >
          Clique aqui
        </a>
      </div>

      {/* rol de membros */}
      <div id='membros' className={styles.agendaMainStyle}>
        <h1>ROL DE MEMBROS</h1>
        <div className={styles.rolMembros}>
          <p>Abner Luiz Castro Lopes </p>
          <p>Adailce Braga Pereira </p>
          <p>Adailda Pereira Braga </p>
          <p>Adão Maciel Barbosa </p>
          <p>Adelaide Rodrigues Celino dos Santos </p>
          <p>Adriana Carvalho de Andrade Gandra Riscado </p>
          <p>Adriani Silva dos Santos </p>
          <p>Ailson Silva </p>
          <p>Airtes Silva </p>
          <p>Alana Silva dos Santos </p>
          <p>Allan Castro da Silva Barreto </p>
          <p>Alba Valéria dos Santos Oliveira </p>
          <p>Alcely da Silva Castro Costa </p>
          <p>Alecsandro Irias Soares </p>
          <p>Alzira Maria Miranda Alves </p>
          <p>Amellyn Campos Freitas Almeida </p>
          <p>Ana Beatriz Oliveira de Abreu Pereira </p>
          <p>Ana Júlia Machado de Oliveira </p>
          <p>Ana Laura Gomes Colares </p>
          <p>Ana Leia Souza Oliveira Barbosa </p>
          <p>Anne Karoline de Souza Barreto Martins </p>
          <p>Andréia Adão Penha da Silva </p>
          <p>Ângela Conceição Matos Mendes </p>
          <p>Angélica da Silva Gonçalves </p>
          <p>Ângelo Márcio Alves Ribeiro </p>
          <p>Anselmo Martins Filho </p>
          <p>Antônio Carvalho Neves </p>
          <p>Antônio Joaquim de Mattos Neto </p>
          <p>Antônio Jorge Rangel </p>
          <p>Anthony Charlles Ferreira de Mattos </p>
          <p>Arisvaldo Rosa Soares </p>
          <p>Arisvalter Rosa Soares </p>
          <p>Arlete Silva Elias </p>
          <p>Armando Gomes de Oliveira Filho </p>
          <p>Arthur Castro da Silva Barreto </p>
          <p>Aurenio Colares </p>
          <p>Bianca Tavares Inácio </p>
          <p>Breno Tavares Inácio </p>
          <p>Caio José Pereira Fernandes </p>
          <p>Caio Nogueira Menezes </p>
          <p>Carla Beatriz Ferreira Inácio de Mattos </p>
          <p>Carly Gonçalves Ferreira Riscado </p>
          <p>Carlos Alberto Coutinho da Rosa </p>
          <p>Carlos Henrique de Siqueira Viana </p>
          <p>Carlos Jonas dos Santos Corrêa </p>
          <p>Cazuza Gomes dos Santos Colares </p>
          <p>Cila Paes da Silva </p>
          <p>Cíntia Ferreira de Almeida Lopes </p>
          <p>Ciro José Pereira Fernandes </p>
          <p>Claudenice da Silva Rosa </p>
          <p>Cremecilda Laurindo </p>
          <p>Cremilda Felismindo da Silva </p>
          <p>Cris da Conceição Ferreira Maciel </p>
          <p>Daniel Celino dos Santos </p>
          <p>Daniel Machado de Oliveira </p>
          <p>Daniele Santana da Silva Aragão </p>
          <p>Danielle Barbosa Cordeiro da Silva </p>
          <p>Darly Silvério Lage de Almeida </p>
          <p>Davi Nogueira Menezes </p>
          <p>Davi Nogueira de Souza </p>
          <p>Deivid Souza da Rosa </p>
          <p>Djanira Rosa Ferreira </p>
          <p>Deladier da Costa </p>
          <p>Denilza Coutinho da Rosa Nogueira </p>
          <p>Denise Vicente Sardinha Fernandes </p>
          <p>Diogo Machado da Silva </p>
          <p>Diva Faria de Souza </p>
          <p>Douglas Carlos dos Santos </p>
          <p>Edilza Rodrigues dos Santos </p>
          <p>Edir Alves da Rocha </p>
          <p>Edson Magno Monteiro </p>
          <p>Eduardo Maciel Gonçalves </p>
          <p>Eleilma Bastos </p>
          <p>Eliane Castro da Silva </p>
          <p>Eliette Gama de Castro Rangel </p>
          <p>Elizabeth Nunes Martins </p>
          <p>Eloisa Dias Vitório Soares </p>
          <p>Eloisa Maria Santiago Camilo </p>
          <p>Elton Nunes Martins </p>
          <p>Ely da Silva Riscado Filho </p>
          <p>Ely Elisa Freitas Lemos </p>
          <p>Emanuel Oliveira Conceição dos Santos </p>
          <p>Emerson Tavares Martins </p>
          <p>Ermídia Ribeiro de Castro Braga </p>
          <p>Esmeralda Alves Machado de Oliveira </p>
          <p>Esthéfany da Silva Figueredo </p>
          <p>Eudócia Correia da Silva </p>
          <p>Eva Maria Maciel Barbosa </p>
          <p>Evaldo Felizardo Ribeiro </p>
          <p>Evandro Alves Francelino </p>
          <p>Ezilda Alves de Souza Flor </p>
          <p>Fabiano Leite Colares </p>
          <p>Fábio dos Santos Silva </p>
          <p>Fábio Ferreira da Silva </p>
          <p>Fábio Luiz de Almeida Fernandes </p>
          <p>Fábio Soares dos Santos (Pastor) </p>
          <p>Felicidade Nogueira Carneiro </p>
          <p>Fernando de Oliveira da Silva </p>
          <p>Filipe Tavares Soares </p>
          <p>Flávia Nunes Martins </p>
          <p>Francimar Gomes </p>
          <p>Franciny Ramos Monteiro </p>
          <p>Gabriel dos Santos Amaral </p>
          <p>Gabriel Souza Oliveira Barbosa </p>
          <p>Gabriella de Souza Elias </p>
          <p>Gazilda Carvalho da Silva </p>
          <p>Geilson Rodrigues Barbosa </p>
          <p>Gélcia da Silva Barreto </p>
          <p>Genivaldo Armando Coutinho </p>
          <p>Gleyson Batista de Sousa </p>
          <p>Geraldo Silva de Souza </p>
          <p>Gesinéia dos Santos de Souza </p>
          <p>Gerucia Batista Bichara </p>
          <p>Gilda Manhães Ferreira Soares </p>
          <p>Gilsinéia Guimarães Zaneth </p>
          <p>Giovana Gandra Riscado </p>
          <p>Glaucéa Castro Colares </p>
          <p>Gláucia Verônica Coutinho Nogueira Menezes </p>
          <p>Gleyce Mara Santana da Silva de Souza </p>
          <p>Gracilda Mendes de Souza </p>
          <p>Grasiela Nunes Nolasco </p>
          <p>Guilherme Fernandes de Souza </p>
          <p>Guilherme Vasconcelos Nunes Martins </p>
          <p>Gustavo dos Santos Gomes </p>
          <p>Heitor Silva dos Santos </p>
          <p>Helenice de Carvalho Soares Maia </p>
          <p>Hélio Flório da Silva </p>
          <p>Hilda Viana Santos </p>
          <p>Isabella Alves Macabú </p>
          <p>Israel Riquete Ferreira </p>
          <p>Ister Almeida Ramos </p>
          <p>Izabella Manhães Soares </p>
          <p>Izailton Cimi Peixoto </p>
          <p>Jaiany dos Santos Gomes Silva </p>
          <p>Jainilson Gomes Dutra </p>
          <p>Jamil Meirelles Silva </p>
          <p>Janaina Santos Silva Amaral </p>
          <p>Jaqueline Prazeres de Souza Elias </p>
          <p>Jaqueline Rosa da Silva </p>
          <p>Jean Carlos Conceição dos Santos Oliveira </p>
          <p>Jefferson Ferreira Inácio </p>
          <p>Jéssica da Silva Santos de Oliveira </p>
          <p>Jéssica Vicente Sardinha Fernandes </p>
          <p>Joanéa de Sousa Henrique </p>
          <p>João Daniel de Souza Martins </p>
          <p>João Vitor Souza Saraiva </p>
          <p>Jocilene dos Anjos Mendes </p>
          <p>Joelma Andrade de Souza </p>
          <p>Joelma Damasceno de Souza Pessanha </p>
          <p>José Carlos de Oliveira </p>
          <p>José Roberto Pereira Rangel Alvarenga </p>
          <p>Josete Alves Peixoto da Silva </p>
          <p>Josimery Gomes de Oliveira </p>
          <p>Juarez Peixoto da Silva </p>
          <p>Julieta Conceição dos Santos </p>
          <p>Júlio César da Conceição Marques </p>
          <p>Juracy Gonçalves Ferreira </p>
          <p>Jussara Nogueira Carneiro </p>
          <p>Kaick Riscado de Figueiredo </p>
          <p>Kayck Gabriel de Paula Galdencio </p>
          <p>Kamilly de Paula Galdencio </p>
          <p>Kely Gonçalves F. Riscado de Figueiredo </p>
          <p>Kethelyn Castro Costa Batista </p>
          <p>Kíssila Gonçalves Ferreira Riscado Pereira </p>
          <p>Laerte Nunes de Almeida </p>
          <p>Larissa Camacho Oliveira </p>
          <p>Larissa de Paula Oliveira </p>
          <p>Leicy Tavares de Pádua </p>
          <p>Leila Regina Castro da Silva Lopes </p>
          <p>Leonardo Faria Pereira </p>
          <p>Lia Jane Gama de Castro </p>
          <p>Lia Márcia Felismindo da Silva Cardoso </p>
          <p>Líbia Alves da Silva </p>
          <p>Lidiane Gomes de Oliveira Nunes </p>
          <p>Lidiane Pereira Braga Rodrigues </p>
          <p>Lidiara Laurindo Ribeiro </p>
          <p>Lilian Pereira Braga </p>
          <p>Liliana Castro da Silva </p>
          <p>Lívia Oliveira Santos </p>
          <p>Lorena da Silva Figueredo </p>
          <p>Lucas Coutinho Siqueira </p>
          <p>Lucas Gonçalves Barbosa </p>
          <p>Lucas Henrique Monteiro Pessanha </p>
          <p>Lucas Tavares Soares </p>
          <p>Luci Maciel Valentim </p>
          <p>Lúcia Cristina dos Santos Gomes Silva </p>
          <p>Lúcia Helena Santos Costa </p>
          <p>Luciane Oliveira de Abreu Ribeiro </p>
          <p>Luciene da Silva Castro Colares </p>
          <p>Lucimara Aurélio de Paula Marques </p>
          <p>Luisa Matos Mendes Soares </p>
          <p>Luis André Lage de Almeida </p>
          <p>Luis Fernando de Almeida Fernandes </p>
          <p>Luis Fernando Oliveira Ribeiro </p>
          <p>Luiz Carlos Pereira de Mattos </p>
          <p>Luiz Manoel Gaia da Silva </p>
          <p>Luiza Riscado Pereira </p>
          <p>Luzinete Eiras de Oliveira Ferreira </p>
          <p>Maísa Freitas Lemos </p>
          <p>Manassés Silva Mendes </p>
          <p>Manoel José Machado </p>
          <p>Marcelo Felismindo da Silva </p>
          <p>Márcia de Bastos Fernandes </p>
          <p>Marcos Rodrigues Flor </p>
          <p>Margarety Alves Batista </p>
          <p>Maria Amélia da Silveira Ferreira </p>
          <p>Maria Clara Santos de Oliveira </p>
          <p>Maria da Glória Santana da Silva </p>
          <p>Maria da Penha Rosa </p>
          <p>Maria da Penha Souza </p>
          <p>Maria das Graças Ferreira Inácio </p>
          <p>Maria Fernanda Gomes Colares </p>
          <p>Maria Helena Inácio da Silva </p>
          <p>Maria José Braga da Silva </p>
          <p>Maria Lúcia de Almeida Ramos </p>
          <p>Maria Lúcia Madeira da Silva </p>
          <p>Maria Madalena da Conceição S. Ribeiro </p>
          <p>Maria Natalícia Batista Tavares </p>
          <p>Maria Olinda Tavares do Amaral </p>
          <p>Mariana Vasconcelos Nunes Martins </p>
          <p>Marilan Barreto </p>
          <p>Marilane Flores Tavares Soares </p>
          <p>Marineide Gomes do Espírito Santo </p>
          <p>Marlene Lemos de Miranda Ribeiro </p>
          <p>Marly Alves Machado </p>
          <p>Marta Cristina Campos de Lima Silva </p>
          <p>Mary Lúcia Vicente Sardinha Pereira </p>
          <p>Matheus Pereira Silva </p>
          <p>Matheus Vicente Sardinha Fernandes </p>
          <p>Maura Nascimento Cabral </p>
          <p>Mayara de Abreu Ribeiro </p>
          <p>Maycon Barreto Lopes </p>
          <p>Michelle Pereira Rangel Alvarenga </p>
          <p>Mírian Rangel Gomes </p>
          <p>Moacir Lírio </p>
          <p>Mônica Gonçalves Barbosa </p>
          <p>Nathália Manhães Soares </p>
          <p>Neide Alves Monteiro Pessanha </p>
          <p>Neuzimar Aurélio de Paula Corrêa </p>
          <p>Nilceli dos Santos Camilo Carpanedo </p>
          <p>Nilza Silva Martins </p>
          <p>Nilzete Silva Rangel </p>
          <p>Norma Suely Paes da Silva </p>
          <p>Obede Leopoldino da Silva </p>
          <p>Onicio Alves Camilo Filho </p>
          <p>Osvaldina dos Santos Camilo </p>
          <p>Ozias Paes Pereira </p>
          <p>Pablo Adão Penha da Silva </p>
          <p>Patrícia Rios da Silva de Almeida </p>
          <p>Paulo Roberto Cardoso </p>
          <p>Paulo Roberto de Oliveira </p>
          <p>Paulo Sérgio Gama Rosa </p>
          <p>Peterson Camacho Oliveira </p>
          <p>Priscila Castro Costa </p>
          <p>Priscila da Silveira Oliveira dos Santos </p>
          <p>Rafael de Souza Silva </p>
          <p>Rafael Medeiros Serafim </p>
          <p>Raquel da Silva Ramos Monteiro </p>
          <p>Raquelly Gonçalves Escocard </p>
          <p>Rebeka Rosa da Silva </p>
          <p>Regina de Fátima Ribeiro Machado da Silva </p>
          <p>Regina Cabral Queiroz </p>
          <p>Reuzenira Ribeiro de Azevedo </p>
          <p>Rita de Cássia Gonçalves Barbosa </p>
          <p>Rodolfo Santos Gama de Castro </p>
          <p>Rosa Maria Vicente Pio Pessanha </p>
          <p>Rosane Maria Nunes Pontes Ribeiro </p>
          <p>Roseli Mendes da Silva </p>
          <p>Rosivaldo de Souza Oliveira </p>
          <p>Ruth Souza Oliveira </p>
          <p>Ruth Maria Ramos de Almeida Gama </p>
          <p>Salvador Alves </p>
          <p>Samira da Mata Cherene </p>
          <p>Samuel Machado de Oliveira </p>
          <p>Sávio Adão Penha da Silva </p>
          <p>Scheila Viana Nunes </p>
          <p>Sebastião Nogueira </p>
          <p>Sérgio Silva </p>
          <p>Sheila Márcia Aurélio de Paula Galdencio </p>
          <p>Silene Vieira Camacho de Oliveira </p>
          <p>Silvana Mirian Sousa da Silva Figueredo </p>
          <p>Silvia Márcia Tavares Martins </p>
          <p>Solange Maria do Amaral Paes </p>
          <p>Tafnes Celino dos Santos </p>
          <p>Talita Tavares de Pádua Inácio </p>
          <p>Tânia Márcia de Oliveira </p>
          <p>Tânia Maria Rodrigues Flôr de Oliveira </p>
          <p>Telsimar Dantas Oliveira da Rosa </p>
          <p>Tereza Cristina da Silva </p>
          <p>Thyago Elvas de Oliveira Souza </p>
          <p>Tiago dos Santos Coutinho </p>
          <p>Tiago Lage de Almeida </p>
          <p>Tiago Miranda Ribeiro </p>
          <p>Uberg Rodrigues dos Santos Braga </p>
          <p>Uarli Rodrigues dos Santos </p>
          <p>Valéria Cristina de Souza Azevedo Oliveira </p>
          <p>Valéria da Silva Pereira Fernandes </p>
          <p>Valéria dos Santos Souza Coutinho </p>
          <p>Vânia Lúcia Carvalho Pessanha </p>
          <p>Vera Lúcia Aurélio de Paula </p>
          <p>Walter José Areas Pessanha </p>
          <p>Waulter Pereira Gomes </p>
          <p>Weverton Fabiano Lopes </p>
          <p>Wiliam Nunes Pereira </p>
          <p>Yasmin Ramos Monteiro </p>
          <p>Zélio Amaral da Silva </p>
          <p>Zenith Alves de Souza </p>
        </div>

        {/* regimento interno */}
        <div
          id='regimento-interno'
          className={styles.agendaMainStyle + ' ' + styles.regimento}
        >
          <h1>REGIMENTO INTERNO</h1>
          <a
            target='_blank'
            href='/regimento-interno.pdf'
            style={{ alignSelf: 'center' }}
          >
            Clique aqui
          </a>
        </div>

        {/* estatuto */}
        <div
          id='estatuto'
          className={styles.agendaMainStyle + ' ' + styles.estatuto}
        >
          <h1>ESTATUTO</h1>
          <a
            target='_blank'
            href='/estatuto.pdf'
            style={{ alignSelf: 'center' }}
          >
            Clique aqui
          </a>
        </div>
      </div>
    </Layout>
  )
}
