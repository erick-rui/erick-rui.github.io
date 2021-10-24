import AutoPlayCarousel from '/imgcrsl.js';

export class MyPage extends React.Component{
  render(){
    return(
        <AutoPlayCarousel />
    );
  }
}

ReactDOM.render(
  <MyPage />,
  document.getElementById('carousel')
);