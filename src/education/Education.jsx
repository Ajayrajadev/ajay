import './Education.css'

export default function Education() {
; 
  return (
    <>
    <div>
    <div >
        <h2 className="ps-3 p-sm-0">EDUCATION</h2>
        <div className="d-flex ps-3 p-sm-0">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
      </div>
      {/* ***** Eduation start ******** */}
      <div className='education pb-3'>
      
        <div data-aos="flip-right">
          <h5 className='year'>2023</h5>
          <h4>Front-End Development</h4>
          <h5>Self-Learning on YouTube and Udemy</h5>
          <p> I learned and done Intern using HTML, CSS, JavaScript and Bootstrap</p>
        </div>
        <div data-aos="flip-left">
          <h5 className='year'>2020-2023</h5>
          <h4>BCA - Bachelors of Computer Applications</h4>
          <h5>Valluvar College of Science an</h5>
          <p> Proficient in C programming, C++ programming, statistics, and operating systems.</p>
        </div>
        <div data-aos="flip-right">
          <h5 className='year' >2018-2019</h5>
          <h4>Higher Secondary</h4>
          <h5>C.S.I Boys Higher Secondary School</h5>
          <p>Studied basics of computer science, programming languages, and mathematics. </p>
        </div>
        
      </div>
      {/* ******** Education end ********* */}
    </div> 
    </>
  );
}
