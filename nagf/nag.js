let a = 0

function two(){
    a = a - (a-2);
}


function three(){
    a = a - (a-3);
}


l = ['Adi', 'Ady', 'Anant', 'Ditya', 'Ananya', 'Ridhwan', 'Amol', 'Arjun']
color = ['#241abc', '#3c1296', '#5d0d7e', '#4c6bfa', '#da24fa']

function gen1(){
    hl = []
    while (hl.length<=a){
        h = Math.floor(Math.random()*l.length)
        if (!hl.includes(String(l[h]))){
            hl.push(String(l[h]))
        }
    }
    return hl
}

function gen2(){
    col = color[Math.floor(Math.random()*color.length)]
    document.getElementById('text').style.color=col
    document.getElementById('text').style.transition='0.5s'
    hl = gen1()
    if (a==2){
        document.getElementById('text').innerHTML = 'The 2 Hiders Are : ' + hl[1] + ' and ' + hl[2] + '.'
    } else if (a==3){
        document.getElementById('text').innerHTML = 'The 3 Hiders Are : ' + hl[1] + ', ' + hl[2] + ' and ' + hl[3] + '.'
    }
}