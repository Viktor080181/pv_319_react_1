import './Article.css';
import male from '../img/male.png';
import female from '../img/female.png';

function Article(props) {
  let { db } = props;

  return (
    <article>
      <div className='app'>
        {Object.keys(db).map(elem => (
          <div className='card' key={elem}>
            <img src={db[elem].photo} alt="Photo" />
            <div className='name'>{db[elem].name} {db[elem].surname}</div>
            <div className='gender'>
              <img src={db[elem].pol === 'male' ? male : female} alt="Gender" />
            </div>
            <div className='age'>{db[elem].age}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

Article.defaultProps = {
  title: "Заголовок статьи",
  content: "Содержимое статьи"
};

export default Article;
