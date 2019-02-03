import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import ContactForm from '../components/contact-form'

export default () => (
	<Layout>
		<Header headerText="Get in touch with us" />
		<ContactForm />
	</Layout>
)
