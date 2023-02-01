import React from 'react';
import './welcome.css';
import usecase from './usecase.png';

export default function welcome() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img src={usecase} alt="logo" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          margin: 'auto',
        }}>
        <div
          style={{
            padding: '30px 20px',
          }}>
          <h2>
            <b>Admin</b>
          </h2>
          <h3>1. Manage Users</h3>
          <ul>
            <li>Create new user account.</li>
            <li>Edit user account. </li>
            <li>Delete user account</li>
          </ul>
          <h3>2. Manage Courses</h3>
          <ul>
            <li>Create new course.</li>
            <li>Update course name.</li>
          </ul>
        </div>
        <div
          style={{
            padding: '30px 20px',
          }}>
          <h2>
            <b>Teacher</b>
          </h2>
          <h3>1. Manage Questions</h3>
          <ul>
            <li>Create new question.</li>
            <li>Edit question.</li>
            <li>Delete question.</li>
          </ul>
          <h3>2. Manage Tests</h3>
          <ul>
            <li>View Test Details.</li>
            <li>View Test Questions.</li>
            <li>View of Student Attempts.</li>
            <li>Download excel sheet of results.</li>
            <li>Graphical representation of results.</li>
          </ul>
          <h3>3. Create New Tests</h3>
          <ul>
            <li>Create new test</li>
            <ol>
              <li>Enter basic test details</li>
              <li>Random Questions or Select Questions</li>
            </ol>
            <li>Preview Test</li>
            <ol>
              <li>Start Test.</li>
              <li>End Test.</li>
            </ol>
          </ul>
        </div>
        <div
          style={{
            padding: '30px 20px',
          }}>
          <h2>
            <b>Student</b>
          </h2>
          <h3>1. Do Tests</h3>
          <ul>
            <li>View Test Details.</li>
            <li>View Test Questions.</li>
            <li>Answer the question.</li>
          </ul>
          <h3>2. View Result</h3>
          <ul>
            <li>View result.</li>
            <li>View explanation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
