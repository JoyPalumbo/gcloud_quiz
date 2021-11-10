import React from 'react';
// import PropTypes from 'prop-types';

function Resources() {
    return (
        <div className="resource">
            <h4>Google Cloud Skills Boost</h4>
                  <h6>Google has an excellent tutorial to help you prepare for 
                      the Associate Cloud Certification.  It combines both reading material
                      and videos.  The learning material is free and the only cost is the cost of the 
                      credits used for the hands-on learning labs. The cost of the labs are to cover the resources
                      used in Google Cloud such as Virtual Machines, databases, etc
                       </h6>
    <a href="https://www.cloudskillsboost.google/" >  <button className="button-link">Go to Site</button></a>
    <hr />
  {/* <a href="https://google.com" className="card card2">
      <div className="inner">
        <h2 className="title">Mit 117 Sachen durch Klugheimschen Basaltgebirge</h2>
      </div>
  </a> */}

  {/* <a href="https://google.com" className="card card3">
      <div className="inner">
        <h2 className="title">Mit 117 Sachen durch Klugheimschen Basaltgebirge</h2>
      </div>
  </a>   */}


            {/* <h3>Free Resources</h3>
            
            <h3>Recourses that cost money</h3>
            <a href='https://www.cloudskillsboost.google/'>Google Cloud Skills Boost</a>
            <h6>Although Skills Boost costs a little bit of money to cover the cost of cloud usage during
                the lab portion, the learning material is free and is a really great resouce for prepairing for
                the Google Associate Cloud Certification test.
            </h6> */}
        </div>
    );
};

// Resources.propTypes = {
    
// };

export default Resources;