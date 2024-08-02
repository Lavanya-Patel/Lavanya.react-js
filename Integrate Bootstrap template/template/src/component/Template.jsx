import React from "react";
import { FaBeer } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Layout= ()=>{
    return (
        <div>
            <div className="row m-0" id="Data">
             <div className="col-lg-6 pt-5">
              <h2 className="pt-5">Hi, Hi I am Marry</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas natus, omnis eveniet accusantium sequi magni reprehenderit, perferendis voluptatibus adipisci eaque voluptate fugiat aperiam veritatis modi quis? Pariatur, dolorem? Molestias Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptate ducimus sed sint adipisci culpa exercitationem delectus recusandae, perspiciatis officiis ad quam dignissimos voluptates illo fugit inventore cumque! Eum, odio!.
              </p>
              <p>I Make Youtube Video and write Blog</p>
              <button>I am Available</button>
              <p className="icons">

                <span>
                <BsInstagram />
                </span>
                <span>
                <FaTwitter />
                </span>
                <span>
                <IoLogoGithub />
                </span>
              </p>
             </div>
             <div className="col-lg-6 text-center">
             <img src="https://c.superprof.com/i/m/19384771/300/20220419122700/19384771.webp" alt="" />
             </div>
            </div>
        </div>
    )
}
export default Layout;