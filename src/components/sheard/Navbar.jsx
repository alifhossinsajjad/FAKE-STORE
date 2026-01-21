import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="flex justify-center w-full sticky top-4 z-50 px-4">
            <div className="navbar bg-base-100/90 backdrop-blur-md shadow-lg rounded-box w-full max-w-7xl border border-white/20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <a>Categories</a>
                                <ul className="p-2">
                                    <li><a>Electronics</a></li>
                                    <li><a>Jewelery</a></li>
                                    <li><a>Men's</a></li>
                                    <li><a>Women's</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl font-black italic tracking-tighter">
                        <span className="text-primary">Fake</span><span className="text-secondary">Store</span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link></li>
                        <li className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="font-medium hover:text-primary transition-colors">Shop Categories</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
                                <li><a>Electronics</a></li>
                                <li><a>Jewelery</a></li>
                                <li><a>Men's Clothing</a></li>
                                <li><a>Women's Clothing</a></li>
                            </ul>
                        </li>
                        <li><a className="font-medium hover:text-primary transition-colors">Deals</a></li>
                        <li><a className="font-medium hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <div className="form-control hidden md:block">
                        <input type="text" placeholder="Search..." className="input input-sm input-bordered focus:input-primary w-24 md:w-auto transition-all focus:w-48" />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm badge-secondary indicator-item">0</span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2">
                            <div className="w-10 rounded-full">
                                <img alt="User" src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
                            <li><a className="justify-between">Profile <span className="badge">New</span></a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;