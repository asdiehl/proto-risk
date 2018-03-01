import css from "./article.css"

export default (props) =>
  <article className={css.root}>
    <h3>{props.title}</h3>
  </article>
