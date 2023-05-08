import styled from "styled-components";

export const Content = styled.div`
    padding: 44px 0 60px 24px; 
    min-height: 100vh; 

    .swiperSlider {
        width: auto !important;
        margin-right: 0 !important;
        box-sizing: border-box;
    }

    .cardColor{
        display: flex;
        justify-content: space-between;
        height: 448px;
        /* position: absolute; */
        z-index: 2;
        width: 1122px;

        div{
            /* position: absolute; */
            width: 278px;
            left: 276px;
            top: 0px;
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            /* background-color: #00131C; */
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }
    }

    .swiper-button {
        .swiper-button-prev::after, .swiper-button-next::after {
            color: #FFFFFF;
            font-size: 40px;
        }
    }

    .buttonText{
        margin-top: 10px;
        color: #aca8a8;
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
    }

    @media(max-width:768px){
        .swiper-button {
            .swiper-button-prev::after, .swiper-button-next::after {
            display: none;
            }
        }
    }

    @media(min-width:664px){
        .groupHeader{

            .group1Img{
                left: -34px;
                top: -51px;
                height: 204px;
                width:306px;  
            }

            .group2Inf{
                margin-left: 270px;

                >h1{
                    font-size: 28px;
                }

                >span{
                    font-size: 16px;
                }
            }
        }
    }

    @media(min-width:1022px){
        margin-right: 30px;
        
        .groupHeader{
            padding: 90px 0;
            margin: 116px 0 80px;
    
            .group1Img{
                left: -60px;
                top: -132px;
                height: 398px;
                width: 615px;
            }
    
            .group2Inf{
                margin-left: 525px;
    
                >h1{
                    font-size: 40px;
                }
            }
        }
    }
`;

export const GroupHeader = styled.header`
    padding: 36px 0 22px;
    margin: 44px 16px 62px 0;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 8px;
    position: relative;

    .group1Img{
        position: absolute;
        left: -30px;
        top: -11px;
        height: 149px;
        width: 197px;  
    }

    .group1Img img{
        object-fit: cover;
        height: auto;
        width: 100%;
    }

    .group2Inf{
        color: ${({theme}) => theme.COLORS.TEXT_COLOR};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 150px;
        margin-right: 10px;

        >h1{
            font-family: 'Poppins',sans-serif;
            /* font-weight: 500; */
            font-weight: 600; 
            font-size: 15px;
            line-height: 140%;
            margin-bottom: 5px;
        }

        >span{
            font-weight: 400;
            font-size: 11px;
            line-height: 140%;
        }
    }

`;

export const BackgroundHome = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    color: #1d2f37;
    font-size: 4rem;
    padding: 0 24px;
`;

export const ContentCard = styled.div`
    display: flex;
    gap: 32px;
    max-width: 370px;
    width: 100%;
    animation: downtop 700ms 350ms backwards;
    overflow: hidden;

  .swiperSlider{
    width: auto;
    margin-right: 47px;
  }
    

    .dishImg img:hover{
        transform: scale(1.1);
    }
    

    @keyframes downtop {
        0% {
            opacity: 0;
            transform: translateY(15px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media(min-width:664px){
        max-width: 632px;
    }

    @media(min-width:1022px){
        max-width: 1122px;
    }

    
`;
