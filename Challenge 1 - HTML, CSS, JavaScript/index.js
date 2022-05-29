var form = document.getElementById("form");
var library = document.getElementById("library");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
var title4 = document.getElementById("title4");
var title5 = document.getElementById("title5");
var title6 = document.getElementById("title6");
var year1 = document.getElementById("year1");
var year2 = document.getElementById("year2");
var year3 = document.getElementById("year3");
var year4 = document.getElementById("year4");
var year5 = document.getElementById("year5");
var year6 = document.getElementById("year6");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const input = document.getElementById("input").value;

	fetch("http://www.omdbapi.com/?s="+input+"&apikey=82b2d7f7")
		.then(response => response.json())
		.then(json => {
			console.log(json);

			img1.src = json.Search[0].Poster;
			title1.innerText = json.Search[0].Title;
			year1.innerText ="Year: " + json.Search[0].Year;

			img2.src = json.Search[1].Poster;
			title2.innerText = json.Search[1].Title;
			year2.innerText ="Year: " + json.Search[1].Year;

			img3.src = json.Search[2].Poster;
			title3.innerText = json.Search[2].Title;
			year3.innerText ="Year: " + json.Search[2].Year;

			img4.src = json.Search[3].Poster;
			title4.innerText = json.Search[3].Title;
			year4.innerText ="Year: " + json.Search[3].Year;

			img5.src = json.Search[4].Poster;
			title5.innerText = json.Search[4].Title;
			year5.innerText ="Year: " + json.Search[4].Year;

			img6.src = json.Search[5].Poster;
			title6.innerText = json.Search[5].Title;
			year6.innerText ="Year: " + json.Search[5].Year;

        })
})

/*const img = document.createElement("img");
img.src = "img\los_juegos_del_hambre.jpg";
img.alt = "prueba";

document.main.insertAdjacentElement("beforeend",img);*/

