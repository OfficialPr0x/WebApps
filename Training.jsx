import React from 'react';
import { useQuery, trainModels, getUserData } from 'wasp/client/operations';
import { Link } from 'react-router-dom';

const TrainingPage = () => {
  const { data: trainingData, isLoading, error } = useQuery(trainModels);
  const { data: userData } = useQuery(getUserData);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Training Environment</h1>
      <p className='mb-2'>Select a model and start training</p>
      <p className='mb-2'>Updates on training process will be displayed here</p>
      <div>
        <h2 className='text-xl font-semibold mb-2'>User Data</h2>
        <div>
          {userData && (
            <div>
              <p><strong>Username:</strong> {userData.username}</p>
              <p><strong>Projects:</strong> {userData.projects.length}</p>
              <p><strong>Skills:</strong> {userData.skills.length}</p>
              <p><strong>Attributes:</strong> {userData.attributes.length}</p>
            </div>
          )}
        </div>
      </div>
      <Link to='/dashboard' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'>Go to Dashboard</Link>
    </div>
  );
}

export default TrainingPage;