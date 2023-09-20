import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "../components/link"

export default ({ data }) => (
	<Layout
		metaTitle="About | Jo Alfie Wimborne"
		metaDescription="About Jo Alfie Wimborne: I am a senior front-end developer based in Cardiff. I love learning new things, building cool stuff, and playing with swords."
		title="About Me"
	>
		<section className="about-section">
			<h2>Hi, I'm Jo Alfie Wimborne</h2>
			<p>
				I am a senior front-end developer based in Cardiff. I love learning new
				things, building cool stuff, and playing with swords.
			</p>
			<p>
				I have worked on countless projects in agency settings, giving me a
				broad experience of web technologies and clients. I have a proven track
				record of leading front end approaches to projects including those with
				complex interfaces, data needs and integrations. Having become the go-to
				authority on web accessibility in my current role, I am passionate about
				creating smooth experiences for all end users, particularly those
				sometimes overlooked (e.g. keyboard-only and screen reader users).
			</p>
			<p>
				I am enthusiastic and creative with a keen attention to detail, and I
				enjoy sharing this with other people. I currently lead monthly sessions
				for my team to get together and share knowledge through an open forum
				for people to share things they've learned recently, find interesting,
				or give updates on how they've solved a particular problem in a project.
			</p>
			<p>
				I'm an avid knitter, and when I'm not at a computer I usually train and
				teach Historical European Martial Arts at Edel Fencing Academy.
				(Although unfortunately I'm on hiatus from this due injury!) I also
				compete from time to time, and have won medals in Longsword, Sword &
				Buckler and Rapier & Dagger.
			</p>
			<h2>Skills</h2>
			<ul>
				<li>HTML</li>
				<li>CSS (including Less/Sass)</li>
				<li>Javascript</li>
				<li>React</li>
				<li>Vue</li>
				<li>Typescript</li>
				<li>Responsive design</li>
				<li>Web accessibility</li>
				<li>Git</li>
				<li>Webpack, Gulp</li>
				<li>CMSs: Sitecore, Contentful, Optimizely</li>
				<li>React Native (in a previous role)</li>
				<li>Basics of Node.js and Express (in a previous role)</li>
			</ul>
			<h2>Notable Achievements / Awards</h2>
			<h3>2019 - 2023</h3>
			<ul>
				<li>
					Developed accessibility guidelines to be used across the whole
					development team with a view to ensuring all projects reach at least
					AA accessibility standard. I have become the go-to person in the
					development team for accessibility knowledge.
				</li>
				<li>
					Successfully led a team to put forward a proposal for the purchase of
					software licences for Polypane, a developer-focussed browser which
					allowed the team to easily improve the accessibility and quality of
					the work we are producing.
				</li>
				<li>
					Leading monthly sessions for the front end team to share updates or
					information to help the continued learning & development of the whole
					team.
				</li>
				<li>
					Consistently praised for attention to detail, high standard of work
					and never turning down a challenge.
				</li>
			</ul>
			<h3>2016 - 2019</h3>
			<ul>
				<li>
					Got to grips with React Native in a very short space of time and have
					since deployed three mobile apps (BVD Biosecurity Checklist, BAPS App
					Wales, Velindre Mindfulness App).
				</li>
				<li>YCN Student Awards 2016/7 Commendation</li>
			</ul>
			<h3>Additional</h3>
			<ul>
				<li>
					Was instrumental in the growth and ultimate relaunch of Edel Fencing
					Academy
				</li>
				<li>
					Taught a longsword mechanics class at By The Sword 2022 (the world's
					biggest HEMA event for women and gender minorities) and taught two
					longsword workshops at the May Melee 2019
				</li>
				<li>RYA Sailing level 2</li>
				<li>
					Guinness World Record for the World's Largest Scavenger Hunt (2013)
				</li>
				<li>
					<h4>Tournament Achievements:</h4>
					<h5>Womens' Sword & Buckler</h5>
					<ul>
						<li>Bronze, Wessex League Southampton 2022</li>
						<li>Silver, Albion Cup 2019</li>
					</ul>
					<h5>Womens' Longsword</h5>
					<ul>
						<li>Bronze, Wessex League Exeter 2019</li>
						<li>Bronze, Exeter Longsword Open 2019</li>
						<li>Bronze, Wessex League London 2017</li>
					</ul>
					<h5>Womens' Raper & Dagger</h5>
					<ul>
						<li>Silver, Wessex League Cardiff 2022</li>
					</ul>
					<h5>Technical Fencer Award</h5>
					<ul>
						<li>Wessex League Overall 2019</li>
						<li>Wessex League Cambridge 2019</li>
					</ul>
				</li>
			</ul>
			<h2>Like what you've read?</h2>
			<p>
				Email me:{" "}
				<Link to={"mailto:jowimborne@gmail.com"}>jowimborne@gmail.com</Link>
			</p>
			<p>
				<a href={data.file.publicURL}>Get my CV</a>
			</p>
		</section>
	</Layout>
)

export const query = graphql`
	query {
		file(relativePath: { eq: "JoAlfieWimbornecv2023.pdf" }) {
			publicURL
		}
	}
`
