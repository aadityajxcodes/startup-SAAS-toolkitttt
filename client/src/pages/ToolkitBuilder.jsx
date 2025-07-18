// import React, { useState } from "react";
// import axios from "axios";

// export default function ToolkitBuilder() {
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({
//     title: "",
//     problem: "",
//     solution: "",
//     targetAudience: "",
//     valueProp: "",
//   });

//   const next = () => setStep(step + 1);
//   const back = () => setStep(step - 1);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.post("http://localhost:5000/api/toolkit", form, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Toolkit saved!");
//     } catch (err) {
//       alert("Error saving toolkit");
//     }
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <h4>Step 1: Title</h4>
//             <input
//               type="text"
//               name="title"
//               className="form-control"
//               placeholder="Give your idea a title"
//               value={form.title}
//               onChange={handleChange}
//             />
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <h4>Step 2: Problem</h4>
//             <textarea
//               name="problem"
//               className="form-control"
//               placeholder="What problem does your product solve?"
//               value={form.problem}
//               onChange={handleChange}
//             />
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <h4>Step 3: Solution</h4>
//             <textarea
//               name="solution"
//               className="form-control"
//               placeholder="Describe your solution"
//               value={form.solution}
//               onChange={handleChange}
//             />
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <h4>Step 4: Target Audience</h4>
//             <textarea
//               name="targetAudience"
//               className="form-control"
//               placeholder="Who is your ideal customer?"
//               value={form.targetAudience}
//               onChange={handleChange}
//             />
//           </>
//         );
//       case 5:
//         return (
//           <>
//             <h4>Step 5: Value Proposition</h4>
//             <textarea
//               name="valueProp"
//               className="form-control"
//               placeholder="What makes your product stand out?"
//               value={form.valueProp}
//               onChange={handleChange}
//             />
//           </>
//         );
//       default:
//         return <h5>Done</h5>;
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card p-4 shadow">
//         {renderStep()}
//         <div className="mt-4 d-flex justify-content-between">
//           {step > 1 && <button className="btn btn-secondary" onClick={back}>Back</button>}
//           {step < 5 && <button className="btn btn-primary" onClick={next}>Next</button>}
//           {step === 5 && (
//             <button className="btn btn-success" onClick={handleSubmit}>
//               Save Toolkit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";

export default function ToolkitBuilder() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "",
    problem: "",
    solution: "",
    targetAudience: "",
    valueProp: "",
  });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/api/toolkit", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Toolkit saved!");
    } catch (err) {
      alert("Error saving toolkit");
    }
  };

  const generateWithAI = async (field) => {
    const promptMap = {
      problem: `Describe the biggest problem this startup solves.`,
      solution: `What is a unique and compelling solution for this problem?`,
      valueProp: `What is the strongest value proposition for this product?`,
    };

    const prompt = `${promptMap[field]} The startup is called: ${form.title}`;

    try {
      const res = await axios.post("http://localhost:5000/api/openrouter", {
        prompt,
      });
      setForm({ ...form, [field]: res.data.content });
    } catch {
      alert("AI generation failed.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h4>Step 1: Title</h4>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Give your idea a title"
              value={form.title}
              onChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <h4>Step 2: Problem</h4>
            <textarea
              name="problem"
              className="form-control mb-2"
              placeholder="What problem does your product solve?"
              value={form.problem}
              onChange={handleChange}
            />
            <button className="btn btn-outline-primary" onClick={() => generateWithAI("problem")}>Generate with AI</button>
          </>
        );
      case 3:
        return (
          <>
            <h4>Step 3: Solution</h4>
            <textarea
              name="solution"
              className="form-control mb-2"
              placeholder="Describe your solution"
              value={form.solution}
              onChange={handleChange}
            />
            <button className="btn btn-outline-primary" onClick={() => generateWithAI("solution")}>Generate with AI</button>
          </>
        );
      case 4:
        return (
          <>
            <h4>Step 4: Target Audience</h4>
            <textarea
              name="targetAudience"
              className="form-control"
              placeholder="Who is your ideal customer?"
              value={form.targetAudience}
              onChange={handleChange}
            />
          </>
        );
      case 5:
        return (
          <>
            <h4>Step 5: Value Proposition</h4>
            <textarea
              name="valueProp"
              className="form-control mb-2"
              placeholder="What makes your product stand out?"
              value={form.valueProp}
              onChange={handleChange}
            />
            <button className="btn btn-outline-primary" onClick={() => generateWithAI("valueProp")}>Generate with AI</button>
          </>
        );
      default:
        return <h5>Done</h5>;
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        {renderStep()}
        <div className="mt-4 d-flex justify-content-between">
          {step > 1 && <button className="btn btn-secondary" onClick={back}>Back</button>}
          {step < 5 && <button className="btn btn-primary" onClick={next}>Next</button>}
          {step === 5 && (
            <button className="btn btn-success" onClick={handleSubmit}>
              Save Toolkit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}