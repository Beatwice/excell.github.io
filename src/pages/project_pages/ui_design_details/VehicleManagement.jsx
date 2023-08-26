import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import { Carousel } from "react-responsive-carousel";
import vehicle1 from "../../../assets/img_carousel/vehicle_1.png"
import vehicle2 from "../../../assets/img_carousel/vehicle_2.png"
import vehicle3 from "../../../assets/img_carousel/vehicle_3.png"
import vehicle4 from "../../../assets/img_carousel/vehicle_4.png"
import vehicle5 from "../../../assets/img_carousel/vehicle_5.png"
import vehicle6 from "../../../assets/img_carousel/vehicle_6.png"
import Footer from "../../../components/footer/footer";
import 'react-vertical-timeline-component/style.min.css';

const VehicleManagement = () => {
return (
  <div style = {{ background: "white" }}>
    <Header/>
    <div className='px-20 max-sm:px-0 max-sm:pt-2 max-sm:px-4 max-sm:pb-20'>
      <br />
      <ul className='flex text-sm pt-16 max-sm:pt-10' style={{color:"#333333"}} >
        <li><Link to='/project/ui_design' className='hover:underline'>Ui Design</Link></li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
        </li>
        <li >Vehicle Management</li>
      </ul>
      <p className='text-center text-5xl font-bold pt-4 max-sm:pt-4 max-sm:text-3xl' style={{color: '#393646', opacity: 0.9}} >Vehicle Management</p>
      <br />
      <div className="max-sm:flex max-sm:justify-center">

      <div className='sm:flex sm:justify-center max-sm:w-11/12'>
        <Carousel autoPlay={true} infiniteLoop={true} className='carousel-container' showArrows={false}>
          <div>
              <img src={vehicle1} />
          </div>
          <div>
              <img src={vehicle2} />
          </div>
          <div>
              <img src={vehicle3} />
          </div>
          <div>
              <img src={vehicle4} />
          </div>
          <div>
              <img src={vehicle5} />
          </div>
          <div>
              <img src={vehicle6} />
          </div>
        </Carousel>
      </div>
      </div>
      <blockquote classNames="my-4 border-l-4 dark:border-gray-500">
        <p style={{color:"#333333"}} className="pl-4 text-2xl font-bold italic leading-relaxed max-sm:text-xl">Description</p>
      </blockquote>
      <p className='text-gray-600'>Vehicle management is a web application for vehicle management and tracking.</p>
      
      <blockquote className="my-4 border-l-4 dark:border-gray-500">
        <p style={{color:"#333333"}} className="pl-4 text-2xl font-bold italic leading-relaxed max-sm:text-xl">Tools</p>
      </blockquote>
      <ul className='max-w-md space-y-1 text-gray-600 list-disc list-inside dark:text-gray-600'>
        <li>Figma</li>
      </ul>
    </div>
      <Footer/>
  </div>
);
}

export default VehicleManagement;