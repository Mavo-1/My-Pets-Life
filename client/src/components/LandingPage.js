import React from 'react';
import '../styles/LandingPage.css';

function LandingPage( ) {
    return (
        <body className="bg-gray-100">

            <header>
                <nav id="navi" className="py-4 no-underline">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="flex items-center no-underline space-x-4">
                            <h4 className="font-bold">Pets<span>Life</span></h4>
                            <a href="#" className="text-white text-base font-semibold hover:text-blue-300">Features</a>
                            <a href="#" className="text-white text-base font-semibold hover:text-blue-300">About</a>
                        </div>
                        <div className="flex items-center">
                            <span className="material-icons text-white mr-1">person</span>
                            <a href="#" className="no-underline text-white text-base font-semibold hover:text-blue-300 ml-auto">Login</a>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Banner */}
            
            <section id="banner" className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/pets.jpg')" }}>
            <div className="container mx-auto px-4 md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                        <h1 id="team-heading" className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight sm:text-5xl sm:leading-none md:leading-tight" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Keep track of your pet's <span className="text-green-400">daily activities.</span></h1>
                        <p className="max-w-xl mb-4 text-base font-normal text-white md:text-xl">Spend less time worrying about your pet's needs. Record their activities and ensure they're happy and healthy.</p>
                        <ul className="actions special pb-16">
                            <li><a href="/signup" className="button primary">Sign Up Today</a></li>
                            <li><a href="#about" className="button">Learn More</a></li>
                        </ul>
                        <h3 className="mt-4 mb-4 text-3xl font-bold text-green-300 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Loved and Trusted by</h3>
                        <dl className="flex -mx-8 -mt-8">
                            <div className="flex flex-col px-8 pt-8">
                                <dt className="order-2 text-base font-medium text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Leagues</dt>
                                <dd className="order-1 text-2xl font-extrabold text-white sm:text-3xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>100+</dd>
                            </div>
                            <div className="flex flex-col px-8 pt-8">
                                <dt className="order-2 text-base font-medium text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Teams</dt>
                                <dd className="order-1 text-2xl font-extrabold text-white sm:text-3xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>1100+</dd>
                            </div>
                            <div className="flex flex-col px-8 pt-8">
                                <dt className="order-2 text-base font-medium text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Players</dt>
                                <dd className="order-1 text-2xl font-extrabold text-white sm:text-3xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>300+</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                            <h3 className="mb-1 text-xl font-semibold sm:text-center sm:mb-1 sm:text-2xl ">Create your account in seconds</h3>
                            <h4 className="mb-4 text-sm sm:text-center sm:mb-8 sm:text-lg ">Free to use. No credit card required.</h4>
                            <form>
                                <div className="mb-1 sm:mb-2">
                                    <label htmlFor="name" className="inline-block mb-1 font-medium">Your Name</label>
                                    <input type="text" placeholder="Hairy Pawter" required className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-400 focus:outline-none focus:ring-indigo-200" id="name" name="name" value="" />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label htmlFor="email" className="inline-block mb-1 font-medium">Your E-mail</label>
                                    <input type="email" placeholder="Chewbarka@roof.com" required className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-400 focus:outline-none focus:ring-indigo-200" id="email" name="email" value="" />
                                </div>
                                <div className="mt-6 mb-2 sm:mb-4" >
                                    <button type="submit" className="inline-flex  items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-blue-700 rounded shadow-md hover:bg-blue-800 focus:shadow-outline focus:outline-none">Create your FREE team</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
{/* Testing */}


            {/* Main  */}
            <section id="main" className="container mx-auto pb-16">

                <section className="box special bg-whiteshadow-lg">
                    <header className="major text-center">
                        <h2 className="text-6xl ">Introducing the ultimate companion <br /> for pet owners.
                        </h2>
                        <p className="mt-4">Everything you need to manage your pet's life, right at your fingertips. From tracking activities to scheduling vet appointments, our app simplifies pet care. Take the first step towards a happier, healthier pet and sign up today!</p>
                    </header>
                    <span className="image featured"><img src="/images/sportsBanner.jpg" alt="" /></span>
                </section>

                <section id="features" className="box special features bg-gray-100 p-8">
                    <div className="features-row">
                        <section className="w-full md:w-1/2">
                            <span className="icon solid major fa-paw accent2"></span>
                            <h3 className="text-xl font-bold mb-2">Track Activities</h3>
                            <p>Record your pet's activities effortlessly. Keep a log of walks, playtime, feeding times, vet visits, and more. Stay organized and ensure your pet's well-being.</p>
                        </section>
                        <section className="w-full md:w-1/2">
                            <span className="icon solid major fa-clock accent3"></span>
                            <h3 className="text-xl font-bold mb-2">Set Reminders</h3>
                            <p>Never miss a feeding time or vet appointment. Our app allows you to set reminders for important events, ensuring your pet's needs are met on time.</p>
                        </section>
                    </div>
                    <div className="features-row">
                        <section className="w-full md:w-1/2">
                            <span className="icon solid major fa-utensils accent4"></span>
                            <h3 className="text-xl font-bold mb-2">Food Tracking</h3>
                            <p>Monitor your pet's diet with ease. Track their food intake and dietary habits to ensure they're getting the nutrition they need for a healthy lifestyle.</p>
                        </section>
                        <section className="w-full md:w-1/2">
                            <span className="icon solid major fa-route accent5"></span>
                            <h3 className="text-xl font-bold mb-2">Record Walks</h3>
                            <p>Keep track of your walks and outdoor adventures with your pet. Record the duration, distance, and location of each walk to maintain an active lifestyle.</p>
                        </section>
                    </div>
                </section>

                <div className="row">
                    <div className="col-6 col-12-narrower">
                        <section id="about" className="box special bg-white p-8 shadow-lg">
                            <span className="image featured"><img src="/images/workflow-apps.jpg" alt="" /></span>
                            <h3 className="text-xl font-bold mb-2">Simplify Your Pet's Care</h3>
                            <p>Simplify your pet's care routine with our app. From tracking activities to setting reminders, we make it easy to ensure your pet stays happy and healthy.</p>
                            <ul className="actions special mt-4">
                                <li><a href="#" className="button alt bg-indigo-700 text-white">Learn More</a></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-6 col-12-narrower">
                        <section className="box special bg-white p-7 shadow-lg">
                            <span className="image featured"><img src="/images/team huddle.jpg" alt="" /></span>
                            <h3 className="text-xl font-bold ">Stay Connected</h3>
                            <p>Stay connected with your pet's activities wherever you go. Our app keeps you informed and in control, ensuring your pet receives the care they deserve.</p>
                            <ul className="actions special mt-4">
                                <li><a href="#" className="button alt bg-indigo-700 text-white">Learn More</a></li>
                            </ul>
                        </section>
                    </div>
                </div>

            </section>

            {/* CTA  */}
            <section id="cta">

                <h2>Sign up for beta access!</h2>
                <p>If you are selected to participate in a beta test, you'll receive an email with information on how to
                    sign in and provide feedback.</p>

                <form>
                    <div className="row gtr">
                        <div className="row gtr-50 gtr-uniform">
                            <div className="col-8 col-12-mobilep">
                                <input type="email" name="email" id="email" placeholder="Email Address" />
                            </div>
                            <div className="col-4 col-12-mobilep">
                                <input type="submit" value="Sign Up" className="fit" />
                            </div>
                        </div>
                    </div>
                </form>

            </section>

            {/*  Footer  */}
            <footer id="footer">
                <ul className="icons">
                    <li><a href="#" className="icon brands fas fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands fa-google-plus"><span className="label">Google+</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; My Pets Life </li>
                    <li><a href="">About</a></li>
                </ul>
            </footer>

        </body>
    );
}

export default LandingPage;
