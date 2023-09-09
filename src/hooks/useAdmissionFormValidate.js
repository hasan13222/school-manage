import {useSelector} from 'react-redux';

export const useAdmissionFormValidate = () => {
    const student = useSelector((store) => store.admission);
    const AdmissionFormValidate = () => {
        console.log(student);
        if(!student.class){
            alert('Please select a class');
        } else if(!student.firstName){
            alert('Please Fill your first name');
        } else if(!student.gender){
            alert('Please select your gender');
        } else if(!student.birthDate){
            alert('Please select your birth date');
        } else if(!student.mobileNumber){
            alert('Please enter your mobile number');
        } else if(!student.email){
            alert('Please enter your email');
        } else if(!student.fatherName){
            alert('Please enter your father name');
        } else if(!student.motherName){
            alert('Please enter your mother name');
        } else if(!student.gurdianName){
            alert('Please enter your gurdian name');
        } else if(!student.gurdianRelation){
            alert('Please enter your gurdian relation');
        } else if(!student.gurdianPhone){
            alert('Please enter your gudian phone number');
        } else if(!student.presentAddress){
            alert('Please enter your present address');
        } else if(!student.permanentAddress){
            alert('Please enter your permanent address');
        } else{
            return 1;
        }
    }
    return AdmissionFormValidate;
}