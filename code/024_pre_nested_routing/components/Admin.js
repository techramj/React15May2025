import React from 'react'

const Admin = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome to the admin dashboard. Here you can manage your application settings.</p>
      <ul>
        <li><a href="/admin/users">Manage Users</a></li>
        <li><a href="/admin/settings">Settings</a></li>
        <li><a href="/admin/reports">View Reports</a></li>
        <li><a href="/admin/logs">System Logs</a></li>
      </ul>
    </div>
  )
}

export default Admin
