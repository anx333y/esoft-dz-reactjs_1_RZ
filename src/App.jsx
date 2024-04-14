import './App.css'
import { Profile } from './components/Profile.jsx'
import { SkillsCard } from './components/SkillsCard.jsx'
import { BlockTitle } from './components/BlockTitle.jsx'
import { WantToLearnCard } from './components/WantToLearnCard.jsx'
import { skills } from './sources/skills.js'
import { wtLearns } from './sources/wtLearns.js'

function App() {
  return (
    <>
			<div className="header">
				<h1>Краткое резюме, что-ли...</h1>
				<Profile 
					src="src/sources/RZ.jpg"
					alt="Фотография Зуевич Романа"
					name="Роман"
					surname="Зуевич"
				/>
			</div>
			<BlockTitle title="Мои навыки" />
			<div className="skills">
				{skills.map(({ title, description, rating }) => 
					<SkillsCard
						key={ title + rating } 
						title={ title }
						description={ description }
						rating={ rating }
					/>
				)}
			</div>
			<BlockTitle title="Что я хочу изучить?" />
			<div className='wt-learn'>
				{wtLearns.map(({ title, comment, src, rating }) => 
					<WantToLearnCard
						key={ title + src + rating }
						title={ title }
						comment={ comment }
						src={ 'src/sources/icons/' + src }
						rating={ rating }
					/>
				)
				}
			</div>
    </>
  )
}

export default App
