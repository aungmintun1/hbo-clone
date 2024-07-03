

const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for(let index = 1; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }
  return(
    <div className="foryou-list">
      <h3 className="foryou-list__title">For You</h3>
      <div className="foryou-list__thumbnails">
        
          {loopComp(
            (<div className="foryou-list__thumbnail">
              <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2?imbypass=on" />
              <div className="foryou-list__top-layer">
                <i className="fas fa-play"/>  
              </div>  
            </div>), 10
            
            )}
      </div>
    </div>
  )
}

export default ForYouList;