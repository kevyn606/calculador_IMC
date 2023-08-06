import { useState, useEffect } from "react";
import styles from './estiloimc.module.css'

const Calcular_imc = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [classificacao, setClassificacao] = useState(0);

  const calculandoIMC = () => {
    const quadradoAltura = altura * altura;
    const imc = peso / quadradoAltura;

    return imc.toFixed(1);
  };

  const limparCalculo = () => {
    setAltura(0);
    setPeso(0);
    setResultado(0);
    setClassificacao("");
  };

  useEffect(() => {
    const imcCalculado = parseFloat(resultado);
    if (imcCalculado < 18.5) {
      setClassificacao("abaixo");
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setClassificacao("normal");
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setClassificacao("sobrepeso");
    } else if (imcCalculado >= 30 && imcCalculado < 40) {
      setClassificacao("obesidade");
    } else {
      setClassificacao("grave");
    }
  }, [resultado]);

  return (
    <body>
        <div className={styles.container}>
        <form>
            <h1>Calcular IMC</h1>
            <div className={styles.container_receber}>
                <div className={styles.receber}>
                <span>Altura<small>(ex.: 1,70)</small></span>
                    <input
                        type="number"
                        placeholder="Metros"
                        value={altura}
                        onChange={(evento) => setAltura(parseFloat(evento.target.value))}
                    />
                </div>
                <div className={styles.receber}>
                <span>Peso<small>(ex.: 70,2)</small></span>
                    <input
                        type="number"
                        placeholder="Quilos"
                        value={peso}
                        onChange={(evento) => setPeso(parseFloat(evento.target.value))}
                    />
                </div>
            </div>
            
      
      <div className={styles.container_butao}>
        <button type="button" onClick={() => setResultado(calculandoIMC())}>
        Calcular
        </button>
        <button type="button" onClick={limparCalculo}>
        Limpar
        </button>
      </div>
      
      <div className={styles.imc}>SEU IMC: {resultado}</div>
      <div>
        <ul>
        <li className={`${styles.verde} ${classificacao === "abaixo" ? styles["fundo-azul"] : ""}`}>
            <span>-18,5</span>
            <small> ABAIXO DO PESO</small>
          </li>
          <li className={`${styles.verde} ${classificacao === "normal" ? styles["fundo-verde"] : ""}`}>
            <span>18,5-24,9</span>
            <small> NORMAL</small>
          </li>
          <li className={`${styles.verde} ${classificacao === "sobrepeso" ? styles["fundo-amarelo"] : ""}`}>
            <span>25-29,9</span>
            <small> SOBREPESO</small>
          </li>
          <li className={`${styles.verde} ${classificacao === "obesidade" ? styles["fundo-laranja"] : ""}`}>
            <span>30-39,9</span>
            <small> OBESIDADE</small>
          </li>
          <li className={`${styles.verde} ${classificacao === "grave" ? styles["fundo-vermelho"] : ""}`}>
            <span>+40</span>
            <small> OBESIDADE GRAVE</small>
          </li>
        </ul>
      </div>
    </form>
        </div>
        
    </body>
    
  );
};

export default Calcular_imc;




