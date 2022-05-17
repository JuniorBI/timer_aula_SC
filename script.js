function iniciarContador(m_init) {
    var t_minutos = document.getElementById("timer_minutos");
    var t_segundos = document.getElementById("timer_segundos");
    t_minutos.innerHTML = (m_init-1) > 9 ? ('' + (m_init-1)) : ('0' + (m_init-1));
    t_segundos.innerHTML = '59';
    var m = m_init-1;
    var s = 59;

    var contador = setInterval( function() {
        var nome_m = (m > 9) ? ('' + m) : ('0' + m);
        var nome_s = (s > 9) ? ('' + s) : ('0' + s);
        t_minutos.innerHTML = nome_m;
        t_segundos.innerHTML = nome_s;
        
        if(s > 0) s -= 1;
        else if (s == 0 && m > 0){ s = 59; m -= 1; }
        else { m = m_init; };
    }, 1000);
}
iniciarContador(10);


