/**import modules */
import React from 'react';
/**import react swiper modules */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
/**import styled components */
import { StyledContainer, SwiperOut, NavigationPrev, NavigationNext, Card, CardHeading, CardContent, CardContentWrpper, CardImg } from './styled';
/**import images */
import Home_shoes_1_Img from 'assets/images/Home-shoes-1.png';
import Home_clothing_1_Img from 'assets/images/Home-clothing-1.png';
import Home_shoes_2_Img from 'assets/images/Home-shoes-2.png';
import Home_clothing_2_Img from 'assets/images/Home-clothing-2.png';

const IntroductionContainer: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <h1>Create Your Digital Closet</h1>
        <SwiperOut>
          <NavigationPrev className="prev">→</NavigationPrev>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            modules={[Navigation]}
            breakpoints={{
              1600: {
                slidesPerView: 4,
              },
              1250: {
                slidesPerView: 3,
              },
              890: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <Card>
                <CardHeading />
                <CardContent>
                  <CardContentWrpper />
                  <div>
                    <span>Nike Blazer Mid '77 EMB</span>
                    <p>Nike</p>
                  </div>
                </CardContent>
                <CardImg src={Home_shoes_1_Img} left={15.4} marginBottom={87.28} />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardHeading />
                <CardContent>
                  <CardContentWrpper />
                  <div>
                    <span>Washington Wizard’s City Edition</span>
                    <p>Nike</p>
                  </div>
                </CardContent>
                <CardImg src={Home_clothing_1_Img} left={102.46} marginBottom={61.95} />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardHeading />
                <CardContent>
                  <CardContentWrpper />
                  <div>
                    <span>Nike Waffle One</span>
                    <p>Nike</p>
                  </div>
                </CardContent>
                <CardImg src={Home_shoes_2_Img} left={13.71} marginBottom={89} />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardHeading />
                <CardContent>
                  <CardContentWrpper />
                  <div>
                    <span>Nike Waffle One</span>
                    <p>Nike</p>
                  </div>
                </CardContent>
                <CardImg src={Home_clothing_2_Img} left={70.82} marginBottom={59.95} />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardHeading />
                <CardContent>
                  <CardContentWrpper />
                  <div>
                    <span>Washington Wizard’s City Edition</span>
                    <p>Nike</p>
                  </div>
                </CardContent>
                <CardImg src={Home_clothing_1_Img} left={102.46} marginBottom={61.95} />
              </Card>
            </SwiperSlide>
          </Swiper>
          <NavigationNext className="next">→</NavigationNext>
        </SwiperOut>
      </StyledContainer>
    </>
  );
};

export default IntroductionContainer;