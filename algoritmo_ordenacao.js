const priceBooks = [25, 15, 30, 50, 45, 20]

let cheaper = 0

for (let i = 0; i < priceBooks.length; i++){
  if(priceBooks[i] < priceBooks[cheaper]){
    cheaper = i
  }
}
console.log(`O livro mais barato custa: ${priceBooks[cheaper]}`)