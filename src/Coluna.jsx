function Coluna({logo, texto}) {

    return(
      
        <div className="centro">

        <button className="botao">

        <img className="imagem" src={logo} alt="icone app"/>
        <p>{texto}</p>

        </button>



        </div>

    );
}


export default  Coluna