import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Button, Offcanvas } from 'react-bootstrap'
import '../index.css'

export default function Root() {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div id="sidebar">
        <Button variant="primary" onClick={handleShow} id="menu_button">
          Menu
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Joe's Widgets</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="main_menu">
              <NavLink className="navLink" to={`fc300k`} onClick={handleClose}>
                300kHz Freq Chart
              </NavLink>
              <NavLink className="navLink" to={`fc3M`} onClick={handleClose}>
                3MHz Freq Chart
              </NavLink>
              <NavLink className="navLink" to={`fc30M`} onClick={handleClose}>
                30MHz Freq Chart
              </NavLink>
              <NavLink className="navLink" to={`fc300M`} onClick={handleClose}>
                300MHz Freq Chart
              </NavLink>
              <NavLink className="navLink" to={`fc3G`} onClick={handleClose}>
                3GHz Freq Chart
              </NavLink>
              <NavLink className="navLink" to={`fc30G`} onClick={handleClose}>
                30GHz Freq Chart
              </NavLink>
              <NavLink className="navLink" to={'allCharts'} onClick={handleClose}>
                All Frequency Charts
              </NavLink>
              <NavLink className="navLink" to={`rcssuper`} onClick={handleClose}>
                RCS Pattern Viewer
              </NavLink>

              <NavLink className="navLink" to={`coordconvert`} onClick={handleClose}>
                Coordinate Convert
              </NavLink>

              <NavLink className="navLink" to={`distances`} onClick={handleClose}>
                Convert Distances
              </NavLink>

              <NavLink className="navLink" to={`dmsconvert`} onClick={handleClose}>
                Convert Degrees Minutes Seconds
              </NavLink>

              <NavLink className="navLink" to={`lostool`} onClick={handleClose}>
                Line of Sight
              </NavLink>

              <NavLink className="navLink" to={`linerardb`} onClick={handleClose}>
                Linear/Db Converter
              </NavLink>

              <NavLink className="navLink" to={`powerconvert`} onClick={handleClose}>
                Power Unit Converter
              </NavLink>

              <NavLink className="navLink" to={`radiolos`} onClick={handleClose}>
                Radio Line of Sight Calculator
              </NavLink>

              <NavLink className="navLink" to={`spaceattenuation`} onClick={handleClose}>
                Free Space Attenuation
              </NavLink>

              <NavLink className="navLink" to={`wavelength`} onClick={handleClose}>
                Frequency Converter
              </NavLink>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div id="detail" className="widget-display">
        <Outlet />
      </div>
    </>
  )
}
