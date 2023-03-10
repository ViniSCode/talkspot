import { FiArrowLeft } from 'react-icons/fi';

function Unauthorized () {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Unauthorized</h1>
        <p className="text-gray-600 mb-4">Sorry, you are not authorized to access this page.</p>
        <button
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
          onClick={() => window.history.back()}
        >
          <FiArrowLeft className="mr-2" />
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Unauthorized;
