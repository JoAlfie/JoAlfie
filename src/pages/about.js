import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "../components/link"

export default ({ data }) => (
	<Layout
		metaTitle="About | Jo Alfie Wimborne"
		metaDescription="About Jo Alfie Wimborne: I am a front-end turned full-stack developer based in Cardiff. I love learning new things, building cool stuff, and playing with swords."
		title="About Me"
	>
		<section className="about-section">
			<h2>Hi, I'm Jo Alfie Wimborne</h2>
			<p>
				I am a front-end turned full-stack developer based in Cardiff. I love
				learning new things, building cool stuff, and playing with swords.
			</p>
			<p>
				I studied Graphic Communication at the University of South Wales before
				moving into web development. In the past two years I have massively
				expanded my skillset from HTML/CSS/JQuery to now include CSS
				Preprocessing (Less/Sass), workflow tools (Gulp), version control (Git),
				vanilla javascript (inlcuding ES6), modern tools and frameworks such as
				React and Node.js, and mobile app development using React Native. I am
				also proficent in using much of the Adobe suite, including Illustrator,
				Photoshop and InDesign.
			</p>
			<p>
				Though I have studied and worked in various fields over the past five
				years, my consistent goal throughout has been to put in as much as I can
				to every experience and take every opportunity to learn. I am
				enthusiastic and creative with a keen attention to detail, and I enjoy
				sharing this with other people. I enjoy a challenge and a working
				experience which has something different every day, particularly with a
				strong team of colleagues which I can contribute to.
			</p>
			<p>
				When I'm not at a computer I train and teach Historical European Martial
				Arts at Edel Fencing Academy. I also compete from time to time, and have
				won medals in Longsword and Sword & Buckler.
			</p>
			<h2>Skills</h2>
			<ul>
				<li>HTML</li>
				<li>CSS (including Less/Sass)</li>
				<li>Javascript (Vanilla/ES6+ and JQuery)</li>
				<li>Responsive websites</li>
				<li>Web accessibility</li>
				<li>Git</li>
				<li>Gulp</li>
				<li>Templating: XLST, Pug</li>
				<li>CMSs: Symphony CMS, Prismic.io, Wordpress</li>
				<li>React Native</li>
				<li>React</li>
				<li>Basics of Node.js</li>
				<li>Basic PHP</li>
				<li>Adobe suite, including Illustrator, Photoshop & InDesign</li>
				<li>Googling</li>
			</ul>
			<h2>Notable Achievements / Awards</h2>
			<ul>
				<li>
					Got to grips with React Native in a very short space of time and have
					since deployed three mobile apps (BVD Biosecurity Checklist, BAPS App
					Wales, Velindre Mindfulness App) and am in progress with a fourth.
				</li>
				<li>
					<Link to="https://www.ycn.org/news/2049-drumroll-commendations">
						YCN Awards 2016/7 Commendation
					</Link>
				</li>
				<li>
					Was instrumental in the growth and ultimate relaunch of Edel Fencing
					Academy
				</li>
				<li>
					Four medals from HEMA tournaments: silver in Women's Sword & Buckler
					(Albion Cup 2019), bronze in Women's Longsword (Wessex League Exeter
					2019, Exeter Longsword Open 2019, Wessex League London 2017)
				</li>
				<li>
					Taught two longsword workshops at the May Melee 2019, and have been
					invited to teach at By The Sword 2020 (the world's biggest HEMA event
					for women and gender minorities)
				</li>
				<li>RYA Sailing level 2</li>
				<li>
					Guinness World Record for the World's Largest Scavenger Hunt (2013)
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
		file(relativePath: { eq: "JoAlfieWimbornecv2019.pdf" }) {
			publicURL
		}
	}
`
