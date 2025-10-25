import React, { useState, useEffect } from 'react';
import { websiteApi } from '../../utils/api';
import { testNetworkConnection } from '../../utils/networkTest';

export default function ApiTest() {
  const [testResults, setTestResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const testEndpoints = async () => {
    setIsLoading(true);
    const results = {};

    // Test basic network connectivity first
    try {
      console.log('Testing basic network connectivity...');
      const networkTest = await testNetworkConnection();
      results.network = networkTest;
    } catch (error) {
      console.error('Network test error:', error);
      results.network = { success: false, error: error.message };
    }

    // Test blog posts
    try {
      console.log('Testing blog posts API...');
      const blogResponse = await websiteApi.getBlogPosts();
      console.log('Blog API Response:', blogResponse);
      results.blog = {
        success: true,
        data: blogResponse.data,
        count: blogResponse.data?.results?.length || blogResponse.data?.length || 0
      };
    } catch (error) {
      console.error('Blog API Error:', error);
      results.blog = {
        success: false,
        error: error.message,
        details: error.response?.data || 'Network error'
      };
    }

    // Test services
    try {
      console.log('Testing services API...');
      const servicesResponse = await websiteApi.getServices();
      console.log('Services API Response:', servicesResponse);
      results.services = {
        success: true,
        data: servicesResponse.data,
        count: servicesResponse.data?.results?.length || servicesResponse.data?.length || 0
      };
    } catch (error) {
      console.error('Services API Error:', error);
      results.services = {
        success: false,
        error: error.message,
        details: error.response?.data || 'Network error'
      };
    }

    // Test portfolio
    try {
      console.log('Testing portfolio API...');
      const portfolioResponse = await websiteApi.getPortfolioProjects();
      console.log('Portfolio API Response:', portfolioResponse);
      results.portfolio = {
        success: true,
        data: portfolioResponse.data,
        count: portfolioResponse.data?.results?.length || portfolioResponse.data?.length || 0
      };
    } catch (error) {
      console.error('Portfolio API Error:', error);
      results.portfolio = {
        success: false,
        error: error.message,
        details: error.response?.data || 'Network error'
      };
    }

    // Test real projects (admin-created)
    try {
      console.log('Testing real projects API...');
      const projectsResponse = await websiteApi.getProjects();
      console.log('Projects API Response:', projectsResponse);
      results.projects = {
        success: true,
        data: projectsResponse.data,
        count: projectsResponse.data?.results?.length || projectsResponse.data?.length || 0
      };
    } catch (error) {
      console.error('Projects API Error:', error);
      results.projects = {
        success: false,
        error: error.message,
        details: error.response?.data || 'Network error'
      };
    }

    setTestResults(results);
    setIsLoading(false);
  };

  useEffect(() => {
    testEndpoints();
  }, []);

  return (
    <div className="bg-gray-100 p-8 m-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">API Debug Test</h2>
      
      <button 
        onClick={testEndpoints}
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 disabled:opacity-50"
      >
        {isLoading ? 'Testing...' : 'Test APIs'}
      </button>

      <div className="space-y-4">
        {Object.entries(testResults).map(([endpoint, result]) => (
          <div key={endpoint} className="bg-white p-4 rounded border">
            <h3 className="font-bold text-lg capitalize">{endpoint} API</h3>
            {result.success ? (
              <div className="text-green-600">
                ✅ Success - Found {result.count} items
                <details className="mt-2">
                  <summary className="cursor-pointer">View Data</summary>
                  <pre className="bg-gray-100 p-2 mt-2 text-xs overflow-auto">
                    {JSON.stringify(result.data, null, 2)}
                  </pre>
                </details>
              </div>
            ) : (
              <div className="text-red-600">
                ❌ Failed: {result.error}
                <details className="mt-2">
                  <summary className="cursor-pointer">View Error Details</summary>
                  <pre className="bg-gray-100 p-2 mt-2 text-xs overflow-auto">
                    {JSON.stringify(result.details, null, 2)}
                  </pre>
                </details>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}