import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MarvelService {

    public character: any = null;

    constructor() { }

    public getCharacters(): Observable<any[]> {

        const characters = [
            {
                "id": 1,
                "name": "Capitão América",
                "realName": "Steven Grant Rogers",
                "description": "Capitão America (Captain America, em inglês), é o alter ego de Steve Rogers, um personagem de HQ (História em Quadrinhos) da Marvel Comics. Foi criado por Joe Simon e Jack Kirby, apareceu pela primeira vez em Captain America Comics #1 (Março de 1941).O Capitão América foi o maior de uma onda de super-heróis que surgiram sob a bandeira do patriotismo norte-americano e que foram apresentados ao mundo pelas companhias de Histórias em Quadrinhos, durante os anos da Segunda Guerra Mundial",
                "slug": "capitao-america",
                "avatar": "assets/images/captain-america-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Capitão América - O Filme",
                            "year": "1990",
                            "description": "Durante a 2ª Guerra Mundial o americano Steve Rogers (Matt Salinger) se submete a uma experiência comandada por Therese Vaselli (Carla Cassola), uma cientista que fugiu da Itália por não aceitar os métodos utilizados. Steve se torna um super soldado, surgindo o Capitão América. Entretanto Vaselli é morta e o segredo de transformar um simples humano num soldado excepcional morre com ela, o que frustra o plano de criar vários super soldados. Ao se defrontar com o Caveira Vermelha (Scott Paulin), um hiper soldado criado pelos nazistas, o Capitão América é preso num foguete, que tem como alvo a Casa Branca. O herói desvia a trajetória, no entanto vai parar no Alasca, onde fica congelado. Nos anos 90 ele acorda e descobre que o Caveira é Tadzio de Santis, que quer seqüestrar o presidente Tom Kimball (Ronny Cox) e usar uma técnica revolucionária para tomar o lugar de Kimball e se tornar o novo presidente dos Estados Unidos.",
                            "image": "assets/images/captain-america-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 2,
                "name": "Hulk",
                "realName": "Robert Bruce Banner",
                "description": "O Hulk, por vezes referido como O Incrível Hulk (The Incredible Hulk, no original em inglês) é um personagem de HQ (História em Quadrinhos), da Marvel Comics. Foi criado pelo roteirista Stan Lee (1922-2018) e pelo desenhista Jack Kirby (1917-1994), apareceu pela primeira vez na revista The Incredible Hulk n°1, lançada no mercado americano pela Marvel Comics em maio de 1962. Hulk é o selvagem e poderoso alter-ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar de uma bomba por ele desenvolvida. Este adolescente, Rick Jones, tornou-se companheiro de Banner, ajudando-o a manter o Hulk sob controle e mantê-lo longe dos ataques dos militares, que viam a criatura como uma ameaça. ",
                "slug": "hulk",
                "avatar": "assets/images/hulk-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Hulk",
                            "year": "2003",
                            "description": "Bruce Banner (Eric Bana) é um cientista que teve problemas em sua infância: ele foi adotado e passou por uma experiência traumática após a morte de seus pais, a qual não lembra de forma alguma. Juntamente com ele trabalha Betty Ross (Jennifer Connelly), sua grande paixão. Ambos trabalham em um projeto que envolve a reconstituição de tecidos através da radiação gama, um projeto o qual o Exército está bastante interessado. Ao consertar o gammasphere, aparelho usado para aplicar a radiação gama em animais, um dos cientistas do projeto o aciona acidentalmente. Em uma tentativa desesperada de salvar o amigo, Banner se atira defronte o gammasphere e absorve a radiação gama lançada. Inexplicavelmente o acidente não o mata, fazendo com que permaneça durante algum tempo no hospital sob observação. É quando a reaparição de seu pai biológico, o qual considerava morto, revela segredos sobre o passado de Bruce Banner o qual nem ele mesmo conhecia, ao mesmo tempo em que precisa lidar com estranhas modificações em seu corpo a cada vez que fica com raiva.",
                            "image": "assets/images/hulk-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 3,
                "name": "Homem-Aranha",
                "realName": "Peter Benjamin Parker",
                "description": 'O Homem-Aranha (Spider-Man no original em inglês) alter-ego de Peter Parker, é um personagem de HQ (História em Quadrinhos), da Marvel Comics. Foi criado pelo editor/escritor Stan Lee e pelo escritor/artista Steve Ditko, apareceu pela primeira vez no livro de antologia Amazing Fantasy #15 (Agosto de 1962). Peter Parker é um órfão, que foi educado e criado pela sua Tia May e o seu Tio Ben em Nova Iorque, e, enquanto adolescente, tem de lidar com as lutas diárias normais da sua idade, em adição àquelas que tem como combatente do crime mascarado. Para combater os seus inimigos, os criadores deram-lhe super força e agilidade, a habilidade de conseguir aderir na maior parte das superfícies, a possibilidade de disparar teias de aranha através de mecanismos montados nos pulsos (inventados por ele próprio, a que ele chama lança-teia - web-shooters) e consegue reagir pré cognitivamente ao perigo com o seu "sentido-aranha" ("spider-sense"). Os seus poderes foram adquiridos após ter sido mordido por uma aranha radioativa.',
                "slug": "homem-aranha",
                "avatar": "assets/images/homem-aranha-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Homem-Aranha",
                            "year": "2002",
                            "description": "Peter Parker (Tobey Maguire) é um jovem estudioso que vive com seus tios, Ben (Cliff Robertson) e May (Rosemary Harris), desde que seus pais faleceram. Inteligente e com um grande interesse pela ciência, Peter tem dificuldade em se relacionar com seus colegas, por ser tímido e por eles o considerarem um nerd. Até que, em uma demonstração científica, um acidente inesperado faz com que aranha modificada geneticamente pique Peter. A partir de então seu corpo é quimicamente alterado pela picada da aranha, fazendo com que Peter possa escalar paredes e tetos, emitir pelos punhos um fluido ultra-resistente semelhante à uma teia de aranha e passe a ter um sentido de aranha, que o avisa sempre que há perigo por perto, além de superforça e visão ampliada.",
                            "image": "assets/images/spider-man-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 4,
                "name": "Wolverine",
                "realName": "James Howlett",
                "description": "Wolverine (nascido James Howlett, conhecido como Logan) é um personagem de HQ (História em Quadrinhos), da Marvel Comics, principalmente em associação com os X-Men. Ele é um mutante que possui sentidos afiados, capacidades físicas aprimoradas, habilidade regenerativa poderosa conhecida como fator de cura e três garras retráteis ​​de osso em cada mão.",
                "slug": "wolverine",
                "avatar": "assets/images/wolverine-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": " X-Men Origins: Wolverine",
                            "year": "2009",
                            "description": "A Equipe X é formada apenas por mutantes, tendo fins militares. Entre seus integrantes estão Logan (Hugh Jackman), o selvagem Victor Creed (Liev Schreiber), o especialista em esgrima Wade Wilson (Ryan Reynolds), o teleportador John Wraith (Will i Am), o atirador David North (Daniel Henney), o extremamente forte Fred J. Dunes (Kevin Durand) e ainda Bradley (Dominic Monaghan), que manipula eletricidade. No comando está William Stryker (Danny Huston), que envolve alguns componentes do grupo no projeto Arma X, um experimento ultra-secreto. Entre eles está Logan, que precisa ainda lidar com o desfecho de seu romance com Raposa Prateada (Lynn Collins).",
                            "image": "assets/images/wolverine-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 5,
                "name": "Homem de Ferro",
                "realName": "Anthony 'Tony' Stark",
                "description": "Homem de Ferro (Iron Man, em inglês) é um personagem de HQ (História em Quadrinhos), da Marvel Comics. Sua identidade verdadeira é a do empresário e bilionário Tony Stark, que usa armaduras de alta tecnologia no combate ao crime. Foi criado em 1963 pelo escritor Stan Lee, o roteirista Larry Lieber, e os desenhistas Jack Kirby e Don Heck. O objetivo de seu criador, Stan Lee, era aceitar o desafio de fazer um personagem ser odiado e depois amado pelo público, assim, criou um dos super heróis mais marcantes de todos os tempos.",
                "slug": "homem-de-ferro",
                "avatar": "assets/images/homem-de-ferro-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Homem de Ferro",
                            "year": "2008",
                            "description": "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro. A partir de então ele passa a usá-la para combater o crime, sob o alter-ego do Homem de Ferro.",
                            "image": "assets/images/homem-de-ferro-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 6,
                "name": "Thor",
                "realName": "Thor",
                "description": "Thor é um personagem fictício que aparece nas histórias em quadrinhos publicadas pela Marvel Comics. Baseado no deus Thor da Mitologia Nórdica, ele foi criado por Stan Lee, Larry Lieber e Jack Kirby.Estreando na Era de Prata dos quadrinhos, o personagem apareceu pela primeira vez em Journey into Mystery #83 (agosto de 1962). Ele é um membro fundador da equipe de heróis Vingadores.",
                "slug": "thor",
                "avatar": "assets/images/thor-movie.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Thor",
                            "year": "2011",
                            "description": "Thor (Chris Hemsworth) estava prestes a receber o comando de Asgard das mãos de seu pai Odin (Anthony Hopkins) quando forças inimigas quebraram um acordo de paz. Disposto a se vingar do ocorrido, o jovem guerreiro desobedece as ordens do rei e quase dá início a uma nova guerra entre os reinos. Enfurecido com a atitude do filho e herdeiro, Odin retira seus poderes e o expulsa para a Terra.",
                            "image": "assets/images/thor-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 7,
                "name": "Homem-Formiga",
                "realName": "Henry Jonathan Pym",
                "description": 'Dr. Henry "Hank" Pym é um personagem fictício da Marvel Comics e foi o primeiro Homem-Formiga, criado por Stan Lee, Larry Lieber e Jack Kirby, sem créditos atribuídos oficialmente, contudo. Ele é o inventor das partículas Pym, que dão aos seus usuários o poder de controlar sua massa e altura. Foi membro fundador e idealizador do grupo Vingadores nos quadrinhos e já usou os codinomes de Gigante, Golias e Jaqueta Amarela. A primeira aventura do personagem ("Um homem no formigueiro") foi na revista Tales To Astonish número 27 (janeiro de 1962), quando numa história que deveria ser única.',
                "slug": "homem-formiga",
                "avatar": "assets/images/homem-formiga-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Homem-Formiga",
                            "year": "2015",
                            "description": "Dr. Hank Pym (Michael Douglas) é o inventor da fórmula/ traje que permite o encolhimento. Anos depois da descoberta, precisa impedir que seu ex-pupilo Darren Cross (Corey Stoll) consiga replicar o feito e vender a tecnologia para HYDRA. Dr. Pym escolhe o trambiqueiro Scott Lang (Paul Rudd) à usar o traje do Homem-Formiga. Lang, que acabou de sair da prisão e está com dificuldade de achar um trabalho honesto, aceita.",
                            "image": "assets/images/homem-formiga-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 8,
                "name": "Pantera Negra",
                "realName": "T'Challa",
                "description": "Pantera Negra (em inglês: Black Panther)  é um personagem de HQ (História em Quadrinhos), da Marvel Comics, cuja identidade secreta é a de T'Challa, rei de Wakanda, um reino fictício na África. O personagem foi criado pelo escritor e editor Stan Lee e pelo escritor e ilustrador Jack Kirby, aparecendo pela primeira vez em Fantastic Four # 52 (julho de 1966) na Era de Prata das histórias em quadrinhos. Além de possuir habilidades aprimoradas alcançadas através de um antigo ritual de Wakanda, T'Challa também conta com seu intelecto genial, treinamento físico rigoroso, habilidade em artes marciais, acesso a tecnologias avançadas e riqueza para combater seus inimigos. ",
                "slug": "pantera-negra",
                "avatar": "assets/images/black-panther-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Pantera Negra",
                            "year": "2018",
                            "description": "Após a morte do rei T'Chaka (John Kani), o príncipe T'Challa (Chadwick Boseman) retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo. T'Challa logo recebe o apoio de Okoye (Danai Gurira), a chefe da guarda de Wakanda, da irmã Shuri (Letitia Wright), que coordena a área tecnológica do reino, e também de Nakia (Lupita Nyong'o), a grande paixão do atual Pantera Negra, que não quer se tornar rainha. Juntos, eles estão à procura de Ulysses Klaue (Andy Serkis), que roubou de Wakanda um punhado de vibranium, alguns anos atrás.",
                            "image": "assets/images/black-panther-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 9,
                "name": "Doutor Estranho",
                "realName": "Stephen Vincent Strange",
                "description": "Doutor Stephen Vincent Strange, mais conhecido como Doutor Estranho, é um super-herói fictício muito poderoso que aparece nos quadrinhos americanos publicados pela Marvel Comics. Criado pelo desenhista Steve Ditko e pelo roteirista Stan Lee, o personagem apareceu pela primeira vez em Strange Tales #110 (julho de 1963). Doutor Estranho serve como o Mago Supremo, o principal protetor da Terra contra ameaças mágicas e místicas. Inspirado por histórias de magia negra e o programa de rádio Chandu, the Magician, Strange foi criado durante a Era de Prata das histórias em quadrinhos americanas para trazer um tipo diferente de personagem e temas de misticismo para a Marvel Comics.",
                "slug": "doutor-estranho",
                "avatar": "assets/images/doutor-estranho-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Doutor Estranho",
                            "year": "2018",
                            "description": "Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida como neurocirurgião. Sua vida muda completamente quando sofre um acidente de carro e fica com as mãos debilitadas. Devido a falhas da medicina tradicional, ele parte para um lugar inesperado em busca de cura e esperança, um misterioso enclave chamado Kamar-Taj, localizado em Katmandu. Lá descobre que o local não é apenas um centro medicinal, mas também a linha de frente contra forças malignas místicas que desejam destruir nossa realidade. Ele passa a treinar e adquire poderes mágicos, mas precisa decidir se vai voltar para sua vida comum ou defender o mundo.",
                            "image": "assets/images/doutor-estranho-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 10,
                "name": "Capitã Marvel",
                "realName": "Carol Susan Jane Danvers",
                "description": "Carol Susan Jane Danvers é uma super-heroína fictícia que aparece nos quadrinhos americanos publicados pela Marvel Comics. Criado pelo roteirista Roy Thomas e pelo desenhista Gene Colan, Danvers apareceu pela primeira vez como uma oficial da Força Aérea dos Estados Unidos e colega do super-herói kree Mar-Vell em Marvel Super-Heroes #13 (março de 1968).[1] Mais tarde, Danvers tornou-se a primeira personagem a usar a alcunha Ms. Marvel em Ms. Marvel #1 (janeiro de 1977) depois que seu DNA foi fundido com o de Mar-Vell durante uma explosão, dando-lhe poderes sobre-humanos. Estreando na Era de prata das histórias em quadrinhos americanas, a personagem foi caracterizada em uma série solo no final dos anos 1970, antes de se associar com as equipes de super-heróis, Os Vingadores e X-Men.",
                "slug": "capita-marvel",
                "avatar": "assets/images/capita-marvel-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Capitã Marvel",
                            "year": "2019",
                            "description": "Em Capitã Marvel, Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana, que, sem se lembrar de sua vida na Terra, é recrutada pelos Kree para fazer parte de seu exército de elite. Inimiga declarada dos Skrull, ela acaba voltando ao seu planeta de origem para impedir uma invasão dos metaformos, e assim vai acabar descobrindo a verdade sobre si, com a ajuda do agente Nick Fury (Samuel L. Jackson) e da gata Goose.",
                            "image": "assets/images/capita-marvel-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 11,
                "name": "Demolidor",
                "realName": "Matthew 'Matt' Michael Murdock",
                "description": "Demolidor (como é conhecido no Brasil; Daredevil no original em inglês) é um personagem fictício que aparece nas histórias em quadrinhos publicadas pela Marvel Comics. Foi criado pelo escritor/editor Stan Lee e pelo artista Bill Everett, com algumas contribuições não especificadas por Jack Kirby. O Demolidor apareceu pela primeira vez em Daredevil #1 (Abril de 1964). A alcunha do personagem é ‘o Homem Sem Medo’ (The Man Without Fear).A história de origem do Demolidor acontece em Hell's Kitchen, um bairro de Nova Iorque, onde a criança Matthew ‘Matt’ Murdock salva um homem de idade de um caminhão em andamento que continha uma carga radioativa. Como consequência do acidente a carga começa a verter do caminhão, cegando Murdock.",
                "slug": "demolidor",
                "avatar": "assets/images/demolidor-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Demolidor - O Homem sem medo",
                            "year": "2003",
                            "description": "Após descobrir o verdadeiro trabalho de seu pai, o jovem Matt Murdock (Ben Affleck) sofre um acidente que faz com que fique cego e tenha seus sentidos ampliados, além de ganhar um apurado radar mental, que faz com que consiga perceber o que ocorre à sua volta. Já adulto, Matt estuda Direito e passa a treinar arduamente artes marciais. Com isso passa a ter uma vida dupla: durante o dia é um conceituado advogado e à noite passa a usar suas habilidades super-humanas para combater o crime, sob o codinome Demolidor.",
                            "image": "assets/images/demolidor-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 12,
                "name": "Motoqueiro Fantasma",
                "realName": "Johnathon Blaze",
                "description": "Motoqueiro Fantasma (Ghost Rider, no idioma original) é um personagem e o nome de diversos anti-heroís sobrenaturais das histórias em quadrinhos publicada pela editora Marvel Comics e a editora já havia usado esse nome para um personagem do faroeste, que mais tarde recebeu a alcunha de Cavaleiro Fantasma.O primeiro Motoqueiro Fantasma foi Johnny Blaze, criado pelo desenhista Mike Ploog e os escritores Roy Thomas e Gary Friedrich, e apareceu pela primeira vez em Marvel Spotlight #05 (agosto de 1972). Blaze, para salvar a vida de seu pai, fez um pacto com ‘Satã’ (que mais tarde foi revelado como sendo o demônio Mephisto) em troca de sua alma. À noite, perto de maldades sendo cometidas, ou sobre extrema pressão, Blaze vê sua própria carne ser consumida em fogo infernal, deixando-o com a aparência de um esqueleto em chamas - eventualmente Blaze descobre que ele foi ligado ao demônio Zarathos. Ele conduz uma moto igualmente em chamas. ",
                "slug": "motoqueiro-fantasma",
                "avatar": "assets/images/motoqueiro-fantasma-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Motoqueiro Fantasma",
                            "year": "2007",
                            "description": "Johnny Blaze (Nicolas Cage) trabalha como dublê e piloto de motocicleta. Há muito tempo ele fez um pacto com Mefisto (Peter Fonda) para proteger as duas pessoas que mais amava: seu pai, Barton (Brett Cullen), e sua namorada de adolescência, Roxanne Simpson (Eva Mendes). Em troca Johnny se transforma à noite no Motoqueiro Fantasma, o justiceiro de alguns demônios bastante cruéis. Forçado a obedecer as ordens de Mefisto, Johnny decide enfrentá-lo de forma a usar sua maldição para proteger pessoas inocentes.",
                            "image": "assets/images/motoqueiro-fantasma-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 13,
                "name": "Quarteto Fantástico",
                "realName": "Fantastic Four",
                "description": "O Quarteto Fantástico é uma equipe de super-herói de histórias em quadrinhos publicados pela Marvel Comics. O grupo estreou em The Fantastic Four #1 (data de novembro 1961), que ajudou a inaugurar um novo nível de realismo no meio. O Quarteto Fantástico foi o primeiro time de super-herói criado pelo escritor-editor Stan Lee e o ilustrador Jack Kirby, que desenvolveram uma abordagem colaborativa para a criação de quadrinhos com este título que usariam a partir de então. Como a maioria dos personagens criados pela Marvel durante a década de 1960, o Quarteto Fantástico deve os seus poderes à exposição a radiação, neste caso mais especificamente à radiação cósmica, com a qual teriam entrado em contacto durante uma viagem de exploração espacial.",
                "slug": "quarteto-fantástico",
                "avatar": "assets/images/quarteto-fantastico-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Quarteto Fantástico",
                            "year": "2005",
                            "description": "Um desastre atinge uma nave espacial, fazendo com que seus quatro tripulantes sofram modificações em seu organismo de forma a ganharem poderes especiais. Reed Richards (Ioan Gruffudd), o líder do grupo, passa a ter a capacidade de esticar seu corpo feito borracha. Sue Storm (Jessica Alba), sua ex-namorada, ganha poderes que a permitem ficar invisível e criar campos de força. Johnny Storm (Chris Evans), irmão de Sue, pode aumentar o calor do seu corpo, enquanto que Ben Grimm (Michael Chiklis) tem seu corpo transformado em pedra e ganha uma força sobre-humana. Ao retornar à Terra após o acidente logo os novos poderes começam a se manifestar, fazendo com que todos tenham que se adaptar a eles e também à condição de celebridades que os poderes lhes trazem.",
                            "image": "assets/images/quarteto-fantastico-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 14,
                "name": "Guardiões da Galáxia",
                "realName": "Guardians of the Galaxy",
                "description": "Guardiões da Galáxia ( no original Guardians of the Galaxy) é um nome compartilhado por duas equipes publicadas nas histórias em quadrinhos americanas pela editora Marvel Comics. Ambas as versões atuam principalmente dentro do espaço sideral na proteção de planetas e galáxias contra ataques e guerras alienígenas. Os Guardiões originais apareceram pela primeira vez na revista ‘Marvel Super-Heroes’ #18 (Janeiro de 1969) com o objetivo de deter a invasão dos Badoon a Terra. Já a segunda e atual formação dos Guardiões apareceram na revista ‘Guardiões da Galáxia' (Vol. 2) #1 (Maio de 2008) quando o Senhor das Estrelas decidiu unir alguns heróis na intenção de deter a invasão de Phalanx ao planeta Hala, terra natal dos Kree.",
                "slug": "guardioes-da-galaxia",
                "avatar": "assets/images/guardioes-da-galaxia-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "Guardiões da Galáxia",
                            "year": "2014",
                            "description": "Peter Quill (Chris Pratt) foi abduzido da Terra quando ainda era criança. Adulto, fez carreira como saqueador e ganhou o nome de Senhor das Estrelas. Quando rouba uma esfera, na qual o poderoso vilão Ronan, da raça kree, está interessado, passa a ser procurado por vários caçadores de recompensas. Para escapar do perigo, Quill une forças com quatro personagens fora do sistema: Groot, uma árvore humanóide (Vin Diesel), a sombria e perigosa Gamora (Zoe Saldana), o guaxinim rápido no gatilho Rocket Racoon (Bradley Cooper) e o vingativo Drax, o Destruidor (Dave Bautista). Mas o Senhor das Estrelas descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, e logo o grupo deverá proteger o objeto para salvar o futuro da galáxia",
                            "image": "assets/images/guardioes-da-galaxia-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            },
            {
                "id": 15,
                "name": "Justiceiro",
                "realName": "Frank Castle",
                "description": "O Justiceiro (Francis ‘Frank’ Castle, nascido Castiglione) é um personagem fictício, um anti-herói, que aparece nas histórias em quadrinhos publicadas pela Marvel Comics. Criado pelo escritor Gerry Conway e pelos artistas Ross Andru e John Romita, Sr. (Stan Lee aprovou o nome), apareceu pela primeira vez em The Amazing Spider-Man #129 (Fev. 1974). Inicialmente, o Justiceiro foi concebido por Conway para ser um antagonista recorrente para o Homem-Aranha, no entanto, a sua estreia em 1974 recebeu aclamação crítica, e acabou por se tornar um anti-herói no Universo Marvel.O Justiceiro é um vigilante ítalo-americano que usa o assassínio, espionagem, o rapto, a extorsão, a coerção, as ameaças violentas e a tortura na sua guerra contra o crime.",
                "slug": "justiceiro",
                "avatar": "assets/images/justiceiro-avatar.jpg",
                "media": {
                    "movies": [
                        {
                            "title": "O Justiceiro",
                            "year": "1989",
                            "description": "A polícia está em polvorosa, devido a uma série de 125 assassinatos realizados. Decidido a acabar com a onda de crimes, Frank Castle (Dolph Lundgren) toma a dianteira e passa a investigar o caso. Castle é um ex-policial que está em busca de vingança desde que sua esposa e filho foram assassinados, tendo a partir de então se dedicado a combater o crime nas ruas usando muitas armas. Quando Castle acredita estar com a organização quase destruída, ele passa a enfrentar um novo grupo criminoso, que pretende ocupar o lugar vago.",
                            "image": "assets/images/justiceiro-movie.jpg"
                        }
                    ]
                },
                "createdAt": "2020-04-15T20:05:44.960Z",
                "updatedAt": null
            }
        ];

        return of(characters);
    }

    public getMedias(id: any, slug: string): Observable<any> {
        this.getCharacters().subscribe((resp) => {
            if (resp != null) {
                resp.forEach((v: any) => {
                    if (v.id === id && v.slug === slug) {
                        this.character = v;
                    }
                });
            }
        });
        return of(this.character);
    }

}