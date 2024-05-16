import { FaTimes } from 'react-icons/fa'
import propTypes from 'prop-types';
import Card from "./shared/Card"
function FeedbackItem({item, handleDelete}) {

  // const handleClick = () => {
  //   console.log(item.id);
  // }

  const handleClick = (id) => {
    console.log(id);
  }

  return (
    <Card >
        <div className='num-display'>{item.rating}</div>
        {/* <button onClick={() => console.log(item.id)}  */}
        {/* <button onClick={handleClick} */}
        <button onClick={() => handleClick(item.id)}
        className="close">
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
        
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
}

export default FeedbackItem