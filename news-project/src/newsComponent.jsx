function NewsComponent(props) {
  const{title,description,urlToImage, publishedAt ,url}=props;
  return (
    <div className='news-card'>
      <img 
        src={urlToImage}
        alt="news-images"/>
      <div className='news'>
          <h2>{title}</h2>
          <h3>{publishedAt}</h3>
          <h3>{description}</h3>
          <a href={url}>View Full article</a>
      </div>
    </div>
  );
}

export default NewsComponent;