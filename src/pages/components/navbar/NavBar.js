import React, { useEffect } from "react";
import "./Navbar.css"
import Image from "./imageprofile.jpeg"
import { Link} from 'react-router-dom';
import $ from 'jquery';
import { Avatar } from "@mui/material";


const Navbar = () => {
    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
          $('#navbarSupportedContent ul li').removeClass("active");
          $(this).addClass('active');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();
          $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
        });
    }

    useEffect(() => {
        animation();
        $(window).on('resize', function(){
            setTimeout(function() {
                animation(); }, 500)
        })
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <Link className="navbar-brand navbar-logo" to="/">
                <div style={{
                    'display': 'flex'
                }}>
                <Avatar alt="Remy Sharp" src={Image} sx={{ width: 32, height: 32}} />

                </div>
                </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/"} >
                            <i className="fas fa-home"></i>Home
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/coffee"} >
                            <i className="fas fa-coffee"></i>Start
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/coffee"} >
                            <i className="fas fa-cogs"></i>Settings
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to='/supplies'>
                            <i className="fas fa-building"></i>Projects
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to='/supplies'>
                            <i className="fas fa-database"></i>Supplies
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/analysis"} >
                            <i className="fas fa-glasses"></i>Analysis
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/budgets"} >
                            <i className="fas fa-city"></i>Budgets
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/user-guide"} >
                            <i className="fas fa-tachometer-alt"></i>Dashboard
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/user-guide"} >
                            <i className="fas fa-wallet"></i>Bills
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/user-guide"} >
                            <i className="fas fa-code"></i>Plugins
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;