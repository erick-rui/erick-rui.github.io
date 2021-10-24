import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';
import { Button, Icon, Col } from 'antd';
import { createImageChildren } from './CarouselSlideItem';

const noOfItems = 7;
const noOfCards = 2;
const chevronWidth = 60;

const Wrapper = styled.div`
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const carouselItems = createImageChildren(noOfItems);

export default () => {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  return (
    <Wrapper>
      <ItemsCarousel
        infiniteLoop
        gutter={12}
        numberOfCards={noOfCards}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        chevronWidth={chevronWidth}
        children={carouselItems}
      >
       <div style={{ height: 200, background: '#EEE' }}>First card</div>
        <div style={{ height: 200, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, background: '#EEE' }}>Third card</div>
        <div style={{ height: 200, background: '#EEE' }}>Fourth card</div>
        </ItemsCarousel>
    </Wrapper>
  );
};

const domContainer = document.querySelector('#carousel'); 
ReactDOM.render(React.createElement(ItemsCarousel), domContainer);