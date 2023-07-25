import "./style.scss";
const Background = () => {
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(<div key={i} className='circle dark:bg-white bg-stone-500'></div>)
  }
  return (
    <div className='circle'>
      {arr}
    </div>
  )
}

export default Background;