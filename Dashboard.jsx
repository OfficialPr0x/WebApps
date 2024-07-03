import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useAction, createProject, createSkill, createAttribute, getUserData } from 'wasp/client/operations';

const DashboardPage = () => {
  const { data: userData, isLoading, error } = useQuery(getUserData);
  const createProjectFn = useAction(createProject);
  const createSkillFn = useAction(createSkill);
  const createAttributeFn = useAction(createAttribute);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Your Dashboard</h1>
      <div className='my-4'>
        <h2 className='text-lg font-bold mb-2'>Your Projects</h2>
        <button
          onClick={() => createProjectFn({ title: 'New Project', description: 'Project description' })}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Create New Project
        </button>
        {userData.projects.map((project) => (
          <div key={project.id} className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{project.title}</div>
            <div>{project.description}</div>
          </div>
        ))}
      </div>
      <div className='my-4'>
        <h2 className='text-lg font-bold mb-2'>Your Skills</h2>
        <button
          onClick={() => createSkillFn({ name: 'New Skill' })}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Create New Skill
        </button>
        {userData.skills.map((skill) => (
          <div key={skill.id} className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
      <div className='my-4'>
        <h2 className='text-lg font-bold mb-2'>Your Attributes</h2>
        <button
          onClick={() => createAttributeFn({ name: 'New Attribute' })}
          className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
        >
          Create New Attribute
        </button>
        {userData.attributes.map((attribute) => (
          <div key={attribute.id} className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{attribute.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;