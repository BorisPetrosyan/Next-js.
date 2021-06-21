import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout'
export default function About() {

	const linkCLickHandler = () => {
		Router.push('/')
	}

	return (
		<MainLayout>
			<h1>About Page</h1>
			<button onClick={linkCLickHandler}>Go back to home</button>
			<button onClick={() => {
				Router.push('posts')
			}}>Go to Posts</button>

		</MainLayout>
	)
}