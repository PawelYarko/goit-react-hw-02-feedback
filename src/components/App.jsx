import Feedback from 'Feedback/Feedback'



export default function App(){
  return (
  <div>
      <Feedback 
      goodStartValue={0} 
      neutralStartValue={0} 
      badStartValue={0}
      />
  </div>);
}