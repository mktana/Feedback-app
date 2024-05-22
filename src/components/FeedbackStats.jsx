import PropTypes from 'prop-types'
function FeedbackStats({feedback = []}) {
  // Calaulate ratings avg.
  let average = feedback.reduce((acc, cur) => acc + cur.rating, 0)  
   / feedback.length;

  average = feedback.length > 0 ? average.toFixed(1).replace(/[.,]0$/, '') : 0;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews </h4>
      <h4>Average Rating: {average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats