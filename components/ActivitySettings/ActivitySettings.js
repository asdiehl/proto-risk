import css from "./activitysettings.css"

export default () =>
<div className={css.root}>
    <h2>Dashboard activity settings</h2>
    <ul>
      <li>
        <a href="#">
          <img src="/static/img/btn-edit.svg" /> All booking zones
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/static/img/btn-edit.svg" /> Live
        </a>
      </li>
    </ul>
  </div>
