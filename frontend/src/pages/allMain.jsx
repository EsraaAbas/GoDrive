// // import { FormRow } from '../components';
// import Wrapper from '../assets/wrappers/DashboardFormPage';
// import { Form } from 'react-router-dom';
// import { HiDocumentPlus } from 'react-icons/hi2';
// import { useDashboardContext } from '../pages/DashboardLayout';
// import { FaRegUser } from 'react-icons/fa'; 
// import { LuPhone } from 'react-icons/lu'; 

// const allMain = () => {
//   const { user, logoutUser } = useDashboardContext();

//   return (
//     <Wrapper>
//       <Form className='form'>
//         <h4 className='form-title'>{user?.name}</h4>
//         <div style={{ display: 'flex', flexDirection: 'row', gap: '405px'  }}>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '15px'  }}>
//                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//             <FaRegUser /> رقم الهوية: 2187651100
//           </p>
//           <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//             <HiDocumentPlus /> رقم الإصدار: 17
//           </p>
//           <p style={{ display: 'flex', alignItems: 'center' }}>
//            966537122490+<LuPhone /> 
//           </p>
//           </div>
//           <button className='bttn ' type='button' >
//             عدد الوثائق <br />0
//           </button>
//         </div>

//         <div className='form-center'>
//            <button
//             type='submit'
//             className='btn  form-btn '
//           >
//             انشاء وثيقه
//           </button>
//          <button
//             type='submit'
//             className='btn  form-btn '
//           >
//             وثائقي
//           </button>
//          <button
//             type='submit'
//             className='btn  form-btn '
//           >
//             تحديث الملف
//           </button>
//         </div>
        
//       </Form>
//     </Wrapper>
//   );
// };

// export default allMain;

import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form } from 'react-router-dom';
import { HiDocumentPlus } from 'react-icons/hi2';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaRegUser } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';

const allMain = () => {
  const { user, logoutUser } = useDashboardContext();
  const documentCount = 0; 

  return (
    <Wrapper>
      <Form className='form'>
          <h4 className='form-title ' style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {user?.name}
            <span className='padge'>
              {documentCount}
            </span>
          </h4>

          <div className='form-div'>
            <p className='para'>
              <FaRegUser /> رقم الهوية: 2187651100
            </p>
            <p  className='para'>
              <HiDocumentPlus /> رقم الإصدار: 17
            </p>
            <p className='para'>
              <LuPhone /> 966537122490+
            </p>
          </div>

        <div className='form-center'>
          <button type='submit' className='btn form-btn'>
            انشاء وثيقه
          </button>
          <button type='submit' className='btn form-btn'>
            وثائقي
          </button>
          <button type='submit' className='btn form-btn'>
            تحديث الملف
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default allMain;

