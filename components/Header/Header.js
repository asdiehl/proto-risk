import css from "./header.css"

export default () =>
  <header className={css.header}>
      <div>
        <h1>AMUNDI SOC DI GEST DEL RISPARMIO ...</h1>
        <span>Umbrella CRDS : CAIYMILOPCV2</span>
      </div>
      <ul className={css.indicator}>
        <li><span>2</span><br/>Counterparty rating</li>
        <li><span>75</span>%<br/> Global Risk Recovery</li>
        <li><a href="">BNP Services <br/>& Contacts</a></li>
      </ul>
    </header>
