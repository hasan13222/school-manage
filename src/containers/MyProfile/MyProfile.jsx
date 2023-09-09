import React from "react";
import { images } from "../../assets";
import "./MyProfile.css";
import { useGetStudentQuery } from "../../store/reducers/admission";

const MyProfile = () => {
  const { isError, isFetching, currentData: students } = useGetStudentQuery();

  return (
    <div className="full-container full-profile">
      <div className="fix-container profile">
        {isFetching && <h3>Loading...</h3>}
        {isError && <h3>Failed to Load Your Info.</h3>}
        {students
          ?.filter((student, index, array) => index === array.length-1)
          .map((student) => (
            <>
              <div className="profile__sidebar">
                <div className="profile_intro">
                  <img
                    src={student.studentPhoto}
                    alt="user"
                  />
                  <div className="profile_intro__dtls">
                    <h3>{`${student.firstName} ${student.lastName}`}</h3>
                  </div>
                </div>
                <div className="profile_summary">
                  <ul>
                    <li>
                      <span className="title">Admission No</span>
                      <span className="value">{`100${student.id}`}</span>
                    </li>
                    <li>
                      <span className="title">Roll Number</span>
                      <span className="value">{`10${student.id}`}</span>
                    </li>
                    <li>
                      <span className="title">Class</span>
                      <span className="value">{student.class}</span>
                    </li>
                    <li>
                      <span className="title">Gender</span>
                      <span className="value">{student.gender}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="profile__main">
                <div className="profile__main__dtls profile__main__basic">
                  <h4>Basic Details</h4>
                  <ul>
                    <li>
                      <span className="key">Date Of Birth</span>
                      <span className="value">{student.birthDate}</span>
                    </li>
                    <li>
                      <span className="key">Mobile Number</span>
                      <span className="value">{student.mobileNumber}</span>
                    </li>
                    <li>
                      <span className="key">Email</span>
                      <span className="value">{student.email}</span>
                    </li>
                  </ul>
                </div>
                <div className="profile__main__dtls profile__main__parent">
                  <h4>Parent Details</h4>
                  <ul>
                    <li>
                      <span className="key">Father Name</span>
                      <span className="value">{student.fatherName}</span>
                    </li>
                    <li>
                      <span className="key">Mother Name</span>
                      <span className="value">{student.motherName}</span>
                    </li>
                  </ul>
                </div>
                <div className="profile__main__dtls profile__main__parent">
                  <h4>Gurdian Details</h4>
                  <ul>
                    <li>
                      <span className="key">Gurdian Name</span>
                      <span className="value">{student.gurdianName}</span>
                    </li>
                    <li>
                      <span className="key">Gurdian Relation</span>
                      <span className="value">{student.gurdianRelation}</span>
                    </li>
                    <li>
                      <span className="key">Gurdian Occupation</span>
                      <span className="value">{student.gurdianOccupation}</span>
                    </li>
                    <li>
                      <span className="key">Gurdian Phone</span>
                      <span className="value">{student.gurdianPhone}</span>
                    </li>
                  </ul>
                </div>
                <div className="profile__main__dtls profile__main__parent">
                  <h4>Address Details</h4>
                  <ul>
                    <li>
                      <span className="key">Present Address</span>
                      <span className="value">{student.presentAddress}</span>
                    </li>
                    <li>
                      <span className="key">Permanent Address</span>
                      <span className="value">{student.permanentAddress}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default MyProfile;
