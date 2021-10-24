import AutoPlayCarousel from '/imgcrsl.jsx';

export class MyPage extends React.Component{
  render(){
    return(
        <AutoPlayCarousel />
    );
  }
}

const domContainer = document.querySelector('#carousel'); 
ReactDOM.render(<MyPage />,domContainer);