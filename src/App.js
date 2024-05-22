import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';

import FeedbackData from './data/FeedbackData';

function App() {
   const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes >
        <Route exact path='/' element={
          <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
          
          </>
        }></Route>
        

        <Route path='/about' element={<AboutPage />} />
        <Route path='/post' element={<Post />} />
        {/* <Route path='/post/:id/:name' element={<Post />} /> */}
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
