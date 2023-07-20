import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer class="bg-black text-white pb-0 lg:pb-12">
                <div class="footer-top py-[1px] gradient border-r-0 border-l-0 rounded-none">
                    <div className='bg-black'>
                        <div class="container mx-auto">
                            <div
                                class="flex flex-wrap justify-center md:justify-between items-center gap-4 py-8 text-sm md:w-11/12">
                                <Link>Find Adult Singles & Swingers</Link>
                                <Link>Sex Dating</Link>
                                <Link>View Members</Link>
                                <Link>Online Dating</Link>
                                <Link>Free Sex & Dates</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto">
                    <div class="footer-bottom flex flex-col lg:flex-row w-full py-8 gap-6 text-center md:text-start">
                        <div class="footer-content w-full md:w-4/5">
                            <p class="text-sm">Persons appearing in photographs and videos may not be actual members. Other data
                                for
                                illustrative
                                purposes only.
                                Kaizen Globe does not conduct criminal background screening of its members.
                            <p class="text-sm">Dating Safety | Protect Kids | Report Abuse Or Sexually Explicit Ads | 18 U.S.C.
                                2257
                                Record
                                Keeping
                                Requirements Compliance Statement</p>
                            <p class="text-sm">This website is operated in the US by Various, Inc. at 1615 S. Congress Avenue,
                                Suite
                                103,
                                Delray
                                Beach, Florida 33445; in the EU by Ventnor Enterprise Limited At Quatro House, Suite 117F, Lyon
                                Way,
                                Frimley Road, Camberley Surrey GU16 7ER; in Australia by Magnus Processing PTY Ltd.,85 Torquay
                                Rd.
                                QLD 4165 Redland Bay, Queensland, Australia; in Singapore by Sinric Processing Pte Ltd.,531A
                                Upper
                                Cross St. #04-95 Hong Lim Complex Singapore 051531. Contact us at 888-575-8383 (US toll free),
                                0800
                                098 8311(UK toll-free).</p>
                            <p class="text-sm">Copyright © 1996-2023 Various, Inc. All rights reserved.AdultFriendFinder®, Adult
                                Friend
                                FinderSM,
                                AFF®, FriendFinder NetworksSM and the FriendFinder Networks logo are service marks of Various,
                                Inc.ConnexionSM is a service mark of Streamray Inc. and used with permission.Disclaimer: This
                                website contains adult material, all members and persons appearing on this site have
                                contractually
                                represented to us that they are 18 years of age or older.</p>
                            </p>
                        </div>
                        <div class="footer-menu text-sm w-full md:w-1/5">
                            <ul>
                                <li><Link>Questions? Call us: (669)208-0363</Link></li>
                                <li><Link>Friend Finder Networks</Link></li>
                                <li><Link>Become an Affiliate</Link></li>
                                <li><Link>Privacy Policy / Cookies</Link></li>
                                <li><Link>Terms of Use</Link></li>
                                <li><Link>Sitemap</Link></li>
                                <li><Link>Do Not Sell My Personal Information</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>   
        <section class="copyright__block py-6 bg-white text-black">
            <div class="container mx-auto">
                <p class="text-center text-sm">Copyright © 1998-2023 Kaizen Globe. All Rights Reserved.</p>
            </div>
        </section>
        </div>
    )
}

export default Footer