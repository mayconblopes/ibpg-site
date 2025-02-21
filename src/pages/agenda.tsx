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
        <h1>AGENDA 2025</h1>
        <p>
          Esta é a nossa estrutura organizacional e agenda para o ano de 2025.
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
        {/* <p className={styles.tema}>"IBPG, em 2025 cada membro um discípulo."</p> */}
        <p style={{ textAlign: 'center' }}>

          <img
            className={styles.avatar}
            src='/banner_tema_2025.jpg'
            alt='tema para o ano de 2025'
          />
        </p>

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

        <h1>ALVOS DE MISSÕES PARA 2025</h1>
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
        <h2>DISCÍPULO DE PALAVRAS X DISCÍPULO DE AÇÃO</h2>
        <h3>1º Coríntios 4:18-20.</h3>

        <p>
          Esse texto bíblico nos mostra que, desde o início do Cristianismo, 
          há dois tipos de discípulos; o discípulo somente de palavras,  palavras vazias, 
          praticado pelas pessoas soberbas, orgulhosas, sem amor ou compaixão e o discípulo 
          de ação, poder e amor.

        </p>

        <p>
        O DISCÍPULO SOMENTE DE PALAVRAS FAZ MUITAS PROMESSAS, MAS NÃO CUMPRE O PROMETIDO. Esse “DISCÍPULO” promete amizade, visita, bênçãos, oração, companherismo, dedicação, experiências maravilhosas etc., no entanto, estas promessas nunca se cumprem, fazendo com que as pessoas que vivem ao seu redor fiquem decepcionadas, frustradas e, infelizmente, afastadas da igreja e de Deus. Eles têm muita coragem para prometer, mas não têm força nem poder para cumprir o que prometem.

        </p>

        <p>
        O DISCÍPULO SOMENTE DE PALAVRAS FALA MUITO, MAS NÃO FAZ NADA. Esse “DISCÍPULO” diz que vai fazer e acontecer, que fez isso e aquilo, no entanto, não faz nada. Não faz nada para que as pessoas que caminham a passos largos para o inferno possam ter uma esperança, uma mudança de vida. As palavras deste “DISCÍPULO” destróem mais do que constrói, são lobos falantes jamais põe a mão no batente, jamais descem dos seus pedestais para ajudar, para amar ou discipular alguém de fato. O DISCÍPULO SOMENTE DE PALAVRAS  IMPRESSIONA, MAS NÃO AJUDA TRANSFORMAR NINGUÉM. Para que as pessoas não desconfiem que se trata de um “DISCÍPULO” de palavras vazias, eles capricham no falar. Falam muito bonito, voz imponente, sorriso estampado no rosto, fisionomia de vitorioso, porém cheio de julgamento e desprezo por dentro. Alguns usam vestimentas celestiais, colocam símbolos Bíblicos, falam palavras bonitas e decoram versículos bíblicos para aplicar em seus jugamentos terrenos, fazem orações públicas e quase que infinitas, expulsam, repreendem, determinam, mas, infelizmente, não focam na transformação de vidas humanas e em novos discípulos. Alguns até ganham uma bênção aqui e ali, chegam até a trocar de religião, mas não trocam de coração, não mudam de vida, não são convertidos genuínos, não se tornam verdadeiros discípulos porque não há amor neles, não querem fazer discípulos. O DISCÍPULO FIEL E VERDADEIRO É DIFERENTE. Ele é obediente a palavra de Deus (Jo. 14:21). Ele olha com um olhar de amor (não de julgamento) para os que vivem sem Deus (1º Jo. 4:8). Ele sabe perdoar verdadeiramente (Mt. 6:14-15). Ele dá a sua vida por amor ao evangelho (Lc. 9:23). Ele não se envergonha de ser UM DISCÍPULO (Rm. 1:16) (Lc. 9:26).

        </p>

        <p>
        A Palavra do DISCÍPULO genuíno eleva a fé das pessoas (ao contrário do “DISCÍPULO” de palavras vazias, que destrói a fé). Pelas palavras e vida do discípulo genuíno e verdadeiro os pecadores são transformados em novas criaturas e salvos pela fé em Jesus.
O “DISCÍPULO” de palavras vazias destrói a fé das pessoas e não se importa com  ninguém, é um religioso egoísta é só facilita o caminho para aqueles que vivem em direção ao inferno.

        </p>
        
        <p>
        O “DISCÍPULO” genuíno e fiel, é de poder (ele tem poder nas palavras e na vida), produz, aumenta, multiplica e trabalha para transformar o pecador em nova criatura. É um discipulador que sai fazendo discípulos e gerando frutos.
        </p>

        <p>
Qual desses “DISCÍPULOS” queremos ser em 2025? Que você não escolha ser um discípulo de palavras vázias. Mas, que você seja um discípulo reconhecido pelas pessoas na prática da obediência, do amor e do perdão (Jo. 13:35).
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

      {/* reflexao 1º vice presidente */}
      <div
        id='meditacao-1-vice'
        className={styles.palavraPastoral + ' ' + styles.agendaMainStyle}
      >
        <h1>REFLEXÃO – 1º VICE-PRESIDENTE</h1>
        <h2>IBPG: em 2025, cada Membro um Discípulo.</h2>

        <p>
        Para o ano de 2025, estamos sendo encorajados, como igreja Batista em Parque Guarus, a desenvolvermos uma vida Cristã baseada em um dos princípios elementares dos ensinos de Jesus: O discipulado. Nosso tema anual, leva-nos a refletir sobre a seguinte questão: Somos apenas membros ou discípulos? De início, parece até uma pergunta insignificante, onde a resposta tende a ser bem óbvia. Mas fazendo uma leitura um pouco mais profunda, podemos perceber que nos dias atuais, a igreja tem se perdido um pouco em meio a veracidade das escrituras sagradas, onde valores que deveriam ser inegociáveis tem se dissolvido de forma bem sutil. Jesus nos ensinou claramente o que é ser discípulo.

        </p>

        <p>
        Olha o que Ele diz em Lucas 9:23 e 14:27 “E dizia a todos: Se alguém quer vir após mim, negue-se a si mesmo, e tome cada dia a sua cruz, e siga-me.”
        </p>

        <p>
        “E aquele que não carrega sua cruz e não me segue não pode ser meu discípulo.” Jesus nos ensina que ser discípulo é negar-se a si mesmo, carregar a sua cruz e segui-lo verdadeiramente! Não é sobre nós, mas sobre Ele, o nosso Mestre! No Evangelho de Mateus, no capítulo 28, versículo 19 encontramos uma ordem de Jesus: “Portanto ide, fazei discípulos de todas as nações...” 
        </p>
        <p>
        O texto é uma ordenança bem clara aos seus discípulos para fazerem novos discípulos! Exatamente aqui é onde a Igreja atual tem se perdido. A religiosidade tem levado a Igreja a ser composta apenas de membros. Como um clube. Os interesses são particulares, parecendo um comércio, onde as bençãos são consumidas, os cultos são consumidos, a mensagem, os louvores, toda a liturgia passa a funcionar como um “Balcão de comércio” onde um público bem exigente deseja sempre o melhor onde nunca devem ser constrangidos ou exortados, pois se assim for, procuram outra “igreja”. O sangue derramado na Cruz, o sacrifício do cordeiro santo de Deus, a morte do mestre na cruz do calvário para que os nossos pecados fossem apagados e então pudéssemos ser discípulos parece ter sido esquecidos pela Igreja atual! Lembramos até em alguns momentos, como no período dos Cânticos, mas não vivemos de fato. E então, nos tornamos simples membros. O mesmo Jesus afirma em João 8;31 “Se vós permanecerdes na minha palavra, verdadeiramente sereis meus discípulos;” A palavra precisa ser novamente lida e vivida. Precisamos voltar a nos alimentarmos verdadeiramente da palavra, e consequentemente retornarmos a uma vida de verdadeiros discípulos, ou seja, verdadeiros seguidores de Jesus Cristo, onde a sua palavra será por cada membro lida e vivida, e assim cumpriremos Mateus 28:19-20 resultando no avanço sadio da Igreja e fazendo novos discípulos do Senhor Jesus.

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
        <h2>Como ser discipulo nos dias atuais</h2>

        <p>Uma definição mais direta do que é ser discipulo: caminhar com Jesus, aprender de Jesus e cada dia ser mais semelhante a Jesus.Hoje Jesus nos orienta através das Escrituras e do Espirito Santo que habita em nós, glória a Deus por isso, mas preciso lembrar aos leitores que Ser discipulo não é religiosidade, não é frequência aos cultos, não é ativismo, não é estrelismo, não é buscar nosso proprio interesse. </p>
        <p>Gálatas 2:20” logo, já não sou eu quem vive, mas Cristo vive em mim; e esse viver que, agora, tenho na carne, vivo pela fé no Filho de Deus, que me amou e a si mesmo se entregou por mim”. Paulo nos deixou grandes lições do que é ser discipulo, mesmo sendo pecador como nós. Filipenses 1:21” Porquanto, para mim, o viver é Cristo, e o morrer é lucro.” Todos nós conhecemos a história desse homem de Deus.</p>
        <p>Em Atos os discipulos foram chamados pela primeira véz de cristãos, isso foi extraordinário, maravilhoso, pois mesmo em meio a grande perseguição da igreja aqueles irmão foram vistos pelas pessoas como “diferente”, era o AMOR. o FERVOR, o ESPIRITO SANTO atuando de forma tremenda na vida deles, o que refletia no testemunho. Hoje o que me preocupa é que temos visto muitos lideres relativisar e fechar os olhos para muitas coisas na igreja do Senhor, o ser discipulo nos dias atuais está bem diferente do ser discipulo nos dias de Jesus, essa triste realidade tem crescido de forma avassaladora nas igrejas. </p>
        <p>Hoje o que temos visto e ouvido é que “ precisamos avaliar o contexto atual e vê se realmente a “biblia está correta”, talvez não seja isso que ela “ a bíblia” está querendo dizer. A biblia é a revelação de Deus para nós, não têm erro. Fico a pensar!! então o errado nos dias de Jesus, agora não é mais? O pecado nos dias de  Jesus agora não é mais? A idolatria nos dias de Jesus , agora não é mais? A prostituição nos dias de Jesus, agora não é mais? A falsidade nos dias de Jesus , agora não é mais? As falsas doutrinas nos dias de Jesus , agora não é mais? Aos amados leitores e irmãos, ser discipulo nos dias atuais não pode ser diferente dos dias de Jesus, pois Jesus é o mesmo, e ELE vive, e através do Espirito Santo que habita em cada discipulo precisamos viver para anunciar que há salvação em Jesus Cristo, que morreu e ressuscitou por cada um de nós. Romanos 12:1-2 Rogo-vos, pois, irmãos, pelas misericórdias de Deus, que apresenteis o vosso corpo por sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional.2 E não vos conformeis com este século, mas transformai-vos pela renovação da vossa mente, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.</p>

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
        <p>Líder: Kamilly de Paula Galdencio </p>

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
        <h1>CALENDÁRIO DE ATIVIDADES PARA 2025</h1>
        <a
          target='_blank'
          href='/calendario-2025.pdf'
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
