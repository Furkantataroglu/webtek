const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
		'X-RapidAPI-Key': '680cf7f67emsh4152307433666b4p1011f7jsn822b421a84e1'
	}
};

fetch('https://movies-app1.p.rapidapi.com/api/movies', options).then(response => {return response.json();
}).then(data => {
   console.log(data.results);
   const html = data.results.map(movie =>{
      return `
      <div class ="movies">
      
      
      <p><img src="${movie.image}" alt="${movie.titleOriginal}"/></p>
      <p>İsim: ${movie.titleOriginal};</p>
      <p>Puan: ${movie.rating};</p>
     

      
      
      
      
      </div>
      `
   }).join("");
   console.log(html);
   document.querySelector('#app').insertAdjacentHTML("afterbegin", html)
}).catch(err => console.error(err));
