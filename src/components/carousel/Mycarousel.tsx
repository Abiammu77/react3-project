import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../static/img/1.jpg'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'


export const Mycarousel:React.FC<{}>=()=>{
    return <>
       <Carousel>
      <Carousel.Item>
        <img width="100%" height="400px" src={img1}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  src={img2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  src={img3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
}