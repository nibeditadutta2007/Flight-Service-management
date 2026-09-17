/
   -src/
      index.js // server
      models/
      controllers/
      middlewares/
      services/
      utils/
      config/
      repository/
    -tests/ [later]


    ## DB Design
      -Airplane Table 
      -Flight
      -Airport
      -city

      -A Flight belongs to an airplane but one airplane can be used in multiple Flights
      -A city has many airports but one airport belongs to a city
      -One airport can have many flights, but a flight belongs to one airport


    