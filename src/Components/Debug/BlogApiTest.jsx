import React, { useState, useEffect } from 'react';
import { websiteApi } from '../../utils/api';

export default function BlogApiTest() {
  const [testResults, setTestResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const runTests = async () => {
    setIsLoading(true);
    const results = {};

    // Test 1: Direct fetch
    try {
      console.log('Test 1: Direct fetch to blog API...');
      const directResponse = await fetch('http://localhost:8000/api/content/public/blog/');
      const directData = await directResponse.json();

      results.directFetch = {
        success: true,
        status: directResponse.status,
        data: directData,
        count: directData.results?.length || 0
      };
      console.log('Direct fetch success:', results.directFetch);
    } catch (error) {
      results.directFetch = {
        success: false,
        error: error.message
      };
      console.error('Direct fetch failed:', error);
    }

    // Test 2: Using websiteApi
    try {
      console.log('Test 2: Using websiteApi...');
      const apiResponse = await websiteApi.getBlogPosts();

      results.websiteApi = {
        success: true,
        status: apiResponse.status,
        data: apiResponse.data,
        count: apiResponse.data.results?.length || apiResponse.data?.length || 0
      };
      console.log('WebsiteApi success:', results.websiteApi);
    } catch (error) {
      results.websiteApi = {
        success: false,
        error: error.message,
        details: error.response?.data
      };
      console.error('WebsiteApi failed:', error);
    }

    // Test 3: CORS test
    try {
      console.log('Test 3: CORS test...');
      const corsResponse = await fetch('http://localhost:8000/api/content/public/blog/', {
        method: 'OPTIONS',
        headers: {
          'Origin': window.location.origin,
          'Access-Control-Request-Method': 'GET'
        }
      });

      results.cors = {
        success: corsResponse.ok,
        status: corsResponse.status,
        headers: Object.fromEntries(corsResponse.headers.entries())
      };
      console.log('CORS test:', results.cors);
    } catch (error) {
      results.cors = {
        success: false,
        error: error.message
      };
      console.error('CORS test failed:', error);
    }

    setTestResults(results);
    setIsLoading(false);
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 m-4">
      <h2 className="text-xl font-bold mb-4 text-yellow-800">Blog API Debug Test</h2>

      <button
        onClick={runTests}
        disabled={isLoading}
        className="bg-yellow-600 text-white px-4 py-2 rounded mb-4 disabled:opacity-50"
      >
        {isLoading ? 'Testing...' : 'Run Tests'}
      </button>

      <div className="space-y-4">
        {Object.entries(testResults).map(([testName, result]) => (
          <div key={testName} className="bg-white p-4 rounded border">
            <h3 className="font-bold text-lg capitalize">{testName.replace(/([A-Z])/g, ' $1')}</h3>
            {result.success ? (
              <div className="text-green-600">
                ✅ Success - Status: {result.status}
                {result.count !== undefined && <span> - Items: {result.count}</span>}
                <details className="mt-2">
                  <summary className="cursor-pointer">View Details</summary>
                  <pre className="bg-gray-100 p-2 mt-2 text-xs overflow-auto max-h-40">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </details>
              </div>
            ) : (
              <div className="text-red-600">
                ❌ Failed: {result.error}
                {result.details && (
                  <details className="mt-2">
                    <summary className="cursor-pointer">View Error Details</summary>
                    <pre className="bg-gray-100 p-2 mt-2 text-xs overflow-auto max-h-40">
                      {JSON.stringify(result.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-yellow-700">
        <p><strong>Environment:</strong></p>
        <p>API Base URL: {import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'}</p>
        <p>Current Origin: {window.location.origin}</p>
      </div>
    </div>
  );
}