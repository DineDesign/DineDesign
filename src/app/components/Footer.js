export default function Footer() {
    return (
      <footer className="bg-gray-100 font-sans text-gray-800 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">DineDesign</h2>
              <p className="text-sm">Crafting culinary experiences since 2024.</p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Menu', 'Who We Are', 'Events', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-4 text-sm">Stay updated with our latest offers and events.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
  
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                  <img
                    src={`https://www.svgrepo.com/show/303${social === 'facebook' ? '114/facebook-3-logo' : social === 'twitter' ? '115/twitter-3-logo' : '145/instagram-2-1-logo'}.svg`}
                    alt={social}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
            <p className="text-sm text-center">© 2024 DineDesign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }