# Solsim2
SolSim2 is based off of a NASA hackathon project I worked on back in Fall of 2019. The goal is to allow users to experiment with and learn about orbital mechanics through
creating their own Solar System. 

SolSim simulates the N-Body problem, where each body in the system experiences gravitational attraction to every other body. I also use relatavistic mass in all of the calculations
to ensure that all of the bodies in motion obey the speed limit of the universe. 

Upon loading SolSim you will be given a model of our existing solar system, with accurate planet positions and velocities for July 3rd, 2020. From here you can select a variety of solar systems, as 
well as select individual bodies within your current solar system. Explaination of the buttons are bellow. 

  	Add Body      :   Adds a body to the system, the default body is a star orbiting outside Jupiter.
  	Remove Body   :   Removes the selected body from the system.	
    Focus Body    :   This one is cool, it will lock the camera onto the selected body. Very helpful if one wants to, say, follow a moon.
  	Recenter      :   If you get lost, you can return to (0, 0) with this button.
  	Toggle Paths  :   Will trace the paths of the various bodies as they travel. 
	Toggle Vectors:   This will display vectors representing the (x,y) velocities of each body. When paused, you can drag these vectors to alter the bodies velocity.  	  
	Start / Stop  :   Obviously will start and stop rotations	  
	Granularity   :   Allows the user to change the intervals between position / velocity updates.

You can also pan the camera by dragging on the map. If you select a planet with your mouse, you can drag it to the location you want!
