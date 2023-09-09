import { createSlice} from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const initialState = {
    class: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    mobileNumber: '',
    email: '',
    studentPhoto: '',
    fatherName: '',
    motherName: '',
    gurdianName: '',
    gurdianRelation: '',
    gurdianOccupation: '',
    gurdianPhone: '',
    gurdianEmail: '',
    gurdianAddress: '',
    gurdianPhoto: '',
    presentAddress: '',
    permanentAddress: '',
    documents: '',
    validation: {
        class: true,
        firstName: true,
        gender: true,
        birthDate: true,
        mobileNumber: true,
        email: true,
        fatherName: true,
        motherName: true,
        gurdianName: true,
        gurdianRelation: true,
        gurdianPhone: true,
        presentAddress: true,
        permanentAddress: true,
    }
}

const admissionSlice = createSlice({
    initialState: initialState,
    name: 'admission',
    reducers: {
        setClass(state, action) {
            return {...state, class: action.payload}
        },
        setFirstName(state, action) {
            return {...state, firstName: action.payload}
        },
        setLastName(state, action) {
            return {...state, lastName: action.payload}
        },
        setGender(state, action) {
            return {...state, gender: action.payload}
        },
        setBirthDate(state, action) {
            return {...state, birthDate: action.payload}
        },
        setMobileNumber(state, action) {
            return {...state, mobileNumber: action.payload}
        },
        setEmail(state, action) {
            return {...state, email: action.payload}
        },
        setStudentPhoto(state, action) {
            return {...state, studentPhoto: action.payload}
        },
        setFatherName(state, action) {
            return {...state, fatherName: action.payload}
        },
        setMotherName(state, action) {
            return {...state, motherName: action.payload}
        },
        setGurdianName(state, action) {
            return {...state, gurdianName: action.payload}
        },
        setGurdianAddress(state, action) {
            return {...state, gurdianAddress: action.payload}
        },
        setGurdianEmail(state, action) {
            return {...state, gurdianEmail: action.payload}
        },
        setGurdianOccupation(state, action) {
            return {...state, gurdianOccupation: action.payload}
        },
        setGurdianPhone(state, action) {
            return {...state, gurdianPhone: action.payload}
        },
        setGurdianPhoto(state, action) {
            return {...state, gurdianPhoto: action.payload}
        },
        setGurdianRelation(state, action) {
            return {...state, gurdianRelation: action.payload}
        },
        setPresentAddress(state, action) {
            return {...state, presentAddress: action.payload}
        },
        setPermanentAddress(state, action) {
            return {...state, permanentAddress: action.payload}
        },
        setDocuments(state, action) {
            return {...state, documents: action.payload}
        },
        setValidationStatus(state, action){
            console.log('setValidationStatus called', action.payload);
            return {...state, validation: action.payload}
        },
        clearBoxes() {
            alert('Your data is submitted');
            return initialState;
        }
    }
})

export const {setValidationStatus, setClass, setFirstName, setBirthDate, setDocuments, setEmail, setFatherName, setGender, setGurdianAddress, setGurdianEmail, setGurdianName, setGurdianOccupation, setGurdianPhone, setGurdianPhoto, setGurdianRelation, setLastName, setMobileNumber, setMotherName, setPermanentAddress, setPresentAddress, setStudentPhoto, clearBoxes} = admissionSlice.actions
export const admissionReducer = admissionSlice.reducer


export const admissionApi = createApi({
    reducerPath: 'students',
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:5000/students`}),
    tagTypes: ['students'],
    endpoints: (builder) => ({
        getStudent: builder.query({
            query: () => ``,
            providesTags: ['students']
        }),
        createStudent: builder.mutation({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data
            })
        })
    }),

})

export const {useCreateStudentMutation, useGetStudentQuery} = admissionApi