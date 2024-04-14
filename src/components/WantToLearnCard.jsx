import { Rating } from "./Rating";

export const WantToLearnCard = ({ title, comment, src, rating }) => {
	return(
		<div className="wt-learn-card">
			<div className="wt-learn-card__title">
				<img src={ src } alt={ title } className="wt-learn-card__title-icon" />
				<h3 className="wt-learn-card__title-text">{ title }</h3>
			</div>
			<span className="wt-learn-card__comment">{ comment }</span>
			<Rating rating={ rating } turnNumber={ false } />
		</div>
	)
}