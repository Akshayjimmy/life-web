import react from 'react'
import '../Banner.css'


export function Banner() {
    return (
      <div className="container">
        <div className='innerContainer'>
        <div className='imageConatiner'>
            <img src={require('../Assets/Images/istockphoto-1421547005-1024x1024.jpg')}
            className='img'
            alt='Banner Image'
             width={500} 
             height={500}
             />
        </div>
        <div className='contentContainer'>
        <h1 className='title'>Your Pharmacy, Your Health, Your Life</h1>
        <p className='subText'>Lorem ipsum dolor sit amet consectetur. Convallis morbi quisque faucibus cursus arcu ultrices morbi. A viverra mauris amet nisi amet eget senectus odio.</p>
        <div className='buttonContainer'>
            <div className='buttonStyle'><p className='buttonText'>SHOP SALES</p></div>
            <div className='buttonStyle buttonStyleTwo'><p className='buttonText'>ALL PRODUCTS</p></div>
        </div>
        </div> 
        </div>
      </div>
    );
  }