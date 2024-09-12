import { Outlet } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Zomato</h1>
      </header>
      <Outlet></Outlet>
    </>
  );
}
