
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate=useNavigate()
    return (
        <div className='ui fixed menu' style={{ position: 'relative' }}>
            <div className='ui container center'>
                <h2 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => navigate('/')}
                >
                    E-SHOP
                </h2>
            </div>
            <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>
                <i className="shopping cart icon" style={{ fontSize: '2em', cursor: 'pointer' }}></i>
            </div>
        </div>
    );
}
export default Header;





// import React from 'react';
// function Header(props) {
//     return (
//         <div className='ui fixed menu'>
//             <div className='ui container center'>
//                 <h2>E-SHOP</h2>
//             </div>
//         </div>
//     );
// }
// export default Header;