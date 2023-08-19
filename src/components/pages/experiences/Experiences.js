import React from 'react';
import ImgTelenor from '../../../images/telenor.jpeg';
import ImgHuawei from '../../../images/Huawei.jpeg';
import ImgHorizon from '../../../images/horizon.png';
import ImgDTC from '../../../images/dtc.png';
import ImgUpstart from '../../../images/upstart.png';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jul
                <strong> 2022</strong> - 
                <strong> Present</strong>
              </p>
              <p><strong>Upstart Commerce</strong></p>
              <img className='center' src={ImgUpstart} alt='Upstart Commerce' />
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Team Lead: Data & ML</strong>
                </h6>
                <p>
                Skills: AI Solutions · Problem Solving · Analytical Skills · Communication · Data Pipelines · 
                Microservices · Pattern Recognition · Google Cloud Platform (GCP) · Digital Product Development · 
                Data Engineering · Data Analysis · Data Science · Pandas (Software) · Apache Kafka
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Dec
                <strong> 2020</strong> - Sep
                <strong> 2021</strong>
              </p>
              <p><strong>Delta Technology Consulting</strong></p>
              <img className='center' src={ImgDTC} alt='DTCPAK' />
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Solution Architect</strong>
                </h6>
                <p>
                Complete architecture design of Crowd and Facial Surveillance
                System. Lead team in Vision R&D to develop Micro services using
                python (fastapi+uvicorn) deployed on local docker containers.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Dec
                <strong> 2016</strong> - Nov
                <strong> 2020</strong>
              </p>
              <p><strong>Horizon Tech Services</strong></p>
              <img className='center' src={ImgHorizon} alt='Horizon Tech Services' />
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Junior Research Analyst</strong>
                </h6>
                <p>
                Data and AI Policy Research, Planning and Development
                </p>
                <p>
                Backend Development -  Python, OpenCV, Computer Vision, NLP, C#, C/C++
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Summer
                <strong> 2016</strong> 
              </p>
              <p><strong>Huawei Pakistan</strong></p>
              <img className='center' src={ImgHuawei} alt='Huawei Pakistan' />
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Intern</strong>
                </h6>
                <p>
                Enterprise Intern
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Summer
                <strong> 2015</strong> 
              </p>
              <p><strong>Telenor Pakistan</strong></p>
              <img className='center' src={ImgTelenor} alt='Telenor Pakistan' />
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Intern</strong>
                </h6>
                <p>
                Technology Operations Intern
                </p>
              </blockquote>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
