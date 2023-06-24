const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

export const Assign = () => (
  <article>
    <h2>Signature</h2>
    <p>
      Lisbon, {months[month]} {day}, {year}.
    </p>
    <br />
    <p>____________________________</p>
    <p>Felipe Larson da Silveira</p>
  </article>
);
