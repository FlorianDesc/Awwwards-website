import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import insta1 from '../../img/insta-image1.png'
import insta2 from '../../img/insta-image2.png'
import insta3 from '../../img/insta-image3.png'
import insta4 from '../../img/insta-image4.png'
import logo from '../../img/logo.png'
import eco from '../../img/eco.png'
import instaB from '../../img/insta-blanc.png'


function Footer() {
  return (
    <div className='footer'>

        <div className="top-footer">
            <div className="title-top-footer">
                <p className='title-footer'>Keep up with the team</p>
                <Link to="https://www.instagram.com/edmunds_uk/">
                    <button className='btn-title-footer'>Follow us</button>
                </Link>
            </div>
            <div className="galerie-link">
                <div className="img-insta">
                    <img className="img-insta-hover" src={instaB}/>
                    <img src={insta1}/>
                </div>
                <div className="img-insta">
                    <img className="img-insta-hover" src={instaB}/>
                    <img src={insta2}/>
                </div>
                <div className="img-insta">
                    <img className="img-insta-hover" src={instaB}/>
                    <img src={insta3}/>
                </div>
                <div className="img-insta">
                    <img className="img-insta-hover" src={instaB}/>
                    <img src={insta4}/>
                </div>
            </div>
        </div>

        <div className="middle-footer">
            <div className="left-link">
                <Link>
                    <button className='btn-footer first'>SHOP</button>
                </Link>
                <Link>
                    <button className='btn-footer'>SUBSCRIBE</button>
                </Link>
                <Link>
                    <button className='btn-footer'>MIX AND MATCH BOX</button>
                </Link>
                <Link>
                    <button className='btn-footer'>COCKTAILS</button>
                </Link>
                <Link>
                    <button className='btn-footer'>GIFTS</button>
                </Link>
                <Link>
                    <button className='btn-footer'>BARWARE</button>
                </Link>
            </div>
            <div className="middle-link">
                <Link>
                    <button className='btn-footer first'>ABOUT</button>
                </Link>
                <Link>
                    <button className='btn-footer'>OUR STORY</button>
                </Link>
                <Link>
                    <button className='btn-footer'>SUSTAINABILITY</button>
                </Link>
                <Link>
                    <button className='btn-footer'>TRADE & EVENTS</button>
                </Link>
                <Link>
                    <button className='btn-footer'>FAQS</button>
                </Link>
                <Link>
                    <button className='btn-footer'>JOURNAL</button>
                </Link>

            </div>
            <div className="right-link">
                <Link>
                    <button className='btn-footer first'>INFO</button>
                </Link>
                <Link>
                    <button className='btn-footer'>FAQS</button>
                </Link>
                <Link>
                    <button className='btn-footer'>DELIVERY</button>
                </Link>
                <Link>
                    <button className='btn-footer'>CONTACT</button>
                </Link>
                <Link>
                    <button className='btn-footer'>PRIVACY POLICY</button>
                </Link>
                <Link>
                    <button className='btn-footer'>COOKIE POLICY</button>
                </Link> 
            </div>
        </div>

        <div className="bottom-footer">

            <div className="subscribe-part">
                <label className='label-subscribe' htmlFor="subscribe">Subscribe for a treat</label>
                <div className="input">
                    <input className='email-subscribe' type="email" placeholder='Your email address'/>
                    <button className='btn-sign-up'>Sign up</button>
                </div>
            </div>

            <div className="logo">
                <img src={logo}/>
            </div>

            <div className="contact">
                <img src={eco}/>
                <div className="icons-contact">
                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#ffffff    " stroke-width="1.5"/>
                            <path d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        <p className='text'>Email</p>
                    </div>
                    <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M6.00745 3.40686C7.68752 1.72679 10.5227 1.85451 11.6925 3.95063L12.3415 5.11356C13.1054 6.48238 12.7799 8.20946 11.6616 9.34143C11.6467 9.36184 11.5677 9.47677 11.5579 9.67758C11.5454 9.93391 11.6364 10.5267 12.5548 11.4451C13.4729 12.3632 14.0656 12.4545 14.3221 12.442C14.5231 12.4322 14.6381 12.3533 14.6585 12.3383C15.7905 11.2201 17.5176 10.8945 18.8864 11.6584L20.0493 12.3075C22.1454 13.4773 22.2731 16.3124 20.5931 17.9925C19.6944 18.8911 18.4995 19.6896 17.0953 19.7429C15.0144 19.8218 11.5591 19.2844 8.13735 15.8626C4.71556 12.4408 4.17818 8.98556 4.25706 6.90463C4.3103 5.50044 5.10879 4.30552 6.00745 3.40686ZM10.3827 4.68163C9.78363 3.60828 8.17394 3.36169 7.06811 4.46752C6.29276 5.24287 5.7887 6.09868 5.75599 6.96146C5.6902 8.6968 6.11864 11.7226 9.19801 14.8019C12.2774 17.8813 15.3031 18.3097 17.0385 18.2439C17.9013 18.2112 18.7571 17.7072 19.5324 16.9318C20.6382 15.826 20.3916 14.2163 19.3183 13.6173L18.1554 12.9683C17.432 12.5645 16.4158 12.7023 15.7025 13.4156L15.7023 13.4158C15.6322 13.4858 15.1864 13.9018 14.395 13.9403C13.5847 13.9797 12.604 13.6156 11.4942 12.5058C10.384 11.3956 10.02 10.4146 10.0597 9.60423C10.0985 8.81271 10.5147 8.36711 10.5843 8.29746L10.5844 8.29743C11.2977 7.58411 11.4354 6.56797 11.0317 5.84456L10.3827 4.68163Z" />
                    </svg>
                    <p className='text'>Phone</p>
                    </div>
                    <div className="icon">
                        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Zm1-4.5v2H11v-2Zm3-7a3.984,3.984,0,0,1-1.5,3.122A3.862,3.862,0,0,0,13.063,15H11.031a5.813,5.813,0,0,1,2.219-3.936A2,2,0,0,0,13.1,7.832a2.057,2.057,0,0,0-2-.14A1.939,1.939,0,0,0,10,9.5,1,1,0,0,1,8,9.5V9.5a3.909,3.909,0,0,1,2.319-3.647,4.061,4.061,0,0,1,3.889.315A4,4,0,0,1,16,9.5Z"/>
                        </svg>
                        <p className='text'>FAQS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer