import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip, faCloudSunRain, faRobot } from '@fortawesome/free-solid-svg-icons'
import ShebaImage from '../../assets/sheba.jpg'

function About() {
  return (
    <div id="about" className="bg-gray-50 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Sheba Software Solutions
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We're on a mission to bring the future Software Systems of the digital age.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
                <FontAwesomeIcon icon={faMicrochip} className="text-xl icon-animate" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Innovative Solutions</h3>
                <p className="mt-2 text-base text-gray-500">
                  Discover our suite of powerful software solutions, crafted to meet your needs, or collaborate with us to build a custom platform that reflects your unique vision.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
                <FontAwesomeIcon icon={faCloudSunRain} className="text-xl icon-animate" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Navigate like a wind</h3>
                <p className="mt-2 text-base text-gray-500">
                  Deploy your software effortlessly with our user-friendly platforms or let us deliver tailored solutions to businesses anywhere in the world.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
                <FontAwesomeIcon icon={faRobot} className="text-xl icon-animate" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Crafted with passion</h3>
                <p className="mt-2 text-base text-gray-500">
                  Every solution is built with dedication to empower your business and drive meaningful success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-64 w-full object-cover md:h-full md:w-64"
                src={ShebaImage}
                alt="Sheba Software Solutions"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Our story</div>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                Bringing the Future Here.
              </h3>
              <p className="mt-4 text-gray-500">
                Founded in 2024, Sheba Software emerged from a bold vision: in an era of rapid digital transformation, businesses need innovative, accessible software solutions that blend cutting-edge technology with local relevance. Based in Ethiopia, our platform delivers powerful, tailored software that empowers organizations to thrive while fostering growth and connection across communities.
              </p>
              <div className="mt-6">
                <button className="team-button text-blue-600 font-medium hover:text-blue-700 transition transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Meet the team <span className="arrow-animate" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About