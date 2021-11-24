import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          I am a motivated individual with strong interpersonal and communication skills. Confident and hardworking. That is also what I look for in the team I intend to work with.

I have hands on experience working on deep learning related problems in computer vision, NLP, speech and voice processing in R&D setups.

Experienced in handling all tasks in the machine/deep learning pipeline ranging from data gathering and pre-processing, development of a learning based model and deployment of a complete solution.

Always available to provide consultation and insights to budding companies trying to cope with and step into the AI revolution.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Islamabad, Pakistan
              </p>
              <p>
                <strong>Email:</strong> bhatti.fazeel@gmail.com
              </p>
              {/*<p>
                <strong>Phone:</strong> 123 456 7898
              </p>*/}
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Urdu
              </p>
              <p>
                <strong>Third Language</strong> - Punjabi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
