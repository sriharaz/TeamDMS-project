import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Node from './Node';
import SearchBox from './SearchBox';

const EnhancedPageLayout = ({ 
  title, 
  subtitle, 
  data, 
  headerProps = {},
  backLink = "/" 
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [allExpanded, setAllExpanded] = useState(false);

  // Handle search results and filter content accordingly
  const handleSearchResults = (results) => {
    setSearchResults(results);
    
    if (results.length === 0) {
      // No search active, show all content
      setFilteredData(data);
    } else {
      // Filter to show only matching nodes and their parents
      const filterNodes = (nodes) => {
        return nodes.map(node => {
          const hasMatch = results.some(result => result.id === node.id);
          const filteredChildren = node.children ? filterNodes(node.children) : [];
          const hasChildMatch = filteredChildren.length > 0;
          
          if (hasMatch || hasChildMatch) {
            return {
              ...node,
              children: filteredChildren,
              // Add highlighting for matched content
              content: hasMatch && node.content ? 
                highlightSearchTerm(node.content, getSearchTerm()) : 
                node.content
            };
          }
          return null;
        }).filter(Boolean);
      };
      
      setFilteredData(filterNodes(data));
    }
  };

  // Auto-expand nodes that contain search matches
  const handleExpandNodes = (nodeIds) => {
    // Use setTimeout to ensure DOM is ready for manipulation
    setTimeout(() => {
      nodeIds.forEach(nodeId => {
        const element = document.getElementById(nodeId);
        if (element) {
          const toggleButton = element.querySelector('.toggle');
          if (toggleButton && toggleButton.getAttribute('aria-expanded') === 'false') {
            toggleButton.click();
          }
        }
      });
    }, 100);
  };

  // Scroll to and highlight matching search result
  const handleScrollToMatch = (nodeId) => {
    // Delay to ensure node is expanded first
    setTimeout(() => {
      const element = document.getElementById(nodeId);
      if (element) {
        // Add visual highlight
        element.classList.add('search-highlight');
        
        // Smooth scroll to element
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
        
        // Remove highlight after animation completes
        setTimeout(() => {
          element.classList.remove('search-highlight');
        }, 3000);
      }
    }, 200);
  };

  const getSearchTerm = () => {
    // Get search term from SearchBox component
    const searchInput = document.querySelector('.search-input');
    return searchInput ? searchInput.value : '';
  };

  const toggleAllNodes = () => {
    const allToggleButtons = document.querySelectorAll('.toggle');
    const shouldExpand = !allExpanded;
    
    allToggleButtons.forEach(button => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      if (shouldExpand && !isExpanded) {
        button.click();
      } else if (!shouldExpand && isExpanded) {
        button.click();
      }
    });
    
    setAllExpanded(shouldExpand);
  };

  const highlightSearchTerm = (content, term) => {
    if (!term) return content;
    
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return content.replace(regex, '<span class="highlight">$1</span>');
  };

  return (
    <div className="page-content">
      <Header 
        title={headerProps.title || title}
        subtitle={headerProps.subtitle || subtitle}
        logoUrl={headerProps.logoUrl || "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_REV_SQ.8c88ac215fe4e441dc42865dd6962ed4f444a90d.png"}
        logoAlt={headerProps.logoAlt || "AWS Services"}
        {...headerProps}
      />
      
      <SearchBox 
        data={data} 
        onSearchResults={handleSearchResults}
        onExpandNodes={handleExpandNodes}
        onScrollToMatch={handleScrollToMatch}
      />
      
      <div className="content-wrapper">
        <div className="page-navigation">
          <Link to={backLink} className="back-button">
            ← Back to {backLink === '/dms' ? 'DMS Categories' : 'Service Categories'}
          </Link>
          <button 
            className="elegant-expand-btn"
            onClick={toggleAllNodes}
            title={allExpanded ? "Collapse all sections" : "Expand all sections"}
          >
            <span className="expand-icon">
              {allExpanded ? '📁' : '📂'}
            </span>
            <span className="expand-text">
              {allExpanded ? 'Collapse All' : 'Expand All'}
            </span>
          </button>
        </div>
        
        <div className="page-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          {searchResults.length > 0 && (
            <div className="search-status">
              🔍 Showing {searchResults.length} matching result{searchResults.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
        
        <div className="mindmap">
          {filteredData.map((node, index) => (
            <Node 
              key={node.id} 
              node={node} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedPageLayout;