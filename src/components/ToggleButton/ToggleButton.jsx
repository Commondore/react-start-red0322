import styles from './ToggleButton.module.css';
// import './ToggleButton.css';
import cn from 'classnames';

function ToggleButton(props) {
  // let btnClasses = [styles.btn];

  // if (props.isShow) {
  //   btnClasses.push(styles.danger);
  // }
  return (
    <button
      className={
        cn(styles.btn, {
          [styles.danger]: props.isShow,
          // [styles.success]: props.colored
        })
      }
      onClick={props.toggle}
    >
      {props.children}
    </button>
  );
}

export default ToggleButton
