{
    function f() {
        let m = prompt('Введите число m:'),
            n = prompt('Введите число n:');
        {
            function div(val, by) {
                return (val - val % by) / by;
            }

            if (m % n === 0)
                alert(div(m, n))
            else
                alert('m на n нацело не делится')
        }
    }}