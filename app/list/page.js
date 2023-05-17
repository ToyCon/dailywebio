'use client'
import {useState} from "react"

export default function List() {
  //1강 내용은 여기까지, DB에서 제품 정보를 받아온다고 가정하고 product를 작성
  //실제로 정보를 받아온다면 fetch를 써서 받아오는데 itemList를 db에서 가져올 것임
  let products = [ { name: 'Tomatoes', price: 2}, { name: 'Pasta', price: 7}, { name: 'Coconut', price: 10} ]
  //제품 가격 하드코딩되어 있는 부분을 아이템마다 객체 형태로 작성
  let [count, countChange] = useState(Array(products.length).fill(0))
  //1강 마지막 강의 과제 : 카트별로 수량을 별개로 작동할 수 있도록 useState로 작동하는 버튼 만들기
  //실제 페이지처럼 작동할 수 있도록 cart와 페이지를 연결하는 부분은 나중에 구현할 예정
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        products.map((e, i) => {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img"/>
              <h4>{e.name} ${e.price}</h4>
              <button onClick={()=>{ 
                let copy = [...count]
                copy[i] = copy[i] - 1
                countChange([...copy])
                }}>-</button>
              <span>{count[i]}</span>
              <button onClick={()=>{ 
                let copy = [...count]
                copy[i] = copy[i] + 1
                countChange([...copy])
                }}>+</button>
            </div>
          )
        })
      }
    </div>
  )
}