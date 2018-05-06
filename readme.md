# Latest Plane Crash Test

This is the code written by Mateus Batista Santos for the Full Stack Software Engineer, Reading Infrastructure (Contract), technical test.

The Tech Stack chosen was: Laravel 5.6, Nginx and PHP-FPM and PostgreSQL + PostGIS. The reason to use it is because of my know-how and I didn't have to install anything new on my workstation so I could start to work as soon as possible.

For development was used laradock on a Linux environment with Debian 8.6 as Operation System.

## Install and Run (For Development)

### Install NPM

NPM was not used within a Docker container due the slow performance. So, to run the project properly install `npm`. You can install `npm`  the way you think is better and it will run normally with recent versions. On this project I used the `3.10.10` version.

```
sudo apt-get install npm
```

### Install Docker and Docker Compose

If you are using Debian follow the official install guide to install docker
https://docs.docker.com/install/linux/docker-ce/debian/

Docker Compose can be installed using a single tutorial for any linux distro
https://docs.docker.com/compose/install/

Get the `docker0` bridge IP to use on future steps of installation and settings

```
sudo ifconfig docker0
```

In my case the IP is `172.17.0.1`

### Install PostgreSQL

```
sudo apt-get install -y postgresql-9.4 postgresql-contrib-9.4;

```

Configure PostgreSQL to accept docker requests

```
sudo sed -i 's/\(all *\)\(md5\|peer\)/\1trust/' /etc/postgresql/9.4/main/pg_hba.conf;
sudo sed -i "/^#listen_addresses/i listen_addresses='*'" /etc/postgresql/9.4/main/postgresql.conf;

echo 'host    all             all             172.17.0.1/16           md5' | sudo tee -a /etc/postgresql/9.4/main/pg_hba.conf > /dev/null 2>&1;
```

Create Database and pgadmin user

```
sudo -u postgres psql --command="CREATE USER pgadmin WITH PASSWORD 'secret';"  > /dev/null 2>&1;
sudo -u postgres psql --command="CREATE DATABASE dbname OWNER pgadmin;"  > /dev/null 2>&1;
```

### Install and configure PostGIS

```
  sudo apt-get install -y build-essential \
    postgresql-server-dev-9.4 \
    libxml2-dev \
    libproj-dev \
    libjson0-dev \
    libgeos-dev \
    xsltproc \
    docbook-xsl \
    docbook-mathml \
    libgdal-dev

  cd ~/
  wget http://download.osgeo.org/postgis/source/postgis-2.2.2.tar.gz > /dev/null 2>&1;
  tar -zxvf postgis-2.2.2.tar.gz  > /dev/null 2>&1;
  rm -rf postgis-2.2.2.tar.gz
  cd postgis-2.2.2
  ./configure > /dev/null 2>&1;
  make  > /dev/null 2>&1;
  sudo make install  > /dev/null 2>&1;
  sudo ldconfig
  sudo make comments-install  > /dev/null 2>&1;
  sudo ln -sf /usr/share/postgresql-common/pg_wrapper /usr/local/bin/shp2pgsql
  sudo ln -sf /usr/share/postgresql-common/pg_wrapper /usr/local/bin/pgsql2shp
  sudo ln -sf /usr/share/postgresql-common/pg_wrapper /usr/local/bin/raster2pgsql
```

### Run needed Docker containers

Inside the project folder execute the following commands to get the stack up and running:

```
cd laradock
docker-compose up workspace nginx php-fpm

```

## Build and Configure project

Copy the `.env-example` file into `.env` and change the needed parameters chosen for the database settings.

### Run migrations

Inside the root of the project execute the following commands:

```
cd laradock
docker-compose exec workspace php artisan migrate

```

### Build CSS and JS with webpack

Inside the root of the project execute the following commands:

```
npm run dev
```

Or, if you wish to run browser-sync

```
npm run watch
```

Now the project should be accessible at `localhost`

## Future Improvements

- Use JMeter to stress the server and verify performance
- Better UX with the map on mobile devices
