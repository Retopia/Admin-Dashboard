import './App.css'
import {
  LayoutDashboard, House, IdCard, MessageSquare, Clock,
  StickyNote, UsersRound, Settings, FileQuestion, ShieldCheck,
  Star, Eye, Share2, Search, BellRing
} from 'lucide-react'

function App() {
  return (
    <div className="main-container">
      <div className='navbar'>
        <div className='navbar-header'>
          <LayoutDashboard className='navbar-header-icon' />
          <p className='navbar-header-text'>Dashboard</p>
        </div>
        <div className='navbar-link'>
          <House className='navbar-link-icon' />
          <p className='navbar-link-text'>Home</p>
        </div>
        <div className='navbar-link'>
          <IdCard className='navbar-link-icon' />
          <p className='navbar-link-text'>Profile</p>
        </div>
        <div className='navbar-link'>
          <MessageSquare className='navbar-link-icon' />
          <p className='navbar-link-text'>Messages</p>
        </div>
        <div className='navbar-link'>
          <Clock className='navbar-link-icon' />
          <p className='navbar-link-text'>History</p>
        </div>
        <div className='navbar-link'>
          <StickyNote className='navbar-link-icon' />
          <p className='navbar-link-text'>Tasks</p>
        </div>
        <div className='navbar-link'>
          <UsersRound className='navbar-link-icon' />
          <p className='navbar-link-text'>Communities</p>
        </div>
        <div className='navbar-link'>
          <Settings className='navbar-link-icon' />
          <p className='navbar-link-text'>Settings</p>
        </div>
        <div className='navbar-link'>
          <FileQuestion className='navbar-link-icon' />
          <p className='navbar-link-text'>Support</p>
        </div>
        <div className='navbar-link'>
          <ShieldCheck className='navbar-link-icon' />
          <p className='navbar-link-text'>Privacy</p>
        </div>
      </div>

      <div className='top-panel'>
        <div className='top-container-row-1'>
          <div className='search-container'>
            <button className='search-button'><Search className='search-button-icon' /></button>
            <input className='search-input'></input>
          </div>

          <div className='notification-user-group'>
            <BellRing className='notification-icon' />
            <div className='user-icon-top'>P</div>
            <p className='user-name-top'>Preston Tang</p>
          </div>
        </div>

        <div className='top-container-row-2'>
          <div className='welcome-container'>
            <div className='welcome-user-icon'>P</div>
            <div className='welcome-text-container'>
              <p className='welcome-message'>Hi there,</p>
              <p className='welcome-user-name'>Preston Tang (@prestontang)</p>
            </div>
          </div>

          <div className='action-button-group'>
            <button className='action-button'>New</button>
            <button className='action-button'>Upload</button>
            <button className='action-button'>Share</button>
          </div>
        </div>
      </div>

      <div className='content-panel'>
        <div className='content-container'>
          <p className='content-title'>Your Projects</p>
          <div className='project-container'>
            <div className='card'>
              <div className='card-body'>
                <p className='card-title'>Aegis</p>
                <p className='card-content'>Cool security app woo!</p>
              </div>
              <div className='card-footer'>
                <Star className='card-footer-icon' />
                <Eye className='card-footer-icon' />
                <Share2 className='card-footer-icon' />
              </div>
            </div>

            <div className='card'>
              <div className='card-body'>
                <p className='card-title'>Evolutionary Boids</p>
                <p className='card-content'>A small simulation I made by following @TheCodingTrain's tutorials</p>
              </div>
              <div className='card-footer'>
                <Star className='card-footer-icon' />
                <Eye className='card-footer-icon' />
                <Share2 className='card-footer-icon' />
              </div>
            </div>

            <div className='card'>
              <div className='card-body'>
                <p className='card-title'>Flappy Bird Neuroevolution</p>
                <p className='card-content'>Learning AI how to play Flappy Bird through Neuroevolution</p>
              </div>
              <div className='card-footer'>
                <Star className='card-footer-icon' />
                <Eye className='card-footer-icon' />
                <Share2 className='card-footer-icon' />
              </div>
            </div>

            <div className='card'>
              <div className='card-body'>
                <p className='card-title'>Lunar Lander</p>
                <p className='card-content'>A simulation of rockets landing on the moon through Genetic Algorithms</p>
              </div>
              <div className='card-footer'>
                <Star className='card-footer-icon' />
                <Eye className='card-footer-icon' />
                <Share2 className='card-footer-icon' />
              </div>
            </div>

            <div className='card'>
              <div className='card-body'>
                <p className='card-title'>QuickGPT</p>
                <p className='card-content'>A chrome extension that shows a small popup of the answer when you highlight question! Powered by OpenAI's API.</p>
              </div>
              <div className='card-footer'>
                <Star className='card-footer-icon' />
                <Eye className='card-footer-icon' />
                <Share2 className='card-footer-icon' />
              </div>
            </div>

            <div className='card'>
              <div className='card-body'>
                <p className='card-title'>Evolution Simulator</p>
                <p className='card-content'>A basic evolution simulator made through JavaFX 3D</p>
              </div>
              <div className='card-footer'>
                <Star className='card-footer-icon' />
                <Eye className='card-footer-icon' />
                <Share2 className='card-footer-icon' />
              </div>
            </div>
          </div>
        </div>

        <div className='content-information-container'>
          <p className='content-title'>Announcement</p>
          <div className='announcement-container'>
            <div className='announcement-section'>
              <p className='announcement-section-title'>Site Maintenance</p>
              <p className='announcement-section-body'>This site is currently under maintenance! For more information, please check your inbox.</p>
            </div>

            <div className='announcement-section'>
              <p className='announcement-section-title'>Community Share Day</p>
              <p className='announcement-section-body'>Community share day is coming up soon! Be sure to share whatever it is you want to share in your life.</p>
            </div>

            <div className='announcement-section'>
              <p className='announcement-section-title'>Updated Privacy Policy</p>
              <p className='announcement-section-body'>We have recently updated our privacy policy! For more information, please refer to the updated privary policy page.</p>
            </div>
          </div>

          <p className='content-title'>Trending</p>
          <div className='trending-container'>
            <div className='trending-item-container'>
              <div className='trending-item-icon'>T</div>
              <div className='trending-item-meta'>
                <p className='trending-item-handle'>@tegan</p>
                <p className='trending-item-name'>World Peace Builder</p>
              </div>
            </div>

            <div className='trending-item-container'>
              <div className='trending-item-icon'>P</div>
              <div className='trending-item-meta'>
                <p className='trending-item-handle'>@preston</p>
                <p className='trending-item-name'>Cool programmer</p>
              </div>
            </div>

            <div className='trending-item-container'>
              <div className='trending-item-icon'>E</div>
              <div className='trending-item-meta'>
                <p className='trending-item-handle'>@emma</p>
                <p className='trending-item-name'>Cool Beijing friend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App