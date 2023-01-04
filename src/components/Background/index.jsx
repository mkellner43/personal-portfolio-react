import './style.scss';

const Background = () => {
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(<div key={i} className='circle'></div>)
  }
  return (
    <div className='circles'>
      {arr}
      {/* <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div> */}
    </div>
  )
}

export default Background;