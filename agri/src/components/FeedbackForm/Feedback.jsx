// import React, { useState } from "react";

// function FeedbackForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Message:", message);
//     // you can send the form data to your server or do something else with it here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FeedbackForm;

import React, { useState } from 'react';
import './Feedback.css'



function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [problem, setProblem] = useState('');
  const [contactNumber, setContactNumber] = useState('')



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Gender: ${gender}`);
    console.log(`State: ${state}`);
    console.log(`Contact Number: ${contactNumber}`);
    console.log(`Problem faced: ${problem}`);
  };

  // Define an array of Indian states
  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

  return (
    <div className="bg-feedbackBg bg-cover bg-no-repeat py-20">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="state">State</label>
        <select
          id="state"
          name="state"
          value={state}
          onChange={(event) => setState(event.target.value)}
        >
          <option value="">Select state</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <label htmlFor="Contact Number">Contact Number</label>
        <input
          type="Contact Number"
          id="Contact Number"
          name="Contact Number"
          value={contactNumber}
          onChange={(event) => setContactNumber(event.target.value)}
        />

        <label htmlFor="problem">Describe your issue</label>
        <textarea
          id="problem"
          name="problem"
          value={problem}
          onChange={(event) => setProblem(event.target.value)}
        ></textarea>

        <button type="submit" className='bg-green-500'>Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;