// ============================================================
// FULLER ARCHITECTURE - PROJECT DATA
// To add a new project, copy an existing block and edit it.
// See README-HOW-TO-ADD-PROJECTS.md for full instructions.
// ============================================================
const PROJECTS = [
  {
    "slug": "hdumc",
    "title": "Hillsdale United Methodist Church",
    "location": "Bermuda Run, North Carolina",
    "category": "Religious",
    "featured": true,
    "description": "This new 20,000 sf contemporary worship campus utilizes one large multi-use space for both worship and fellowship in the first phase. The facility has a large gathering area with classroom wings to either side. The site was particularly challenging being restricted by steep topography, wetlands, & streams. The site presents the church majestically on a hill that fronts a major thoroughfare in Davie County.",
    "folder": "hdumc",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "htlc",
    "title": "Holy Trinity Lutheran Church",
    "location": "Troutman, North Carolina",
    "category": "Religious",
    "featured": true,
    "description": "Both the interior and the exterior of this 1923 Gothic sanctuary were completely restored. Approx 3,000 sf was added consisting of an expanded fellowship hall, offices, toilet rooms, and an elevator. Great care was taken to make sure that the addition looked as if it was built when the historic sanctuary was constructed. The new elevator lobby functions aesthetically as a link between the old and the new.",
    "folder": "htlc",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "parkpres",
    "title": "Parkway Presbyterian Church",
    "location": "Winston-Salem, North Carolina",
    "category": "Religious",
    "featured": true,
    "description": "The first addition to the original 1960's sanctuary was the 12,000 sf Family Life Center in 1991. John Fuller while employed at ADW Architects designed this building. Fuller Architecture designed all subsequent additions. The columbarium, memorial fountain and terraced gardens built in 2006 were sensitively incorporated between the existing buildings. A large gathering space at the entry to the sanctuary, an elevator, parlor, and a covered canopy drop off were added in 2008.",
    "folder": "parkwaypres",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "riveroaks",
    "title": "River Oaks Community Church",
    "location": "Clemmons, North Carolina",
    "category": "Religious",
    "featured": true,
    "description": "This new 50,000 sf contemporary worship campus has a 1500 seat sanctuary with state of the art audio/visual technology, a dedicated youth multipurpose room (kids rocc) and a children's education wing. The focal point of the facility is the entry lobby/coffee bar gathering area that is truly a multi-use space.",
    "folder": "riveroaks",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "yadumc",
    "title": "Yadkinville United Methodist Church",
    "location": "Yadkinville, North Carolina",
    "category": "Religious",
    "featured": true,
    "description": "This new addition of a 15,300 sf family life center incorporates a unique, exposed glue laminated wood structure rising 35' to define a contemporary worship/fellowship hall with a capacity for 325 diners, and an expanded commons area that creates a gathering space for the two worship services. There is also a commercial kitchen, new toilet facilities and an office suite.",
    "folder": "yadkinvilleumc",
    "images": [
      "db1.jpg",
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "advanceumc",
    "title": "Advance United Methodist Church",
    "location": "Advance, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This 4,600 sf addition of a new fellowship hall seats 224 for dinner and includes a commercial grade kitchen & toilet rooms. Extensive care and attention to detail was taken to make sure the new addition looked as if it was built when the historic sanctuary was constructed. A new stained glass window was incorporated based on the original center window of the sanctuary.",
    "folder": "advanceumc",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "advmoravian",
    "title": "Advent Moravian Church",
    "location": "Winston-Salem, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This addition of a 5,900 sf Family Life Center includes a fellowship hall that can seat 300 for dinner, a basketball court, commercial grade kitchen, new toilet rooms, storage, and a covered canopy drop-off. Arched entrances and detailing connect the new addition to the historic church Sanctuary.",
    "folder": "advmoravian",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "bethumc",
    "title": "Bethlehem United Methodist Church",
    "location": "Advance, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This 9,200 sf addition includes a new fellowship hall, large stage, commercial kitchen, new toilet rooms, storage, a pre-school wing and a large gathering lobby. There is also the addition of a cooking porch, drop-off canopy, and covered walkways that connect the existing fellowship space, education facilities and sanctuary.",
    "folder": "bethumc",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "centerumc",
    "title": "Center United Methodist Church",
    "location": "Welcome, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This 12,000 sf Family Life Center addition includes a fellowship hall (seating 400 at round tables) a large stage, commercial kitchen, A/V booth, sport capabilities, and ample storage for all of the above. Gabled entries and arched windows are used in the design to architecturally connect the addition with the historic church building.",
    "folder": "cumc",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "ccc",
    "title": "Christ Community Church",
    "location": "Pinehurst, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This fast growing contemporary worship congregation is adding an 18,000 SF addition to their existing 4-year-old church facility. The concept of the design grew from a need to connect parking areas on either end of the site. This led to the creation of \"Education Street\" that all spaces are accessed from. The project consists of a 650 seat sanctuary, children's classrooms, youth center and offices.",
    "folder": "ccc",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "clemoravian",
    "title": "Clemmons Moravian Church",
    "location": "Clemmons, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This three-story 26,000 SF education building constructed in 2010 includes over 20 classrooms, a kitchen, a large hospitality lobby, a parlor, and a covered canopy drop-off. Much emphasis was placed on blending the new structure with the traditional Moravian architecture while providing a state-of-the-art facility that meets the church's education and pre-school needs.",
    "folder": "clemoravian",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "firstpres",
    "title": "First Presbyterian Church",
    "location": "Mocksville, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "Work for this historic downtown Mocksville congregation, designed to respect the church's architectural heritage. (Description drafted for client review.)",
    "folder": "firstpres",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "firstumc",
    "title": "First United Methodist Church",
    "location": "Mocksville, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "An existing 18,500 sf grocery store has been repurposed for the church's new fellowship hall (seating 290) youth classrooms and offices. Masonry detailing in the renovation was used to create a similar look to the existing historic sanctuary. The new parking lot between the two facilities created a connection to tie the campus together.",
    "folder": "firstumc",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "highlandpres",
    "title": "Highland Presbyterian Church",
    "location": "Winston-Salem, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This congregation desired an updated and completely renovated sanctuary and chancel interior that would meet the needs of today's worship while maintaining the aesthetic integrity of the historic structure. The outcome was a beautiful and functional sanctuary interior that blends seamlessly with the original building design.",
    "folder": "highlandpres",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "holycross",
    "title": "Holy Cross Lutheran Church",
    "location": "",
    "category": "Religious",
    "featured": false,
    "description": "A church project designed to give the congregation an inviting, functional home for worship and community life. (Description drafted for client review.)",
    "folder": "holycross",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "jerusalembaptist",
    "title": "Jerusalem Baptist Church",
    "location": "",
    "category": "Religious",
    "featured": false,
    "description": "A church facility designed to blend traditional forms with the practical needs of a modern congregation. (Description drafted for client review.)",
    "folder": "jerusalembaptist",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "midway",
    "title": "Midway United Methodist Church",
    "location": "Midway, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This 2-story addition to an existing church campus is comprised of a 7,925 SF fellowship hall facility with lower level classrooms. The new facility was connected to the existing with a 2-story corridor and elevator addition making the majority of the campus handicap accessible. Care was taken to aesthetically blend the new facility with the existing traditional building.",
    "folder": "midway",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "newhope",
    "title": "New Hope United Methodist Church",
    "location": "Winston-Salem, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "The 10,000 sf addition of this Family Life Center includes a new fellowship hall that seats 350 for dinner, a stage, commercial grade kitchen, large pantry, offices, new toilet rooms, meeting room and a covered drop off. A covered walkway connects to the original structure. Care was taken to architecturally blend the addition with the existing traditional buildings.",
    "folder": "newhope",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "oakgroveumc",
    "title": "Oak Grove United Methodist Church",
    "location": "",
    "category": "Religious",
    "featured": false,
    "description": "An addition and renovation designed to complement the existing church while expanding fellowship and education space. (Description drafted for client review.)",
    "folder": "oakgroveumc",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "orpres",
    "title": "Oak Ridge Presbyterian Church",
    "location": "Oak Ridge, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This 8,400 sf Worship/Education facility was completed in 1997 for a new church congregation. The facility was designed to represent the congregation's openness to the community via the glass-enclosed corridor oriented toward the entry. The traditional look of the facility blends with the historic surroundings in the Oakridge community.",
    "folder": "orpres",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "rumpmem",
    "title": "Rumple Memorial Presbyterian Church",
    "location": "Blowing Rock, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "Over many years a master plan was created to plan for the future development of a family life center, additional classrooms, and sanctuary expansion. In 2006 the first phase of the master plan was done that included installing stone veneer to match the historic sanctuary, adding a 3 story interior elevator, renovating classrooms and the fellowship hall.",
    "folder": "rumpmem",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "seventhday",
    "title": "Seventh Day Adventist Church",
    "location": "",
    "category": "Religious",
    "featured": false,
    "description": "A new worship facility designed to serve a growing congregation with a welcoming sanctuary and flexible fellowship space. (Description drafted for client review.)",
    "folder": "seventhday",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "shiloh",
    "title": "Shiloh United Methodist Church",
    "location": "Lexington, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "The project entailed tearing down a small deteriorating fellowship hall behind the existing church and replacing it with a larger 5,875 sf family life center that incorporates a commercial kitchen, lobby connector to the existing building and a daylight basement with classrooms.",
    "folder": "shiloh",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "trinitypres",
    "title": "Trinity Presbyterian Church",
    "location": "Winston-Salem, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "This 7,000 sf contemporary design, completed in 2004, provides the church with a new spacious fellowship hall on the main floor and classroom space below. The connecting interior space was reconfigured to accommodate accessible toilet rooms and office space. Care was taken to blend the new structure with the unique 60's style architecture. The first phase of a columbarium garden was added to the church campus in 2009.",
    "folder": "trinitypres",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg"
    ]
  },
  {
    "slug": "twincity",
    "title": "Twin City Bible Church",
    "location": "Winston-Salem, North Carolina",
    "category": "Religious",
    "featured": false,
    "description": "The church desired a complete new fresh look to their 1960's style campus. The project entails the addition of a new 3,700 sf office/educ. wing, 1,100 sf of new lobby/toilet space, 3,750 sf of new lobby circulation space with an elevator and complete new site work. All this utilizes good existing space while adding the necessary components for growth, functionality and beauty.",
    "folder": "twincity",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg"
    ]
  },
  {
    "slug": "bocland",
    "title": "Bank of the Carolinas",
    "location": "Landis, North Carolina",
    "category": "Financial",
    "featured": true,
    "description": "The Landis Branch for the Bank of the Carolinas is located in the downtown area, across from the historic Linn Mill Company Building. The design blends well with the other traditional elements of the town while also providing the Bank its own unique identity. The motif found in the exterior railing and the air supply and return grilles echo the Bank's logo, but also tie the building to the town's history by emulating the spinning process in the textile industry.",
    "folder": "boc-landis",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "bocmock",
    "title": "Bank of the Carolinas",
    "location": "Mocksville, North Carolina",
    "category": "Financial",
    "featured": true,
    "description": "This is a 9,800 SF two story corporate headquarters for Bank of the Carolinas located in Mocksville, NC. Old photos of the banks namesake built in the early 1900’s influenced the exterior design. The interiors are filled with traditional stained woodwork providing patrons with a warm, comfortable feel.",
    "folder": "boc-mocksville",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "stblakney",
    "title": "Suntrust Bank - Blakeney Branch",
    "location": "Charlotte, North Carolina",
    "category": "Financial",
    "featured": true,
    "description": "Fuller Architecture has been the Architect for all NC Suntrust banks for a number of years. The 4,300 sf Blakeney Branch, built in 2006, was one of the first Suntrust prototypes to be done in NC. The design varied slightly from the standard prototype incorporating materials that blend with the Blakeney shopping development.",
    "folder": "stblakney",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "stcureton",
    "title": "Suntrust Bank - Cureton Branch",
    "location": "Waxhaw, North Carolina",
    "category": "Financial",
    "featured": false,
    "description": "Fuller Architecture has been the Architect for all NC Suntrust banks for a number of years. The 4,900 sf Cureton Branch, built in 2008, was one of the first Suntrust prototypes where we were required by the developer to significantly change the design to match the style of the development.",
    "folder": "stcureton",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "stmckee",
    "title": "Suntrust Bank - Mckee Farms Branch",
    "location": "Charlotte, North Carolina",
    "category": "Financial",
    "featured": false,
    "description": "Fuller Architecture has been the Architect for all NC Suntrust banks for a number of years. The 4,800 sf Mckee Farms Branch, built in 2009, was the first Suntrust prototype where the developer required the branch design to utilize a flat roof in order to adhere to the developments standards. An attractive and inviting exterior design was the outcome.",
    "folder": "stmckee",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "stpilot",
    "title": "Surrey Bank & Trust Branch",
    "location": "Pilot Mountain, North Carolina",
    "category": "Financial",
    "featured": false,
    "description": "Fuller Architecture has worked with Surrey Bank & Trust from it's beginning when we designed its first building, the main headquarters in downtown Mount Airy. We were later asked to create a 2,850 sf prototype branch that has been built in two locations. The building has similar materials and detailing to the original headquarters.",
    "folder": "stpilot",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg"
    ]
  },
  {
    "slug": "dcsr",
    "title": "Davie County Senior Center",
    "location": "Mocksville, North Carolina",
    "category": "Civic",
    "featured": true,
    "description": "This 11,000 sf facility, built in 2007, provides the communities growing population of seniors a large meeting hall that seats 250 at round tables an exercise room, aerobics studio, library/computer lab, commercial kitchen and staff offices. Extensive porches and sloped roofs were used to give the building a residential scale and feel in an effort to make the occupants feel more \"at home.\"",
    "folder": "dcsr",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "eblib",
    "title": "East Bend Public Library",
    "location": "East Bend, North Carolina",
    "category": "Civic",
    "featured": true,
    "description": "This is a 6,600 sf branch library, built in 2011, located in a rural setting on the outskirts of the small town of East Bend, NC. The building accommodates all the library's collections and includes a 50-seat community meeting room. Skylight dormers on the front of the building bring natural light to the interior space where the open floor plan makes room for technology, research and comfortable reading spaces.",
    "folder": "eblib",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "ycac",
    "title": "Yadkin Cultural Arts Center",
    "location": "Yadkinville, North Carolina",
    "category": "Civic",
    "featured": true,
    "description": "The Art Center is an adaptive reuse project located in the heart of Yadkinville, NC. The existing 10,500 sf building and attached plaza have been renovated to provide the community a fine arts gallery, staff offices, internet cafe, classrooms and a 192-seat, state of the art performing arts theatre. A historical presence is maintained on Main Street while contemporary elements have been introduced on the plaza side.",
    "folder": "ycac",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "dce911",
    "title": "Davie County E-911 Center",
    "location": "Davie County, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "A dedicated emergency communications center designed for around-the-clock reliability, housing dispatch operations and emergency management functions. (Description drafted for client review.)",
    "folder": "dce911",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "dcems",
    "title": "Davie County EMS Station",
    "location": "Davie County, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "A modern EMS station combining apparatus bays with comfortable crew quarters, designed for fast response and long shifts alike. (Description drafted for client review.)",
    "folder": "dcems",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "dcems601",
    "title": "Davie County EMS Station — 601 South",
    "location": "Davie County, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "A satellite EMS station extending emergency coverage in southern Davie County, with efficient bays and crew support spaces. (Description drafted for client review.)",
    "folder": "dcems601",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "dchumane",
    "title": "Humane Society of Davie County",
    "location": "Mocksville, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "An animal shelter and adoption center designed to be welcoming to visitors while providing healthy, humane housing for the animals in its care. (Description drafted for client review.)",
    "folder": "dchumane",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "mocksvillefire",
    "title": "Mocksville Fire Station",
    "location": "Mocksville, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "This renovation gave the existing building much needed improvements to the performance and aesthetics of the exterior envelope. A newly clad brick tower element and bold steel canopies reinforced the buildings presence along the street while also providing better protection from the elements. The new additions combine to transform the old fragmented structure into a cohesive whole.",
    "folder": "mocksvillefire",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "troutmanlib",
    "title": "Troutman Library",
    "location": "Troutman, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "Completed in 2010 this 6,800 sf library is the Troutman Branch of the Iredell Public Library system. Nestled in a neighborhood of early 20th century homes the library was designed to be reminiscent of the detailing found in these homes. The library committee wanted a facility that had a warm comfortable feel and that was realized in the vast amount of warm stained white oak woodwork and the warm tones of color used.",
    "folder": "troutlib",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "troutmanth",
    "title": "Troutman Town Hall Expansion",
    "location": "Troutman, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "Currently in schematic design, the 23,000 sf addition and renovation of the existing Town Hall will expand all current services, including new Council chambers, renovated administrative offices, and new offices for the planning, engineering, public works and police department. The layout has an inner courtyard to give employees an opportunity for time outdoors, and to help let natural light into the building.",
    "folder": "troutmanth",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "wallburgth",
    "title": "Wallburg Town Hall",
    "location": "Wallburg, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "Established in 1892, Wallburg has maintained its desirable small town environment. Wallburg incorporated in 2004, and to accommodate the newly formed town council Fuller Architecture designed a new 11,500 sf two-story town hall with council chambers, administrative offices and a historical display area.",
    "folder": "wallburgth",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "yadpd",
    "title": "Yadkinville Police Department",
    "location": "Yadkinville, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "The Town of Yadkinville's new Police Department is a 7,400 sf facility with the upper level providing space for the patrol center and the detective's department. Downstairs has the \"sally port\" including temporary holding cells and an emergency operations center. Aesthetically an effort was made to work with the traditional elements of the town while staying with-in the Owner's budget.",
    "folder": "yadkinvillepd",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "yadth",
    "title": "Yadkinville Town Hall",
    "location": "Yadkinville, North Carolina",
    "category": "Civic",
    "featured": false,
    "description": "For the new town hall, the mayor expressed a need for the town to redefine its traditional identity. The design of the project intended to provide this identity through the buildings elements; i.e. clock tower, arched windows, history display, and a front plaza and fountain. The 6,200 sf facility holds offices, council chambers and workspace for the town's administrative, maintenance, mapping and utility divisions.",
    "folder": "yadth",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "fcdslivengood",
    "title": "Livengood Center, Forsyth Country Day School",
    "location": "Lewisville, North Carolina",
    "category": "Education",
    "featured": true,
    "description": "This 17,000 sf facility provides the lower grades with a full-scale gymnasium, new athletic offices as well as an arts component with a dance studio, an art classroom and a music studio. At one entrance is a community room that presents the students with a place to gather in a comfortable, intimate atmosphere.",
    "folder": "fcdslivengood",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "coolcafe",
    "title": "Cooleemee Elementary School Cafeteria",
    "location": "Cooleemee, North Carolina",
    "category": "Education",
    "featured": false,
    "description": "Completed in 2012, this project consisted of the complete interior demolition and renovation of 6,784 sf of existing space into a new dining area to seat 232 children, a new kitchen and associated support spaces.",
    "folder": "coolcafe",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "sges",
    "title": "Shady Grove Elementary School",
    "location": "Advance, North Carolina",
    "category": "Education",
    "featured": false,
    "description": "Fuller Architecture has provided design services for several projects at Shady Grove Elementary School. These projects have include a 16,000 sf classroom addition in 2005, a 6,000 sf classroom / cafeteria / kitchen renovation and addition project completed in 2008 and a restroom renovation project within the gymnasium in 2011.",
    "folder": "sges",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg"
    ]
  },
  {
    "slug": "fcdssoftball",
    "title": "Sutton Softball Field, Forsyth Country Day School",
    "location": "Lewisville, North Carolina",
    "category": "Education",
    "featured": false,
    "description": "Completed in early 2009, this 170-seat facility architecturally blends with the campus look and serves the school's softball team. Sitting on poured-in-place concrete risers, each seat provides a clear view to all areas of the playing field. Also included in the facility are true sunken dugouts, men's & women's toilet rooms, a concession area, and storage rooms for equipment needs.",
    "folder": "fcdsoftball",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "kcb",
    "title": "Ketchie Creek Bakery",
    "location": "Mocksville, North Carolina",
    "category": "Commercial",
    "featured": true,
    "description": "We are proud to say that the 3,200 sq. ft. Ketchie Creek Bakery, designed by our firm, has become one of the regions most enduring and appreciated cafe/bakeries, offering consistently excellent sandwiches and deserts, and providing a quintessential bistro atmosphere. We also provided services for a subsequent addition, and for repairs after the restaurant was damaged by a motor vehicle.",
    "folder": "kcb",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "saratoga",
    "title": "Saratoga Steakhouse",
    "location": "Bermuda Run, North Carolina",
    "category": "Commercial",
    "featured": true,
    "description": "Intricate brick detailing, classic red and white awnings and a series of archways for entrances and windows were applied to reflect the architectural quality found in the historical buildings of Saratoga Springs, NY, the owner’s hometown. The interior reflects the outside with similar masonry archways. A state of the art commercial kitchen takes nearly half the total 6000 sf building emphasizing attention to the quality of the food and the dining experience.",
    "folder": "saratoga",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "hillsdaledental",
    "title": "Hillsdale Dental",
    "location": "Bermuda Run, North Carolina",
    "category": "Commercial",
    "featured": false,
    "description": "This spacious two story 9,300 sf dental office, built in 2010, incorporates the latest in dental equipment while providing an exterior design that adheres to the strict aesthetic requirements of the Town of Bermuda Run. The building is brought close to the street to be part of this walkable community.",
    "folder": "hillsdaledental",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "johnsoninsurance",
    "title": "Johnson Insurance Office Building",
    "location": "Mocksville, North Carolina",
    "category": "Commercial",
    "featured": false,
    "description": "This 6,300 sf office building, built in 2001, is home to a local long established insurance agency. The design incorporates stone, brick, large dormers and hip roofs to create a building with a lasting aesthetic appeal. The interior floor planning is creatively set on a diagonal to flow from the corner tower entry while also allowing for a small rental space with a private entry.",
    "folder": "johnson",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "mttaboranimal",
    "title": "Mt. Tabor Animal Hospital",
    "location": "",
    "category": "Veterinary",
    "featured": false,
    "description": "A contemporary animal hospital organized for smooth patient flow, with bright public spaces up front and efficient treatment, surgery and support spaces beyond. (Description drafted for client review.)",
    "folder": "mttaboranimal",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "myrtlegrove",
    "title": "Myrtle Grove Animal Hospital",
    "location": "",
    "category": "Veterinary",
    "featured": false,
    "description": "A new veterinary hospital designed to feel calm and approachable for pets and their owners while supporting a busy clinical practice behind the scenes. (Description drafted for client review.)",
    "folder": "myrtlegrove",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "passionatepaws",
    "title": "Passionate Paws Animal Hospital",
    "location": "",
    "category": "Veterinary",
    "featured": false,
    "description": "This veterinary hospital combines an inviting client experience with a carefully planned clinical core, giving the practice room to grow. (Description drafted for client review.)",
    "folder": "passionatepaws",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "petspace",
    "title": "The Pet Space",
    "location": "Lexington, South Carolina",
    "category": "Veterinary",
    "featured": false,
    "description": "A pet care facility in Lexington, South Carolina, designed with flexible boarding, grooming and care spaces wrapped in a bright, brand-forward building. (Description drafted for client review.)",
    "folder": "petspace",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "urbantails",
    "title": "Urban Tails Veterinary Hospital",
    "location": "",
    "category": "Veterinary",
    "featured": false,
    "description": "A modern full-service veterinary hospital designed with a welcoming, retail-quality entry, efficient exam and treatment layouts, and durable, easy-to-maintain finishes. (Description drafted for client review.)",
    "folder": "urbantails",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "welcomewaggin",
    "title": "Welcome Waggin' Animal Hospital",
    "location": "",
    "category": "Veterinary",
    "featured": false,
    "description": "This animal hospital pairs a friendly, residential-scale street presence with a highly functional clinical interior, from reception and exam rooms to surgery and boarding. (Description drafted for client review.)",
    "folder": "welcomewaggin",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg",
      "db6.jpg"
    ]
  },
  {
    "slug": "mtairydental",
    "title": "Mt. Airy Dental",
    "location": "Mount Airy, North Carolina",
    "category": "Healthcare",
    "featured": false,
    "description": "A modern dental practice whose warm materials and comfortable scale reflect its small-town setting while housing state-of-the-art clinical spaces. (Description drafted for client review.)",
    "folder": "mtairydental",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "nextdoordental",
    "title": "Next Door Dental",
    "location": "",
    "category": "Healthcare",
    "featured": false,
    "description": "A boutique dental office with a clean, contemporary design that makes a compact footprint feel open and calm. (Description drafted for client review.)",
    "folder": "nextdoordental",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "southeastsmiles",
    "title": "Southeast Smiles",
    "location": "",
    "category": "Healthcare",
    "featured": false,
    "description": "A dental office designed to put patients at ease — an open, daylit waiting area leading to efficient, well-equipped operatories. (Description drafted for client review.)",
    "folder": "southeastsmiles",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "summiteye",
    "title": "Summit Eye Care",
    "location": "",
    "category": "Healthcare",
    "featured": false,
    "description": "An eye care clinic whose crisp, light-filled interiors support both the patient experience and the precise technical needs of a modern optometry practice. (Description drafted for client review.)",
    "folder": "summiteye",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg",
      "db5.jpg"
    ]
  },
  {
    "slug": "bermudarun",
    "title": "Town Planning for Bermuda Run",
    "location": "North Carolina",
    "category": "Planning",
    "featured": true,
    "description": "Bermuda Run developed into a Township from previously being a gated community located adjacent to a busy, rapidly developing intersection. Fuller Architecture assisted the planning board with a vision to guide future development. An overall Master Plan for a brand new Town Center was developed along with a more specific design for the Hwy 801 corridor including a new marquee entrance into the center.",
    "folder": "bermudarun",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  },
  {
    "slug": "troutmandt",
    "title": "Town Planning for Troutman",
    "location": "North Carolina",
    "category": "Planning",
    "featured": false,
    "description": "Re-visioning for the Town of Troutman was approached from two main directions. First, because of the lack of a \"Main Street\" due to Hwy 21 cutting through the town center, a proposal was designed for the development of Lytton Street into a traditional \"Main Street\" atmosphere. Second, Troutman's historical downtown would be transformed into a pedestrian friendly urban area.",
    "folder": "troutmandt",
    "images": [
      "db1.jpg",
      "db2.jpg",
      "db3.jpg",
      "db4.jpg"
    ]
  },
  {
    "slug": "ymcach",
    "title": "YMCA - Camp Hanes",
    "location": "King, North Carolina",
    "category": "Planning",
    "featured": false,
    "description": "Camp Hanes, originally begun in 1927, has a strong heritage but needed long range planning and a coordinated look. We worked over a number of years to plan out the placement of key projects such as a chapel, retreat center, horse stables, outdoor air-nasium, and treetop ropes course.",
    "folder": "ymcach",
    "images": [
      "main1.jpg",
      "main2.jpg",
      "main3.jpg",
      "main4.jpg",
      "main5.jpg",
      "main6.jpg"
    ]
  }
];
