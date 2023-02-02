import React from 'react'
import Card from '../UI/Card'
import styles from './UsersList.module.css'

const UsersList = (props) => {

	const deleteListItemHandler = e => {
		props.deleteUser()
	}

  return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id} onClick={props.deleteListItemHandler}>
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
}

export default UsersList