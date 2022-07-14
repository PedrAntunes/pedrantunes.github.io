function getRandomArbitrary(min, max) 
{
    return Math.random() * (max - min) + min;
}

function TurnOffParticles()
{
    $("#particle-box").empty();
}

function TurnOnParticles(paletteIndex = 1) 
{
    paletteIndex -= 1;

    // Some random colors
    colorsPalette = Array( 
        ["rgb(22, 147, 170, 0.2)", "rgb(22, 147, 170, 0.5)", "rgb(22, 147, 170, 0.8)"],//azul
        ["rgb(97, 54, 199, 0.2)", "rgb(97, 54, 199, 0.5)", "rgb(97, 54, 199, 0.8)"],//roxo
        ["rgb(131, 36, 68, 0.2)", "rgb(131, 36, 68, 0.5)", "rgb(131, 36, 68, 0.8)"]//vermelho
    );


    const colors = colorsPalette[paletteIndex];// -1 pq vai usar a mesma variavel do css, que começa com o nome em 1 e não em 0


    const numBalls = 500;
    const balls = [];

    for (let i = 0; i < numBalls; i++) 
    {
        let ball = document.createElement("div");

        //adiciona a classe de css que faz a bolinha
        ball.classList.add("ball");

        //aleatoriza uma cor
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];

        //distancia da esquerda da div/body
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;

        //distancia aleatoria do top da div/body
        ball.style.top = `${getRandomArbitrary(10, 1000)}%`;

        //escala de tamanho da bolinha
        ball.style.transform = `scale(${Math.random()})`;

        //tamanho da particula
        ball.style.width = `${getRandomArbitrary(0.2, 0.5)}em`;
        ball.style.height = ball.style.width;
        
        balls.push(ball);

        //aplica a bolinha no html
        $("#particle-box").append(ball);
    }

    speed = 5000;

    // Keyframes
    balls.forEach((el, i, ra) => 
    {
        let to_ = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * (i % 2 === 0 ? -11 : 11),
        };

        let to = {
            x: 5,
            y: Math.random() * (i % 2 === 0 ? -11 : 11),
        };

        let anim = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}vw, ${to.x}vh)` }
            ],

            {
                duration: (Math.random() + 1) * speed, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });
}