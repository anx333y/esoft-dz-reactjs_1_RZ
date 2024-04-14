import { Rating } from "./Rating";

export const SkillsCard = ({ title, description, rating }) => {
	return (
		<div className="skills-card">
			<h3 className="skills-card__title">{ title }</h3>
			<p className="skills-card__description">{ description }</p>
			<Rating rating={ rating } turnNumber={ true }/>
		</div>
	)
};