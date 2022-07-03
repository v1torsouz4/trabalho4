import Coluna from "./Coluna.jsx"
import Coluna2 from "./Coluna2.jsx"

function App(){

	const coluna=[
		{
		   logo: "suap.png",
		   texto: "Inicio",
		},

		{
			logo: "globo.png",
			texto: "globo.com",
		 },

		 {
			logo: "face.png",
			texto: "Facebook",
		 },

		 {
			logo: "cups.png",
			texto: "Home",
		 },
	 
		 {
			logo: "ifro.png",
			texto: "Mirim",
		 },

	 ];

	 const coluna2=[
		{
		   logo2: "ifro.png",
		   texto2: "Inicio",
		},

		{
			logo2: "i.png",
			texto2: "globo.com",
		 },

		 {
			logo2: "gmail.png",
			texto2: "Facebook",
		 },

		 {
			logo2: "ifro.png",
			texto2: "Home",
		 },
	 
		 {
			logo2: "mais.png",
			texto2: "Mirim",
		 },

	 ];



	 return (

		<div className="principal">

				<div className="part1">
	
		  			{coluna.map((part, con) => {
						return <Coluna key={con}
	
			  			logo={part.logo}
			  			texto={part.texto}
					/>;
	
	
		 			 })
		  			}
		 
			
					</div>



		<div className="part2">
	
				{coluna2.map((parte, cons) => {
	  			return <Coluna2 key={cons}

				logo2={parte.logo2}
				texto2={parte.texto2}
	  			/>;


			})}
   
  

  			</div>

  </div>
	

	  );
	}
	
	export default App