import React from 'react'
import { Button, 
   Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators, } from "reactstrap";
import bg from '../assets/image/bg6.jpg'
import bg1 from '../assets/image/bg4.jpg'
import bg5 from '../assets/image/bg5.jpg'


// core components

const items = [
  {
    src:bg1,
    altText: "Somewhere Beyond, United States",
 
  },
  {
    // src: require("../assets/image/bg6.jpg"),
    src:bg5,
    altText: "Somewhere Beyond, United States",

   
  },
  {
    src: bg,
    altText: "Somewhere Beyond, United States",
   
  },
];


const HomepageHeader = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };


    return (
        <>

<Row className="justify-content-center">
            <Col lg="12" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                      
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                     
                    >
                      <div className="page-header page-header-small">
                      <img src={item.src} alt={item.altText}  className="page-header-image"
                      />
                      <div className="content-center">
          <Container>
           
            <div className=" socials">
              <Button
                className="text-white"
                color="inherit"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square"></i>
              </Button>
              <Button
                className="text-white"
                color="inherit"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter"></i>
              </Button>
              <Button
                 className="text-white"
                color="inherit"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus"></i>
              </Button>
            </div>
          </Container>
        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  {/* <i className="fa fa-angle-left fa-3x"></i> */}
                </a>
                <a
                  className="carousel-control-next "
                
                  
                  data-slide="next"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  {/* <i className="fa fa-angle-right fa-3x "></i> */}
                </a>
              </Carousel>
            </Col>
          </Row>




        
            {/* <div className="page-header page-header-small">
              <img src={bg} alt=""   className="page-header-image"
               ref={pageHeader}
              />
                
      
        <div className="content-center">
          <Container>
           
            <div className=" socials">
              <Button
                className="text-white"
                color="inherit"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square"></i>
              </Button>
              <Button
                className="text-white"
                color="inherit"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter"></i>
              </Button>
              <Button
                 className="text-white"
                color="inherit"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus"></i>
              </Button>
            </div>
          </Container>
        </div>
      </div>  */}
        </>
    )
}

export default HomepageHeader;
