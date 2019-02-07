import React from 'react'
import styles from './contactForm.module.css'

export default () => (
	<form action="https://formspree.io/jan.steinhoff@gmail.com" method="POST">
		<div style={{ margin: '0 auto' }}>
			<div>
				<div className={styles.formGroup}>
					<label htmlFor="_replyto">Email</label>
					<input
						type="email"
						name="_replyto"
						className={styles.formControl}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="name">Name</label>
					<input name="name" className={styles.formControl} rows="1" required />
				</div>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="message">Message</label>
				<textarea className={styles.formControl} name="message" rows="10" required />
			</div>
			<div className={styles.formGroup}>
				<input
					type="submit"
					value="SEND MESSAGE"
					className={styles.btn}
				/>
			</div>
		</div>
	</form>
)
