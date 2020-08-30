export default function Icons (props) {

    const size = props.size || 'size-md';
    const className = props.className || '';

    return (
        <>
            {
                props.icon
                ?
                    <svg className={`icon icon__${props.icon} ${className} ${size}`} ><use xlinkHref={`#icon__${props.icon}`}></use></svg>
                :
                    <span>icon</span>
            }

        </>
    );
};





// Old version

// import host from '../constants/host';
//
// const url = host.host + 'sprite.svg';
//
// const Icons = (props) => {
//
//     const size = props.size || 'size-md';
//     const className = props.className || '';
//
//     return (
//         <svg viewBox='0 0 16 16' className={`icon icon__${props.icon} ${size} ${className}`}>
//             <use xlinkHref={`${url}#icon__${props.icon}`} />
//         </svg>
//     );
// };
//
// export default Icons;