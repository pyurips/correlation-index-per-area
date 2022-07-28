## Language/Linguagem

 - [English](https://github.com/pyurips/correlationIndexPerArea#correlation-index-by-area-with-the-constant-values-of-the-intervals-in-the-abscissa)
 - [Português](https://github.com/pyurips/correlationIndexPerArea#%C3%ADndice-de-correla%C3%A7%C3%A3o-por-%C3%A1rea-com-o-valores-dos-intervalos-na-abscissa-constantes)


# Correlation index by area with the constant values of the intervals in the abscissa

### What exactly is
Like the linear correlation coefficient, the area correlation index is used to relate how closely two variables are related. However, the second is not used, like the first, as the linear coefficient of the equation of a line (regression).

The expression "by area" indicates a change of equation and, consequently, algorithm in the treatment of the data. Geometric concepts of area calculation are used, specifically of rectangles. Therefore, the purpose of area correlation is to provide a simple alternative algorithm to correlate two elements.

The index is just a dimensionless value ranging from -1 to 1.
When it is -1, it is a perfect negative correlation. So, we can say that when the value is 1, it will be a perfect positive correlation.

### How does it work

With the support of a Cartesian plane, the variables on the $x$ axis and their respective image on the $y$ axis are defined.

![alt text](https://cdn.discordapp.com/attachments/971787111470596136/1001825524152274954/Frame_18.png)

The interval between the abscissa elements is constant. So $b - a = c - b = d - c = ... = k$. The letter $k$ is what we will call the constant. Each value on the $y$ axis related to the $x$ $(y(b), y(c), ...)$ axis will be considered the height of the rectangle, while $k$ will be the base.

First, we'll start subtracting the successor rectangle from the predecessor. In this sense, as the $y(b)$ rectangle is the first one, we will start with it. The successor is $y(c)$. Therefore, $(y(c) - y(b))*k$ is the first subtraction of rectangles. The second is $(y(d) - y(c))*k$ and so on.

After completing all the subtractions, up to the last rectangle $(y(h))$, another cartesian plane will be created to represent the subtracted rectangles.

**Even if the successor rectangle has a smaller area value than the predecessor, the height of the subtracted rectangle will be in modulus and will only influence the final sum of the next equation.**

![alt text](https://cdn.discordapp.com/attachments/971787111470596136/1001836447252365392/Frame_20_1.png)

The next step is to divide the sum of all rectangles that are represented in the graph above by the product of the total number of rectangles, the base $k$ and the height of the largest subtracted rectangle. 

$i$ being the correlation index, $n$ the number of rectangles subtracted and $t$ the highest height, in module, among the subtracted rectangles,

$$ i = {[(y(c) - y(b))k + ((y(d) - y(c))k + ((y(e) - y(d))k + ((y(f) - y(e))k + ((y(g) - y(f))k + ((y(h) - y(g)k] \over n*k*|t|} $$

Finally, the result of this ratio will be the correlation index by area.

### Examples of use

With the graph below, we will determine the coefficient index per area.

**Example context: A book store wants to know the correlation between temperature (axis $x$) and the total number of books sold daily (axis $y$). At 15ºC, 228 were sold. When the temperature was at 17ºC, they managed to sell 350 and so on, as shown in the graph below.**

![alt text](https://media.discordapp.net/attachments/971787111470596136/1001837930744127588/Frame_17.png)

$15 - 13 = 17 - 15 = 19 - 17 = ... = 2 = k$

$(350 - 228)k = 122k$

$(37 - 350)k = -313k$

$(183 - 37)k = 146k$

$(142 - 183)k = -41k$

$(89 - 142)k = -53k$

$(18 - 89)k = -71k$

$$ i = {(122 - 313 + 146 - 41 - 53 - 71)k \over n*k*t} $$

As $n = 6$ (since there are 6 rectangles subtracted), $k = 2$ and $t = -313$,

$$ i = {(-210)(2) \over (6)*(2)*(|-313|)} $$

$$ i = {-0.11182} $$

**Therefore, the two variables (temperature and amount of books sold daily in the store) have a weak and negative correlation of approximately -11%.**

**NOTE: The more data, the more assertive the correlation index will be.**

### In cases of perfect correlations

![alt text](https://media.discordapp.net/attachments/971787111470596136/1001845002177093763/Frame_19.png)

$15 - 13 = 17 - 15 = 19 - 17 = ... = 2 = k$

$(150 - 100)k = 50k$

$(200 - 150)k = 50k$

$(250 - 200)k = 50k$

$(300 - 250)k = 50k$

$(350 - 300)k = 50k$

$(400 - 350)k = 50k$

$$ i = {(50 + 50 + 50 + 50 + 50 + 50)k \over n*k*t} $$

$$ i = {(300)(2) \over (6)*(2)*(|50|)} $$

$$ i = {1} $$

**As the value of the correlation index per area is 1, it means that the two variables have a positive and perfect correlation. The same case applies for the negative, when, when the graph has a decreasing direction.**

_______________________________________________________________________________________________________________________________________________________________________

# Índice de correlação por área com o valores dos intervalos na abscissa constantes

### O que exatamente é
Assim como o coeficiente de correlação linear, o índice de correlação por área é usado para relacionar o quanto duas variáveis estão relacionadas. Porém, a segunda não é utilizada, como a primeira, como o coeficiente linear da equação de uma reta (regressão).

A expressão "por área" indica uma mudança de equação e, consequentemente, algorítmo no tratamento dos dados. São utilizados conceitos geométricos de cálculo de área, especificamente de retângulos. Portanto, o objetivo da correlação por área é disponibilizar uma alternativa simples de algorítmo para correlacionar dois elementos.

O índice se trata somente de um valor adimensional que varia de -1 a 1. 
Quando for -1, trata-se de uma correlação negativa perfeita. Assim, podemos dizer que quando o valor for 1, será uma correlação positiva perfeita.

### Como isso funciona

Com o suporte de um plano cartesiano, são definidas as variáveis no eixo $x$ e sua respectiva imagem no eixo $y$.

![alt text](https://cdn.discordapp.com/attachments/971787111470596136/1001825524152274954/Frame_18.png)

O intervalo entre os elementos da abscissa é constante. Portanto, $b - a = c - b = d - c = ... =  k$. A letra $k$ é como chamaremos a constante. Cada valor no eixo $y$ relacionado com o eixo $x$ $(y(b), y(c), ...)$ será considerado a altura do retângulo, enquanto o $k$ será a base.

Primeiramente, começaremos a subtrair o retângulo sucessor com o antecessor. Nesse sentido, como o retângulo $y(b)$ é o primeiro, começaremos por ele. O sucessor é o $y(c)$. Portanto, $(y(c) - y(b))*k$ é a primeira subtração de retângulos. A segunda trata-se de $(y(d) - y(c))*k$ e assim por diante.

Depois de completar todas as subtrações, até o último retângulo $(y(h))$, será criado outro plano cartesiano para representar os retângulos subtraídos.

**Mesmo que o retângulo sucessor tenha um valor de área menor que o antecessor, a altura do retângulo subtraído estará em módulo e somente influenciará na soma final da próxima equação.**

![alt text](https://cdn.discordapp.com/attachments/971787111470596136/1001836447252365392/Frame_20_1.png)

O próximo passo é realizar uma divisão da soma de todos os retângulos que estão representados no gráfico acima pelo produto da quantidade total de retângulos, a base $k$ e a altura do maior retângulo subtraído. 

Sendo $i$ o índice de correlação, $n$ o número de retângulos subtraídos e $t$ a maior altura, em módulo, dentre os retângulos subtraídos,

$$ i = {[(y(c) - y(b))k + ((y(d) - y(c))k + ((y(e) - y(d))k + ((y(f) - y(e))k + ((y(g) - y(f))k + ((y(h) - y(g)k] \over n*k*|t|} $$

Finalmente, o resultado dessa razão será o índice de correlação por área.

### Exemplos de utilização

Com o gráfico abaixo, determinaremos o índice de coeficiente por área.

**Contexto exemplo: Uma loja de livros quer saber qual é a correlação entre a temperatura (eixo $x$) e a quantidade total de livros vendidos diariamente (eixo $y$). Quando 15ºC, foram vendidos 228. Já quando a temperatura estava a 17ºC, conseguiram vender 350 e assim por diante, como mostra o gráfico abaixo.**

![alt text](https://media.discordapp.net/attachments/971787111470596136/1001837930744127588/Frame_17.png)

$15 - 13 = 17 - 15 = 19 - 17 = ... = 2 = k$

$(350 - 228)k = 122k$

$(37 - 350)k = -313k$

$(183 - 37)k = 146k$

$(142 - 183)k = -41k$

$(89 - 142)k = -53k$

$(18 - 89)k = -71k$

$$ i = {(122 - 313 + 146 - 41 - 53 - 71)k \over n*k*t} $$

Como $n = 6$ (pois existem 6 retângulos subtraídos), $k = 2$ e $t = -313$

$$ i = {(-210)(2) \over (6)*(2)*(|-313|)} $$

$$ i = {-0.11182} $$

**Portanto, as duas variáveis (temperatura e quantiadade de livros vendidos diariamente na loja) tem uma correlação fraca e negativa de aproximadamente -11%.**

**OBS: Quanto mais dados, mais assertivo será o índice de correlação.**

### Em casos de correlações perfeitas

![alt text](https://media.discordapp.net/attachments/971787111470596136/1001845002177093763/Frame_19.png)

$15 - 13 = 17 - 15 = 19 - 17 = ... = 2 = k$

$(150 - 100)k = 50k$

$(200 - 150)k = 50k$

$(250 - 200)k = 50k$

$(300 - 250)k = 50k$

$(350 - 300)k = 50k$

$(400 - 350)k = 50k$

$$ i = {(50 + 50 + 50 + 50 + 50 + 50)k \over n*k*t} $$

$$ i = {(300)(2) \over (6)*(2)*(|50|)} $$

$$ i = {1} $$

**Sendo o valor do índice de correlação por área 1, significa que que as duas variáveis tem uma correlação positiva e perfeita. O mesmo caso se aplica para a negativa, quando, quando o gráfico tem um sentido decrescente.**
