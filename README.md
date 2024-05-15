# MDLBeast Events (Client)

![Events](https://github.com/RamiB1234/mdlbeast-events-front/blob/master/README_images/mdlBeastLogo.png?raw=true)

This is the frontend of the event system. Please check the [server repository](https://github.com/RamiB1234/mdlbeast-events-server) as well.

## Introduction
This is the frontend for managing the MDLBeast Events. It's a SPA that's developed in React 18

It's a demo I developed to demonstrate my abilities in the technology stack needed for the Fullstack Engineer technical interview

The system is a simulation for an event/ticketing system that has the following features:
- Browsing currently available events
- Displaying more information about an event
- Purchasing a ticket (actual payment is beyound the scope of the demo)
- Receiving the ticket number by email (Ideally, clients receive a QR code, but I tried to keep things simple)
- Admin log in
- Admins can view all ticket information and whither or not tickets were scanned
- Admins can scan an image to prevent mutiple entries (Meaning simply entering the ticket number, in the real world, ushers would use a QR scanner)


## Running the Application

- As a prerequisite, set up the [server side](https://github.com/RamiB1234/mdlbeast-events-server) and ensures it's listenting for requests
- Clone the repository
- Run `npm install` to install the needed packages
- Run `npm start` to start the development server
- Navigate to `.env` file in the root directory and update the `REACT_APP_API_URL` accoarding to your server setup


## License
The project is released under [MIT](https://github.com/RamiB1234/mdlbeast-events-front/blob/master/LICENSE) License
