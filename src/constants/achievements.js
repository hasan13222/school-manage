import { FaGraduationCap, FaBuilding, FaUserTie } from 'react-icons/fa';
import { PiCertificateBold } from 'react-icons/pi'
export const achievements = [
    {
        id: 'achievement-1',
        title: 'GRADUATES',
        number: 238,
        thumbnail: <FaGraduationCap/>,
    },
    {
        id: 'achievement-2',
        title: 'CERTIFIED TEACHERS',
        number: 10,
        thumbnail: <PiCertificateBold/>,
    },
    {
        id: 'achievement-3',
        title: 'STUDENT CAMPUSES',
        number: 3,
        thumbnail: <FaBuilding/>,
    },
    {
        id: 'achievement-4',
        title: 'STUDENTS',
        number: 401,
        thumbnail: <FaUserTie/>,
    },
]