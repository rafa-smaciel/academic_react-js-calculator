import React, {useState} from 'react'

export default function App(){
  
  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operacao, setOperacao] = useState(false)

  const Tela=(valor,res)=>{
    return(
      <div style="">
        <span style={}>{valor}</span>
        <span style={}>{res}</span>
      </div>
    )
  }

  //Estilos
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

  const cssTelarRes={
    fontSize: 50,
    color: '#fff',  
  }
  
    return (
      <>
      </>
    );
}