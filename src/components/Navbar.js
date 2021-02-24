// import React,{useEffect, useState} from 'react';
// import Navitems from './Navitems'

// const Navbar = () => {
//     const [NavItemActive,setNavItemActive] = useState('');

//     const Activeitem = (item) => {
//         if (item){
//             console.log(1);
//             document.getElementById(item).classList.add('active');
//         }
//         // setNavItemActive(item)
//         console.log(2);
//         document.getElementById(item).classList.add('active');
//     }
//     return(
//         <nav>
//             <ul>
//                 <Navitems item="Home" tolink="/" activenav={Activeitem}></Navitems>
//                 <Navitems item="About" tolink="/about" activenav={Activeitem}></Navitems>
//                 <Navitems item="Educations" tolink="/education" activenav={Activeitem}></Navitems>
//                 <Navitems item="Skills" tolink="/skills" activenav={Activeitem}></Navitems>
//                 <Navitems item="Contact" tolink="/contact" activenav={Activeitem}></Navitems>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;