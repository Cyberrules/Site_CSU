# Database setup and design

This guide provides step-by-step instructions to set up PostgreSQL 16, pgAdmin4 and the CSU Suceava website database on your system.

## Prerequisites

Ensure that you have the following prerequisites installed:

- [ ] [PostgreSQL 16](https://www.postgresql.org/download/)
- [ ] [pgAdmin 4](https://www.pgadmin.org/download/)

## PostgreSQL 16 Installation

1. Download PostgreSQL 16 for your operating system from [PostgreSQL Download Page](https://www.postgresql.org/download/).
2. Follow the installation instructions for your specific operating system.
3. During installation, set 'cyberrules' for the default PostgreSQL superuser password. In case you set it up as another password you can change it later using the command `ALTER USER postgres WITH PASSWORD 'cyberrules';`
4. For the server configuration make sure you use the following:
```
{
    "Name": "Cyberrules",
    "Group": "Servers",
    "Host": "localhost",
    "Port": 5432,
    "MaintenanceDB": "postgres",
    "Username": "postgres",
    "UseSSHTunnel": 0,
    "TunnelPort": "22",
    "TunnelAuthentication": 0,
    "KerberosAuthentication": false,
    "ConnectionParameters": {
    "sslmode": "prefer",
    "connect_timeout": 10
     }         
}
```

## pgAdmin 4 Installation

1. Download pgAdmin 4 for your operating system from [pgAdmin Download Page](https://www.pgadmin.org/download/).
2. Follow the installation instructions for your specific operating system.

## PostgreSQL Configuration

1. Open the PostgreSQL command line or terminal (you can search **psql** inside of Windows).
2. Log in to the PostgreSQL server using the superuser account
3. Create a new PostgreSQL database for the project `CREATE DATABASE cyberrules OWNER postgres;`

## Setting up the database

1. Open pgadmin 4 and connect to the **Cyberrules** server using the superuser password
2. Right-click on the **cyberrules** database and choose **Restore**
3. Select the latest backup.sql file available from this branch and click on Restore, if you get an error check error message via **Processes** -> **View Details**. For specific error messages check **Errors fixing** chapter.
4. For launching querry commands, select the database and click on **Querry tool** or Alt+Shift+Q
![image](https://github.com/Cyberrules/Site_CSU/assets/74990176/0878d9c2-4556-44dd-a27c-1db44a08d280)

## Database design

![image](https://github.com/Cyberrules/Site_CSU/assets/74990176/af446210-e98f-45ce-9725-a717d2c6e2c6)

## Errors fixing
### No logs available

1. Click on File -> Preferences.
2. Scroll down to **Binary paths**
3. Set the binary path (the bin folder where you have PostgreSQL installed) for PostgreSQL 16
![image](https://github.com/Cyberrules/Site_CSU/assets/74990176/98b66db7-3b6c-4ea7-bb6b-57ac5789c7f9)

