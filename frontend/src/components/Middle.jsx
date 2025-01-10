import React, { useState, useEffect, Fragment } from 'react';
import './middle.css';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

function Middle() {
  // ... Your existing state and functions ...
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [showSelectedLeads, setShowSelectedLeads] = useState(false);

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('/api/v1/findlead')
      .then((response) => {
        const data = response.data;
        setLoading(true);
        setLeads(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
     
  },[showSelectedLeads]); // Empty dependency array means this effect runs once when the component mounts

  // Function to handle the search when the user enters a query
  
  const handleSearch = () => {

    const results = leads.filter((lead) => {
      return (
    
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.position.toLowerCase().includes(searchQuery.toLowerCase()) 
      
      );
    });

    setSearchResults(results);
  };


  // Function to toggle the selected state of a lead
  const toggleLeadSelection = (email) => {
    const updatedLeads = leads.map((lead) =>
      lead.email === email ? { ...lead, selected: !lead.selected } : lead
    );
    setLeads(updatedLeads);
  };

  // Function to handle saving selected leads
  const handleSave = () => {
    const selected = leads.filter((lead) => lead.selected);
    setSelectedLeads(selected);
    setShowSelectedLeads(true);
  };

  // Function to reset the selected leads and hide the selection
  const handleResetSelection = () => {
    setSelectedLeads([]);
    setShowSelectedLeads(false);
  };

  // Function to convert leads to CSV format
  const convertToCSV = (leadsData) => {
    const header = ['Name', 'Email', 'Link', 'Position', 'Company Name'];
    const rows = leadsData.map((lead) => [
      lead.name,
      lead.email,
      `${lead.website}, ${lead.facebook}, ${lead.LinkedIn}, ${lead.Instagram}`,
      lead.position,
      lead.companyName,
    ]);

    return [header, ...rows].map((row) => row.join(',')).join('\n');
  };

  // Function to download CSV file
  const downloadCSV = () => {
    const selectedLeadsData = selectedLeads.map((lead) => {
      // Create a copy of the selected leads with only necessary properties
      const { name, email, website, facebook, LinkedIn, Instagram, position, companyName } = lead;
      return { name, email, website, facebook, LinkedIn, Instagram, position, companyName };
    });

    const csvContent = convertToCSV(selectedLeadsData);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'selected_leads.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

  
  };
 

  return (
    <Fragment >
    
  
  
      {/* ... Your existing JSX ... */}
      <div className="dashboard-container">
    <h1>Lead Generation Dashboard</h1>
    <div className="search-bar" >
      <input
        type="text"
        placeholder="Search by name, email, position, or company name"
        value={searchQuery}
       
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
      <div className="lead-list">
        <h2>Lead List</h2>
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
              <th>Position</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {showSelectedLeads
              ? selectedLeads.map((lead) => (
                  <tr key={lead.email}>
                    <td>
                      <input
                        type="checkbox"
                        checked={lead.selected}
                        onChange={() => toggleLeadSelection(lead.email)}
                      />
                    </td>
                    <td><Avatar />{lead.name}</td>
                    <td><a href={lead.email}><EmailIcon /></a>{lead.email}</td>
               
                    <td>
                    <a href={lead.website}> <LinkIcon /></a><a href={lead.facebook}> <FacebookIcon /></a>
                    <a href={lead.LinkedIn}> <LinkedInIcon /></a>
                    <a href={lead.Instagram}> <InstagramIcon /></a>
                    </td>
                    <td>{lead.position}</td>
                    <td>{lead.companyName}</td>
                  </tr>
                ))
              : searchResults.length > 0
              ? searchResults.map((lead) => (
                  <tr key={lead.email}>
                    <td>
                      <input
                        type="checkbox"
                        checked={lead.selected}
                        onChange={() => toggleLeadSelection(lead.email)}
                      />
                    </td>
                    <td><Avatar  />{lead.name}</td>
                    <td><a href={lead.email}><EmailIcon /></a>{lead.email}</td>
                    <td><a href={lead.facebook}> <FacebookIcon /></a>
                    <a href={lead.website}> <LinkIcon /></a>
                    <a href={lead.LinkedIn}> <LinkedInIcon /></a>
                    <a href={lead.Instagram}> <InstagramIcon /></a>
                    </td>
                   
                    <td>{lead.position}</td>
                    <td>{lead.companyName}</td>
                  </tr>
                ))
              : leads.map((lead) => (
                  <tr key={lead.email}>
                    <td>
                      <input
                        type="checkbox"
                        checked={lead.selected}
                        onChange={() => toggleLeadSelection(lead.email)}
                      />
                    </td>
                    <td><Avatar />{lead.name}</td>
                    <td><a href={lead.email}><EmailIcon /></a>{lead.email}</td>

                    <td>
                    <a href={lead.website}> <LinkIcon /></a><a href={lead.facebook}> <FacebookIcon /></a>

                    <a href={lead.LinkedIn}> <LinkedInIcon /></a>
                    <a href={lead.Instagram}> <InstagramIcon /></a>
                    </td>
             
                    <td>{lead.position}</td>
                    <td>{lead.companyName}</td>
                  </tr>
                ))}
          </tbody>
        </table>
        {showSelectedLeads && (
          <button onClick={handleResetSelection}>Back to All Leads</button>
        )}
      </div>
      <button onClick={handleSave} className='button1'>Save</button>
      {showSelectedLeads && (
        <div>
          <button onClick={downloadCSV}>Download CSV</button>
          <button onClick={handleResetSelection}>Back to All Leads</button>
        </div>
      )}
      {/* ... Rest of your JSX ... */}
    </div>

  
    </Fragment>
  );
}

export default Middle;

