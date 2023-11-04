import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="section-1">
          <div>
            <h1>S.Meena, F/23</h1>
            <p>Patient ID: 87 20200727153457</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#002647" d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
          </div>
        </div>
        <div className="section-2">
            <h1>Goal Reached</h1>
            <div className="section-2-wrapper">
            <div class="gauge">
                <div class="gauge__body">
                  <div class="gauge__fill"></div>
                  <div class="gauge__cover"></div>
                </div>
                <p>
                40%
                </p >
              </div>
              <div class="section_2_data">
                <div className="data_child">
                  <p>ECG</p><span className="rom_graph">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#37DD0D" d="m16 6l2.29 2.29l-4.88 4.88l-4-4L2 16.59L3.41 18l6-6l4 4l6.3-6.29L22 12V6z"/></svg>
                  </span>
                </div>
                <div className="data_child ">
                  <p>ROM</p><span className="rom_graph">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#DF0100" d="m16.85 17.15l1.44-1.44l-4.88-4.88l-3.29 3.29a.996.996 0 0 1-1.41 0l-6-6.01A.996.996 0 1 1 4.12 6.7L9.41 12l3.29-3.29a.996.996 0 0 1 1.41 0l5.59 5.58l1.44-1.44a.5.5 0 0 1 .85.35v4.29c0 .28-.22.5-.5.5H17.2c-.44.01-.66-.53-.35-.84z"/></svg>
                  </span>
                </div>
              </div>
              </div>
        </div>
        <div className="section_3">
          <div className="section_3_text" ><p>Phone No</p> <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#002647" d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"/></svg>8022334455</span> </div>
          <div className="section_3_text" ><p>Main ID</p> <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#002647" d="M2 20V4h20v16H2Zm10-7L4 8v10h16V8l-8 5Zm0-2l8-5H4l8 5ZM4 8V6v2Z"/></svg>meenarabinsachin2@gmail.com</span> </div>
          <div className="section_3_text" ><p>Affected side</p> <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="#DF0100" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m6 10l12-6h12l12 6l-2 25h-6v9H14v-9H8L6 10Zm8 25V20m20 15V20"/><path d="M24 10a6 6 0 0 0 6-6H18a6 6 0 0 0 6 6Z"/></g></svg>Billateral</span> </div>
          <div className="section_3_text" ><p>Condition</p> <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#2C2B2B" d="M2 12c0-4.714 0-7.07 1.464-8.535c1.177-1.177 2.93-1.408 6.017-1.454v2.05c0 .556-.476.998-.96 1.272c-.915.519-1.56 1.707-1.56 2.758a2.519 2.519 0 1 0 5.039 0a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.757c-.484-.275-.96-.717-.96-1.273V2.01c3.088.046 4.84.277 6.016 1.454C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536c-1.171 1.171-2.914 1.405-5.978 1.452v-2.003c0-.557.476-.999.96-1.273c.915-.518 1.559-1.706 1.559-2.758a2.519 2.519 0 0 0-5.038 0a2.519 2.519 0 0 0-5.038 0c0 1.052.644 2.24 1.558 2.758c.485.274.961.716.961 1.273v2.005c-3.111-.045-4.873-.273-6.055-1.454C2 19.07 2 16.714 2 12Z"/></svg>Ortho</span> </div>
          <div className="section_3_text" ><p>Speciality</p> <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50"><path fill="#2C2B2B" d="M42.924 13H38V7.774C38 4.038 35.052 1 31.306 1H18.695C14.947 1 12 4.038 12 7.774V13H7.075C3.719 13 1 15.591 1 18.937v23.007C1 45.289 3.719 48 7.075 48h35.849C46.279 48 49 45.289 49 41.943V18.937C49 15.591 46.279 13 42.924 13zM16 7.774C16 6.375 17.292 5 18.695 5h12.611C32.705 5 34 6.375 34 7.774V13H16V7.774zM36 35h-7v7h-8v-7h-7v-8h7v-7h8v7h7v8z"/></svg>Osteoarthritis</span> </div>
        </div>

        <div className="section_4">
          <div className="section_4_text" ><p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#012E57" d="M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v9.583a4.736 4.736 0 0 0-1.75-.333h-3.5a4.75 4.75 0 0 0-2.916 8.5H6.25A2.25 2.25 0 0 1 4 19.75V4.25ZM16.25 6h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5Zm0 5h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5ZM22 18.25a3.75 3.75 0 0 0-3.75-3.75l-.102.007A.75.75 0 0 0 18.25 16l.154.005a2.25 2.25 0 0 1-.154 4.495l-.003.005l-.102.007a.75.75 0 0 0 .108 1.493V22l.2-.005A3.75 3.75 0 0 0 22 18.25Zm-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007a.75.75 0 0 0-.102-1.493l-.154-.005A2.25 2.25 0 0 1 14.75 16l.102-.007a.75.75 0 0 0 .648-.743Zm3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 14.75 19h3.5l.102-.007A.75.75 0 0 0 19 18.25Z"/></svg>Medical history</p> <span>Hypertension, DM ,Hypothyrodism</span> </div>
        </div>
      </div>



    </>
  )
}

export default App
