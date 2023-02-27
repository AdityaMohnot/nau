function log(){
    document.getElementById('p1').value = naviagtor.userAgent.toLowerCase()
    const inp = document.getElementById('inp').value
    if (String(inp)==='adidagod'){
        document.getElementById('anch').setAttribute('href', 'nag.html')
    } else{
        document.getElementById('anch').setAttribute('href', '#')
    }
}