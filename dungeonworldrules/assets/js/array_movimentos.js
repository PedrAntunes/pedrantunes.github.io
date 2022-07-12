basic = "Básico";
special = "Especial";
master = "Mestre";

lista_movimento = new Array (
    
    Array (
        "Matar e Pilhar",
        basic,
        "Quando atacar um adversário em combate corpo a corpo...",
        "For",
        1,
        Array (
            Array("10+", "Cause dano ao adversário e evite seu ataque. Opcionalmente, você pode causer +1d6 de dano, expondo-se ao contra ataque."),
            Array("7-9", "Cause dano ao adversário, e ele fará um ataque contra você."),
        ),
    ),
    

    Array (
        "Disparar",
        basic,
        "Quando mirar uma arma e dispará-la contra um adversãrio à distância...",
        "Des",
        1,
        Array (
            Array("10+", "Você conseguiu um tiro preciso. Cause seu dano."),
            Array("7-9", "Escolha um (cause dano independentemente da escolha): ", Array(
                "Você é forçado a se mover para conseguir uma linha de tiro, colocando-se em perigo conforme escolha do MJ;",
                "Você é forçado a disparar de qualquer jeito: -1d6 de dano;",
                "Você é forçado a disparar várias vezes, reduzindo sua munição em 1."
            )),
        ),
    ),

    
    Array (
        "Defender",
        basic,
        "Quando se posicionar para defender uma pessoa, objeto ou lugar sob ataque...",
        "Des",
        2,
        Array (
            Array("10+", "Domínio 3."),
            Array("7-9", "Domínio 1. "),
        ),
        Array(
            "Enquanto permanecer na defensiva, sempre que você ou aquilo que estiver defendendo sofrer um ataque, daste domínio para escolher uma das opções abaixo:",
            Array("Redirecione um ataque realizado contra a pessoa, objeto ou lugar sob sua proteção para você;",
            "Reduza o efeito ou dano do ataque pela metade;",
            "Abra as defesas do atacante, oferecendo a um aliado +1 adiante contra ele;",
            "Cause ao atacante uma quantidade de dano igual ao seu nível."),
        ),
    ),

    
    Array (
        "Desafiar o perigo",
        basic,
        "Quando agir apesar de qualquer perigo iminente ou sofrer alguma calamidade...",
        "Var",
        1,
        Array (
            Array("10+", "Realize o que pretendia sem ser afetado pela ameaça."),
            Array("7-9", "Você tropeça, hesita, ou se contorce: o MJ lhe oeferecerá um resultado pior, uma barganha difícil ou uma escolha desagradável."),
        ),
    ),

    
    Array (
        "Falar Difícil",
        basic,
        "Quando consultar seu conhecimento acumulado a respeito de alguma coisa...",
        "Int",
        1,
        Array (
            Array("10+", "O MJ lhe dirá alguma coisa interessante e útil a respeito do assunto."),
            Array("7-9", "O MJ lhe dirá apenas alguma coisa interessante, e caberá a você torná-la útil. O MJ pode lhe perguntar: Como você sabia disso?. Diga a Verdade!"),
        ),
    ),

    
    Array (
        "Discernir Realidades",
        basic,
        "Quando inspecionar cuidadosamente uam situação ou pessoa...",
        "Sab",
        2,
        Array (
            Array("10+", "Faça ao MJ 3 das perguntas listadas abaixo."),
            Array("7-9", "Faça 1 das perguntas listadas abaixo."),
        ),
        Array(
            "De qualquer forma, receba +1 adiante quando agir de acordo com as respostas.",
            Array(
                "O que aconteceu aqui realmente?",
                "O que está para acontecer aqui agora?",
                "O que eu deveria procurar por aqui?",
                "O que eu considero útil ou valioso aqui?",
                "Quem realmente está no controle aqui?",
                "O que não é realmente o que parece aqui?"
            ),
        ),
    ),

    
    Array (
        "Negociar",
        basic,
        "Quando possuir alguma influencia sobre personagens do MJ e quiser mainipulá-los...",
        "Car",
        1,
        Array (
            Array("", "Influência quer dizer algo de que eles precisam ou queiram."),
            Array("10+", "Eles farão o que você pedir, caso você primeiro garanta lhe conceder o que eles pedirem."),
            Array("7-9", "Eles farão o que você pede, mas exigiram alguma garantia concreta e imediata de sua promessa."),
        ),
    ),

    
    Array (
        "Ajudar ou Interferir",
        basic,
        "Quando quiser ajudar ou atrapalhar alguém...",
        "Vin",
        1,
        Array (
            Array("10+", "Aquele personagem recebe +1 ou -2, à sua escolha, em sua rolagem."),
            Array("7-9", "Os modifcadores ainda são aplicados, mas você também se expõe ao perigo, retribuição, ou custo de sua ação."),
        ),
    ),

    
    Array (
        "Último Suspiro",
        special,
        "Quando estiver morrendo, vislumbre o que existe além dos Portões Negros do Reino da Morte...",
        "N/A",
        1,
        Array (
            Array("10+", "Você engana a morte - continua em uma situação difícil, mas não estará morto."),
            Array("7-9", "A própria Morte lhe oferecerá uma barganha - aceite-a para se estabilizar, ou recuse-a e atravesse os Portões Negros para encontrar o que quer que o destrino lhe tenha reservado."),
            Array("-6", "Seu destino estará selado. Você foi marcado como propriedade da Morte e irá cruzar seus limites logo. O MJ lhe dirá quando.")
        ),
    ),

    
    Array (
        "Preparar Acampamento",
        special,
        "Quando parar para descansar...",
        "",
        1,
        Array (
            Array("", "Consuma uma ração. Se estiver em algum lugar perigoso, decida a ordem dos turnos de guarda. Se possuir XP suficiente, você pode avançar de nível. Quando acordar de alguma horas de sono initerrupto, cure uma quantidade de dano igual a metade de seus PV máximos."),
        ),
    ),

    
    Array (
        "Montar Guarda",
        special,
        "Quando estiver de guarda e alguma coisa se aproximar do acampamento...",
        "Sab",
        1,
        Array (
            Array("10+", "Você consegue acordar seus companheiros em tempo de preparar uma reação, e todos no acampamento recebem +1 adiante."),
            Array("7-9", "Você reage um pouco tarde demais - seus companheiros no acampamento serão acordados, mas não terão tempo suficiente para se preparar."),
            Array("-6", "O que quer que esteja se esgueirando além do limite da luz da fogueira terá uma vantagem sobre você..."),
        ),
    ),

    
    Array (
        "Empreender uma Jornada Perigosa",
        special,
        "Quando viajar por um território hostil...",
        "Sab",
        1,
        Array (
            Array("", "Escolha um membro do grupo para ser o desbravador, outro para ser o batedor, e outro para ser o contramestre. Todos testam."),
            Array("10+", "-", Array (
                "O contramestre reduz a quantidade de rações necessárias em 1;",
                "O desbravador reduz a quantidade de tempo necessária para alcançar o destino (o MJ dirá o quanto);",
                "O batedor vai notar qualquer perigo rápido o bastante para que vocês obtenham vantagem."
            ),),
            Array("7-9", "Cada personagem desempenhará seu papel como esperado: a quantidade normal de rações consumida, a jornada demorará o tempo esperado, e ninguém consegue surpreender o grupo, mas ninguém também será surpreendido."),
        ),
    ),

    
    Array (
        "Encerrar Sessão",
        special,
        "Quando chegar ao final da sessão…",
        "",
        1,
        Array (
            Array("", "Escolha um de seus Vínculos que lhe pareça resolvido e pergunte  ao jogador do outro personagem se ele concorda. Em caso positivo, marque XP e escreva um novo Vínculo com quem quiser. Observe seu alinhamento. Caso tenha agido de acordo com ele pelo menos uma vez na sessão, marque XP. Em seguida, os jogadores respondem coletivamente as 3 questões abaixo:", Array (
                "Nós aprendemos algo novo e importante a respeito do mundo?",
                "Nós sobrepuljamos algum monstro ou inimigo notável?",
                "Nós saqueamos algum tesouro memorável?"),
            ),
            Array("", "Para cada resposta “Sim”, todos marcam XP."),
        ),
    ),

    
    Array (
        "Avançar de Nível",
        special,
        "Quando estiver em inatividade (por horas ou dias) e possuir uma quantidade de XP igual (ou superior) ao seu nível atual +7…",
        "",
        1,
        Array (
            Array("", "Você poderá refletir a respeito de suas experiências e aperfeiçoar suas habilidades.", Array (
                "Subtraia seu nível atual +7 de seu XP;",
                "Aumente seu nível em 1;",
                "Escolha um novo movimento avançado de sua classe;",
                "Se for o Mago, também poderá adicionar uma nova magia ao seu grimório;",
                "Escolha uma de suas Habilidades e a aumente em 1 (isso pode também aumentar seu modificador). Mudar sua Constituição também aumenta seus PV máximos e atuais. Valores de habilidades não podem ultrapassar 18."
                )
            ),
        ),
    ),

    
    Array (
        "Farrear",
        special,
        "Quando retornar triunfante e fizer uma grande festa…",
        "Var",
        1,
        Array (
            Array("10+", "Escolha 3;"),
            Array("7-9", "Escolha 1;"),
            Array("6-", "Ainda escolha 1, mas as coisas vão sair totalmente do controle (o MJ dirá como)."),
            Array("", "", Array (
                "Torne-se amigo de um PNJ útil;",
                "Você ouve rumores a respeito de uma boa oportunidade;",
                "Você adquire informações úteis;",
                "Você não é preso, enfeitiçado ou enganado."),
            ),
        ),
    ),

    
    Array (
        "Abastecer",
        special,
        "Quando não fizer nada além de descansar confortavelmente em segurança…",
        "",
        1,
        Array (
            Array("", "Após um dia de descanso, recupere todos os seus PV. Após 3 dias de descanso, remova uma debilidade à sua escolha. Se estiver sob os cuidados de um curandeiro (mágico ou não), então cure uma debilidade a cada dois dias de descanso."),
        ),
    ),

    
    Array (
        "Recrutar",
        special,
        "Quando espalhar por aí que está procurando um ajudante para contratar…",
        "N/A",
        1,
        Array (
            Array("", "+1 se disser que o pagamento é generoso;"),
            Array("", "+1 se disser exatamente o que pretende fazer;"),
            Array("", "+1 se disser que ficarão com uma parte do que for encontrado;"),
            Array("", "+1 se sua reputação for boa por essas bandas."),

            Array("10+", "Você consegue vários interessados habilidosos, escolhe quem vai contratar, e não recebe qualquer penalidade se não quiser levá-los consigo;"),
            Array("7-9", "Você terá que se contentar com alguém perto do que queria, ou mandá-los embora;"),
            Array("6-", "Alguém influente, porém bastante incapaz, dirá que quer acompanhá-lo. Leve-o e aguente as consequências ou mande-o embora. Caso mande algum interessado embora, receba -1 adiante para recrutar."),
        ),
    ),

    
    Array (
        "Mandatos Pendentes",
        special,
        "Quando retornar a um local civilizado no qual tenha causado problemas anteriormente…",
        "Car",
        1,
        Array (
            Array("10+", "Todos já ouviram falar de seus atos e você é facilmente reconhecido."),
            Array("7-9", "O mesmo acontece, porém o MJ escolhe uma complicação:", Array (
                "O xerife local tem um mandado para sua prisão;",
                "Alguém colocou um preço em sua cabeça;",
                "Alguém importante para você está em uma situação difícil como resultado de suas ações."
                ),
            ),
        ),
    ),

    
    Array (
        "Preparar",
        special,
        "Quando gastar seu tempo estudando, meditando ou praticando intensamente…",
        "",
        1,
        Array (
            Array("", "Caso se prepare por uma semana ou duas, receba 1 de preparo. Caso se prepare por 1 mês ou mais, receba 3. Quando toda essa preparação valer a pena, gaste 1 de preparo para receber +1 em um rolamento qualquer. Você somente pode gastar 1 de preparo por rolagem."),
        ),
    ),

    
    Array (
        "Sobrecarga",
        special,
        "Quando fizer um movimento enquanto carrega algum peso…",
        "",
        1,
        Array (
            Array("", "Você pode estar sobrecarregado. Caso o peso que você esteja carregando seja:", Array (
                "Igual ou menor à sua Carga, você não sofrerá quaisquer penalidades.",
                "Igual à sua Carga+1 ou Carga+2, receba -1 constante até que alivie sua carga.",
                "Maior que sua Carga+2, você tem uma escolha: jogue no chão pelo menos 1 de peso e role com -1, ou falhe automaticamente."
                ),
            ),
        ),
    ),

    
    Array (
        "Movimentos do Mestre de Jogo",
        master,
        "Quando todos olharem em sua direção para descobrirem o que acontece…",
        "",
        1,
        Array (
            Array("", "", Array (
                "Usar um movimento de monstro, perigo ou local.",
                "Revelar uma verdade indesejada.",
                "Mostrar sinais de que uma nova ameaça está surgindo.",
                "Causar danos.",
                "Gastar recursos dos personagens.",
                "Voltar seus movimentos contra eles próprios.",
                "Separá-los.",
                "Oferecer uma oportunidade adequada para uso das habilidades de uma classe.",
                "Mostrar desvantagem de sua classe, raça, ou equipamento.",
                "Oferecer uma oportunidade, com ou sem custos.",
                "Colocar alguém em apuros.",
                "Dizer a eles os requisitos ou consequências e depois perguntar.",
                ),
            ),
        ),
    ),

    
    Array (
        "Movimentos do Mestre de Jogo",
        master,
        "Quando estiver narrando uma aventura…",
        "",
        1,
        Array (
            Array("", "", Array (
                "Desenhe mapas, mas deixe partes em branco.",
                "Dirija-se aos personagens, não aos jogadores.",
                "Abrace os elementos fantásticos.",
                "Faça um movimento consequente.",
                "Nunca diga o nome do seu movimento.",
                "De vida a todos os monstros.",
                "De nome a todas as pessoas.",
                "Faça perguntas e use as respostas.",
                "Seja um fã dos personagens.",
                "Pense perigosamente.",
                "Comece e termine na ficção.",
                "Pense também fora da cena.",

                ),
            ),
        ),
    ),

    
    Array (
        "Movimentos do Mestre de Jogo",
        master,
        "",
        "",
        1,
        Array (
            Array("", "Lembre-se das coisas que você pretende realizar o tempo todo durante a partida:", Array (
                "Retratar um mundo fantástico.",
                "Encher a vida dos personagens com aventuras.",
                "Jogar para descobrir o que acontece."
                ),
            ),
        ),
    ),
);