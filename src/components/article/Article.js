import './Article.css';
import gender from '../img/male.png'
import male from '../img/male.png';
import female from '../img/female.png';

function Article(props)
{
  //let {title, content} = props;
  let{db} = props;
    return(
        <article>

          <div className = 'app'>
            {
                Object.keys(db).map(elem => 
                  {
                  return(
                    <div className='card' key = {elem}>
                      <img src = {db[elem].photo} alt="Photo"/>
                      <div className= 'name'>{db[elem].name}{db[elem].surname}</div>
                      <div className= 'gender'> <img src={db[elem].pol=== 'male' ? male :female} alt = "Gender" /></div>
                      <div className= 'age'> {db[elem].age}</div>
                      </div>
                         )
             
                   })
            }
            
          {/* <div className = 'card'>
            <img src = {db.photo} alt = "Photo"/>
             <div className = 'name' >{db.name} {db.surname}</div>
            <div className = 'gender'>
            <img src={gender} alt = "Gender"/>
          </div> */}
          </div>
         
       {/* </div></div><h1 style = {{title:"darkgreen"}}>{title}</h1> */}
          {/* {content} */}
     {/* <h2>Современные десктопные процессоры</h2> 
      <p>– это ключевые компоненты персональных компьютеров, 
        отвечающие за обработку данных и управление операциями. 
        Они характеризуются высокой тактовой частотой, 
        количеством ядер для параллельной обработки, а некоторые 
        модели также включают встроенный графический процессор (iGPU). 
        Кроме того, некоторые процессоры имеют разблокированный 
        множитель для разгона. Важным аспектом 
        является эффективное охлаждение для предотвращения перегрева

      </p>*/}
         
      </article>
    )
}
Article.defaultProps = 
{
  title: "Заголовок статьи",
  content: "Содержимое статьи"
}

export default Article;
