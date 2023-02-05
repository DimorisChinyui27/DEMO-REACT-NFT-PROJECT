import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import styles from '../styles/Global';
import assets from '../assets';
import { useEffect, useRef,useState,useMemo } from "react";
import { Spring, config } from "react-spring/renderprops";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
   
  }

  return stripePromise;
};

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}


const Download = () => {
    let numberofservicesleft=300;
    const item = {
      price: "price_1MTxSBDVovbCDWEfm4i50cOb",
      quantity: 1
    };
    const ref1 = useRef(null);
    const isInViewport = useIsInViewport(ref1)
    const [NumberOfItems, setNumberOfItems] = useState(1);
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    let invalidRedirect=false;
    let invalidNumber=false;
    if(((NumberOfItems*1)<1 || (NumberOfItems*1)>numberofservicesleft)){
        invalidNumber=true;
    }else{ 
      item.quantity=NumberOfItems*1;
       invalidNumber=false;
    }
    if(invalidNumber || isLoading){
      invalidRedirect=true;
    }else{invalidRedirect=false;}
   
    const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
    };

    const redirectToCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("redirectToCheckout");
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);
        if (error) setStripeError(error.message);
        setLoading(false);
    };
    if (stripeError) alert(stripeError);

  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Preorder Now</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Ladies and Gentlemen, start your engines! The GT Bentley Car Collection NFTs are finally here and they are unlike anything you've ever seen before. Only <span className="font-bold text-3xl text-primary">300</span> pre-order spots available at an exclusive price of <span className="font-bold text-3xl text-primary"> 50CHF</span> each. These <span className="font-bold text-3xl text-tertiary">limited edition NFTS </span> feature breathtaking digital renderings of some of the world's most sought-after GT Bentley cars. </p>  
        </div>
        <div ref={ref1} className={`${styles.subSection} flex-col text-center`}>
          <h1 className="font-bold text-4xl text-red-600">Number of Offers left:</h1>
          {isInViewport && 
           <Spring
             config={config.slow}
             from={{ num: 1 }}
             to={{ num: numberofservicesleft }}
             delay="1000"
           >
           {props => <div className={`${styles.h1Text} } mb-10 text-primary`} >{ props.num.toFixed()}</div>}
          </Spring>
          }
        </div>
        <div className={styles.flexVCenter}>
            <form onSubmit={redirectToCheckout} className={styles.flexVCenter}>
               <label className='block font-bold text-3xl mb-3 text-tertiary '>How many NFTs do you want to preorder? </label>
               <input className='w-full py-1.5 px-2.5 my-3 mx-0 border border-solid border-black cursor-pointer block rounded-lg text-3xl' type="number" required value={NumberOfItems} onChange={(e) => setNumberOfItems(e.target.value)}/>
               {invalidNumber && <p className='block font-bold text-3xl mb-3 text-red-600'>Number of articles invalid!</p>}
              <button className={`checkout-button ${styles.btnPrimary}`}  disabled={invalidRedirect}>{isLoading?"Loading...":"Preorder"}</button>
           </form>
        </div>
       
      </div>
    </div>
  )
}

export default Download