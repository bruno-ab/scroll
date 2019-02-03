Symfony4 project

  * Start containers in the background: `docker-compose up -d`
  * Start containers on the foreground: `docker-compose up`. You will see a stream of logs for every container running.
  * Stop containers: `docker-compose stop`
  * Kill containers: `docker-compose kill`
  * Enter containers: `docker-compose exec php-fpm bash`
  * View container logs: `docker-compose logs`
  * Execute command inside of container: `docker-compose exec SERVICE_NAME COMMAND` where `COMMAND` is whatever you want to run. Examples:
        * Shell into the PHP container, `docker-compose exec php-fpm bash`
        * Run symfony console, `docker-compose exec php-fpm bin/console`
        * Open a mysql shell, `docker-compose exec mysql mysql -uroot -pCHOSEN_ROOT_PASSWORD`

# Docker general cheatsheet

**Note:** these are global commands and you can run them from anywhere.

  * To clear containers: `docker rm -f $(docker ps -a -q)`
  * To clear images: `docker rmi -f $(docker images -a -q)`
  * To clear volumes: `docker volume rm $(docker volume ls -q)`
  * To clear networks: `docker network rm $(docker network ls | tail -n+2 | awk '{if($2 !~ /bridge|none|host/){ print $1 }}')`