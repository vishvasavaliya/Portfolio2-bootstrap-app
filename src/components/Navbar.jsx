import React from 'react'

export default function Navbar() {
  return (
    <>
    <section id='navbar-section'>
    <nav className="nav navbar navbar-expand-md fixed-top shadow p-3 bg-white">
{/* <!-- logo --> */}
<a href="#" className="text-dark navbar-brand fs-2">Vishva Savaliya
</a>
<button type="button" className="btn btn-outline-danger navbar-toggler" data-bs-toggle="collapse" data-bs-target="#togg-click">
<span class="bi bi-grid-3x3-gap"></span>
</button>
{/* <!-- main navigations --> */}
<div className="collapse navbar-collapse links" id="togg-click">
<ul className="navbar-links fs-5">
<li><a href="#" className="text-danger">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Service</a></li>
<li className="dropdown"><a class="dropdown-toggle" data-bs-toggle="dropdown" href="#">Blocks</a>
<ul className="dropdown-menu bg-dark text-white">
<li><a href="#">News</a></li>
<li><a href="#">Testimonials</a></li>
<li><a href="#">New News</a></li>
</ul>
</li>
<li className="dropdown"><a class="dropdown-toggle" data-bs-toggle="dropdown" href="#">Blogs</a>
<ul className="dropdown-menu bg-dark text-white">
<li><a href="#">Add Blogs</a></li>
<li><a href="#">Blogs Post</a></li>
</ul>
</li>
<li><a href="#">Work</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>
</nav>
</section>
    </>
  )
}
