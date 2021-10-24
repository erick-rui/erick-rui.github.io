import { Carousel } from '@trendyol-js/react-carousel';
import imgcrsl from './imgcrsl';
import { Item } from './yourItem';
import defaultExport from imgcrsl;

const domContainer = document.querySelector('#carousel'); 
ReactDOM.render(React.createElement(defaultExport),domContainer,);