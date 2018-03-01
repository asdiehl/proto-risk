import css from "./pagecontent.css"

export default (props) =>
  <section className={css.root}>
      {props.children}
  </section>
