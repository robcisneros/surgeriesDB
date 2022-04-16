import classes from './Layout.module.css'
import CollapseNavbar from './CollapseNavbar'

function Layout(props) {
  return (
    <div>
      <CollapseNavbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
