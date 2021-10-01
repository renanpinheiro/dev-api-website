import React from 'react'
import * as S from './Hero.style'

const Hero = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

export { Hero }

// const circles = [
//   {
//     position: '-99px',
//     timer: '25s',
//     type: 'small',
//   },
//   {
//     position: '-165px',
//     timer: '30s',
//     urlimage: '/logo/dropbox.png',
//     type: 'default',
//   },
//   {
//     position: '-213px',
//     timer: '35s',
//     urlimage: '/logo/drive.png',
//     type: 'default',
//   },
//   {
//     position: '-262px',
//     timer: '40s',
//     urlimage: '/logo/hubspot.png',
//     type: 'default',
//   },
//   {
//     position: '-262px',
//     timer: '30s',
//     type: 'small',
//   },
//   {
//     position: '-338px',
//     timer: '60s',
//     urlimage: '/logo/magento.png',
//     type: 'default',
//   },
//   {
//     position: '-338px',
//     timer: '70s',
//     type: 'small',
//   },
//   {
//     position: '-614px',
//     timer: '70s',
//     type: 'small',
//   },
// ]

// return (
//   <S.Container>
//     <S.BackgroundCircleContainer>
//       <S.CircleContainer width="1230px" height="1230px">
//         <S.CircleContainer width="930px" height="930px">
//           <S.CircleContainer width="680px" height="680px">
//             <S.CircleContainer width="530px" height="530px">
//               <S.CircleContainer width="430px" height="430px">
//                 <S.CircleContainer width="330px" height="330px">
//                   <S.CircleContainer width="200px" height="200px">
//                     {circles.map(circle => {
//                       return (
//                         <S.Circle
//                           type={circle.type}
//                           position={circle.position}
//                           timer={circle.timer}
//                         >
//                           <img src={circle.urlimage} />
//                         </S.Circle>
//                       )
//                     })}
//                     <S.Logo src="/logo/devapi.png" />
//                   </S.CircleContainer>
//                 </S.CircleContainer>
//               </S.CircleContainer>
//             </S.CircleContainer>
//           </S.CircleContainer>
//         </S.CircleContainer>
//       </S.CircleContainer>
//     </S.BackgroundCircleContainer>
//   </S.Container>
// )
