import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from './yourItem';

ReactDOM.render(
	<Carousel>
        <Item />x
		<div>
            <img src="images/placeholder.png" alt="" />
        </div>
        <div>
            <img src="images/placeholder.png" alt="" />
        </div>
        <div>
            <img src="images/placeholder.png" alt="" />
        </div>
        <div>
            <img src="images/placeholder.png" alt="" />
        </div>
        <div>
            <img src="images/placeholder.png" alt="" />
        </div>
        <div>
            <img src="images/placeholder.png" alt="" />
        </div>
	</Carousel>,
	document.getElementById('#carousel'),
);