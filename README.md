# Вариант 17
4.20.Если целое число m делится нацело на целое число n, то вывести на экран ча-стное от деления, в противном случае вывести сообщение "m на n нацело не делится".
# Скрины кода.
![Image alt](https://github.com/Nikitka5/js2/blob/main/png/Снимок%20экрана%202023-06-12%20142122.png)
![Image alt](https://github.com/Nikitka5/js2/blob/main/png/Снимок%20экрана%202023-06-12%20142149.png)
# При нажатии на кнопку, появляется табло где нужно в вести значения.
Если при делении нацело m делится то выводится ответ,если нет то пишется "m на n нацело не делится".
![Image alt](https://github.com/Nikitka5/js2/blob/main/png/Снимок%20экрана%202023-06-12%20142228.png)
![Image alt](https://github.com/Nikitka5/js2/blob/main/png/Снимок%20экрана%202023-06-12%20142249.png)
![Image alt](https://github.com/Nikitka5/js2/blob/main/png/Снимок%20экрана%202023-06-12%20142409.png)
# Видео.


https://github.com/Nikitka5/js2/assets/122780039/5b4de516-208e-454e-9aa5-e884f843be30

# Ответы на вопросы.
a)Операторы условия в JavaScript позволяют нам указать разного рода действия в зависимости от выбранного пользователем 
или системой ответа (например одна печенька или две) и связать его с действием (результатом), например, результатом "съесть одну печеньку"
 будет "все ещё буду чувствовать себя голодным", а результатом "съесть две печеньки" будет "буду чувствовать себя сытым, но мама меня 
поругает за то, что я съел все сладости".

b)Оператор == сравнивает на равенство, а вот === — на идентичность. Плюс оператора === состоит в том, что он не приводит два значения 
к одному типу. Именно из-за этого он обычно и используется.

c)const number = prompt("Введите число: ");

if (number >= 0) {
    
    if (number == 0) {
        
        console.log("Это ноль.");
    
    } else {
        
        console.log("Это положительное число.");
    
    }

} else {
    
    console.log("Это отрицательное число.");

}
