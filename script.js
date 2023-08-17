const myDiv = document.getElementById('myDiv');
const myBtn = document.getElementById('myBtn');
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '975a7ff865msh3c324b5434037c4p10d36ejsn87524796684e',
      'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
    }
  };

myBtn.addEventListener('click', async function(){
    myDiv.innerHTML = '';
    try {
        const result = await fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', options);
        const data = await result.json();
        for (let i = 0; i< data.length; i++) {
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            const img = document.createElement('img');
            h1.innerText = data[i].name;
            p.innerText = data[i].description;
            img.setAttribute('src', data[i].img);
            myDiv.appendChild(h1);
            myDiv.appendChild(img);
            myDiv.appendChild(p);
        }


    } catch (error) {
        
    }

})

