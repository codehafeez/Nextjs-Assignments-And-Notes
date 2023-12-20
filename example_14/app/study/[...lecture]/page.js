'use client'
export default function Lecture({ params }) {
  console.log(params);

  return (
    <div>
      <h1>Study Page - Pass Mulit Params Values using URL</h1>
      <ul>
      {params.lecture ? (
        params.lecture.map((param, index) => (
          <li key={index}>Param {index + 1}: {param}</li>
        ))
      ) : (
        <p>No lecture parameters found.</p>
      )}
      </ul>
    </div>
  );
};
