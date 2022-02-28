import React , {useState , useEffect, useContext} from 'react'
import image from '../assets/image/logo.png';
import {useHistory} from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import transactionContext from '../context/transactionCntxt';



const style = {
    wrapper: 'flex flex-col lg:w-2/5 justify-center items-center',
    cardview: 'm-3 flex flex-col font-light cursor-pointer justify-between items-center rounded-xl  md:h-90 w-[90vw] md:w-[100%] shadow-2xl overflow-scroll md:overflow-hidden ',
    title: 'px-2 text-xl font-bold',
    button: 'flex my-2 justify-center items-center ',
    image: 'h-[100%] w-[100%] rounded-xl ',
    imagebox: 'h-[40%]  w-[100%] rounded-xl shadow-xl shadow-zinc-500/20',
    buttontext: 'hover:bg-[#ff404d] py-2 px-2 rounded-full shadow-xl bg-[#b3242d]',
    description: 'text-sm my-3 mx-2 z-10 p-1 rounded-xl shadow-xl shadow-zinc-700/10 border-purple-500 border-[1px]',

    causeViewer: 'flex flex-col justify-between bg-white  h-[70vh] md:h-fit w-[90vw] md:w-[100%] rounded-xl p-5 overflow-scroll md:overflow-hidden',
    causeViewerheader: 'flex justify-between',
    causeViewerTitle: 'text-3xl  antialiased  ' ,
    causeViewerImage: 'flex justify-center my-5 h-[40vh] rounded-xl shadow-xl',
    causeimage: ' rounded-xl w-[1000%] h-[100%] shadow-xl shadow-purple-300/70',
    causeViewerDescription: 'backdrop-blur-xl shadow-xl shadow-purple-500/50 p-2 rounded-xl text-xl shadow-xl',
    DonateButton: 'flex justify-center ',
    DonateButtontext: 'z-10 cursor-pointer p-2 px-4 rounded-full shadow-xl shadow-orange-700/50 text-xl my-3 bg-[rgba(253,168,81,1)] hover:bg-[rgb(165, 108, 51)]  w-fit'
}

const  Hello= (props) => {
    const context = useContext(transactionContext);
    const {payableContractHash, setpayableContractHash , payableContractAbi  ,
        setpayableContractAbi , setpayableContract , currentAccount} = context;
    const [largeview , setview ]= useState("hidden");
   const viewmore = () => {
       if(largeview==="hidden"){
           setview("");}
           else{
            setview("hidden");
           }
   }
   let history = useHistory();




   const DonateIt = async () => {
       if(currentAccount){
    setpayableContractHash(props.hash);
    setpayableContractAbi(props.Abi);
    setpayableContract(props.title);
    setpayableContractHash((state) => {
   console.log(state); 
   return state;
 });
 setpayableContractAbi((stte) => {
    console.log(stte); 
    return stte;
  });
  setpayableContract((stat) => {
    console.log(stat); 
    return stat;
  });
  history.push("/DonationPage");
}
else{
    alert("connect MetaMaks Before Making Payment");
}
   }
    return (<>     
    
    {/* ?causeViewer */}
        <div className={`topdonnorview ${largeview} ${style.causeViewer}`}>
        <div className={style.causeViewerheader}>
            <div className={style.causeViewerTitle}>HELP SAVE NAB</div>
            <div className='text-xl antialiased shadow-2xl'>
            <AiFillCloseCircle onClick={viewmore}/>
            </div>
        </div>
        <div className={style.causeViewerImage}>
            <img className={style.causeimage} src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1590571972/production/images/campaign/177706/NAB2_hrkxtp_1590572167.jpg" alt="Image" />
        </div>
        <div className={style.causeViewerDescription}>
        National Association for the Blind (NAB) Delhi, a National Award-winning NGO,
         currently supports 250 school going blind children,  orphans, 80 deaf-blind children, 
         125 caregivers, teachers and staff, and thousands of persons with vision disabilities 
         via a helpline and remote support for universities, schools, and libraries. 
         Due to the COVID-19 crisis, the NAB does not have the funds to continue its activities
          and may have to close, putting all these lives at risk
        </div>
        <div className={style.DonateButton}>
            <div className={style.DonateButtontext} onClick={DonateIt}>
            Donate
            </div>
        </div>
    </div>
    {/* end */}


{/* database cause */}
    <div className={style.wrapper}>
    <div className={`cardview ${style.cardview}`}>
        <div className={style.title}>HELP SAVE NAB</div>
        <div className={style.imagebox}>

        <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1590571972/production/images/campaign/177706/NAB2_hrkxtp_1590572167.jpg" className={style.image}/>
        </div>
        <div className={style.description}>
        National Association for the Blind (NAB) Delhi, a National Award-winning NGO,
         currently supports 250 school going blind children,  orphans, 80 deaf-blind children,
        </div>
        <div className={style.button} >
            <div className={style.buttontext} onClick={viewmore} >
            Know More
            </div>
        </div>
        </div>
        </div>
        </>

  )
}

export default Hello