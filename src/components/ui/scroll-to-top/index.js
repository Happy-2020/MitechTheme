import React, {useState, useEffect} from 'react';
import { MdArrowUpward } from "react-icons/md";
import {ScrollTopButton} from './scroll-to-top.style'

const ScrollToTop = (props) => {
    const [stick, setStick] = useState(false)     
    const onClickHandler = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    useEffect(() => {
      var position = window.pageYOffset

      const scrollHandler = () => {
        let scrollPos = window.pageYOffset;
        if(scrollPos < 200){
          setStick(false);
        }else if(scrollPos < position){
          setStick(true);
        }else{
          setStick(false);
        }
        position = scrollPos  
      }




      window.addEventListener('scroll', function(){
        scrollHandler();
      });
      return () => {
          window.removeEventListener('scroll', function(){
            scrollHandler();
          });
      }
    }, [stick]);

    
    
    return (
        <ScrollTopButton type="button" onClick={onClickHandler} isStick={stick} {...props}>
          <MdArrowUpward className="icon arrow-up"/>
          <MdArrowUpward className="icon arrow-bottom"/>
        </ScrollTopButton>
    )
}

export default ScrollToTop
