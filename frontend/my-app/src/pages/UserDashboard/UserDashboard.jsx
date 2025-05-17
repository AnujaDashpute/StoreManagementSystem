import React, { useEffect, useState } from 'react';
import '../../assets/css/soft-ui-dashboard.css';
import '../../assets/css/soft-ui-dashboard.min.css';
import Layout from '../Layout/Layout';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    stores: 0,
    ratings: 0
  });

  // Dummy fetch - replace with real API later
  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setStats({
        users: 120,
        stores: 45,
        ratings: 300
      });
    }, 500);
  }, []);

  return (
    
    <Layout>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-xl-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Users</p>
                      <h5 className="font-weight-bolder">{stats.users}</h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i className="ni ni-circle-08 text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Stores</p>
                      <h5 className="font-weight-bolder">{stats.stores}</h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-warning shadow text-center border-radius-md">
                      <i className="ni ni-shop text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Ratings</p>
                      <h5 className="font-weight-bolder">{stats.ratings}</h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-success shadow text-center border-radius-md">
                      <i className="ni ni-like-2 text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



            



        </div>
      </div>
    </main>
    </Layout>
  );
};

export default AdminDashboard;
