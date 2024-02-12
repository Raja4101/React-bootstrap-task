import { MdForwardToInbox } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-scroll";
import { useState } from "react";

const headerData = {
    contact: {
        email: "contact@example.com",
        number: "+1 5589 55488 66"
    },
    socialApps: [
        {

        }
    ]
}

const contact = headerData.contact;

    const menu = {
        items: [
            {
                name: "HOME"
            },
            {
                name: "ABOUT"
            },
            {
                name: "SERVICES",
                items: [
                    {
                        name: "DROP DWON 1"
                    },
                    {
                        name: "DROP DWON 2",
                        items: [
                            {
                                name: "DEEP DROP DOWN 1"
                            },
                            {
                                name: "DEEP DROP DOWN 2"
                            },
                            {
                                name: "DEEP DROP DOWN 3"
                            }
                        ]
                    },
                    {
                        name: "DROP DWON 3"
                    }
                ]
            },
            {
                name: "PORTFOLIO"
            },
            {
                name: "TEAM"
            },
            {
                name: "DROP DOWN",
                items: [
                    {
                        name: "DROP DWON 1"
                    },
                    {
                        name: "DROP DWON 2",
                        items: [
                            {
                                name: "DEEP DROP DOWN 1"
                            },
                            {
                                name: "DEEP DROP DOWN 2"
                            },
                            {
                                name: "DEEP DROP DOWN 3"
                            }
                        ]
                    },
                    {
                        name: "DROP DWON 3"
                    }
                ]
            },
            {
                name: "CONTACT"
            }
        ]
    }

    const items = [
        "HOME", "ABOUT", "SERVICES", "PORTFOLIO", "TEAM", "DROP DOWN", "CONTACT"
    ]

    const navItems = {
        items: items,
        subItems: ["DEEP DROP DOWN 1", "DEEP DROP DOWN 2", "DEEP DROP DOWN 3", "DEEP DROP DOWN 4", "DEEP DROP DOWN 5"]
    }

export const Top = () => {
    return (
        <div>
            <div className="container-fluid head-top">
                <div className="container">
                    <div className="d-flex flex-row  text-white">
                        <a href="#" className="btn greenHover p-2 ms-2 text-white"><span><MdForwardToInbox /></span>{contact.email}</a>
                        <div className="p-2 ms-5"><span><CiMobile2 /></span> {contact.number}</div>
                        <div className="d-flex btn navbar flex-row mt-1 head-contact-logo">
                            <a href="#" className="head-contact-icons nav-link ms-1" ><IoLogoTwitter /></a>
                            <a href="#" className="head-contact-icons nav-link ms-1"><IoLogoFacebook /></a>
                            <a href="#" className="head-contact-icons nav-link ms-1"><IoLogoInstagram /></a>
                            <a href="#" className="head-contact-icons nav-link ms-1"><IoLogoLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Sticky navItems={navItems} menu={menu} />
        </div>
    )
}


const Sticky = (props) => {
    const menu = props.menu;
    return (
        <div className="sticky-top">
            <div className="container-fluid head-second">
                <div className="container">
                    <div className="d-flex align-items-center p-2">
                        <h3 ><a href="#" className="text-white text-decoration-none">Remember</a></h3>
                        <div className="navbar head-lists d-flex flex-row-reverse  text-white ">
                            <ul class="nav">
                                {
                                    menu?.items?.map(item => {
                                        if (item.items) {
                                            return <li><div className="dropdown">
                                                <button type="button" class="btn text-white dropdown-toggle head-lists-title" data-bs-toggle="dropdown">{item.name}</button>
                                                <ul className="dropdown-menu">
                                                    {
                                                        item.items.map(subItem => {
                                                            if (subItem.items) {
                                                                return <li>
                                                                    <div className="dropdown">
                                                                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">{subItem.name}</button>
                                                                        <ul className="dropdown-menu">
                                                                            {
                                                                                subItem.items.map(itemLeve2 => {
                                                                                    return <li>
                                                                                        <a className="dropdown-item" href="#">{itemLeve2.name}</a>
                                                                                    </li>
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            } else {
                                                                return <li>
                                                                    <a className="dropdown-item" href="#">{subItem.name}</a>
                                                                </li>
                                                            }
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            </li>
                                        } else {
                                            return <li className="nav-item">
                                                <a className="nav-link text-white head-lists-title" smooth spy activeClass="active" to="home-sec">{item.name}</a>
                                            </li>
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}