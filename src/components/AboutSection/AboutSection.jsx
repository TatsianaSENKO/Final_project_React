import { Link } from "react-router-dom"
import "./AboutSection.css"

function About() {
	return (
        <section className="about">
            <div className="container">
                <h3 className="about__title">“Мы стремимся сделать уход за кожей доступным и приятным ритуалом для всех, кто хочет заботиться о себе и своем теле”</h3>
                <Link className="btn" to="/history/">Наша история</Link>
            </div>
        </section>

	)
}

export default About
