function navbar(){
    return` <div id="navbar">
    <div>
      <img src="/images/cb_logo.svg" alt="" />
    </div>

    <div>Live Scores</div>
    <div>Schedules</div>
    <div>Archives</div>
    <div class="livedrpdwn">
      <div>
        <div class="live">News</div>
        <span class="material-icons-outlined"> arrow_drop_down </span>
      </div>

      <div class="dropdown">
        <p>All Stories</p>
        <p>Cricbuzz Plus</p>
        <p>Latest News</p>
        <p>Topics</p>
        <p>Spotlight</p>
        <p>Opinion</p>
        <p>Specials</p>
        <p>Stats & Analysis</p>
        <p>Interviews</p>
        <p>Live Blogs</p>
        <p>Harsha Bhogle</p>
      </div>
    </div>
    <div class="livedrpdwn">
      <div>
        <div class="live">Series</div>
        <span class="material-icons-outlined"> arrow_drop_down </span>
      </div>
      <div class="dropdown series">
        <p>Sri Lanka tour to India 2022</p>
        <p>India Women tour of New Zealand 2022</p>
        <p>South Africa tour of New Zealand 2022</p>
        <p>Afghanistan tour to Bangladesh 2022</p>
        <p>Ranji Trophy 2021-2022</p>
        <p>Pakistan super legue 2022</p>
        <p>CSA T20 Challenge 2022</p>
        <p>ICC Mens T20 World Cup Qualifier A 2022</p>
        <p>
          <a href="https://www.cricbuzz.com/cricket-schedule/series"
            >All Series</a
          >
        </p>
      </div>
    </div>

    <div class="livedrpdwn">
      <div>
        <div class="live">Teams</div>
        <span class="material-icons-outlined"> arrow_drop_down </span>
      </div>
      <div class="dropdown series">
        <div id="first_col">
          <div>
            <h3>Test Teams</h3>
            <p>India</p>
            <p>Ireland</p>
            <p>Pakistan</p>
            <p>Sri Lanka</p>
            <p>Bangladesh</p>
            <p>England</p>
            <p>West Indies</p>
            <p>South Africa</p>
            <p>Zimbabwe</p>
            <p>New Zealand</p>
            <p>Afghanistan</p>
          </div>
          <div>
            <h3>Associates</h3>
            <p>Belgium</p>
            <p>Italy</p>
            <p>Iran</p>
            <p>Denmark</p>
            <p>Singapore</p>
            <p>Namibia</p>
            <p>Cananda</p>
            <p>Uganda</p>
            <p>Malaysia</p>
            <p>Nepal</p>
            <p>Germany</p>
          </div>
        </div>
      </div>
    </div>
    <div class="livedrpdwn">
      <div>
        <div class="live">Videos</div>
        <span class="material-icons-outlined"> arrow_drop_down </span>
      </div>
      <div class="dropdown series">
        <p>All Videos</p>
        <p>Categories</p>
        <p>PlayLists</p>
      </div>
    </div>

    <div class="livedrpdwn">
      <div>
        <div class="live">Rankings</div>
        <span class="material-icons-outlined"> arrow_drop_down </span>
      </div>
      <div class="dropdown series">
        <p>ICC Rankings-Men</p>
        <p>ICC Rankings-Women</p>
       
      </div>
    </div>
    <div class="livedrpdwn">
      <div>
        <div class="live">More</div>
        <span class="material-icons-outlined"> arrow_drop_down </span>
      </div>
      <div class="dropdown series">
        <p>World Test Championship</p>
        <p>Worls Cup Super league</p>
        <p>Quiz</p>
        <p>Photos</p>
        <p>Mobile Apps</p>
        <p>Career</p>
        <p>Contact Us</p>
       
      </div>
    </div>

    <button id="plusBtn">Cricbuzz Plus</button>

    <div>
      <span class="material-icons-outlined"> search </span>
      
      <div class="livedrpdwn DisplaySignout">
      <div>
        <div id="AccountIcon" class="live"><span class="material-icons-outlined"> account_circle </span></div>
       
      </div>
      <div class="dropdown series signout">
        
        <p>My Account</p>
        <p>Sign Out</p>
       
       
      </div>
    </div>
    </div>
  </div>`
}

export default navbar