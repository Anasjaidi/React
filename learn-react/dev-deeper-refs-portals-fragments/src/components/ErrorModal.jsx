import React from 'react';
import styles from './ErrorModal.module.css'
import  ReactDOM  from 'react-dom';

const Backdrop = props => {
  return (
		<div className={styles.backdrop} onClick={(_) => props.onClick(_)}></div>
	);
}

const Modal = (props) => {
  return (
    <div className={styles.modal} onClick={(_) => props.onClick(_)}>
				<header>
					<h2>Something go wrong badly</h2>
				</header>
				<div className="content">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aut
						animi dolores neque harum nam, corrupti ipsam deserunt quo vitae
						velit?
					</p>
				</div>
				<div className="actions">
					<button onClick={(_) => props.onClick(_)}>okay</button>
				</div>
			</div>
  );
}



const ErrorModal = (props) => {
  return (
		<>
			{ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdrop'))}
			{ReactDOM.createPortal(<Modal onClick={props.onClick}/>, document.getElementById('modal'))}
			
		</>
	);
};


export default ErrorModal;
