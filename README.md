# Atlas

Atlas is a web app for exploring information about addresses in the City of 
Philadelphia. You can get information on topics such as:

* property ownership and land parcels
* zoning
* voting locations
* schools
* parks

## Development

First, you'll need to [install Node](https://nodejs.org/en/download/). If 
you're on CityNet you'll also have to configure `npm` to use the proxy. Add the 
following to your `~/.npmrc` file (this will be in your `%HOME%` directory
on Windows; create the file if it doesn't exist):

    # replace `proxy` and `port` with real values
    proxy = http://proxy:port/
    https-proxy = http://proxy:port/
    registry = http://registry.npmjs.org/

Next, clone the repo and install dependencies:

    $ git clone https://github.com/CityOfPhildelphia/atlas
    $ cd atlas
    $ npm install

To start the server:

    $ npm run start
