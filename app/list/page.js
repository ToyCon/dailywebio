export default function List() {
  let products = ['Tomato', 'Pasta', 'Coconut'];
  
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        products.map((e, i) => {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img"/>
              <h4>{e} $40</h4>
            </div>
          )
        })
      }
    </div>
  )
}
  