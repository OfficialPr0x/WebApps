import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, getUserData, createSkill, createAttribute } from 'wasp/client/operations';

class TestingPage extends Component {
  componentDidMount() {
    const { data: userData, isLoading, error } = useQuery(getUserData);
    if (isLoading) return 'Loading...';
    if (error) return 'Error: ' + error;
    return (
      <div className='p-4'>
        {userData.projects.map((project) => (
          <div key={project.id} className='bg-white p-4 mb-4 rounded-lg'>
            <div>Title: {project.title}</div>
            <div>Description: {project.description}</div>
          </div>
        ))}
        <div className='flex justify-between'>
          <button onClick={() => createSkill({ name: 'New Skill' })} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Skill</button>
          <button onClick={() => createAttribute({ name: 'New Attribute' })} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Create Attribute</button>
        </div>
      </div>
    );
  }
}

export default TestingPage;