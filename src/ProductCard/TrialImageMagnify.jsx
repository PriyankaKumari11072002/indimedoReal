import React from 'react';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import watchImg1200 from '../assets/watchImg1200.jpg';
import watchImg300 from '../assets/watchImg300.jpg';
import './example.css';

const ProductCardDetails = () => {
    const params = useParams();
    
    return (
        <>
            <div className="fluid"  style={{border:"1px solid red"}}>
                <div className="fluid__image-container"  style={{border:"1px solid yellow"}}>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: watchImg300,
                          
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: watchImg1200,
                           
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '200%',
                          
                            height: '100%'
                        }
                    }} />
                </div>
                <div className="fluid__instructions">
<h3>Enlarged Image Container Dimensions Example</h3>
<p>
    Specify dimensions as percentage of small image or number of pixels.
</p>
<p>
    May be percentage for one dimension and number for the other.
</p>
<p>
    Not applied when enlargedImagePosition is set to 'over', the default for touch input.
</p>
<p>
    This example specifies width of

    and height of
    
</p>
<p>
    Please see
   
    for details.
</p>
</div>        
            </div>
        </>
    );
};

export default ProductCardDetails;



