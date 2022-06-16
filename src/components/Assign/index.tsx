const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const date = new Date();
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

export const Assign = () => (
  <article>
    <h2>Assinatura</h2>
    <p>Lisboa, {day} de {meses[month]} de {year}.</p>
    <br />
    <p>____________________________</p>
    <p>Felipe Larson da Silveira</p>
  </article>
)