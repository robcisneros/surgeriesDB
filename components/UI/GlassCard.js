import classes from "./GlassCard.module.css";
import Link from "next/link";

const GlassCard = (props) => {
  return (
    <Link href={props.href} passHref>
      <a
        target="_blank"
        className={classes.card}
      >
        {props.children}

        <h2>{props.title}</h2>
        <p> {props.description} </p>
      </a>
    </Link>
  );
};

export default GlassCard;
