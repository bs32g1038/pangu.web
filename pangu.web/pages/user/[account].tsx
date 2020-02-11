// import UserInfo from '../../src/pages/user-info';
// export default UserInfo;
import dynamic from 'next/dynamic';
export default dynamic(() => import('../../src/pages/user-info'), { ssr: false });
