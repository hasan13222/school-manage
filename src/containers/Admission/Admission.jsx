import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAdmissionFormValidate } from "../../hooks/useAdmissionFormValidate";

import {
  setClass,
  setFirstName,
  setBirthDate,
  setDocuments,
  setEmail,
  setFatherName,
  setGender,
  setGurdianAddress,
  setGurdianEmail,
  setGurdianName,
  setGurdianOccupation,
  setGurdianPhone,
  setGurdianPhoto,
  setGurdianRelation,
  setLastName,
  setMobileNumber,
  setMotherName,
  setPermanentAddress,
  setPresentAddress,
  setStudentPhoto,
  setValidationStatus,
  clearBoxes
} from "../../store/reducers/admission";
import { useCreateStudentMutation } from "../../store/reducers/admission";
import "./Admission.css";

const Admission = () => {
  const [studentId, setStudentId] = useState(0);
  const [studentPhotoFile, setStudentPhotoFile] = useState('');

  const student = useSelector((store) => store.admission);
  const admissionFormValidate = useAdmissionFormValidate();
  const dispatch = useDispatch();
  const [createStudent] = useCreateStudentMutation();

  const uploadStudentPhoto = (e) => {  
    setStudentPhotoFile(e.target.value);
    function getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        dispatch(setStudentPhoto(reader.result));
        console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
   }
   
   var file = e.target.files[0];
   getBase64(file); // prints the base64 string
  }
  const submitHandler = () => {

    dispatch(setValidationStatus({
      class: student.class ? true : false,
      firstName: student.firstName ? true : false,
      gender: student.gender ? true : false,
      birthDate: student.birthDate ? true : false,
      mobileNumber: student.mobileNumber ? true : false,
      email: student.email ? true : false,
      fatherName: student.fatherName ? true : false,
      motherName: student.motherName ? true : false,
      gurdianName: student.gurdianName ? true : false,
      gurdianRelation: student.gurdianRelation ? true : false,
      gurdianPhone: student.gurdianPhone ? true : false,
      presentAddress: student.presentAddress ? true : false,
      permanentAddress: student.permanentAddress ? true : false,
    }));
    console.log(student.validation);
    const validationResult = admissionFormValidate();
    
    if(validationResult) setStudentId((prev) => prev + 1);

    const newStudent = {
      id: studentId,
      class: student.class,
      firstName: student.firstName,
      lastName: student.lastName,
      gender: student.gender,
      birthDate: student.birthDate,
      mobileNumber: student.mobileNumber,
      email: student.email,
      studentPhoto: student.studentPhoto,
      fatherName: student.fatherName,
      motherName: student.motherName,
      gurdianName: student.gurdianName,
      gurdianRelation: student.gurdianRelation,
      gurdianOccupation: student.gurdianOccupation,
      gurdianPhone: student.gurdianPhone,
      gurdianEmail: student.gurdianEmail,
      gurdianAddress: student.gurdianAddress,
      gurdianPhoto: student.gurdianPhoto,
      presentAddress: student.presentAddress,
      permanentAddress: student.permanentAddress,
      documents: student.documents,
    };
    
    if(validationResult) createStudent(newStudent);
    if(validationResult) dispatch(clearBoxes());
    
  };
  return (
    <div className="full-container admission">
      <div className="fix-container admission__section">
        <h2>Admission Form</h2>
        <div className="admission__section__instruction admission__section__item">
          <h3>Instruction</h3>
          <p>
            Please enter your institution online admission instructions here.
          </p>
        </div>

        {/* basic details */}
        <div className="admission__section__basic admission__section__item">
          <h3>Basic Details</h3>
          <div className="admission__section__basic__inputs admission__section__item__inputs">
            <div className="admission__section__basic__inputs__item admission__section__item__inputs__item">
              <label htmlFor="class">
                Class <span className="red">*</span>
              </label>
              <select
                onChange={(e) => dispatch(setClass(e.target.value))}
                value={student.class}
                name="class"
                id=""
                className={student.validation.class || student.class ? '' : 'border_danger'}
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
            </div>
            <div className="admission__section__basic__inputs__item admission__section__item__inputs__item">
              <label htmlFor="firstName">
                First Name <span className="red">*</span>
              </label>
              <input
              className={student.validation.firstName || student.firstName ? '' : 'border_danger'}
                placeholder="First Name"
                type="text"
                name="firstName"
                id="firstName"
                value={student.firstName}
                onChange={(e) => dispatch(setFirstName(e.target.value))}
              />
            </div>
            <div className="admission__section__basic__inputs__item admission__section__item__inputs__item">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                id="lastName"
                value={student.lastName}
                onChange={(e) => dispatch(setLastName(e.target.value))}
              />
            </div>
            <div className="admission__section__basic__inputs__item admission__section__item__inputs__item">
              <label htmlFor="gender">
                Gender <span className="red">*</span>
              </label>
              <select
              className={student.validation.gender || student.gender ? '' : 'border_danger'}
                onChange={(e) => dispatch(setGender(e.target.value))}
                value={student.gender}
                name="gender"
                id=""
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="admission__section__basic__inputs__item admission__section__item__inputs__item">
              <label htmlFor="birthDate">
                Date Of Birth <span className="red">*</span>
              </label>
              <input
              className={student.validation.birthDate || student.birthDate ? '' : 'border_danger'}
                onChange={(e) => dispatch(setBirthDate(e.target.value))}
                value={student.birthDate}
                type="date"
                name="birthDate"
                id=""
              />
            </div>
            <div className="admission__section__basic__inputs__item admission__section__item__inputs__item">
              <label htmlFor="mobileNumber">
                Mobile Number<span className="red">*</span>
              </label>
              <input
              className={student.validation.mobileNumber || student.mobileNumber ? '' : 'border_danger'}
                onChange={(e) => dispatch(setMobileNumber(e.target.value))}
                value={student.mobileNumber}
                type="text"
                name="mobileNumber"
                id="mobileNumber"
              />
            </div>
            <div className="admission__section__basic__inputs__item admission__section__item__inputs__item">
              <label htmlFor="email">
                Email<span className="red">*</span>
              </label>
              <input
              className={student.validation.email || student.email ? '' : 'border_danger'}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                value={student.email}
                type="email"
                name="email"
              />
            </div>
            <div className="admission__section__basic__inputs__item admission__section__item__inputs__item">
              <label htmlFor="photo">Student Photo</label>
              <input
                onChange={(e) => uploadStudentPhoto(e)}
                value={studentPhotoFile}
                type="file"
                name="photo"
              />
            </div>
          </div>
        </div>

        {/* parent detail */}

        <div className="admission__section__parent admission__section__item">
          <h3>Parent Details</h3>
          <div className="admission__section__parent__inputs admission__section__item__inputs">
            <div className="admission__section__parent__inputs__item admission__section__item__inputs__item">
              <label htmlFor="fatherName">
                Father Name<span className="red">*</span>
              </label>
              <input
              className={student.validation.fatherName || student.fatherName ? '' : 'border_danger'}
                onChange={(e) => dispatch(setFatherName(e.target.value))}
                value={student.fatherName}
                placeholder="Father Name"
                type="text"
                name="fatherName"
              />
            </div>
            <div className="admission__section__parent__inputs__item admission__section__item__inputs__item">
              <label htmlFor="motherName">
                Mother Name<span className="red">*</span>
              </label>
              <input
              className={student.validation.motherName || student.motherName ? '' : 'border_danger'}
                onChange={(e) => dispatch(setMotherName(e.target.value))}
                value={student.motherName}
                placeholder="Mother Name"
                type="text"
                name="motherName"
              />
            </div>
          </div>
        </div>

        {/* Gurdian Details */}
        <div className="admission__section__gurdian admission__section__item">
          <h3>Gurdian Details</h3>
          <div className="admission__section__gurdian__inputs admission__section__item__inputs">
            <div className="admission__section__gurdian__inputs__item admission__section__item__inputs__item">
              <label htmlFor="gurdianName">
                Gurdian Name<span className="red">*</span>
              </label>
              <input
              className={student.validation.gurdianName || student.gurdianName ? '' : 'border_danger'}
                onChange={(e) => dispatch(setGurdianName(e.target.value))}
                value={student.gurdianName}
                type="text"
                name="gurdianName"
              />
            </div>
            <div className="admission__section__gurdian__inputs__item admission__section__item__inputs__item">
              <label htmlFor="gurdianRelation">
                Gurdian Relation<span className="red">*</span>
              </label>
              <input
              className={student.validation.gurdianRelation || student.gurdianRelation ? '' : 'border_danger'}
                onChange={(e) => dispatch(setGurdianRelation(e.target.value))}
                value={student.gurdianRelation}
                type="text"
                name="gurdianRelation"
              />
            </div>
            <div className="admission__section__gurdian__inputs__item admission__section__item__inputs__item">
              <label htmlFor="gurdianOccupation">Gurdian Occupation</label>
              <input
                onChange={(e) => dispatch(setGurdianOccupation(e.target.value))}
                value={student.gurdianOccupation}
                type="text"
                name="gurdianOccupation"
              />
            </div>
            <div className="admission__section__gurdian__inputs__item admission__section__item__inputs__item">
              <label htmlFor="gurdianPhone">
                Gurdian Phone<span className="red">*</span>
              </label>
              <input
              className={student.validation.gurdianPhone || student.gurdianPhone ? '' : 'border_danger'}
                onChange={(e) => dispatch(setGurdianPhone(e.target.value))}
                value={student.gurdianPhone}
                type="text"
                name="gurdianPhone"
              />
            </div>
            <div className="admission__section__gurdian__inputs__item admission__section__item__inputs__item">
              <label htmlFor="gurdianEmail">Gurdian Email</label>
              <input
                onChange={(e) => dispatch(setGurdianEmail(e.target.value))}
                value={student.gurdianEmail}
                type="email"
                name="gurdianEmail"
              />
            </div>
            <div className="admission__section__gurdian__inputs__item admission__section__item__inputs__item">
              <label htmlFor="gurdianAddress">Gurdian Address</label>
              <input
                onChange={(e) => dispatch(setGurdianAddress(e.target.value))}
                value={student.gurdianAddress}
                type="text"
                name="gurdianAddress"
              />
            </div>
            <div className="admission__section__gurdian__inputs__item admission__section__item__inputs__item">
              <label htmlFor="photo">Gurdian Photo</label>
              <input
                onChange={(e) => dispatch(setGurdianPhoto(e.target.value))}
                value={student.gurdianPhoto}
                type="file"
                name="gurdianPhoto"
              />
            </div>
          </div>
        </div>

        {/* Student Address detail */}

        <div className="admission__section__address admission__section__item">
          <h3>Student Address Details</h3>
          <div className="admission__section__address__inputs admission__section__item__inputs">
            <div className="admission__section__address__inputs__item admission__section__item__inputs__item">
              <label htmlFor="presentAddress">
                Present Address<span className="red">*</span>
              </label>
              <input
              className={student.validation.presentAddress || student.presentAddress ? '' : 'border_danger'}
                onChange={(e) => dispatch(setPresentAddress(e.target.value))}
                value={student.presentAddress}
                type="text"
                name="presentAddress"
              />
            </div>
            <div className="admission__section__address__inputs__item admission__section__item__inputs__item">
              <label htmlFor="permanentAddress">
                Permanent Address<span className="red">*</span>
              </label>
              <input
              className={student.validation.permanentAddress || student.permanentAddress ? '' : 'border_danger'}
                onChange={(e) => dispatch(setPermanentAddress(e.target.value))}
                value={student.permanentAddress}
                type="text"
                name="permanentAddress"
              />
            </div>
          </div>
        </div>

        {/*Upload Documents */}

        <div className="admission__section__documents admission__section__item">
          <h3>Upload Documents</h3>
          <div className="admission__section__documents__inputs admission__section__item__inputs">
            <div className="admission__section__documents__inputs__item admission__section__item__inputs__item">
              <label htmlFor="documents">
                Documents (To Upload Multiple Document Compress It In A Single
                File Then Upload It)
              </label>
              <input
                onChange={(e) => dispatch(setDocuments(e.target.value))}
                value={student.documents}
                type="file"
                name="documents"
              />
            </div>
          </div>
        </div>

        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};

export default Admission;
