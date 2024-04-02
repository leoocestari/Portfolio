import Styles from "./button.module.scss"

const button = ({title}) => {
  return <button className={Styles.button}>{title}</button>;
};

export default button