---
title: "logistics ONDC"
date: 2022-09-01
tags:
- ONDC
---

##### Who will contact logistic partner (buyer or seller) ?
- I think it is both, user can choose himself for logistics partner, so in this case logistic will be choosen by buyer app, and after that infromation will be passed to the seller app
- If user chooses he wants leave logistic decision on seller app, or buyer app make it default to choose logistic provider will be decided by seller app

#### How will logistic provider will get his money?
- because, here he will have two option his client can be buyer app also and seller app, and also edge case.

#### contact between seller app and logistics app
- in this case buyer app have choosen seller to decide the logistic partner and fulfil the order
- steps of seller app:
	- Seller will go to ondc to search for all the logistic partner, he will get get the data
	- now he will transmit the data of his requirements(details about order)
	- after that seller app will select the logistics partner
	- seller app will intialise the req by providing billing and/or shipping details
	- logistic partner will confirm the requst 
	- logistic app will update it's status with the status of deilvery 
	- seller app can also track the specific order, and send the data to buyer app
	-  In the background all this update are given to buyer app through all the on_action api end points, so he is also upto date with the data, and can show to the user 
	