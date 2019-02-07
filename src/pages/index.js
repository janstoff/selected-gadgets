import React from 'react'
import {navigate} from 'gatsby'
import Layout from '../components/layout'
import PrimaryButton from '../components/primary-button'

export default () => (
	<Layout>
		<h1> Welcome </h1>
		<p>What a world.</p>
		<div style={{ marginTop: `9rem`, display: `flex`, justifyContent: `center`}}> 
			<PrimaryButton onClick={ () => navigate('/contact/')}>GET IN TOUCH</PrimaryButton>
		</div>
	</Layout>
)
