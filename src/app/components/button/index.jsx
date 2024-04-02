import Styles from "./button.module.css"

const button = ({title}) => {
  return <button className={Styles.button}>{title}</button>;
};

export default button