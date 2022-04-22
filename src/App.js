import React, {useState} from 'react'

export default function App(){
  
  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operacao, setOperacao] = useState(false)

  //COMPONENTES
  const Tela=(valor,res)=>{
    return(
      <div style={cssTela}>
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }

  const Btn=(label,onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }

  //FUNÇÕES
  


  //ESTILOS
  const cssTela={
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'felx-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    window: 260,
  }
  
  const cssTelaOper={
    fontSize: 25,
    color: '#fff',  
    height: 20,
  }

  const cssTelaRes={
    fontSize: 50,
    color: '#fff',  
  }

  const cssBtn={
    fontSize: 30,
    height: 75,
    with: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none',
  }
  
    return (
      <>
      </>
    );
}