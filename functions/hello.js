// functions/hello.js
export async function handler(event) {
  
  return {
    statusCode: 200,
    body: JSON.stringify({
        payload:[
          {
            "id": 9,
            "name": "Mango Orange Smoothie",
            "image": "https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg",
            "ingridients": "Mango,Orange,null,null",
            "instructions": "Throw everything into a blender and liquify."
            },
            {
            "id": 10,
            "name": "Pure Passion",
            "image": "https://www.thecocktaildb.com/images/media/drink/4tymma1604179273.jpg",
            "ingridients": "Rum,Passoa,Lime Juice,Passion fruit syrup",
            "instructions": "Mix up all ingredients with a cocktail stirrer and serve with crushed ice with mint and edible flour if available."
            },
            {
            "id": 12,
            "name": "Banana Milk Shake",
            "image": "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
            "ingridients": "Milk,Orange juice,Sugar syrup,Banana",
            "instructions": "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana."
            }
        ]
    }),
  }
}
