import './info.css'



function Info(){


    return (
        <>
        <main role="main" className="main-content" id="main-content">
  <div className="titleCont">
    <h1 className="main-title" id="main-title">
      Here, in the forest,<br />
      <span style={{ paddingLeft: '100px' }}>dark and deep,</span><br />
      <span style={{ paddingRight: '110px' }}>I offer you,</span><br />
      <span style={{ paddingLeft: '-20px' }}>eternal sleep.</span>
    </h1>
  </div>
  <canvas id="noise" className="noise"></canvas>
  <div className="vignette"></div>
</main>
        </>
    )
}

export default Info







