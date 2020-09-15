let view = screen.width
let metaView = document.getElementsByTagName('meta')[1]

if (view <= 1525 && view >= 1080){
    let x = view / 1525;
    console.log(x)
    metaView.content = `width=device-width, initial-scale=${x}`
}

let price = document.querySelectorAll('.p .prix')

for (p of price){
    let t = p.textContent
    let d = new Intl.NumberFormat('fr-FR', {style:'currency', currency : 'XAF'}).format(t)
    p.textContent = d
}

console.log()