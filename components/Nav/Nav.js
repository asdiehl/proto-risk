import css from "./nav.css"

export default (props) =>
  <nav className={css.root}>{props.children}</nav>
